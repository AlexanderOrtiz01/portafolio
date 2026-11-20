/**
 * Draws the desk's oak grain off the main thread. It must not import three: this is a copy of `grain` in
 * desk.ts (keep the two in step), drawn upside down so the ImageBitmap matches a flipY canvas texture.
 */
import { rng } from './draw';

type Ctx2D = OffscreenCanvasRenderingContext2D;

function grain(ctx: Ctx2D, size: number, bump: boolean) {
  const r = rng(11);
  ctx.fillStyle = bump ? '#808080' : '#2e241a';
  ctx.fillRect(0, 0, size, size);
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
  for (let i = 0; i < 26000; i++) {
    const x = r() * size;
    const y = r() * size;
    ctx.fillStyle = bump ? `rgba(0,0,0,${0.12 + r() * 0.3})` : `rgba(0,0,0,${0.25 + r() * 0.4})`;
    ctx.fillRect(x, y, 6 + r() * 30, 1 + r());
  }
}

function draw(out: number, size: number, bump: boolean) {
  const canvas = new OffscreenCanvas(out, out);
  const ctx = canvas.getContext('2d')!;
  // ImageBitmaps ignore flipY, so flip here to land on exactly the pixels the old CanvasTexture uploaded.
  ctx.translate(0, out);
  ctx.scale(out / size, -out / size);
  grain(ctx, size, bump);
  // The canvas only records the ~30k calls; reading one pixel makes them rasterize now, while the worker
  // waits, instead of when the main thread first uploads the bitmap (a third of a second's stall there).
  ctx.getImageData(0, 0, 1, 1);
  return canvas.transferToImageBitmap();
}

const scope = self as unknown as {
  onmessage: ((e: MessageEvent<{ size: number }>) => void) | null;
  postMessage(msg: unknown, transfer: Transferable[]): void;
};

scope.onmessage = (e) => {
  const { size } = e.data;
  const map = draw(size, size, false);
  // The relief is the same drawing at half the size: it only has to roughen the light.
  const bump = draw(size / 2, size, true);
  scope.postMessage({ map, bump }, [map, bump]);
};
