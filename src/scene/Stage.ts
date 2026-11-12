/** Owns the renderer, the camera and all pointer and keyboard handling. */
import * as THREE from 'three';
import type { Content } from '../i18n';
import { Book } from './book';
import { makeCappuccino, makeCards, makeDesk, makePencil, makeSucculent } from './desk';
import { clamp, easeInOut, smooth } from './draw';
import { PageSet, SHEETS } from './pages';

export interface StageState {
  open: boolean;
  spread: number;
  spreads: number;
  canNext: boolean;
}

const FOV = 30;
const EDGE = 0.8; // from this fraction of the page width outwards, a press grabs the sheet

export class Stage {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private lamp: THREE.SpotLight;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 80);
  private pages: PageSet;
  private book: Book;
  private raycaster = new THREE.Raycaster();
  private ndc = new THREE.Vector2(0, 0);
  private lean = new THREE.Vector2(0, 0);
  private pointerInside = false;
  private down: { x: number; y: number } | null = null;
  private camK = 0;
  private camTween: { from: number; to: number; start: number } | null = null;
  private clock = new THREE.Clock();
  private time = 0;
  private raf = 0;
  private observer: ResizeObserver;
  private reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  private noHover = window.matchMedia('(hover: none)').matches;
  /** On upright screens a spread is too wide to read, so the camera frames one page at a time. */
  private focus: 'L' | 'R' = 'R';
  private focusX = 0;
  /** Frames are drawn only while something moves; these track when to stop and when to start again. */
  private stale = true;
  private idle = 0;
  private lost = false;
  private lastEye = new THREE.Vector3();
  private cursor = '';
  /** Resolution scale, lowered a step at a time if the device cannot keep up. */
  private ratio = Math.min(window.devicePixelRatio, 1.5);
  private paceSum = 0;
  private paceN = 0;
  private slowRuns = 0;

  constructor(
    host: HTMLElement,
    content: Content,
    private onState: (s: StageState) => void,
  ) {
    // The stage owns its canvas, so that leaving really does hand the graphics memory back.
    const canvas = document.createElement('canvas');
    canvas.className = 'stage';
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', content.ui.canvasLabel);
    this.canvas = canvas;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    host.prepend(canvas);
    renderer.setPixelRatio(this.ratio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    // Nothing but the book ever moves, so the shadow map is redrawn only on the frames it does.
    renderer.shadowMap.autoUpdate = false;
    renderer.shadowMap.needsUpdate = true;
    this.renderer = renderer;
    this.scene.background = new THREE.Color(0x000000);

    // A dark room with one warm panel, so the lacquer and the porcelain have something to reflect.
    const room = new THREE.Scene();
    room.background = new THREE.Color(0x020202);
    const glow = (color: THREE.Color, w: number, h: number, x: number, y: number, z: number) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }));
      m.position.set(x, y, z);
      m.lookAt(0, 0, 0);
      room.add(m);
    };
    glow(new THREE.Color(2.4, 1.7, 1.1), 7, 2.6, -2.5, 6, -9);
    glow(new THREE.Color(0.5, 0.62, 0.85), 5, 5, 10, 4, 3);
    const pmrem = new THREE.PMREMGenerator(renderer);
    this.scene.environment = pmrem.fromScene(room, 0.035).texture;
    this.scene.environmentIntensity = 0.4;
    pmrem.dispose();

    // The lamp: one warm spot with a wide, soft edge.
    // It hangs in front and to the left, so its glare on the lacquer falls outside the frame.
    const lamp = new THREE.SpotLight(0xffdcb2, 135, 0, 0.5, 1, 2);
    lamp.position.set(-2.4, 6.2, 2.6);
    lamp.target.position.set(0, 0, -0.1);
    lamp.castShadow = true;
    lamp.shadow.mapSize.set(2048, 2048);
    lamp.shadow.camera.near = 2;
    lamp.shadow.camera.far = 14;
    lamp.shadow.bias = -0.0003;
    lamp.shadow.normalBias = 0.012;
    lamp.shadow.radius = 2.2;
    this.lamp = lamp;
    this.scene.add(lamp, lamp.target, new THREE.HemisphereLight(0x8a93a6, 0x000000, 0.1));

    const aniso = renderer.capabilities.getMaxAnisotropy();
    this.scene.add(makeDesk(aniso));

    // The cup and the plant sit behind the book, where they stay in frame once it opens;
    // the pencil and the cards wait to its right.
    const cup = makeCappuccino();
    cup.position.set(0.74, 0, -1.17);
    cup.rotation.y = -0.6;
    const succulent = makeSucculent();
    succulent.position.set(-0.78, 0, -1.1);
    const pencil = makePencil();
    pencil.position.set(2.05, 0, -0.05);
    pencil.rotation.y = 1.28;
    const cards = makeCards();
    cards.position.set(1.95, 0, 0.86);
    cards.rotation.y = -0.22;
    this.scene.add(cup, succulent, pencil, cards);

    this.pages = new PageSet(aniso);
    this.pages.setContent(content);
    this.book = new Book(this.pages);
    this.book.onChange = () => this.emit();
    this.scene.add(this.book.group);

    canvas.addEventListener('pointermove', this.onMove);
    canvas.addEventListener('pointerdown', this.onDown);
    canvas.addEventListener('pointerup', this.onUp);
    canvas.addEventListener('pointercancel', this.onCancel);
    canvas.addEventListener('pointerleave', this.onLeave);
    window.addEventListener('keydown', this.onKey);
    this.observer = new ResizeObserver(() => this.resize());
    this.observer.observe(canvas);
    canvas.addEventListener('webglcontextlost', this.onLost);
    canvas.addEventListener('webglcontextrestored', this.onRestored);
    this.resize();
    this.warm();
    this.emit();
    this.tick();
    if (import.meta.env.DEV) (window as unknown as { __stage: Stage }).__stage = this;
  }

  /* ------------------------------------------------------------ API */

  setContent(c: Content) {
    this.canvas.setAttribute('aria-label', c.ui.canvasLabel);
    this.pages.setContent(c);
    this.warm();
  }

  /** Sends every page to the graphics card now, so that no page turn has to wait for its texture. */
  private warm() {
    for (const t of this.pages.textures) this.renderer.initTexture(t);
    this.stale = true;
  }
  open = () => {
    this.focus = 'R';
    this.book.open();
  };
  close = () => this.book.close();
  next = () => {
    if (!this.book.isOpen) return this.open();
    if (this.single && this.focus === 'L') return this.setFocus('R');
    if (this.book.target >= SHEETS) return;
    this.focus = 'L';
    this.book.next();
  };
  prev = () => {
    if (!this.book.isOpen) return;
    if (this.single && this.focus === 'R' && this.book.target > 0) return this.setFocus('L');
    this.focus = 'R';
    this.book.prev();
  };
  goto = (spread: number) => {
    this.focus = spread === 0 ? 'R' : 'L';
    this.book.open();
    this.book.goto(spread);
    this.emit();
  };

  private get single() {
    return this.camera.aspect < 0.95;
  }

  private setFocus(side: 'L' | 'R') {
    this.focus = side;
    this.emit();
  }

  dispose() {
    cancelAnimationFrame(this.raf);
    this.observer.disconnect();
    const c = this.canvas;
    c.removeEventListener('pointermove', this.onMove);
    c.removeEventListener('pointerdown', this.onDown);
    c.removeEventListener('pointerup', this.onUp);
    c.removeEventListener('pointercancel', this.onCancel);
    c.removeEventListener('pointerleave', this.onLeave);
    c.removeEventListener('webglcontextlost', this.onLost);
    c.removeEventListener('webglcontextrestored', this.onRestored);
    window.removeEventListener('keydown', this.onKey);
    this.pages.dispose();
    this.scene.traverse((o) => {
      const m = o as THREE.Mesh;
      m.geometry?.dispose();
      for (const mat of [m.material ?? []].flat() as THREE.MeshStandardMaterial[]) {
        mat.map?.dispose();
        mat.bumpMap?.dispose();
        mat.dispose();
      }
    });
    this.scene.environment?.dispose();
    this.lamp.shadow.map?.dispose();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    c.remove();
  }

  private onLost = (ev: Event) => {
    // Without this the browser would never give the context back.
    ev.preventDefault();
    this.lost = true;
  };

  private onRestored = () => {
    this.lost = false;
    this.renderer.shadowMap.needsUpdate = true;
    this.stale = true;
  };

  private emit() {
    const open = this.book.isOpen;
    const to = open ? 1 : 0;
    if ((this.camTween?.to ?? this.camK) !== to) {
      this.camTween = { from: this.camK, to, start: this.time + (open ? 0 : 0.25) };
    }
    const atEnd = this.book.target >= SHEETS && (!this.single || this.focus === 'R');
    this.onState({ open, spread: this.book.target, spreads: this.book.spreads, canNext: !atEnd });
  }

  /* --------------------------------------------------------- camera */

  private resize() {
    const w = this.canvas.clientWidth || 1;
    const h = this.canvas.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.stale = true;
    this.emit();
  }

  /** Moves the camera to where it should be this frame. Returns whether it moved. */
  private placeCamera(dt: number) {
    if (this.camTween && this.time >= this.camTween.start) {
      const p = clamp((this.time - this.camTween.start) / 1.7);
      this.camK = this.camTween.from + (this.camTween.to - this.camTween.from) * easeInOut(p);
      if (p >= 1) this.camTween = null;
    }
    const k = this.camK;
    const aspect = this.camera.aspect;
    const tan = Math.tan(THREE.MathUtils.degToRad(FOV / 2));
    // Far enough to hold the whole desk when closed, and the whole spread when open.
    const dClosed = Math.max(5.7, 1.08 / (tan * aspect));
    const dOpen = this.single ? Math.max(0.92 / (tan * aspect), 0.9 / tan) : Math.max(1.82 / (tan * aspect), 0.9 / tan);
    const dist = THREE.MathUtils.lerp(dClosed, dOpen, k);
    const elev = THREE.MathUtils.lerp(0.7, 1.4, k);
    const focusTarget = this.single ? (this.focus === 'R' ? 0.82 : -0.82) : 0;
    this.focusX += (focusTarget - this.focusX) * (1 - Math.exp(-dt * 5));
    const look = new THREE.Vector3(this.focusX * k, 0, THREE.MathUtils.lerp(0.42, 0.05, k));

    // The view leans toward the cursor by sliding the camera sideways. Its "up" is kept square to
    // the line of sight so that, seen from almost overhead, the slide never rolls the page.
    const target = this.pointerInside && !this.reduceMotion ? this.ndc : new THREE.Vector2(0, 0);
    this.lean.lerp(target, 1 - Math.exp(-dt * 3));
    const sway = THREE.MathUtils.lerp(1, 0.42, k);
    this.camera.position.set(
      look.x + this.lean.x * 0.36 * sway,
      Math.sin(elev) * dist,
      look.z + Math.cos(elev) * dist - this.lean.y * 0.24 * sway,
    );
    this.camera.up.set(0, Math.cos(elev), -Math.sin(elev));
    this.camera.lookAt(look);
    this.camera.updateMatrixWorld();
    const moved = this.camera.position.distanceToSquared(this.lastEye) > 1e-10;
    this.lastEye.copy(this.camera.position);
    return moved;
  }

  /* -------------------------------------------------------- pointer */

  private setPointer(ev: PointerEvent) {
    const r = this.canvas.getBoundingClientRect();
    this.ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    this.pointerInside = true;
  }

  private hitNow() {
    this.raycaster.setFromCamera(this.ndc, this.camera);
    return this.book.hit(this.raycaster.ray);
  }

  /** Page id under a page hit, or -1 when that half shows a board instead of a sheet. */
  private pageId(side: 'L' | 'R') {
    const id = side === 'L' ? this.book.target * 2 - 1 : this.book.target * 2;
    return id >= 0 && id < SHEETS * 2 ? id : -1;
  }

  private canTurn(side: 'L' | 'R') {
    return side === 'R' ? this.book.target < SHEETS : this.book.target > 0;
  }

  /** Runs every frame: the book moves under a still pointer, so hover cannot wait for events. */
  private hover() {
    const book = this.book;
    if (book.isDragging) {
      this.raycaster.setFromCamera(this.ndc, this.camera);
      const x = book.planeX(this.raycaster.ray);
      if (x !== null) book.drag(x);
      this.pages.hover(-1);
      this.setCursor('grabbing');
      return;
    }
    const hit = this.pointerInside ? this.hitNow() : null;
    book.setCoverHover(hit?.kind === 'cover');
    if (hit?.kind !== 'page') {
      book.setPeel(null);
      // Without a cursor there is no hover: the film on show simply plays.
      this.pages.hover(this.noHover && book.isOpen ? this.pageId('R') : -1);
      this.setCursor(hit ? 'pointer' : 'default');
      return;
    }
    const id = this.pageId(hit.side);
    const u = hit.side === 'R' ? hit.s : 1 - hit.s;
    this.pages.hover(id, u, hit.v);
    const edge = hit.s > EDGE && this.canTurn(hit.side);
    book.setPeel(edge ? hit.side : null, smooth(EDGE - 0.03, 0.97, hit.s) * 0.5, hit.v);
    this.setCursor(edge ? 'grab' : 'pointer');
  }

  private setCursor(c: string) {
    if (c === this.cursor) return;
    this.cursor = c;
    this.canvas.style.cursor = c;
  }

  private onMove = (ev: PointerEvent) => this.setPointer(ev);

  private onDown = (ev: PointerEvent) => {
    if (ev.button !== 0) return;
    this.setPointer(ev);
    this.down = { x: ev.clientX, y: ev.clientY };
    this.canvas.setPointerCapture(ev.pointerId);
    const hit = this.hitNow();
    if (hit?.kind === 'page' && hit.s > EDGE) this.book.beginDrag(hit.side, hit.v);
  };

  private onUp = (ev: PointerEvent) => {
    if (!this.down) return;
    this.setPointer(ev);
    const moved = Math.hypot(ev.clientX - this.down.x, ev.clientY - this.down.y) > 6;
    this.down = null;
    if (ev.pointerType !== 'mouse') this.pointerInside = false;
    if (this.book.isDragging && moved) {
      const before = this.book.target;
      this.book.endDrag();
      if (this.book.target !== before) this.setFocus(this.book.target > before ? 'L' : 'R');
      return;
    }
    // A press on the edge without travel is a plain click like any other.
    this.book.cancelDrag();
    if (moved) return;
    const hit = this.hitNow();
    if (!hit) return;
    if (hit.kind === 'cover') {
      this.book.open();
      return;
    }
    const id = this.pageId(hit.side);
    const action = id >= 0 ? this.pages.actionAt(id, hit.side === 'R' ? hit.s : 1 - hit.s, hit.v) : null;
    if (action?.type === 'goto') this.goto(action.spread);
    else if (action?.type === 'link') {
      if (action.href.startsWith('mailto:')) window.location.href = action.href;
      else window.open(action.href, '_blank', 'noopener');
    } else if (this.single ? this.ndc.x >= 0 : hit.side === 'R') this.next();
    else this.prev();
  };

  private onCancel = () => {
    this.down = null;
    this.book.endDrag();
  };

  private onLeave = () => {
    if (!this.down) this.pointerInside = false;
  };

  private onKey = (ev: KeyboardEvent) => {
    if (ev.metaKey || ev.ctrlKey || ev.altKey) return;
    const el = ev.target as HTMLElement | null;
    const onControl = !!el && /^(BUTTON|A|INPUT|TEXTAREA|SELECT)$/.test(el.tagName);
    switch (ev.key) {
      case 'ArrowRight':
      case 'PageDown':
        this.next();
        break;
      case 'ArrowLeft':
      case 'PageUp':
        this.prev();
        break;
      case 'Home':
        if (this.book.isOpen) this.book.goto(0);
        break;
      case 'End':
        if (this.book.isOpen) this.book.goto(SHEETS);
        break;
      case 'Escape':
        this.close();
        break;
      case 'Enter':
        if (onControl || this.book.isOpen) return;
        this.open();
        break;
      default:
        return;
    }
    ev.preventDefault();
  };

  /* ----------------------------------------------------------- loop */

  /** Advances everything by `dt`. Returns whether the picture changed. */
  private step(dt: number) {
    this.time += dt;
    const moved = this.placeCamera(dt);
    this.hover();
    const turned = this.book.update(dt);
    this.pages.update(dt);
    if (turned) this.renderer.shadowMap.needsUpdate = true;
    return this.pages.takeDirty() || moved || turned;
  }

  private tick = () => {
    this.raf = requestAnimationFrame(this.tick);
    const elapsed = this.clock.getDelta();
    const active = this.step(Math.min(elapsed, 0.05));
    if (active || this.stale) this.idle = 0;
    else this.idle++;
    this.stale = false;
    // A still scene costs nothing: after a couple of settling frames, drawing stops.
    if (this.lost || this.idle > 2) return;
    this.renderer.render(this.scene, this.camera);
    if (active) this.pace(elapsed);
  };

  /**
   * A safety net for weak graphics cards: if the frame rate stays low through three stretches of
   * motion in a row, resolution is traded for smoothness, one step at a time.
   */
  private pace(elapsed: number) {
    if (elapsed > 0.08) return;
    this.paceSum += elapsed;
    if (++this.paceN < 40) return;
    const slow = this.paceSum / this.paceN > 1 / 36;
    this.paceSum = this.paceN = 0;
    this.slowRuns = slow ? this.slowRuns + 1 : 0;
    if (this.slowRuns < 3 || this.ratio <= 0.75) return;
    this.slowRuns = 0;
    this.ratio = Math.max(0.75, this.ratio * 0.85);
    this.renderer.setPixelRatio(this.ratio);
    this.resize();
  }

  /** Development aid: runs the simulation forward without waiting for frames. */
  advance(seconds: number) {
    for (let t = 0; t < seconds; t += 1 / 60) this.step(1 / 60);
  }
}
