/**
 * The hardcover book: two boards joined by a spine, and a stack of sheets whose
 * vertices are re-laid every frame they move so the paper curls instead of hinging.
 */
import * as THREE from 'three';
import { SHEETS, type PageSet } from './pages';
import { clamp, easeInOut, easeOut, lerp, smooth } from './draw';

export const W = 1.6;
export const H = 1.0;
const N = SHEETS;
const TH = 0.007; // distance between stacked sheets
const CT = 0.014; // board thickness
const OV = 0.035; // how far the boards overhang the pages
const L = N * TH + CT + 0.002; // spine width
const WC = W + OV;
const HC = H + OV * 2;
const SU = 36;
const SV = 14;
const CLOSED_PAGE_X = L / 2 + CT / 2 + 0.004;
const GUTTER = 0.17; // run over which a page climbs from the binding to the top of its pile

interface Tween {
  from: number;
  to: number;
  start: number;
  dur: number;
  ease: (t: number) => number;
}

interface Sheet {
  geo: THREE.BufferGeometry;
  front: THREE.Mesh;
  back: THREE.Mesh;
  /** 0 = lying on the right pile, 1 = lying on the left pile. */
  e: number;
  tween: Tween | null;
  peel: number;
  peelTarget: number;
  /** Which corner leads a peel or a drag: 0 = far corner, 1 = near corner. */
  corner: number;
  lead: number;
  dirty: boolean;
}

export type Hit =
  | { kind: 'cover' }
  | { kind: 'page'; side: 'L' | 'R'; s: number; v: number; x: number };

function runTween(t: Tween, now: number): { value: number; done: boolean } {
  const p = clamp((now - t.start) / t.dur);
  return { value: lerp(t.from, t.to, t.ease(p)), done: p >= 1 };
}

export class Book {
  readonly group = new THREE.Group();
  /** Number of sheets turned in the state the book is heading to: the current spread. */
  target = 0;
  wantOpen = false;
  onChange: () => void = () => {};

  private sheets: Sheet[] = [];
  private spine = new THREE.Group();
  private cover = new THREE.Group();
  private blockR: THREE.Mesh;
  private blockL: THREE.Mesh;
  private time = 0;
  private phi = 0;
  private phiTween: Tween | null = null;
  private lift = 0;
  private liftTarget = 0;
  private lastPhi = -1;
  private lastGutter = -1;
  private dragging: { index: number; dir: 1 | -1 } | null = null;
  private inv = new THREE.Matrix4();
  private ray = new THREE.Ray();

  constructor(pages: PageSet) {
    const board = new THREE.MeshStandardMaterial({ color: 0x0b0b0b, roughness: 0.82, envMapIntensity: 0.5 });
    const art = (map: THREE.Texture) => new THREE.MeshStandardMaterial({ map, roughness: 0.82, envMapIntensity: 0.5 });
    const shadows = (m: THREE.Mesh, cast = true) => {
      m.castShadow = cast;
      m.receiveShadow = true;
      return m;
    };

    // Back board, lying on the desk for good.
    const back = shadows(new THREE.Mesh(new THREE.BoxGeometry(WC, CT, HC), board));
    back.position.set(L / 2 + WC / 2, CT / 2, 0);
    const backArt = new THREE.Mesh(new THREE.PlaneGeometry(WC, HC).rotateX(-Math.PI / 2), art(pages.back));
    backArt.position.set(L / 2 + WC / 2, CT + 0.0006, 0);
    backArt.receiveShadow = true;
    this.group.add(back, backArt);

    // Spine, hinged on the back board; the front board is hinged on the spine.
    this.spine.position.set(L / 2, CT / 2, 0);
    const spineMesh = shadows(new THREE.Mesh(new THREE.BoxGeometry(L + CT, CT, HC), board));
    spineMesh.position.x = L / 2;
    this.spine.add(spineMesh, this.cover);
    this.cover.position.x = L;
    const front = shadows(new THREE.Mesh(new THREE.BoxGeometry(WC, CT, HC), board));
    front.position.x = WC / 2;
    const outer = new THREE.Mesh(new THREE.PlaneGeometry(WC, HC).rotateX(-Math.PI / 2), art(pages.cover));
    outer.position.set(WC / 2, CT / 2 + 0.0006, 0);
    outer.receiveShadow = true;
    const inner = new THREE.Mesh(
      new THREE.PlaneGeometry(WC, HC).rotateX(Math.PI / 2).rotateY(Math.PI),
      art(pages.front),
    );
    inner.position.set(WC / 2, -CT / 2 - 0.0006, 0);
    inner.receiveShadow = true;
    this.cover.add(front, outer, inner);
    this.group.add(this.spine);

    // Paper blocks stand in for the sheets hidden under the top ones.
    const blockMat = new THREE.MeshStandardMaterial({ color: 0xe6e2d8, roughness: 0.95 });
    const blockGeo = new THREE.BoxGeometry(W, 1, H);
    this.blockR = new THREE.Mesh(blockGeo, blockMat);
    this.blockL = new THREE.Mesh(blockGeo, blockMat);
    this.blockR.castShadow = this.blockL.castShadow = true;
    this.group.add(this.blockR, this.blockL);

    for (let i = 0; i < N; i++) this.sheets.push(this.makeSheet(pages, i));
    this.update(0);
  }

  private makeSheet(pages: PageSet, i: number): Sheet {
    const geo = new THREE.BufferGeometry();
    const count = (SU + 1) * (SV + 1);
    const uv = new Float32Array(count * 2);
    const index: number[] = [];
    for (let j = 0; j <= SV; j++) {
      for (let k = 0; k <= SU; k++) {
        const n = j * (SU + 1) + k;
        uv[n * 2] = k / SU;
        uv[n * 2 + 1] = 1 - j / SV;
        if (j < SV && k < SU) {
          const a = n;
          const b = n + SU + 1;
          index.push(a, b, a + 1, b, b + 1, a + 1);
        }
      }
    }
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setIndex(index);

    // Paper is matt, so the cheapest lit material is also the right one.
    const backTex = pages.pages[i * 2 + 1].texture;
    backTex.wrapS = THREE.RepeatWrapping;
    backTex.repeat.x = -1;
    backTex.offset.x = 1;
    const front = new THREE.Mesh(
      geo,
      new THREE.MeshLambertMaterial({ map: pages.pages[i * 2].texture, side: THREE.FrontSide }),
    );
    const back = new THREE.Mesh(
      geo,
      new THREE.MeshLambertMaterial({ map: backTex, side: THREE.BackSide }),
    );
    front.material.shadowSide = THREE.DoubleSide;
    front.castShadow = true;
    front.receiveShadow = back.receiveShadow = true;
    front.frustumCulled = back.frustumCulled = false;
    this.group.add(front, back);
    return { geo, front, back, e: 0, tween: null, peel: 0, peelTarget: 0, corner: 1, lead: 0, dirty: true };
  }

  /* -------------------------------------------------------- commands */

  get isOpen() {
    return this.wantOpen;
  }
  get spreads() {
    return N + 1;
  }
  get isDragging() {
    return this.dragging !== null;
  }

  open() {
    if (this.wantOpen) return;
    this.wantOpen = true;
    this.phiTween = { from: this.phi, to: 1, start: this.time, dur: 1.5, ease: easeInOut };
    this.onChange();
  }

  close() {
    if (!this.wantOpen) return;
    const turned = this.sheets.filter((s) => s.e > 0).length;
    this.goto(0, true);
    this.wantOpen = false;
    this.phiTween = {
      from: this.phi,
      to: 0,
      start: this.time + (turned ? 0.3 + turned * 0.05 : 0),
      dur: 1.3,
      ease: easeInOut,
    };
    this.onChange();
  }

  next() {
    if (this.target < N) this.goto(this.target + 1);
  }

  prev() {
    if (this.target > 0) this.goto(this.target - 1);
    else this.close();
  }

  goto(spread: number, fast = false) {
    const k = clamp(Math.round(spread), 0, N);
    const moving: number[] = [];
    this.sheets.forEach((s, i) => {
      const to = i < k ? 1 : 0;
      const heading = s.tween ? s.tween.to : s.e;
      if (heading !== to || (!s.tween && s.e !== to)) moving.push(i);
    });
    const forward = k >= this.target;
    if (!forward) moving.reverse();
    const many = moving.length > 1;
    moving.forEach((i, order) => {
      const s = this.sheets[i];
      const to = i < k ? 1 : 0;
      const atRest = s.e === 0 || s.e === 1;
      s.tween = {
        from: s.e,
        to,
        start: this.time + order * (fast ? 0.05 : 0.085),
        dur: fast ? 0.45 : atRest ? (many ? 0.75 : 0.95) : Math.max(0.3, 0.8 * Math.abs(to - s.e)),
        ease: atRest ? easeInOut : easeOut,
      };
    });
    this.target = k;
    this.onChange();
  }

  /** Grabs the top sheet of one side by its edge. Returns false if there is nothing to grab. */
  beginDrag(side: 'L' | 'R', v: number): boolean {
    const index = side === 'R' ? this.target : this.target - 1;
    if (index < 0 || index >= N || this.sheets[index].tween) return false;
    this.dragging = { index, dir: side === 'R' ? 1 : -1 };
    this.sheets[index].corner = v > 0.5 ? 1 : 0;
    return true;
  }

  /** Follows the pointer; `x` is in the book's own space, on the page plane. */
  drag(x: number) {
    if (!this.dragging) return;
    const s = this.sheets[this.dragging.index];
    s.e = clamp(Math.acos(clamp(x / W, -1, 1)) / Math.PI, 0.002, 0.998);
    s.dirty = true;
  }

  /** Drops a sheet that was pressed but never pulled, leaving it where it lay. */
  cancelDrag() {
    if (!this.dragging) return;
    const { index, dir } = this.dragging;
    this.dragging = null;
    this.sheets[index].e = dir > 0 ? 0 : 1;
    this.sheets[index].dirty = true;
  }

  /** Lets go of the sheet: it carries on if it was pulled far enough, and falls back if not. */
  endDrag() {
    if (!this.dragging) return;
    const { index, dir } = this.dragging;
    const s = this.sheets[index];
    this.dragging = null;
    const done = dir > 0 ? s.e > 0.3 : s.e < 0.7;
    const to = done ? (dir > 0 ? 1 : 0) : dir > 0 ? 0 : 1;
    const atStart = s.e < 0.01 || s.e > 0.99;
    s.tween = {
      from: s.e,
      to,
      start: this.time,
      dur: atStart ? 0.95 : Math.max(0.3, 0.85 * Math.abs(to - s.e)),
      ease: atStart ? easeInOut : easeOut,
    };
    if (done) {
      this.target = clamp(this.target + dir, 0, N);
      this.onChange();
    }
  }

  /** Lifts the corner of the top sheet on one side, as when a finger nears the edge. */
  setPeel(side: 'L' | 'R' | null, amount = 0, v = 1) {
    const index = side === 'R' ? this.target : side === 'L' ? this.target - 1 : -1;
    this.sheets.forEach((s, i) => {
      const on = i === index && !s.tween && !this.dragging && this.wantOpen;
      s.peelTarget = on ? amount : 0;
      if (on) s.corner = v > 0.5 ? 1 : 0;
    });
  }

  setCoverHover(on: boolean) {
    this.liftTarget = on && !this.wantOpen ? 0.03 : 0;
  }

  /** Where a world-space ray meets the book, if it does. */
  hit(worldRay: THREE.Ray): Hit | null {
    this.inv.copy(this.group.matrixWorld).invert();
    const ray = this.ray.copy(worldRay).applyMatrix4(this.inv);
    const at = (y: number) => {
      if (Math.abs(ray.direction.y) < 1e-6) return null;
      const t = (y - ray.origin.y) / ray.direction.y;
      return t > 0 ? { x: ray.origin.x + ray.direction.x * t, z: ray.origin.z + ray.direction.z * t } : null;
    };
    if (!this.wantOpen) {
      const p = at(L + CT);
      return p && p.x > L / 2 - 0.03 && p.x < L / 2 + WC && Math.abs(p.z) < HC / 2 ? { kind: 'cover' } : null;
    }
    if (this.phi < 0.85) return null;
    const p = at(CT + (N * TH) / 2);
    if (!p || Math.abs(p.x) > W || Math.abs(p.z) > H / 2) return null;
    return { kind: 'page', side: p.x < 0 ? 'L' : 'R', s: Math.abs(p.x) / W, v: p.z / H + 0.5, x: p.x };
  }

  /** x of the ray on the page plane, in the book's own space, wherever that falls. */
  planeX(worldRay: THREE.Ray): number | null {
    this.inv.copy(this.group.matrixWorld).invert();
    const ray = this.ray.copy(worldRay).applyMatrix4(this.inv);
    if (Math.abs(ray.direction.y) < 1e-6) return null;
    const t = (CT + (N * TH) / 2 - ray.origin.y) / ray.direction.y;
    return t > 0 ? ray.origin.x + ray.direction.x * t : null;
  }

  /* ---------------------------------------------------------- update */

  /** Advances the book by `dt`. Returns whether anything about it changed shape. */
  update(dt: number) {
    this.time += dt;
    const damp = (rate: number) => 1 - Math.exp(-dt * rate);

    if (this.phiTween && this.time >= this.phiTween.start) {
      const r = runTween(this.phiTween, this.time);
      this.phi = r.value;
      if (r.done) this.phiTween = null;
    }
    this.lift += (this.liftTarget - this.lift) * damp(9);
    const phi = Math.max(this.phi, this.lift);
    const phiChanged = Math.abs(phi - this.lastPhi) > 1e-5;
    this.lastPhi = phi;

    this.sheets.forEach((s, i) => {
      if (s.tween && this.time >= s.tween.start) {
        const r = runTween(s.tween, this.time);
        s.e = r.value;
        s.dirty = true;
        if (r.done) {
          s.e = s.tween.to;
          s.tween = null;
        }
      }
      // A sheet can never overtake the one above it in the stack.
      if (i > 0 && s.e > this.sheets[i - 1].e) {
        s.e = this.sheets[i - 1].e;
        s.dirty = true;
      }
      const leadTarget = this.dragging?.index === i ? 1 : 0;
      for (const [key, to] of [
        ['peel', s.peelTarget],
        ['lead', leadTarget],
      ] as const) {
        if (Math.abs(to - s[key]) > 0.0004) {
          s[key] += (to - s[key]) * damp(key === 'peel' ? 11 : 7);
          s.dirty = true;
        } else if (s[key] !== to) {
          s[key] = to;
          s.dirty = true;
        }
      }
      if (phiChanged) s.dirty = true;
    });

    // Only the top two sheets of each pile are drawn; blocks fill in for the rest.
    let firstRight = N;
    let lastLeft = -1;
    this.sheets.forEach((s, i) => {
      if (s.e === 0 && firstRight === N) firstRight = i;
      if (s.e === 1) lastLeft = i;
    });
    const pageX = CLOSED_PAGE_X * (1 - phi);
    // Both piles are bound at the same height: the top of the lower one.
    const topR = firstRight < N ? CT + (N - firstRight) * TH : CT;
    const topL = lastLeft >= 0 ? CT + (lastLeft + 1) * TH : CT;
    const gutterY = Math.max(CT + 0.002, Math.min(topR, topL) - 0.003);
    const gutterChanged = gutterY !== this.lastGutter;
    this.lastGutter = gutterY;
    let changed = phiChanged || gutterChanged;
    this.sheets.forEach((s, i) => {
      const visible = (s.e > 0 && s.e < 1) || (s.e === 0 && i <= firstRight + 1) || (s.e === 1 && i >= lastLeft - 1);
      s.front.visible = s.back.visible = visible;
      if (visible && (s.dirty || gutterChanged)) {
        this.layOut(s, i, pageX, gutterY);
        s.dirty = false;
        changed = true;
      } else if (gutterChanged) {
        s.dirty = true;
      }
    });
    const hiddenR = N - firstRight - 2;
    const hiddenL = lastLeft - 1;
    this.setBlock(this.blockR, hiddenR, pageX + (W + GUTTER) / 2);
    this.setBlock(this.blockL, hiddenL, pageX - (W + GUTTER) / 2);

    // Boards: the spine swings a quarter turn while the front board swings a half.
    const spineAngle = Math.PI / 2 + (phi * Math.PI) / 2;
    this.spine.rotation.z = spineAngle;
    this.cover.rotation.z = phi * Math.PI - spineAngle;

    // Closed, the book sits centred and a little askew; open, it squares up.
    const k = easeInOut(clamp(this.phi));
    this.group.position.x = -(L / 2 + WC / 2) * (1 - k);
    this.group.rotation.y = 0.09 * (1 - k);
    // Hit tests read this matrix and may run before the next render refreshes it.
    this.group.updateMatrixWorld();
    return changed;
  }

  private setBlock(mesh: THREE.Mesh, hidden: number, x: number) {
    mesh.visible = hidden > 0;
    if (!mesh.visible) return;
    const h = (hidden + 0.5) * TH;
    mesh.scale.set((W - GUTTER) / W, h, 1);
    mesh.position.set(x, CT + h / 2, 0);
  }

  /** Lays the sheet's vertices along a curve whose slope grows from the spine to the free edge. */
  private layOut(s: Sheet, i: number, pageX: number, gutterY: number) {
    const pos = s.geo.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    const e = s.e;
    const base = Math.PI * e;
    const mid = Math.sin(Math.PI * e);
    const side = e < 0.5 ? 1 : -1;
    const du = W / SU;
    // At rest the sheet leaves the binding low and climbs onto its pile; mid-turn that fold flattens out.
    const rest = lerp(CT + (N - i) * TH, CT + (i + 1) * TH, e);
    const fold = Math.pow(Math.cos(Math.PI * e), 2);
    const climb = Math.min(1.2, (3 * Math.max(0, rest - gutterY) * fold) / GUTTER);
    const slope = (sm: number) => {
      const g = 1 - (sm * W) / GUTTER;
      return g > 0 ? climb * g * g : 0;
    };
    let risen = 0;
    for (let k = 0; k < SU; k++) risen += Math.sin(slope((k + 0.5) / SU)) * du;
    const y0 = rest - risen;
    for (let j = 0; j <= SV; j++) {
      const v = j / SV;
      const cw = Math.pow(Math.max(0, 1 - Math.abs(v - s.corner) / 1.15), 2);
      let x = 0;
      let y = y0;
      for (let k = 0; k <= SU; k++) {
        const n = (j * (SU + 1) + k) * 3;
        arr[n] = pageX + x;
        arr[n + 1] = y;
        arr[n + 2] = (v - 0.5) * H;
        const sm = (k + 0.5) / SU;
        const curl = mid * (0.95 * (Math.pow(sm, 1.4) - 0.42) + s.lead * 0.7 * cw * sm * sm);
        const peel = side * s.peel * 1.3 * cw * smooth(0.5, 1, sm);
        const a = clamp(base + curl + peel + side * slope(sm), 0, Math.PI);
        x += Math.cos(a) * du;
        y += Math.sin(a) * du;
      }
    }
    pos.needsUpdate = true;
    s.geo.computeVertexNormals();
    s.geo.computeBoundingSphere();
  }
}
