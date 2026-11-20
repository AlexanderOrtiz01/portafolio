/**
 * The "case films": small animations drawn straight onto a page's canvas.
 * Each one is a pure function of time, so pausing and resuming is free.
 */
import type { Content } from '../i18n';
import {
  ACCENT,
  ACCENT_RGB,
  DISPLAY,
  FAIL,
  FG,
  FG_DIM,
  FG_LINE,
  FG_RGB,
  INK,
  MONO,
  PAPER,
  SANS,
  check,
  clamp,
  cross,
  easeInOut,
  easeOut,
  lerp,
  line,
  mix,
  rng,
  rr,
  smooth,
  text,
  type Ctx,
} from './draw';

export type Visual = (ctx: Ctx, w: number, h: number, t: number, c: Content) => void;

const mono = (px: number, weight = 400) => `${weight} ${px}px ${MONO}`;
const sans = (px: number, weight = 400) => `${weight} ${px}px ${SANS}`;
const display = (px: number, weight = 600) => `${weight} ${px}px ${DISPLAY}`;

/* ------------------------------------------------- cached static layers */

// Bumped whenever a web font finishes loading, so text baked into a layer
// with a fallback face gets redrawn with the real one.
let fontGen = 0;
if (typeof document !== 'undefined' && document.fonts) {
  document.fonts.addEventListener('loadingdone', (e) => {
    if ((e as FontFaceSetLoadEvent).fontfaces.length) fontGen++;
  });
}

interface Layer {
  canvas: HTMLCanvasElement;
  c: Content;
  key: string;
}
const layers = new Map<string, Layer>();

/**
 * Draws the parts of a film that never change (for a given language, size
 * and state) once into an offscreen canvas at the device scale of `ctx`,
 * then blits it 1:1 every frame instead of re-rasterizing paths and text.
 * `paint` draws in panel coordinates; only the box x, y, w, h is kept, so
 * keep x and y multiples of 4 for a pixel-exact blit at 0.75 scale too.
 */
function layer(
  ctx: Ctx,
  id: string,
  c: Content,
  x: number,
  y: number,
  w: number,
  h: number,
  paint: (g: Ctx) => void,
) {
  const m = ctx.getTransform();
  const s = Math.hypot(m.a, m.b) || 1;
  // Match the destination's backing: a CPU canvas reading back from a GPU
  // layer every frame would be far slower than drawing it live.
  const cpu = !!ctx.getContextAttributes?.().willReadFrequently;
  const slot = cpu ? `${id}|cpu` : id;
  const key = `${s}|${x}|${y}|${w}|${h}|${fontGen}`;
  let L = layers.get(slot);
  if (!L || L.c !== c || L.key !== key) {
    const canvas = L?.canvas ?? document.createElement('canvas');
    canvas.width = Math.ceil(w * s);
    canvas.height = Math.ceil(h * s);
    const g = canvas.getContext('2d', { willReadFrequently: cpu }) as Ctx;
    g.setTransform(s, 0, 0, s, -x * s, -y * s);
    paint(g);
    L = { canvas, c, key };
    layers.set(slot, L);
  }
  ctx.drawImage(L.canvas, x, y, L.canvas.width / s, L.canvas.height / s);
}

/* ------------------------------------------------------------ terminal */

const terminal: Visual = (ctx, w, _h, t, c) => {
  // Window chrome
  layer(ctx, 'terminal', c, 0, 0, w, 80, (g) => {
    g.fillStyle = FG_LINE;
    for (let i = 0; i < 3; i++) {
      g.beginPath();
      g.arc(44 + i * 30, 40, 9, 0, Math.PI * 2);
      g.fill();
    }
    text(g, 'edwin@portfolio: ~', w / 2, 47, { font: mono(20), color: FG_DIM, align: 'center' });
    line(g, 0, 78, w, 78, FG_LINE);
  });

  const speed = 24;
  let total = 0.5;
  const marks = c.terminal.map(([cmd]) => {
    const start = total;
    const typed = start + cmd.length / speed;
    total = typed + 0.9;
    return { start, typed };
  });
  const tt = t % (total + 2.6);

  let y = 150;
  const x = 64;
  c.terminal.forEach(([cmd, out], i) => {
    const m = marks[i];
    if (tt < m.start) return;
    const n = Math.floor(clamp((tt - m.start) * speed, 0, cmd.length));
    text(ctx, '$', x, y, { font: mono(28, 500), color: ACCENT });
    text(ctx, cmd.slice(0, n), x + 36, y, { font: mono(28, 500), color: FG });
    const typing = tt < m.typed + 0.3;
    if (typing && Math.floor(tt * 2.5) % 2 === 0) {
      ctx.fillStyle = FG;
      ctx.fillRect(x + 36 + n * 16.8 + 4, y - 26, 14, 32);
    }
    if (tt >= m.typed + 0.3) {
      ctx.globalAlpha = smooth(m.typed + 0.3, m.typed + 0.55, tt);
      text(ctx, out, x + 36, y + 46, { font: mono(26), color: FG_DIM });
      ctx.globalAlpha = 1;
    }
    y += 108;
  });
  if (tt >= total && Math.floor(tt * 2.5) % 2 === 0) {
    text(ctx, '$', x, y, { font: mono(28, 500), color: ACCENT });
    ctx.fillStyle = FG;
    ctx.fillRect(x + 40, y - 26, 14, 32);
  } else if (tt >= total) {
    text(ctx, '$', x, y, { font: mono(28, 500), color: ACCENT });
  }
};

/* ------------------------------------------------------------------ QR */

const QN = 29;
const qr = (() => {
  const r = rng(7);
  const on: boolean[][] = [];
  const order: number[][] = [];
  const finder = (i: number, j: number) => {
    for (const [oi, oj] of [
      [0, 0],
      [QN - 7, 0],
      [0, QN - 7],
    ]) {
      const a = i - oi;
      const b = j - oj;
      if (a >= 0 && a < 7 && b >= 0 && b < 7) {
        const ring = Math.max(Math.abs(a - 3), Math.abs(b - 3));
        return ring !== 2 ? 1 : 0;
      }
      if (a >= -1 && a < 8 && b >= -1 && b < 8) return 0;
    }
    return -1;
  };
  for (let j = 0; j < QN; j++) {
    on.push([]);
    order.push([]);
    for (let i = 0; i < QN; i++) {
      const f = finder(i, j);
      on[j].push(f === -1 ? r() > 0.52 : f === 1);
      order[j].push(f === -1 ? 0.08 + r() * 0.92 : 0.02);
    }
  }
  const bars = Array.from({ length: 12 }, (_, i) => 0.3 + r() * 0.5 + i * 0.015);
  return { on, order, bars };
})();

const qrVisual: Visual = (ctx, _w, h, t, c) => {
  const tt = t % 11;
  const size = 464;
  const cell = size / QN;
  const x0 = 124;
  const y0 = (h - size) / 2 - 24;

  const reveal = smooth(0.3, 2.8, tt);
  const frame = smooth(3.0, 3.7, tt);
  const tint = smooth(4.3, 5.3, tt);
  const logo = smooth(5.4, 6.0, tt);
  const color = mix(FG_RGB, ACCENT_RGB, tint);

  // Frame with its call to action
  ctx.globalAlpha = frame;
  rr(ctx, x0 - 34, y0 - 34, size + 68, size + 122, 26);
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.stroke();
  text(ctx, c.viz.scan, x0 + size / 2, y0 + size + 58, {
    font: mono(26, 500),
    color,
    align: 'center',
    spacing: 6,
  });
  ctx.globalAlpha = 1;

  const mid = (QN - 1) / 2;
  const hole = logo > 0.01;
  const modules = (g: Ctx) => {
    g.fillStyle = color;
    for (let j = 0; j < QN; j++) {
      for (let i = 0; i < QN; i++) {
        if (!qr.on[j][i]) continue;
        if (hole && Math.abs(i - mid) <= 3 && Math.abs(j - mid) <= 3) continue;
        const k = clamp((reveal - qr.order[j][i]) * 9);
        if (k <= 0) continue;
        const s = cell * (0.35 + 0.65 * easeOut(k)) - 1.5;
        g.globalAlpha = k;
        g.fillRect(x0 + i * cell + (cell - s) / 2, y0 + j * cell + (cell - s) / 2, s, s);
      }
    }
    g.globalAlpha = 1;
  };
  // Once revealed, the code only changes between its two solid colours and
  // when the logo punches its hole: bake those states, draw the rest live.
  if (reveal >= 1 && (tint === 0 || tint === 1)) {
    layer(ctx, `qr-${tint}-${hole ? 1 : 0}`, c, 120, Math.floor(y0 / 4) * 4, 472, 476, modules);
  } else {
    modules(ctx);
  }
  ctx.globalAlpha = logo;
  rr(ctx, x0 + (mid - 2.5) * cell, y0 + (mid - 2.5) * cell, cell * 6, cell * 6, 14);
  ctx.fillStyle = color;
  ctx.fill();
  text(ctx, 'E', x0 + size / 2 + 1, y0 + size / 2 + 22, { font: display(62, 700), color: INK, align: 'center' });
  ctx.globalAlpha = 1;

  // Right column: the short link and its statistics
  const rx = 760;
  text(ctx, c.viz.shortLink, rx, 110, { font: mono(20), color: FG_DIM, spacing: 3 });
  const link = '/r/7kD2a';
  const n = Math.floor(clamp((tt - 0.5) * 7, 0, link.length));
  text(ctx, link.slice(0, n), rx, 172, { font: mono(46, 500), color: FG });
  if (tt < 2.4 && Math.floor(tt * 2.5) % 2 === 0) {
    ctx.fillStyle = ACCENT;
    ctx.fillRect(rx + n * 27.6 + 6, 132, 20, 46);
  }
  line(ctx, rx, 214, rx + 460, 214, FG_LINE);

  const stats = smooth(6.0, 6.5, tt);
  ctx.globalAlpha = stats;
  text(ctx, c.viz.scans, rx, 272, { font: mono(20), color: FG_DIM, spacing: 3 });
  const count = Math.round(1284 * easeOut(clamp((tt - 6.1) / 2.6)));
  text(ctx, count.toLocaleString('en-US'), rx - 4, 392, { font: display(124), color: FG, spacing: -4 });

  const base = 596;
  qr.bars.forEach((v, i) => {
    const g = easeOut(clamp((tt - 6.3 - i * 0.12) / 0.8));
    const bh = 150 * v * g;
    ctx.fillStyle = i === 11 ? ACCENT : 'rgba(243,242,238,0.34)';
    rr(ctx, rx + i * 39, base - bh, 26, Math.max(bh, 2), 5);
    ctx.fill();
  });
  line(ctx, rx, base + 14, rx + 460, base + 14, FG_LINE);
  text(ctx, c.viz.week, rx, base + 52, { font: mono(18), color: FG_DIM, spacing: 3 });
  ctx.globalAlpha = 1;
};

/* ------------------------------------------------------------- invoice */

const ROWS: { key: 'p1' | 'p2' | 'p3' | 'p4'; qty: number; price: number; stock: number }[] = [
  { key: 'p1', qty: 2, price: 6.5, stock: 48 },
  { key: 'p2', qty: 1, price: 45, stock: 20 },
  { key: 'p3', qty: 1, price: 129, stock: 9 },
  { key: 'p4', qty: 3, price: 12.9, stock: 60 },
];

const invoicePaper = (ctx: Ctx, h: number, c: Content) => {
  const cx = 96;
  const cy = 54;
  const cw = 620;
  const ch = h - 108;
  rr(ctx, cx, cy, cw, ch, 12);
  ctx.fillStyle = PAPER;
  ctx.fill();

  const px = cx + 44;
  const pr = cx + cw - 44;
  text(ctx, c.viz.invoice, px, cy + 62, { font: display(34), color: INK });
  text(ctx, 'DTE-01 · 000184', pr, cy + 60, { font: mono(19), color: 'rgba(17,17,17,.55)', align: 'right' });
  line(ctx, px, cy + 88, pr, cy + 88, 'rgba(17,17,17,.9)', 2);
  text(ctx, c.viz.item, px, cy + 124, { font: mono(16), color: 'rgba(17,17,17,.55)', spacing: 2 });
  text(ctx, c.viz.qty, px + 330, cy + 124, { font: mono(16), color: 'rgba(17,17,17,.55)', spacing: 2, align: 'right' });
  text(ctx, c.viz.amount, pr, cy + 124, { font: mono(16), color: 'rgba(17,17,17,.55)', spacing: 2, align: 'right' });

  const ty = cy + ch - 150;
  text(ctx, c.viz.subtotal, px + 300, ty, { font: sans(22), color: INK });
  text(ctx, c.viz.tax, px + 300, ty + 42, { font: sans(22), color: INK });
  text(ctx, c.viz.total, px + 300, ty + 94, { font: sans(26, 600), color: INK });
};

const invoiceStock = (ctx: Ctx, c: Content) => {
  const ix = 800;
  text(ctx, c.viz.stock, ix, 110, { font: mono(20), color: FG_DIM, spacing: 3 });
  ROWS.forEach((row, i) => {
    const y = 190 + i * 128;
    text(ctx, c.viz[row.key], ix, y, { font: sans(24, 500), color: FG });
    rr(ctx, ix, y + 24, 440, 10, 5);
    ctx.fillStyle = FG_LINE;
    ctx.fill();
  });
};

const invoice: Visual = (ctx, w, h, t, c) => {
  const tt = t % 10.5;
  const cx = 96;
  const cy = 54;
  const cw = 620;
  const ch = h - 108;
  layer(ctx, 'invoice-paper', c, 92, 52, 628, h - 104, (g) => invoicePaper(g, h, c));
  layer(ctx, 'invoice-stock', c, 796, 80, w - 796, 540, (g) => invoiceStock(g, c));
  const px = cx + 44;
  const pr = cx + cw - 44;

  let subtotal = 0;
  ROWS.forEach((row, i) => {
    const k = smooth(0.7 + i * 0.95, 1.15 + i * 0.95, tt);
    subtotal += row.qty * row.price * k;
    if (k <= 0) return;
    const y = cy + 176 + i * 56;
    ctx.globalAlpha = k;
    const dx = (1 - k) * -16;
    text(ctx, c.viz[row.key], px + dx, y, { font: sans(24, 500), color: INK });
    text(ctx, String(row.qty), px + 330 + dx, y, { font: mono(22), color: INK, align: 'right' });
    text(ctx, (row.qty * row.price).toFixed(2), pr + dx, y, { font: mono(22), color: INK, align: 'right' });
    ctx.globalAlpha = 1;
    line(ctx, px, y + 20, pr, y + 20, 'rgba(17,17,17,.12)');
  });

  const ty = cy + ch - 150;
  const tax = subtotal * 0.13;
  const rowsTotals: [string, number, boolean][] = [
    [c.viz.subtotal, subtotal, false],
    [c.viz.tax, tax, false],
    [c.viz.total, subtotal + tax, true],
  ];
  rowsTotals.forEach(([, v, strong], i) => {
    const y = ty + i * 42 + (strong ? 10 : 0);
    text(ctx, `$ ${v.toFixed(2)}`, pr, y, { font: mono(strong ? 28 : 22, strong ? 500 : 400), color: INK, align: 'right' });
  });

  // Stamp
  const s = clamp((tt - 5.4) / 0.35);
  if (s > 0) {
    ctx.save();
    ctx.translate(px + 118, ty + 30);
    ctx.rotate(-0.2);
    const sc = lerp(1.7, 1, easeOut(s));
    ctx.scale(sc, sc);
    ctx.globalAlpha = s * 0.92;
    ctx.strokeStyle = '#B4541E';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, 0, 92, 0, Math.PI * 2);
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, 80, 0, Math.PI * 2);
    ctx.stroke();
    check(ctx, 0, -22, 44, '#B4541E', 6);
    text(ctx, c.viz.sent, 0, 40, { font: mono(18, 500), color: '#B4541E', align: 'center', spacing: 2 });
    ctx.restore();
    ctx.globalAlpha = 1;
  }

  // Inventory
  const ix = 800;
  ROWS.forEach((row, i) => {
    const k = smooth(0.7 + i * 0.95, 1.5 + i * 0.95, tt);
    const stock = row.stock - row.qty * k;
    const y = 190 + i * 128;
    text(ctx, String(Math.round(stock)), ix + 440, y, { font: mono(26, 500), color: k > 0 && k < 1 ? ACCENT : FG, align: 'right' });
    rr(ctx, ix, y + 24, (440 * stock) / 60, 10, 5);
    ctx.fillStyle = stock < 10 ? ACCENT : FG;
    ctx.fill();
  });
};

/* ------------------------------------------------------ Direct English */

const WORDS: [string, string][] = [
  ['Hello', 'Hola'],
  ['Thank you', 'Gracias'],
  ['See you soon', 'Hasta pronto'],
];

const englishStatic = (ctx: Ctx, h: number, c: Content) => {
  const px = 168;
  const pw = 340;
  const py = 44;
  const ph = h - 88;
  rr(ctx, px, py, pw, ph, 46);
  ctx.strokeStyle = FG;
  ctx.lineWidth = 3;
  ctx.stroke();
  rr(ctx, px + pw / 2 - 48, py + 20, 96, 14, 7);
  ctx.fillStyle = FG_LINE;
  ctx.fill();
  text(ctx, c.viz.lesson, px + pw / 2, py + 96, { font: mono(18), color: FG_DIM, align: 'center', spacing: 3 });
  text(ctx, c.viz.tap, px + pw / 2, py + 438, { font: sans(19), color: FG_DIM, align: 'center' });
  rr(ctx, px + 44, py + ph - 96, pw - 88, 10, 5);
  ctx.fillStyle = FG_LINE;
  ctx.fill();
  rr(ctx, px + pw / 2 - 60, py + ph - 34, 120, 6, 3);
  ctx.fillStyle = FG_LINE;
  ctx.fill();
};

const english: Visual = (ctx, _w, h, t, c) => {
  const D = 9;
  const tt = t % D;
  const px = 168;
  const pw = 340;
  const py = 44;
  const ph = h - 88;
  layer(ctx, 'english-phone', c, 164, 40, 348, h - 80, (g) => englishStatic(g, h, c));

  // Flash card
  const seg = tt / 1.5;
  const idx = Math.floor(seg / 2) % WORDS.length;
  const side = Math.floor(seg) % 2;
  const u = seg % 1;
  const flip = u > 0.82 ? Math.abs(Math.cos(((u - 0.82) / 0.18) * Math.PI)) : 1;
  const showSide = u > 0.91 ? (side + 1) % 2 : side;
  const word = u > 0.91 && side === 1 ? WORDS[(idx + 1) % WORDS.length][0] : WORDS[idx][showSide];
  ctx.save();
  ctx.translate(px + pw / 2, py + 270);
  ctx.scale(Math.max(flip, 0.02), 1);
  rr(ctx, -130, -120, 260, 240, 22);
  ctx.fillStyle = showSide === 0 ? FG : ACCENT;
  ctx.fill();
  text(ctx, word, 0, 14, { font: display(word.length > 9 ? 34 : 44), color: INK, align: 'center' });
  text(ctx, showSide === 0 ? 'EN' : 'ES', 0, -76, { font: mono(16, 500), color: 'rgba(17,17,17,.5)', align: 'center', spacing: 3 });
  ctx.restore();

  rr(ctx, px + 44, py + ph - 96, (pw - 88) * (tt / D), 10, 5);
  ctx.fillStyle = FG;
  ctx.fill();

  // Progress ring
  const rx = 690;
  text(ctx, c.viz.progress, rx, 110, { font: mono(20), color: FG_DIM, spacing: 3 });
  text(ctx, c.viz.streak, rx, 540, { font: mono(20), color: FG_DIM, spacing: 3 });
  const p = easeInOut(clamp(tt / (D - 1.2)));
  const cxr = rx + 150;
  const cyr = 300;
  layer(ctx, 'english-ring', c, 692, 152, 296, 296, (g) => {
    g.lineWidth = 24;
    g.strokeStyle = FG_LINE;
    g.beginPath();
    g.arc(cxr, cyr, 132, 0, Math.PI * 2);
    g.stroke();
  });
  ctx.lineWidth = 24;
  ctx.strokeStyle = ACCENT;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.arc(cxr, cyr, 132, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * Math.max(p, 0.001));
  ctx.stroke();
  ctx.lineCap = 'butt';
  text(ctx, `${Math.round(p * 100)}%`, cxr, cyr + 30, { font: display(84), color: FG, align: 'center', spacing: -2 });

  // Lesson list beside the ring
  // (and the streak below) only ever show a few distinct states: bake each.
  const lx = rx + 360;
  let doneN = 0;
  while (doneN < 4 && p * 4 > doneN + 0.6) doneN++;
  layer(ctx, `english-list-${doneN}`, c, 1032, 168, 220, 228, (g) => {
    for (let i = 0; i < 4; i++) {
      const done = i < doneN;
      const y = 196 + i * 62;
      g.beginPath();
      g.arc(lx + 14, y - 8, 14, 0, Math.PI * 2);
      if (done) {
        g.fillStyle = FG;
        g.fill();
        check(g, lx + 14, y - 8, 15, INK, 3);
      } else {
        g.strokeStyle = FG_DIM;
        g.lineWidth = 2;
        g.stroke();
      }
      rr(g, lx + 46, y - 16, 150 - i * 18, 14, 7);
      g.fillStyle = done ? FG_DIM : FG_LINE;
      g.fill();
    }
  });

  let onN = 0;
  while (onN < 7 && tt / D > (onN + 0.5) / 7.5) onN++;
  layer(ctx, `english-streak-${onN}`, c, 664, 576, 520, 56, (g) => {
    for (let i = 0; i < 7; i++) {
      g.beginPath();
      g.arc(rx + 22 + i * 74, 604, 22, 0, Math.PI * 2);
      if (i < onN) {
        g.fillStyle = i === 6 ? ACCENT : FG;
        g.fill();
      } else {
        g.strokeStyle = FG_LINE;
        g.lineWidth = 3;
        g.stroke();
      }
    }
  });
};

/* ----------------------------------------------------------- MagnetoHR */

const net = (() => {
  const r = rng(21);
  const nodes = Array.from({ length: 10 }, (_, i) => {
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2 + (r() - 0.5) * 0.2;
    const k = 0.86 + r() * 0.2;
    return { x: Math.cos(a) * 330 * k, y: Math.sin(a) * 190 * k, score: Math.round(52 + r() * 40) };
  });
  nodes[2].score = 97;
  nodes[6].score = 93;
  nodes[8].score = 91;
  const top = [...nodes.keys()].sort((a, b) => nodes[b].score - nodes[a].score).slice(0, 3);
  const hashes = Array.from({ length: 6 }, () =>
    `0x${Math.floor(r() * 0xfff).toString(16).padStart(3, '0')}…${Math.floor(r() * 0xff).toString(16).padStart(2, '0')}`,
  );
  return { nodes, top, hashes };
})();

const magneto: Visual = (ctx, w, h, t, c) => {
  const tt = t % 11;
  const cx = 440;
  const cy = 270;
  const done = smooth(5.5, 6.1, tt);
  const hotAny = done > 0;

  // Labels and the spokes that never light up. Spokes don't cross each
  // other's nodes, so the node discs can go in a second layer drawn after
  // the moving scan dots without changing what overlaps what.
  text(ctx, c.viz.candidates, 64, 76, { font: mono(20), color: FG_DIM, spacing: 3 });
  text(ctx, c.viz.match, 900, 76, { font: mono(20), color: FG_DIM, spacing: 3 });
  text(ctx, c.viz.chain, 64, h - 128 - 24, { font: mono(20), color: FG_DIM, spacing: 3 });
  layer(ctx, hotAny ? 'magneto-spokes-hot' : 'magneto-spokes', c, 64, 40, 752, 460, (g) => {
    net.nodes.forEach((n, i) => {
      if (hotAny && net.top.includes(i)) return;
      line(g, cx, cy, cx + n.x, cy + n.y, FG_LINE, 1);
    });
  });
  if (hotAny) {
    const hotColor = mix(FG_RGB, ACCENT_RGB, done);
    for (const i of net.top) {
      const n = net.nodes[i];
      line(ctx, cx, cy, cx + n.x, cy + n.y, hotColor, 1 + done * 2);
    }
  }
  ctx.fillStyle = FG;
  net.nodes.forEach((n, i) => {
    const scan = clamp((tt - 0.5 - i * 0.47) / 0.45);
    if (scan > 0 && scan < 1) {
      ctx.beginPath();
      ctx.arc(cx + n.x * scan, cy + n.y * scan, 6, 0, Math.PI * 2);
      ctx.fill();
    }
  });
  layer(ctx, 'magneto-nodes', c, 64, 40, 752, 460, (g) => {
    g.fillStyle = '#111';
    g.strokeStyle = FG_LINE;
    g.lineWidth = 3;
    for (const n of net.nodes) {
      g.beginPath();
      g.arc(cx + n.x, cy + n.y, 24, 0, Math.PI * 2);
      g.fill();
      g.stroke();
    }
  });

  net.nodes.forEach((n, i) => {
    const start = 0.5 + i * 0.47;
    const scan = clamp((tt - start) / 0.45);
    const isTop = net.top.includes(i);
    const hot = isTop ? done : 0;
    const x = cx + n.x;
    const y = cy + n.y;
    if (scan >= 1) {
      const fillK = easeOut(clamp((tt - start - 0.45) / 0.5));
      ctx.strokeStyle = hot > 0 ? mix(FG_RGB, ACCENT_RGB, hot) : FG;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(x, y, 24, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (n.score / 100) * fillK);
      ctx.stroke();
      text(ctx, String(Math.round(n.score * fillK)), x, y + 7, {
        font: mono(18, 500),
        color: hot > 0 ? ACCENT : FG,
        align: 'center',
      });
    }
  });

  // Core
  const pulse = 1 + Math.sin(tt * 3) * 0.03;
  ctx.fillStyle = FG;
  ctx.beginPath();
  ctx.arc(cx, cy, 58 * pulse, 0, Math.PI * 2);
  ctx.fill();
  text(ctx, c.viz.ai, cx, cy + 16, { font: display(44, 700), color: INK, align: 'center' });

  // Shortlist
  const lx = 900;
  net.top.forEach((id, i) => {
    const k = smooth(5.7 + i * 0.3, 6.1 + i * 0.3, tt);
    if (k <= 0) return;
    ctx.globalAlpha = k;
    const y = 150 + i * 96;
    text(ctx, `#${String(id + 1).padStart(2, '0')}`, lx, y, { font: mono(24), color: FG_DIM });
    text(ctx, `${net.nodes[id].score}%`, lx + 364, y, { font: display(46), color: i === 0 ? ACCENT : FG, align: 'right' });
    rr(ctx, lx + 76, y - 22, 150, 12, 6);
    ctx.fillStyle = FG_LINE;
    ctx.fill();
    rr(ctx, lx + 76, y + 2, 96, 10, 5);
    ctx.fill();
    line(ctx, lx, y + 36, lx + 364, y + 36, FG_LINE);
    ctx.globalAlpha = 1;
  });

  // Chain
  const by = h - 128;
  const bw = (w - 128 - 5 * 26) / 6;
  net.hashes.forEach((hash, i) => {
    const k = easeOut(clamp((tt - 6.6 - i * 0.5) / 0.45));
    if (k <= 0) return;
    const x = 64 + i * (bw + 26);
    ctx.globalAlpha = k;
    if (i > 0) line(ctx, x - 26, by + 36, x, by + 36, FG_DIM, 2);
    const newest = tt < 6.6 + (i + 1) * 0.5 + 0.2 || i === 5;
    rr(ctx, x, by + (1 - k) * 18, bw, 72, 10);
    ctx.strokeStyle = newest ? ACCENT : FG_DIM;
    ctx.lineWidth = 2;
    ctx.stroke();
    text(ctx, hash, x + bw / 2, by + 44 + (1 - k) * 18, { font: mono(20), color: newest ? ACCENT : FG, align: 'center' });
    ctx.globalAlpha = 1;
  });
};

/* -------------------------------------------------------------- EvaApp */

const map = (() => {
  const xs = [0, 150, 330, 470, 690, 860, 1040, 1190, 1328];
  const ys = [0, 120, 270, 400, 560, 716];
  const route: [number, number][] = [
    [150, 560],
    [150, 400],
    [330, 400],
    [330, 270],
    [690, 270],
    [690, 120],
    [1040, 120],
    [1040, 400],
    [860, 400],
  ];
  let len = 0;
  const segs = route.slice(1).map((p, i) => {
    const a = route[i];
    const l = Math.abs(p[0] - a[0]) + Math.abs(p[1] - a[1]);
    len += l;
    return l;
  });
  const pins: [number, number][] = [
    [470, 120],
    [860, 270],
    [1190, 270],
    [470, 560],
  ];
  return { xs, ys, route, segs, len, pins };
})();

const evaGround = (ctx: Ctx) => {
  // Blocks and streets
  ctx.fillStyle = 'rgba(243,242,238,0.06)';
  ctx.beginPath();
  for (let j = 0; j < map.ys.length - 1; j++) {
    for (let i = 0; i < map.xs.length - 1; i++) {
      const x = map.xs[i] + 14;
      const y = map.ys[j] + 14;
      const bw = map.xs[i + 1] - map.xs[i] - 28;
      const bh = map.ys[j + 1] - map.ys[j] - 28;
      ctx.roundRect(x, y, bw, bh, 10);
    }
  }
  ctx.fill();
  // Park
  rr(ctx, map.xs[3] + 14, map.ys[2] + 14, map.xs[4] - map.xs[3] - 28, map.ys[3] - map.ys[2] - 28, 10);
  ctx.fillStyle = 'rgba(243,242,238,0.1)';
  ctx.fill();
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(map.xs[3] + 52 + i * 36, map.ys[2] + 60 + (i % 2) * 34, 12, 0, Math.PI * 2);
    ctx.fill();
  }
  // The whole route, dashed. It sits under the walked part, which is the
  // same colour and wider, so drawing it first looks the same.
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([4, 14]);
  ctx.strokeStyle = 'rgba(232,164,92,0.35)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  map.route.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.stroke();
  ctx.setLineDash([]);
};

const evaOverlay = (ctx: Ctx, w: number, h: number, c: Content) => {
  // Service chips
  let chipX = w - 40;
  [c.viz.s4, c.viz.s3, c.viz.s2, c.viz.s1].forEach((label, i) => {
    ctx.font = sans(20, 500);
    (ctx as Ctx & { letterSpacing?: string }).letterSpacing = '0px';
    const cw = ctx.measureText(label).width + 36;
    chipX -= cw;
    const active = i === 2;
    rr(ctx, chipX, h - 84, cw, 44, 22);
    ctx.fillStyle = active ? ACCENT : 'rgba(17,17,17,0.9)';
    ctx.fill();
    if (!active) {
      ctx.strokeStyle = FG_LINE;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    text(ctx, label, chipX + cw / 2, h - 55, { font: sans(20, 500), color: active ? INK : FG, align: 'center' });
    chipX -= 12;
  });

  // Booking card
  rr(ctx, 40, h - 196, 420, 156, 18);
  ctx.fillStyle = 'rgba(17,17,17,0.94)';
  ctx.fill();
  ctx.strokeStyle = FG_LINE;
  ctx.lineWidth = 2;
  ctx.stroke();
  text(ctx, c.viz.walk, 70, h - 142, { font: sans(28, 600), color: FG });
  text(ctx, c.viz.walker, 70, h - 108, { font: sans(20), color: FG_DIM });
  rr(ctx, 70, h - 82, 360, 8, 4);
  ctx.fillStyle = FG_LINE;
  ctx.fill();
};

const eva: Visual = (ctx, w, h, t, c) => {
  const D = 11;
  const tt = t % D;
  layer(ctx, 'eva-ground', c, 0, 0, w, h, evaGround);

  // Route
  const p = easeInOut(clamp((tt - 0.6) / (D - 3.2)));
  let left = p * map.len;
  let hx = map.route[0][0];
  let hy = map.route[0][1];
  ctx.strokeStyle = ACCENT;
  ctx.lineWidth = 7;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(hx, hy);
  for (let i = 0; i < map.segs.length && left > 0; i++) {
    const a = map.route[i];
    const b = map.route[i + 1];
    const k = Math.min(1, left / map.segs[i]);
    hx = lerp(a[0], b[0], k);
    hy = lerp(a[1], b[1], k);
    ctx.lineTo(hx, hy);
    left -= map.segs[i];
  }
  ctx.stroke();

  // Sitters nearby
  map.pins.forEach(([x, y], i) => {
    const ph = (tt * 0.6 + i * 0.27) % 1;
    ctx.strokeStyle = `rgba(243,242,238,${0.5 * (1 - ph)})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, 14 + ph * 26, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = FG;
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, Math.PI * 2);
    ctx.fill();
  });

  // Home and walker
  const [sx, sy] = map.route[0];
  rr(ctx, sx - 16, sy - 16, 32, 32, 7);
  ctx.fillStyle = FG;
  ctx.fill();
  ctx.fillStyle = 'rgba(232,164,92,0.28)';
  ctx.beginPath();
  ctx.arc(hx, hy, 30 + Math.sin(tt * 5) * 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = ACCENT;
  ctx.beginPath();
  ctx.arc(hx, hy, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = INK;
  ctx.lineWidth = 3;
  ctx.stroke();

  // Service chips and the booking card's fixed parts
  layer(ctx, 'eva-overlay', c, 36, h - 200, w - 36, 200, (g) => evaOverlay(g, w, h, c));
  const mins = Math.floor(p * 30);
  const secs = Math.floor((p * 30 * 60) % 60);
  text(ctx, `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`, 430, h - 142, {
    font: mono(24, 500),
    color: ACCENT,
    align: 'right',
  });
  rr(ctx, 70, h - 82, 360 * Math.max(p, 0.01), 8, 4);
  ctx.fillStyle = ACCENT;
  ctx.fill();
};

/* ------------------------------------------------------------ QA runner */

const TESTS = ['t1', 't2', 't3', 't4', 't5', 't6', 't7'] as const;

const runnerHeader = (ctx: Ctx, c: Content) => {
  const x = 64;
  text(ctx, '$', x, 84, { font: mono(24, 500), color: ACCENT });
  text(ctx, `test --suite "${c.viz.suite}"`, x + 32, 84, { font: mono(24, 500), color: FG });
  line(ctx, x, 112, 812, 112, FG_LINE);
};

const runnerSummary = (ctx: Ctx, c: Content) => {
  const cx = 1080;
  const cy = 300;
  const R = 140;
  ctx.lineWidth = 26;
  ctx.strokeStyle = FG_LINE;
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.stroke();
  text(ctx, c.viz.passed, cx, cy + R + 76, { font: mono(20), color: FG_DIM, align: 'center', spacing: 3 });
  rr(ctx, cx - 190, cy + R + 116, 380, 10, 5);
  ctx.fillStyle = FG_LINE;
  ctx.fill();
};

const runner: Visual = (ctx, _w, _h, t, c) => {
  const tt = t % 13;
  const x = 64;
  layer(ctx, 'runner-head', c, 60, 52, 756, 64, (g) => runnerHeader(g, c));
  layer(ctx, 'runner-summary', c, 888, 144, 384, 428, (g) => runnerSummary(g, c));

  const FAILING = 4;
  const refixStart = 8.6;
  const refixEnd = 9.8;
  let passed = 0;
  let failed = 0;
  let finished = 0;
  TESTS.forEach((key, i) => {
    const start = 0.6 + i * 0.85;
    const end = start + 0.75;
    const y = 170 + i * 68;
    let state: 'pending' | 'running' | 'pass' | 'fail' = 'pending';
    if (tt >= end) state = 'pass';
    else if (tt >= start) state = 'running';
    if (i === FAILING && tt >= end) {
      state = tt >= refixEnd ? 'pass' : tt >= refixStart ? 'running' : 'fail';
    }
    if (state === 'pass') passed++;
    if (state === 'fail') failed++;
    if (state === 'pass' || state === 'fail') finished++;

    const ix = x + 16;
    if (state === 'pending') {
      ctx.fillStyle = FG_LINE;
      ctx.beginPath();
      ctx.arc(ix, y - 8, 6, 0, Math.PI * 2);
      ctx.fill();
    } else if (state === 'running') {
      ctx.strokeStyle = ACCENT;
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.arc(ix, y - 8, 13, tt * 9, tt * 9 + 4.2);
      ctx.stroke();
      ctx.lineCap = 'butt';
    } else if (state === 'pass') {
      check(ctx, ix, y - 8, 22, FG, 4);
    } else {
      cross(ctx, ix, y - 8, 22, FAIL, 4);
    }
    text(ctx, c.viz[key], x + 56, y, {
      font: mono(23),
      color: state === 'pending' ? FG_DIM : state === 'fail' ? FAIL : FG,
    });
    if (state === 'pass' || state === 'fail') {
      const ms = 180 + ((i * 137) % 420);
      text(ctx, `${ms} ms`, 812, y, { font: mono(19), color: FG_DIM, align: 'right' });
    }
  });

  // Defect note for the failing test
  const note = smooth(7.2, 7.6, tt) * (1 - smooth(10.6, 11, tt));
  if (note > 0) {
    ctx.globalAlpha = note;
    const ny = 170 + FAILING * 68 + 18;
    const fixed = tt >= refixStart;
    const label = fixed ? c.viz.fixed : `QA-142 · ${c.viz.bug}`;
    ctx.font = mono(18, 500);
    const tw = ctx.measureText(label).width + 32;
    rr(ctx, x + 56, ny, tw, 34, 8);
    ctx.fillStyle = fixed ? ACCENT : FAIL;
    ctx.fill();
    text(ctx, label, x + 72, ny + 24, { font: mono(18, 500), color: INK });
    ctx.globalAlpha = 1;
  }

  // Summary
  const cx = 1080;
  const cy = 300;
  const R = 140;
  ctx.lineWidth = 26;
  const a0 = -Math.PI / 2;
  const pa = (passed / TESTS.length) * Math.PI * 2;
  if (passed) {
    ctx.strokeStyle = FG;
    ctx.beginPath();
    ctx.arc(cx, cy, R, a0, a0 + pa);
    ctx.stroke();
  }
  if (failed) {
    ctx.strokeStyle = FAIL;
    ctx.beginPath();
    ctx.arc(cx, cy, R, a0 + pa, a0 + pa + (failed / TESTS.length) * Math.PI * 2);
    ctx.stroke();
  }
  text(ctx, `${passed}/${TESTS.length}`, cx, cy + 30, { font: display(88), color: FG, align: 'center', spacing: -2 });
  rr(ctx, cx - 190, cy + R + 116, 380 * Math.max(finished / TESTS.length, 0.01), 10, 5);
  ctx.fillStyle = failed ? FAIL : passed === TESTS.length ? ACCENT : FG;
  ctx.fill();
};

export const VISUALS = { terminal, qr: qrVisual, invoice, english, magneto, eva, runner };
