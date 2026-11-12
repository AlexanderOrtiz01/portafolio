/** The desk and everything on it besides the book, all built from primitives. */
import * as THREE from 'three';
import { DISPLAY, MONO, rng } from './draw';

function canvasTexture(w: number, h: number, draw: (ctx: CanvasRenderingContext2D) => void, srgb = true) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  draw(canvas.getContext('2d')!);
  const tex = new THREE.CanvasTexture(canvas);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const shadow = <T extends THREE.Object3D>(o: T) => {
  o.traverse((m) => {
    m.castShadow = true;
    m.receiveShadow = true;
  });
  return o;
};

/* ---------------------------------------------------------------- desk */

function grain(ctx: CanvasRenderingContext2D, size: number, bump: boolean) {
  const r = rng(11);
  ctx.fillStyle = bump ? '#808080' : '#2e241a';
  ctx.fillRect(0, 0, size, size);
  // Long fibres
  for (let i = 0; i < 5200; i++) {
    const y0 = r() * size;
    const x0 = r() * size;
    const len = 180 + r() * 1100;
    const a = 0.02 + r() * 0.06;
    const warm = r() > 0.45;
    ctx.strokeStyle = bump
      ? `rgba(${warm ? 255 : 0},${warm ? 255 : 0},${warm ? 255 : 0},${a * 1.4})`
      : warm
        ? `rgba(176,132,86,${a})`
        : `rgba(0,0,0,${a * 5})`;
    ctx.lineWidth = 0.6 + r() * 2.4;
    const phase = r() * 6.28;
    for (const off of [0, -size]) {
      ctx.beginPath();
      let y = y0;
      for (let x = 0; x <= len; x += 22) {
        y += Math.sin((x0 + x) * 0.011 + phase) * 0.55;
        if (x === 0) ctx.moveTo(x0 + x + off, y);
        else ctx.lineTo(x0 + x + off, y);
      }
      ctx.stroke();
    }
  }
  // Open pores, the mark of oak
  for (let i = 0; i < 26000; i++) {
    const x = r() * size;
    const y = r() * size;
    ctx.fillStyle = bump ? `rgba(0,0,0,${0.12 + r() * 0.3})` : `rgba(0,0,0,${0.25 + r() * 0.4})`;
    ctx.fillRect(x, y, 6 + r() * 30, 1 + r());
  }
}

export function makeDesk(aniso: number) {
  const size = 2048;
  const map = canvasTexture(size, size, (ctx) => grain(ctx, size, false));
  const bump = canvasTexture(size, size, (ctx) => grain(ctx, size, true), false);
  for (const t of [map, bump]) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(7, 12);
    t.anisotropy = aniso;
  }
  // A glossy standard material reads as lacquer at a fraction of the cost of a real clearcoat layer.
  const mat = new THREE.MeshStandardMaterial({
    map,
    bumpMap: bump,
    bumpScale: 0.18,
    roughness: 0.3,
    envMapIntensity: 0.55,
  });
  const desk = new THREE.Mesh(new THREE.PlaneGeometry(44, 44).rotateX(-Math.PI / 2), mat);
  // Drawn last, so the pixels hidden under the book and the objects are never shaded.
  desk.renderOrder = 10;
  desk.receiveShadow = true;
  return desk;
}

/* ---------------------------------------------------------- cappuccino */

/** Profiles run from the bottom of the outside to the bottom of the inside, which makes the faces look outwards. */
const lathe = (pts: [number, number][], segments = 64) =>
  new THREE.LatheGeometry(
    pts.map(([x, y]) => new THREE.Vector2(x, y)),
    segments,
  );

export function makeCappuccino() {
  const g = new THREE.Group();
  const porcelain = new THREE.MeshPhysicalMaterial({
    color: 0xf2efe8,
    roughness: 0.28,
    clearcoat: 0.7,
    clearcoatRoughness: 0.2,
  });
  const saucer = new THREE.Mesh(
    lathe([
      [0, 0],
      [0.11, 0],
      [0.15, 0.003],
      [0.28, 0.044],
      [0.332, 0.06],
      [0.34, 0.056],
      [0.335, 0.05],
      [0.29, 0.034],
      [0.15, 0.012],
      [0.13, 0.016],
      [0, 0.016],
    ]),
    porcelain,
  );
  const cup = new THREE.Mesh(
    lathe([
      [0, 0.012],
      [0.1, 0.012],
      [0.115, 0.02],
      [0.165, 0.1],
      [0.196, 0.18],
      [0.206, 0.225],
      [0.202, 0.232],
      [0.194, 0.226],
      [0.184, 0.18],
      [0.152, 0.1],
      [0.1, 0.04],
      [0, 0.036],
    ]),
    porcelain,
  );
  cup.position.y = 0.016;
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.066, 0.015, 14, 28, Math.PI * 1.15), porcelain);
  handle.position.set(0.19, 0.135, 0);
  handle.rotation.z = -Math.PI * 0.575;

  const foam = canvasTexture(256, 256, (ctx) => {
    const grad = ctx.createRadialGradient(128, 128, 20, 128, 128, 128);
    grad.addColorStop(0, '#c99562');
    grad.addColorStop(0.75, '#a9713f');
    grad.addColorStop(0.93, '#7b4a25');
    grad.addColorStop(1, '#55321a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);
    // A tulip in the foam
    ctx.fillStyle = '#f3e7d3';
    ctx.shadowColor = '#f3e7d3';
    ctx.shadowBlur = 8;
    const heart = (cx: number, cy: number, s: number) => {
      ctx.beginPath();
      ctx.moveTo(cx, cy + s * 0.9);
      ctx.bezierCurveTo(cx - s * 1.5, cy - s * 0.1, cx - s * 0.7, cy - s * 1.1, cx, cy - s * 0.35);
      ctx.bezierCurveTo(cx + s * 0.7, cy - s * 1.1, cx + s * 1.5, cy - s * 0.1, cx, cy + s * 0.9);
      ctx.fill();
    };
    heart(128, 92, 46);
    heart(128, 140, 36);
    heart(128, 178, 25);
    ctx.fillRect(126, 150, 4, 62);
  });
  const coffee = new THREE.Mesh(
    new THREE.CircleGeometry(0.189, 48).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ map: foam, roughness: 0.55 }),
  );
  coffee.position.y = 0.016 + 0.2;
  g.add(saucer, cup, handle, coffee);
  shadow(g);
  coffee.castShadow = false;
  return g;
}

/* -------------------------------------------------------------- pencil */

export function makePencil() {
  const g = new THREE.Group();
  const r = 0.019;
  const part = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number) => {
    const m = new THREE.Mesh(geo.rotateZ(-Math.PI / 2), mat);
    m.position.x = x;
    g.add(m);
  };
  part(
    new THREE.CylinderGeometry(r, r, 0.78, 6),
    new THREE.MeshPhysicalMaterial({ color: 0xece8df, roughness: 0.35, clearcoat: 0.6, flatShading: true }),
    0,
  );
  part(new THREE.CylinderGeometry(0.0045, r * 0.96, 0.075, 24), new THREE.MeshStandardMaterial({ color: 0xc9a27a, roughness: 0.8 }), 0.4275);
  part(new THREE.CylinderGeometry(0.0004, 0.0045, 0.02, 16), new THREE.MeshStandardMaterial({ color: 0x1c1c1c, roughness: 0.4 }), 0.475);
  part(
    new THREE.CylinderGeometry(r * 1.03, r * 1.03, 0.055, 24),
    new THREE.MeshStandardMaterial({ color: 0xbdbab3, roughness: 0.3, metalness: 1 }),
    -0.4175,
  );
  part(new THREE.CylinderGeometry(r * 0.95, r * 0.95, 0.045, 24), new THREE.MeshStandardMaterial({ color: 0x2b2a29, roughness: 0.9 }), -0.4675);
  g.position.y = r * Math.cos(Math.PI / 6);
  const wrap = new THREE.Group();
  wrap.add(g);
  return shadow(wrap);
}

/* ------------------------------------------------------ business cards */

function cardFace(dark: boolean) {
  return canvasTexture(640, 370, (ctx) => {
    ctx.fillStyle = dark ? '#121212' : '#F3F2EE';
    ctx.fillRect(0, 0, 640, 370);
    const fg = dark ? '#F3F2EE' : '#111111';
    ctx.fillStyle = fg;
    ctx.font = `600 54px ${DISPLAY}`;
    ctx.fillText('Edwin Villalta', 44, 96);
    ctx.font = `500 21px ${MONO}`;
    ctx.globalAlpha = 0.7;
    ctx.fillText('SOFTWARE DEVELOPER · QA', 46, 318);
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#E8A45C';
    ctx.beginPath();
    ctx.arc(586, 78, 12, 0, Math.PI * 2);
    ctx.fill();
  });
}

export function makeCards() {
  const g = new THREE.Group();
  const cw = 0.45;
  const cd = 0.26;
  const ct = 0.0045;
  const geo = new THREE.BoxGeometry(cw, ct, cd);
  const edge = new THREE.MeshStandardMaterial({ color: 0xe9e6de, roughness: 0.9 });
  const faceMat = (dark: boolean) => new THREE.MeshStandardMaterial({ map: cardFace(dark), roughness: 0.85 });
  const light = faceMat(false);
  const r = rng(4);
  for (let i = 0; i < 6; i++) {
    const card = new THREE.Mesh(geo, [edge, edge, i === 5 ? light : edge, edge, edge, edge]);
    card.position.set((r() - 0.5) * 0.02, ct / 2 + i * ct, (r() - 0.5) * 0.02);
    card.rotation.y = (r() - 0.5) * 0.09;
    g.add(card);
  }
  const darkEdge = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.9 });
  const loose = new THREE.Mesh(geo, [darkEdge, darkEdge, faceMat(true), darkEdge, darkEdge, darkEdge]);
  loose.position.set(0.3, ct / 2, 0.2);
  loose.rotation.y = -0.42;
  g.add(loose);
  return shadow(g);
}

/* ----------------------------------------------------------- succulent */

function leafGeometry() {
  const geo = new THREE.SphereGeometry(0.5, 16, 12);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const z = pos.getZ(i) + 0.5; // 0 at the base, 1 at the tip
    const taper = z < 0.68 ? 0.42 + 0.58 * Math.sin((z / 0.68) * Math.PI * 0.5) : Math.pow(1 - (z - 0.68) / 0.32, 0.75);
    const y = pos.getY(i);
    pos.setXYZ(i, pos.getX(i) * taper, (y > 0 ? y * 0.55 : y) * taper + z * z * 0.12, z);
  }
  geo.computeVertexNormals();
  return geo;
}

export function makeSucculent() {
  const g = new THREE.Group();
  const pot = new THREE.Mesh(
    lathe([
      [0, 0],
      [0.15, 0],
      [0.166, 0.016],
      [0.205, 0.25],
      [0.212, 0.262],
      [0.2, 0.266],
      [0.19, 0.25],
      [0.185, 0.2],
      [0, 0.2],
    ]),
    new THREE.MeshStandardMaterial({ color: 0xd9d5cc, roughness: 0.9 }),
  );
  const soil = new THREE.Mesh(
    new THREE.CircleGeometry(0.19, 40).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0x1d1612, roughness: 1 }),
  );
  soil.position.y = 0.232;
  g.add(pot, soil);

  const geo = leafGeometry();
  const outer = new THREE.Color(0x7fa086);
  const innerC = new THREE.Color(0xc2d6b0);
  // [leaves, tilt from the horizontal, length, width, distance from the centre]
  const rings: [number, number, number, number, number][] = [
    [9, 0.1, 0.215, 0.1, 0.03],
    [8, 0.36, 0.19, 0.094, 0.024],
    [7, 0.66, 0.155, 0.082, 0.018],
    [6, 0.95, 0.118, 0.066, 0.012],
    [5, 1.2, 0.082, 0.048, 0.006],
    [3, 1.42, 0.05, 0.032, 0],
  ];
  const r = rng(8);
  rings.forEach(([count, tilt, len, width, off], ri) => {
    const mat = new THREE.MeshStandardMaterial({
      color: outer.clone().lerp(innerC, ri / (rings.length - 1)),
      roughness: 0.62,
    });
    for (let i = 0; i < count; i++) {
      const pivot = new THREE.Group();
      pivot.rotation.y = (i / count) * Math.PI * 2 + ri * 0.7 + (r() - 0.5) * 0.12;
      pivot.position.y = 0.236 + ri * 0.012;
      const leaf = new THREE.Mesh(geo, mat);
      leaf.scale.set(width, width * 0.5, len * (0.94 + r() * 0.12));
      leaf.position.z = off;
      leaf.rotation.x = -tilt - (r() - 0.5) * 0.08;
      pivot.add(leaf);
      g.add(pivot);
    }
  });
  return shadow(g);
}
