const FONT = '"Inter Tight", Inter, system-ui, sans-serif';
const NAVY = '#1E1B4B';
const VIOLET = '#5B4CF0';

function rr(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function card(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
  rr(ctx, x, y, w, h, r);
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.strokeStyle = '#E3E5EE';
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

function text(ctx: CanvasRenderingContext2D, s: string, x: number, y: number, size: number, color: string, weight = 600, align: CanvasTextAlign = 'left'): void {
  ctx.font = `${weight} ${size}px ${FONT}`;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = 'middle';
  ctx.fillText(s, x, y);
}

function bolt(ctx: CanvasRenderingContext2D, x: number, y: number, s: number): void {
  ctx.beginPath();
  ctx.moveTo(x + s * 0.6, y);
  ctx.lineTo(x, y + s * 0.58);
  ctx.lineTo(x + s * 0.42, y + s * 0.58);
  ctx.lineTo(x + s * 0.28, y + s);
  ctx.lineTo(x + s * 0.88, y + s * 0.38);
  ctx.lineTo(x + s * 0.46, y + s * 0.38);
  ctx.closePath();
  ctx.fillStyle = VIOLET;
  ctx.fill();
}

export function drawElectroScreen(ctx: CanvasRenderingContext2D, w: number, h: number, logo: HTMLImageElement | null): void {
  const u = w / 1024;
  ctx.save();
  ctx.fillStyle = '#F5F6FA';
  ctx.fillRect(0, 0, w, h);

  // Sidebar
  const sw = 190 * u;
  ctx.fillStyle = NAVY;
  ctx.fillRect(0, 0, sw, h);
  rr(ctx, 22 * u, 24 * u, 36 * u, 36 * u, 9 * u);
  ctx.fillStyle = VIOLET;
  ctx.fill();
  text(ctx, 'DTE', 40 * u, 42 * u, 15 * u, '#FFFFFF', 800, 'center');
  const nav = ['Panel', 'Facturación', 'Inventario', 'Clientes', 'Reportes', 'Ajustes'];
  nav.forEach((n, i) => {
    const y = 100 * u + i * 56 * u;
    if (i === 1) {
      rr(ctx, 14 * u, y - 20 * u, sw - 28 * u, 42 * u, 10 * u);
      ctx.fillStyle = VIOLET;
      ctx.fill();
    }
    rr(ctx, 30 * u, y - 8 * u, 16 * u, 16 * u, 4 * u);
    ctx.fillStyle = i === 1 ? '#FFFFFF' : '#6D6AA8';
    ctx.fill();
    text(ctx, n, 58 * u, y + 1 * u, 19 * u, i === 1 ? '#FFFFFF' : '#B9B7E0', 600);
  });

  // Top bar
  const mx = sw + 28 * u;
  const mw = w - mx - 28 * u;
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(sw, 0, w - sw, 76 * u);
  ctx.fillStyle = '#E3E5EE';
  ctx.fillRect(sw, 76 * u, w - sw, 1.5 * u);
  if (logo && logo.naturalWidth > 0) {
    const lh = 46 * u;
    const lw = lh * (logo.naturalWidth / logo.naturalHeight);
    ctx.drawImage(logo, mx, 15 * u, lw, lh);
  } else {
    bolt(ctx, mx, 20 * u, 36 * u);
    text(ctx, 'ElectroDTE', mx + 46 * u, 39 * u, 32 * u, NAVY, 800);
  }
  rr(ctx, w - 280 * u, 20 * u, 160 * u, 36 * u, 18 * u);
  ctx.fillStyle = '#F0F1F7';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(w - 50 * u, 38 * u, 18 * u, 0, Math.PI * 2);
  ctx.fillStyle = VIOLET;
  ctx.fill();
  text(ctx, 'EO', w - 50 * u, 39 * u, 14 * u, '#FFFFFF', 700, 'center');

  // KPI cards
  const kpis: [string, string, string][] = [
    ['Ventas del mes', '$12,480', VIOLET],
    ['DTE emitidos', '342', VIOLET],
    ['Productos', '1,204', VIOLET],
    ['Hacienda', '✓ En línea', '#16A34A'],
  ];
  const gap = 16 * u;
  const kw = (mw - gap * 3) / 4;
  const ky = 98 * u;
  kpis.forEach(([l, v, c], i) => {
    const x = mx + i * (kw + gap);
    card(ctx, x, ky, kw, 100 * u, 12 * u);
    text(ctx, l, x + 16 * u, ky + 26 * u, 16 * u, '#6B7280', 600);
    text(ctx, v, x + 16 * u, ky + 66 * u, (i === 3 ? 28 : 38) * u, c === VIOLET ? NAVY : c, 800);
  });

  // Chart
  const cy = ky + 100 * u + 18 * u;
  const cw = mw * 0.4;
  const ch = 150 * u;
  card(ctx, mx, cy, cw, ch, 12 * u);
  text(ctx, 'Ventas por mes', mx + 16 * u, cy + 24 * u, 17 * u, NAVY, 700);
  const bars = [0.4, 0.55, 0.45, 0.7, 0.6, 0.85, 0.75, 1];
  const bw = (cw - 32 * u) / bars.length;
  bars.forEach((b, i) => {
    const bh = b * (ch - 66 * u);
    rr(ctx, mx + 16 * u + i * bw + 4 * u, cy + ch - 16 * u - bh, bw - 8 * u, bh, 4 * u);
    ctx.fillStyle = i === bars.length - 1 ? VIOLET : '#A9A1F8';
    ctx.fill();
  });

  // Table
  const tx = mx + cw + gap;
  const tw = mw - cw - gap;
  card(ctx, tx, cy, tw, ch + 150 * u, 12 * u);
  text(ctx, 'Facturas recientes', tx + 16 * u, cy + 24 * u, 17 * u, NAVY, 700);
  const rows: [string, string, string][] = [
    ['CCF-00231', 'Ferretería Luna', '$245.00'],
    ['CCF-00230', 'Distrib. Alfa', '$1,180.50'],
    ['FCF-00229', 'Cliente final', '$32.80'],
    ['CCF-00228', 'Electro Sur', '$690.00'],
    ['CCF-00227', 'Taller Mejía', '$118.25'],
  ];
  rows.forEach(([a, b, c], i) => {
    const y = cy + 66 * u + i * 50 * u;
    ctx.fillStyle = '#EEF0F6';
    ctx.fillRect(tx + 16 * u, y - 25 * u, tw - 32 * u, 1.5 * u);
    text(ctx, a, tx + 16 * u, y, 16 * u, NAVY, 700);
    text(ctx, b, tx + 130 * u, y, 16 * u, '#4B5563', 500);
    text(ctx, c, tx + tw - 150 * u, y, 16 * u, NAVY, 700, 'right');
    rr(ctx, tx + tw - 130 * u, y - 13 * u, 110 * u, 26 * u, 13 * u);
    ctx.fillStyle = '#DCFCE7';
    ctx.fill();
    text(ctx, 'Aceptado', tx + tw - 75 * u, y + 1 * u, 14 * u, '#15803D', 700, 'center');
  });
  ctx.restore();
}
