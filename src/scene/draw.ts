/** Small 2D-canvas helpers shared by the page layouts and the animated figures. */

export const PAPER = '#F3F2EE';
export const INK = '#111111';
export const MUTED = 'rgba(17,17,17,0.56)';
export const HAIR = 'rgba(17,17,17,0.16)';
export const FG = '#F3F2EE';
export const FG_DIM = 'rgba(243,242,238,0.5)';
export const FG_LINE = 'rgba(243,242,238,0.15)';
export const ACCENT = '#E8A45C';
export const FAIL = '#E5674F';

export const DISPLAY = '"Inter Tight", Inter, system-ui, sans-serif';
export const SANS = 'Inter, system-ui, sans-serif';
export const MONO = '"JetBrains Mono", ui-monospace, monospace';

export type Ctx = CanvasRenderingContext2D;
export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const smooth = (a: number, b: number, v: number) => {
  const t = clamp((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};
export const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/** Deterministic pseudo-random generator, so every figure looks the same on each load. */
export function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function rr(ctx: Ctx, x: number, y: number, w: number, h: number, r: number) {
  const k = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + k, y);
  ctx.arcTo(x + w, y, x + w, y + h, k);
  ctx.arcTo(x + w, y + h, x, y + h, k);
  ctx.arcTo(x, y + h, x, y, k);
  ctx.arcTo(x, y, x + w, y, k);
  ctx.closePath();
}

export interface TextOpts {
  font: string;
  color?: string;
  align?: CanvasTextAlign;
  spacing?: number;
  baseline?: CanvasTextBaseline;
}

export function text(ctx: Ctx, str: string, x: number, y: number, o: TextOpts) {
  ctx.font = o.font;
  ctx.fillStyle = o.color ?? INK;
  ctx.textAlign = o.align ?? 'left';
  ctx.textBaseline = o.baseline ?? 'alphabetic';
  (ctx as Ctx & { letterSpacing?: string }).letterSpacing = `${o.spacing ?? 0}px`;
  ctx.fillText(str, x, y);
}

export function measure(ctx: Ctx, str: string, font: string, spacing = 0) {
  ctx.font = font;
  (ctx as Ctx & { letterSpacing?: string }).letterSpacing = `${spacing}px`;
  return ctx.measureText(str).width;
}

/** Breaks `str` into lines no wider than `maxW` for the given font. */
export function wrapLines(ctx: Ctx, str: string, font: string, maxW: number, spacing = 0): string[] {
  const words = str.split(' ');
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (line && measure(ctx, next, font, spacing) > maxW) {
      lines.push(line);
      line = w;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/** Draws wrapped text and returns the y of the line after the last one. */
export function paragraph(
  ctx: Ctx,
  str: string,
  x: number,
  y: number,
  maxW: number,
  lh: number,
  o: TextOpts,
): number {
  for (const line of wrapLines(ctx, str, o.font, maxW, o.spacing)) {
    text(ctx, line, x, y, o);
    y += lh;
  }
  return y;
}

export function line(ctx: Ctx, x1: number, y1: number, x2: number, y2: number, color: string, w = 1) {
  ctx.strokeStyle = color;
  ctx.lineWidth = w;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

export function check(ctx: Ctx, cx: number, cy: number, s: number, color: string, w = 3) {
  ctx.strokeStyle = color;
  ctx.lineWidth = w;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - s * 0.5, cy);
  ctx.lineTo(cx - s * 0.12, cy + s * 0.36);
  ctx.lineTo(cx + s * 0.52, cy - s * 0.38);
  ctx.stroke();
}

export function cross(ctx: Ctx, cx: number, cy: number, s: number, color: string, w = 3) {
  ctx.strokeStyle = color;
  ctx.lineWidth = w;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - s * 0.4, cy - s * 0.4);
  ctx.lineTo(cx + s * 0.4, cy + s * 0.4);
  ctx.moveTo(cx + s * 0.4, cy - s * 0.4);
  ctx.lineTo(cx - s * 0.4, cy + s * 0.4);
  ctx.stroke();
}

export function mix(a: [number, number, number], b: [number, number, number], t: number) {
  const k = clamp(t);
  return `rgb(${Math.round(lerp(a[0], b[0], k))},${Math.round(lerp(a[1], b[1], k))},${Math.round(lerp(a[2], b[2], k))})`;
}

export const FG_RGB: [number, number, number] = [243, 242, 238];
export const ACCENT_RGB: [number, number, number] = [232, 164, 92];
