/** A laptop beside the book, open on ElectroDTE. Decoration only: five meshes and two canvas textures. */
import * as THREE from 'three';
import logoUrl from '../assets/logos/electrodte.png';
import { drawElectroScreen } from './laptopScreen';

const W = 1.24; // width of the base and the lid
const D = 0.84; // depth of the base
const T = 0.034; // thickness of the base
const H = 0.8; // height of the lid
const LT = 0.018; // thickness of the lid
const OPEN = 1.76; // how far the lid is opened, in radians from shut

function canvas(w: number, h: number) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

/** The top of the base: keyboard and trackpad, painted rather than modelled. */
function deckTexture() {
  const c = canvas(512, 352);
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#2a2b2f';
  ctx.fillRect(0, 0, c.width, c.height);
  const kw = 512 * 0.86;
  const x0 = (512 - kw) / 2;
  const y0 = 352 * 0.1;
  const rows = 6;
  const pitch = kw / 14;
  ctx.fillStyle = '#121315';
  ctx.fillRect(x0 - 4, y0 - 4, kw + 8, rows * pitch * 0.82 + 8);
  ctx.fillStyle = '#3a3b40';
  for (let r = 0; r < rows; r++) {
    const kh = r === 0 ? pitch * 0.45 : pitch * 0.82 - 5;
    const y = r === 0 ? y0 : y0 + pitch * 0.45 + 4 + (r - 1) * (pitch * 0.82 - 1);
    if (r === rows - 1) {
      // Bottom row: a long space bar between short keys.
      const keys = [1, 1, 1, 1.3, 5.2, 1.3, 1, 1.2, 1];
      let x = x0;
      const unit = kw / keys.reduce((a, b) => a + b, 0);
      for (const k of keys) {
        ctx.fillRect(x + 2, y, k * unit - 4, kh);
        x += k * unit;
      }
      continue;
    }
    for (let i = 0; i < 14; i++) ctx.fillRect(x0 + i * pitch + 2, y, pitch - 4, kh);
  }
  // Trackpad
  const tw = 512 * 0.38;
  const th = 352 * 0.27;
  ctx.fillStyle = '#323338';
  ctx.strokeStyle = '#4a4b51';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect((512 - tw) / 2, 352 - th - 14, tw, th, 8);
  ctx.fill();
  ctx.stroke();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeLaptop(aniso: number, onChange: () => void) {
  const g = new THREE.Group();
  const shell = new THREE.MeshStandardMaterial({ color: 0x8d9096, metalness: 0.7, roughness: 0.38 });

  const base = new THREE.Mesh(new THREE.BoxGeometry(W, T, D), shell);
  base.position.y = T / 2;
  const deck = new THREE.Mesh(
    new THREE.PlaneGeometry(W * 0.96, D * 0.94).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ map: deckTexture(), roughness: 0.7, metalness: 0.2 }),
  );
  deck.position.y = T + 0.0008;

  // The lid turns about the back edge of the base.
  const hinge = new THREE.Group();
  hinge.position.set(0, T, -D / 2);
  hinge.rotation.x = -(OPEN - Math.PI / 2);
  const lid = new THREE.Mesh(new THREE.BoxGeometry(W, H, LT), shell);
  lid.position.set(0, H / 2, -LT / 2);
  const bezel = new THREE.Mesh(
    new THREE.PlaneGeometry(W * 0.985, H * 0.975),
    new THREE.MeshStandardMaterial({ color: 0x0b0b0d, roughness: 0.25 }),
  );
  bezel.position.set(0, H / 2, 0.0006);

  // The display glows on its own: unlit, and kept out of the tone mapping so its whites stay white.
  const c = canvas(1024, 640);
  const ctx = c.getContext('2d')!;
  const screenTex = new THREE.CanvasTexture(c);
  screenTex.colorSpace = THREE.SRGBColorSpace;
  screenTex.anisotropy = Math.min(8, aniso);
  const paint = (logo: HTMLImageElement | null) => {
    drawElectroScreen(ctx, c.width, c.height, logo);
    screenTex.needsUpdate = true;
    onChange();
  };
  paint(null);
  const img = new Image();
  img.onload = () => paint(img);
  img.src = logoUrl;
  const sw = W * 0.92;
  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(sw, sw / 1.6),
    new THREE.MeshBasicMaterial({ map: screenTex, color: 0xb8b8b8, toneMapped: false }),
  );
  screen.position.set(0, H * 0.515, 0.0012);
  hinge.add(lid, bezel, screen);

  g.add(base, deck, hinge);
  base.castShadow = base.receiveShadow = true;
  lid.castShadow = lid.receiveShadow = true;
  deck.receiveShadow = true;
  return g;
}
