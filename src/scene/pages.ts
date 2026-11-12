/**
 * Every page of the book is a 16:10 canvas drawn in code and used as a texture.
 * Static pages are drawn once per language; "film" pages are redrawn while hovered.
 */
import * as THREE from 'three';
import { EMAIL, LINKEDIN, LINKEDIN_LABEL, PLATFORMS, tocEntries, type CaseText, type Content, type Item } from '../i18n';
import {
  ACCENT,
  DISPLAY,
  FG,
  FG_DIM,
  HAIR,
  INK,
  MONO,
  MUTED,
  PAPER,
  SANS,
  line,
  measure,
  paragraph,
  rng,
  rr,
  text,
  wrapLines,
  type Ctx,
} from './draw';
import { VISUALS, type Visual } from './visuals';

export const PW = 1440;
export const PH = 900;
export const SHEETS = 9;
const M = 84;

export type Action = { type: 'goto'; spread: number } | { type: 'link'; href: string };
export interface Region {
  x: number;
  y: number;
  w: number;
  h: number;
  action: Action;
}
interface DrawState {
  time: number;
  playing: boolean;
  hover: number;
}
type PageDraw = (ctx: Ctx, c: Content, st: DrawState) => Region[];

const mono = (px: number, weight = 400) => `${weight} ${px}px ${MONO}`;
const sans = (px: number, weight = 400) => `${weight} ${px}px ${SANS}`;
const display = (px: number, weight = 600) => `${weight} ${px}px ${DISPLAY}`;
const pad2 = (n: number) => String(n).padStart(2, '0');

/* --------------------------------------------------------------- parts */

function paper(ctx: Ctx, side: 'L' | 'R') {
  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, PW, PH);
  // Shade falling into the gutter, where the page dips toward the spine.
  const g = side === 'R' ? ctx.createLinearGradient(0, 0, 130, 0) : ctx.createLinearGradient(PW, 0, PW - 130, 0);
  g.addColorStop(0, 'rgba(30,24,16,0.14)');
  g.addColorStop(0.35, 'rgba(30,24,16,0.04)');
  g.addColorStop(1, 'rgba(30,24,16,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, PW, PH);
}

function header(ctx: Ctx, left: string, right: string) {
  text(ctx, left, M, 92, { font: mono(21, 500), color: INK, spacing: 2.5 });
  text(ctx, right, PW - M, 92, { font: mono(21), color: MUTED, spacing: 2.5, align: 'right' });
  line(ctx, M, 116, PW - M, 116, INK, 2);
}

/** Draws the page title as large as it fits and returns the y where the next block may start. */
function title(ctx: Ctx, str: string, maxW = PW - M * 2): number {
  for (const size of [104, 92, 80]) {
    if (measure(ctx, str, display(size), -size * 0.03) <= maxW) {
      text(ctx, str, M - 4, 232, { font: display(size), spacing: -size * 0.03 });
      return 232;
    }
  }
  const lines = wrapLines(ctx, str, display(72), maxW, -2);
  lines.forEach((l, i) => text(ctx, l, M - 3, 206 + i * 78, { font: display(72), spacing: -2 }));
  return 206 + (lines.length - 1) * 78;
}

/** Logos found in src/assets/logos, keyed by file name; filled in by `loadAssets`. */
const LOGOS: Record<string, HTMLImageElement> = {};

/** Draws a logo fitted inside a box, hugging its left or right side. Returns the width it took, 0 if there is none. */
function logo(ctx: Ctx, key: string | undefined, x: number, y: number, maxW: number, maxH: number, align: 'left' | 'right') {
  const img = key ? LOGOS[key] : undefined;
  if (!img) return 0;
  const iw = img.naturalWidth || 300;
  const ih = img.naturalHeight || 150;
  const k = Math.min(maxW / iw, maxH / ih);
  const w = iw * k;
  const h = ih * k;
  ctx.drawImage(img, align === 'right' ? x - w : x, y + (maxH - h) / 2, w, h);
  return w;
}

/** Lays the labels out as pills, wrapping within `maxW`, with the last row sitting on `bottom`. */
function chips(ctx: Ctx, labels: string[], bottom: number, maxW: number) {
  const rows: { label: string; w: number }[][] = [[]];
  let used = 0;
  for (const label of labels) {
    const w = measure(ctx, label, mono(21, 500), 0.5) + 40;
    if (used + w > maxW && rows[rows.length - 1].length) {
      rows.push([]);
      used = 0;
    }
    rows[rows.length - 1].push({ label, w });
    used += w + 12;
  }
  rows.forEach((row, i) => {
    const y = bottom - 48 - (rows.length - 1 - i) * 60;
    let x = M;
    for (const { label, w } of row) {
      rr(ctx, x, y, w, 48, 24);
      ctx.strokeStyle = 'rgba(17,17,17,0.45)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      text(ctx, label, x + 20, y + 32, { font: mono(21, 500), spacing: 0.5 });
      x += w + 12;
    }
  });
}

function itemList(ctx: Ctx, items: Item[], x: number, y: number, w: number) {
  items.forEach((it, i) => {
    line(ctx, x, y - 30, x + w, y - 30, HAIR);
    if (it.head) {
      if (it.meta) {
        text(ctx, it.meta, x, y, { font: mono(18, 500), color: MUTED, spacing: 2 });
        logo(ctx, it.logo, x + w, y - 26, 180, 40, 'right');
        y += 34;
      } else {
        y += 4;
      }
      text(ctx, it.head, x, y, { font: sans(25, 600) });
      y = paragraph(ctx, it.text, x, y + 34, w, 31, { font: sans(23), color: MUTED }) + 42;
    } else {
      text(ctx, pad2(i + 1), x, y + 2, { font: mono(19, 500), color: MUTED });
      y = paragraph(ctx, it.text, x + 56, y + 2, w - 56, 35, { font: sans(25) }) + 37;
    }
  });
}

function arrow(ctx: Ctx, x: number, y: number, s: number, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(x - s, y);
  ctx.lineTo(x, y);
  ctx.moveTo(x - s * 0.45, y - s * 0.45);
  ctx.lineTo(x, y);
  ctx.lineTo(x - s * 0.45, y + s * 0.45);
  ctx.stroke();
}

/* --------------------------------------------------------------- pages */

const contentsPage: PageDraw = (ctx, c, st) => {
  paper(ctx, 'R');
  header(ctx, c.contents.label, 'EDWIN VILLALTA — 2026');
  title(ctx, c.contents.title);
  const regions: Region[] = [];
  const top = 286;
  const rh = 57;
  tocEntries(c).forEach((e, i) => {
    const y = top + i * rh;
    const hot = st.hover === i;
    if (hot) {
      ctx.fillStyle = INK;
      ctx.fillRect(M - 20, y, PW - M * 2 + 40, rh);
    }
    line(ctx, M, y, PW - M, y, HAIR);
    const fg = hot ? PAPER : INK;
    const dim = hot ? 'rgba(243,242,238,0.6)' : MUTED;
    text(ctx, pad2(i + 1), M, y + 38, { font: mono(19, 500), color: hot ? ACCENT : MUTED });
    text(ctx, e.name, M + 70 + (hot ? 10 : 0), y + 39, { font: sans(29, 500), color: fg, spacing: -0.4 });
    text(ctx, e.kind, PW - M - 60, y + 38, { font: sans(21), color: dim, align: 'right' });
    arrow(ctx, PW - M - 4, y + 29, 20, hot ? ACCENT : 'rgba(17,17,17,0.5)');
    regions.push({ x: M - 20, y, w: PW - M * 2 + 40, h: rh, action: { type: 'goto', spread: e.spread } });
  });
  line(ctx, M, top + 9 * rh, PW - M, top + 9 * rh, HAIR);
  text(ctx, c.contents.note, M, 852, { font: mono(19), color: MUTED, spacing: 0.5 });
  return regions;
};

const casePage =
  (index: number, pick: (c: Content) => CaseText, facts?: (c: Content) => [string, string][]): PageDraw =>
  (ctx, c) => {
    const k = pick(c);
    paper(ctx, 'L');
    header(ctx, `${pad2(index)} — ${k.kicker}`, k.when);
    // Logos sit to the right of the title, laid out from the page edge inwards.
    let lw = 0;
    for (const key of [k.logo ?? []].flat().reverse()) {
      const w = logo(ctx, key, PW - M - lw, 142, 300, 108, 'right');
      if (w) lw += w + 30;
    }
    const ty = title(ctx, k.title, PW - M * 2 - (lw ? lw + 18 : 0));
    text(ctx, k.sub, M, ty + 54, { font: sans(26, 500), color: MUTED });
    const top = ty + 148;
    paragraph(ctx, k.body, M, top, 580, 44, { font: sans(30), spacing: -0.2 });
    const x = 740;
    const w = PW - M - x;
    if (facts) {
      facts(c).forEach(([label, value], i) => {
        const y = top + i * 84;
        line(ctx, x, y - 30, x + w, y - 30, HAIR);
        text(ctx, label.toUpperCase(), x, y, { font: mono(18, 500), color: MUTED, spacing: 2 });
        text(ctx, value, x, y + 34, { font: sans(27, 500) });
      });
      // The platforms worked on, as logos where there is one and by name where there is not.
      line(ctx, M, 772, PW - M, 772, HAIR);
      text(ctx, c.profile.platforms, M, 824, { font: mono(18, 500), color: MUTED, spacing: 2 });
      let lx = M + 230;
      for (const [key, name] of PLATFORMS) {
        const drawn = logo(ctx, key, lx, 792, 210, 52, 'left');
        if (!drawn) text(ctx, name, lx, 826, { font: sans(27, 600), spacing: -0.4 });
        lx += (drawn || measure(ctx, name, sans(27, 600), -0.4)) + 54;
      }
    } else {
      itemList(ctx, k.items, x, top, w);
    }
    if (k.stack.length) chips(ctx, k.stack, 850, 580);
    return [];
  };

const PANEL = { x: 56, y: 56, w: PW - 112, h: 716 };

const filmPage =
  (index: number, visual: Visual, pick: (c: Content) => CaseText): PageDraw =>
  (ctx, c, st) => {
    paper(ctx, 'R');
    ctx.save();
    rr(ctx, PANEL.x, PANEL.y, PANEL.w, PANEL.h, 20);
    ctx.fillStyle = '#111111';
    ctx.fill();
    ctx.clip();
    ctx.translate(PANEL.x, PANEL.y);
    visual(ctx, PANEL.w, PANEL.h, st.time, c);
    ctx.restore();
    ctx.globalAlpha = 1;

    if (!st.playing) {
      // Paused: veil the frame and show the play button.
      rr(ctx, PANEL.x, PANEL.y, PANEL.w, PANEL.h, 20);
      ctx.fillStyle = 'rgba(17,17,17,0.34)';
      ctx.fill();
      const cx = PANEL.x + PANEL.w / 2;
      const cy = PANEL.y + PANEL.h / 2;
      ctx.fillStyle = FG;
      ctx.beginPath();
      ctx.arc(cx, cy, 52, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = INK;
      ctx.beginPath();
      ctx.moveTo(cx - 14, cy - 22);
      ctx.lineTo(cx + 25, cy);
      ctx.lineTo(cx - 14, cy + 22);
      ctx.closePath();
      ctx.fill();
    }

    text(ctx, `FIG. ${pad2(index)} — ${pick(c).fig}`, PANEL.x + 4, 838, { font: mono(21, 500), spacing: 0.5 });
    const label = st.playing ? c.play.playing : c.play.idle;
    text(ctx, label, PW - 60, 838, { font: mono(19), color: MUTED, spacing: 2, align: 'right' });
    const lw = measure(ctx, label, mono(19), 2);
    ctx.fillStyle = st.playing ? '#C8641E' : 'rgba(17,17,17,0.35)';
    ctx.beginPath();
    ctx.arc(PW - 60 - lw - 22, 831, 8, 0, Math.PI * 2);
    ctx.fill();
    return [];
  };

const skillsPage: PageDraw = (ctx, c) => {
  paper(ctx, 'L');
  header(ctx, `08 — ${c.skills.kicker}`, 'EDWIN VILLALTA');
  title(ctx, c.skills.title);
  const colW = (PW - M * 2 - 80) / 2;
  c.skills.groups.forEach((g, i) => {
    const x = M + (i % 2) * (colW + 80);
    const y = 330 + Math.floor(i / 2) * 174;
    line(ctx, x, y - 34, x + colW, y - 34, HAIR);
    text(ctx, pad2(i + 1), x, y + 2, { font: mono(19, 500), color: MUTED });
    text(ctx, g.head, x + 52, y + 4, { font: sans(29, 600), spacing: -0.3 });
    paragraph(ctx, g.text, x + 52, y + 48, colW - 52, 35, { font: sans(25), color: MUTED });
  });
  return [];
};

const educationPage: PageDraw = (ctx, c) => {
  const e = c.education;
  paper(ctx, 'R');
  header(ctx, e.kicker, 'EDWIN VILLALTA');
  title(ctx, e.title);
  let y = 330;
  const w = 600;
  for (const s of e.studies) {
    line(ctx, M, y - 34, M + w, y - 34, HAIR);
    text(ctx, s.meta ?? '', M, y, { font: mono(18, 500), color: MUTED, spacing: 2 });
    y = paragraph(ctx, s.head ?? '', M, y + 42, w, 36, { font: sans(28, 600), spacing: -0.3 });
    text(ctx, s.text, M, y + 4, { font: sans(23), color: MUTED });
    y += 96;
  }
  if (logo(ctx, 'ugb', M, y + 2, 300, 124, 'left')) line(ctx, M, y - 34, M + w, y - 34, HAIR);
  const x = 770;
  const rw = PW - M - x;
  y = 330;
  line(ctx, x, y - 34, x + rw, y - 34, HAIR);
  text(ctx, e.certsLabel, x, y, { font: mono(18, 500), color: MUTED, spacing: 2 });
  y += 46;
  for (const cert of e.certs) {
    y = paragraph(ctx, cert.text, x, y, rw, 33, { font: sans(24, 500) });
    text(ctx, cert.meta ?? '', x, y + 2, { font: mono(18), color: MUTED, spacing: 2 });
    y += 54;
  }
  y += 22;
  line(ctx, x, y - 34, x + rw, y - 34, HAIR);
  text(ctx, e.langsLabel, x, y, { font: mono(18, 500), color: MUTED, spacing: 2 });
  y += 46;
  for (const l of e.langs) {
    text(ctx, l.head ?? '', x, y, { font: sans(24, 600) });
    text(ctx, l.text, x + rw, y, { font: sans(22), color: MUTED, align: 'right' });
    y += 44;
  }
  return [];
};

const contactPage: PageDraw = (ctx, c, st) => {
  const k = c.contact;
  paper(ctx, 'L');
  header(ctx, `09 — ${k.kicker}`, 'EDWIN VILLALTA');
  text(ctx, k.title, M - 6, 290, { font: display(168), spacing: -6 });
  paragraph(ctx, k.body, M, 366, 900, 42, { font: sans(29), color: MUTED });

  const regions: Region[] = [];
  const rows: [string, string, string | null, string][] = [
    [k.emailLabel, EMAIL, `mailto:${EMAIL}`, display(50, 500)],
    [k.linkedinLabel, LINKEDIN_LABEL, LINKEDIN, display(38, 500)],
    [k.locationLabel, k.location, null, display(38, 500)],
  ];
  rows.forEach(([label, value, href, font], i) => {
    const y = 500 + i * 118;
    const hot = href !== null && st.hover === regions.length;
    line(ctx, M, y - 44, PW - M, y - 44, HAIR);
    text(ctx, label, M, y, { font: mono(18, 500), color: MUTED, spacing: 2 });
    text(ctx, value, M + 220, y + 12, { font, spacing: -0.8, color: hot ? '#B4541E' : INK });
    if (href) {
      arrow(ctx, PW - M - 4, y, 22, hot ? '#B4541E' : 'rgba(17,17,17,0.5)');
      regions.push({ x: M, y: y - 44, w: PW - M * 2, h: 118, action: { type: 'link', href } });
    }
  });
  return regions;
};

/* ------------------------------------------------- cover and endpapers */

export const CW = 1440;
export const CH = 944;

function cloth(ctx: Ctx, base: string, seed: number) {
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, CW, CH);
  const r = rng(seed);
  for (let i = 0; i < 9000; i++) {
    ctx.fillStyle = `rgba(255,255,255,${r() * 0.035})`;
    ctx.fillRect(r() * CW, r() * CH, 1 + r() * 2, 1);
  }
}

function drawCover(ctx: Ctx, c: Content) {
  cloth(ctx, '#0b0b0b', 3);
  const foil = '#EDE7DA';
  text(ctx, c.cover.top, 96, 124, { font: mono(24, 500), color: foil, spacing: 7 });
  text(ctx, c.cover.year, CW - 96, 124, { font: mono(24, 500), color: foil, spacing: 7, align: 'right' });
  line(ctx, 96, 156, CW - 96, 156, 'rgba(237,231,218,0.45)', 2);
  text(ctx, c.cover.title, 84, 700, { font: display(236), color: foil, spacing: -10 });
  line(ctx, 96, 772, CW - 96, 772, 'rgba(237,231,218,0.45)', 2);
  text(ctx, c.cover.bottom, 96, 832, { font: sans(30, 500), color: foil, spacing: 0.5 });
  ctx.fillStyle = ACCENT;
  ctx.beginPath();
  ctx.arc(CW - 110, 822, 13, 0, Math.PI * 2);
  ctx.fill();
}

function drawFrontEndpaper(ctx: Ctx, c: Content) {
  cloth(ctx, '#161514', 5);
  text(ctx, c.endpaper.line1.toUpperCase(), 120, 380, { font: mono(20), color: FG_DIM, spacing: 3 });
  text(ctx, c.endpaper.line2, 114, 470, { font: display(92), color: FG, spacing: -3 });
  line(ctx, 120, 520, 760, 520, 'rgba(243,242,238,0.25)', 2);
  c.endpaper.nav.forEach((n, i) => {
    text(ctx, pad2(i + 1), 120, 720 + i * 42, { font: mono(18, 500), color: ACCENT });
    text(ctx, n, 172, 720 + i * 42, { font: mono(18), color: FG_DIM, spacing: 0.5 });
  });
}

function drawBackEndpaper(ctx: Ctx, c: Content) {
  cloth(ctx, '#161514', 9);
  text(ctx, c.back.thanks, 114, 470, { font: display(92), color: FG, spacing: -3 });
  line(ctx, 120, 520, 760, 520, 'rgba(243,242,238,0.25)', 2);
}

/* ------------------------------------------------------------ page set */

interface PageDef {
  draw: PageDraw;
  /** For film pages: the paused frame shown before the first hover. */
  poster?: number;
}

const DEFS: PageDef[] = [
  { draw: contentsPage },
  { draw: casePage(1, (c) => c.profile, (c) => c.profile.facts) },
  { draw: filmPage(1, VISUALS.terminal, (c) => c.profile), poster: 9.2 },
  { draw: casePage(2, (c) => c.cases[0]) },
  { draw: filmPage(2, VISUALS.qr, (c) => c.cases[0]), poster: 9.6 },
  { draw: casePage(3, (c) => c.cases[1]) },
  { draw: filmPage(3, VISUALS.invoice, (c) => c.cases[1]), poster: 7 },
  { draw: casePage(4, (c) => c.cases[2]) },
  { draw: filmPage(4, VISUALS.english, (c) => c.cases[2]), poster: 5.6 },
  { draw: casePage(5, (c) => c.cases[3]) },
  { draw: filmPage(5, VISUALS.magneto, (c) => c.cases[3]), poster: 10.2 },
  { draw: casePage(6, (c) => c.cases[4]) },
  { draw: filmPage(6, VISUALS.eva, (c) => c.cases[4]), poster: 6.4 },
  { draw: casePage(7, (c) => c.cases[5]) },
  { draw: filmPage(7, VISUALS.runner, (c) => c.cases[5]), poster: 12.2 },
  { draw: skillsPage },
  { draw: educationPage },
  { draw: contactPage },
];

interface PageTex {
  def: PageDef;
  ctx: Ctx;
  texture: THREE.CanvasTexture;
  regions: Region[];
  st: DrawState;
}

function makeTexture(w: number, h: number, aniso: number) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, w, h);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = aniso;
  return { ctx, texture };
}

/** Fonts the canvases draw with. */
const FONT_SPECS = [
  `600 40px ${DISPLAY}`,
  `500 40px ${DISPLAY}`,
  `700 40px ${DISPLAY}`,
  `400 20px ${SANS}`,
  `500 20px ${SANS}`,
  `600 20px ${SANS}`,
  `400 20px ${MONO}`,
  `500 20px ${MONO}`,
];

const LOGO_FILES = import.meta.glob('../assets/logos/*.{png,svg,webp,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

/** Loads what the canvases draw with: the fonts and the logos. Both must be ready before the first draw. */
export async function loadAssets() {
  const sample = 'Aáéíóúñ¿º·—←→…';
  const fonts = FONT_SPECS.map((f) => document.fonts.load(f, sample).catch(() => undefined));
  const logos = Object.entries(LOGO_FILES).map(
    ([path, url]) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          LOGOS[path.split('/').pop()!.replace(/\.[^.]+$/, '')] = img;
          resolve();
        };
        img.onerror = () => resolve();
        img.src = url;
      }),
  );
  await Promise.all([...fonts, ...logos]);
}

export class PageSet {
  readonly pages: PageTex[];
  readonly cover: THREE.CanvasTexture;
  readonly front: THREE.CanvasTexture;
  readonly back: THREE.CanvasTexture;
  private special: Ctx[];
  private content!: Content;
  private playingId = -1;
  private dirty = false;
  private sinceFrame = 0;

  constructor(maxAniso: number) {
    // The pages are seen almost square-on; more filtering than this only costs frame time.
    const aniso = Math.min(maxAniso, 4);
    this.pages = DEFS.map((def) => {
      const { ctx, texture } = makeTexture(PW, PH, aniso);
      return { def, ctx, texture, regions: [], st: { time: def.poster ?? 0, playing: false, hover: -1 } };
    });
    const sp = [0, 1, 2].map(() => makeTexture(CW, CH, aniso));
    this.special = sp.map((s) => s.ctx);
    [this.cover, this.front, this.back] = sp.map((s) => s.texture);
  }

  setContent(c: Content) {
    this.content = c;
    this.pages.forEach((_, i) => this.redraw(i));
    drawCover(this.special[0], c);
    drawFrontEndpaper(this.special[1], c);
    drawBackEndpaper(this.special[2], c);
    this.cover.needsUpdate = this.front.needsUpdate = this.back.needsUpdate = true;
    this.dirty = true;
  }

  private redraw(id: number) {
    const p = this.pages[id];
    p.ctx.save();
    p.regions = p.def.draw(p.ctx, this.content, p.st);
    p.ctx.restore();
    p.texture.needsUpdate = true;
    this.dirty = true;
  }

  /** Every texture of the book, for uploading ahead of time. */
  get textures() {
    return [...this.pages.map((p) => p.texture), this.cover, this.front, this.back];
  }

  /** Whether any page was redrawn since the last call. */
  takeDirty() {
    const d = this.dirty;
    this.dirty = false;
    return d;
  }

  /** Index of the clickable region under (u, v), both 0..1 from the page's top-left corner. */
  private regionIndex(id: number, u: number, v: number) {
    const x = u * PW;
    const y = v * PH;
    return this.pages[id].regions.findIndex((r) => x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h);
  }

  actionAt(id: number, u: number, v: number): Action | null {
    const i = this.regionIndex(id, u, v);
    return i < 0 ? null : this.pages[id].regions[i].action;
  }

  /** Tells the set which page the pointer is over (-1 for none). Returns true over a clickable region. */
  hover(id: number, u = 0, v = 0): boolean {
    let over = false;
    this.pages.forEach((p, i) => {
      const h = i === id ? this.regionIndex(i, u, v) : -1;
      if (h >= 0) over = true;
      if (h !== p.st.hover) {
        p.st.hover = h;
        this.redraw(i);
      }
    });
    const playing = id >= 0 && this.pages[id].def.poster !== undefined ? id : -1;
    if (playing !== this.playingId) {
      const prev = this.playingId;
      this.playingId = playing;
      if (prev >= 0) {
        this.pages[prev].st.playing = false;
        this.redraw(prev);
      }
      if (playing >= 0) this.pages[playing].st.playing = true;
    }
    return over;
  }

  update(dt: number) {
    if (this.playingId < 0) return;
    this.pages[this.playingId].st.time += dt;
    // Films run at 30 frames a second: redrawing and re-uploading a page is the dearest thing here.
    this.sinceFrame += dt;
    if (this.sinceFrame < 1 / 31) return;
    this.sinceFrame = 0;
    this.redraw(this.playingId);
  }

  dispose() {
    this.pages.forEach((p) => p.texture.dispose());
    this.cover.dispose();
    this.front.dispose();
    this.back.dispose();
  }
}
