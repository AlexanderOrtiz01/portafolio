import { useEffect, useMemo, useRef, useState, type MutableRefObject } from 'react';
import type { Content } from './i18n';
import { grain } from './scene/desk';
import { PageSet, SHEETS } from './scene/pages';
import type { StageState } from './scene/Stage';

export interface BookControls {
  open(): void;
  close(): void;
  next(): void;
  prev(): void;
  goto(spread: number): void;
}

type Side = 'L' | 'R';

/** The lacquered oak, drawn once and used as the desk's background. */
function woodUrl() {
  const c = document.createElement('canvas');
  c.width = c.height = 1024;
  grain(c.getContext('2d')!, 1024, false);
  return c.toDataURL('image/jpeg', 0.82);
}

/**
 * The same book built from CSS 3D transforms instead of WebGL, for browsers whose graphics card is
 * off. The cover swings open, pages turn on their spine, the view leans toward the cursor, and the
 * films still play on hover. It only needs the browser's compositor, which runs without a GPU.
 */
export function FlatBook({
  content,
  onState,
  controls,
}: {
  content: Content;
  onState: (s: StageState) => void;
  controls: MutableRefObject<BookControls | null>;
}) {
  const [open, setOpen] = useState(false);
  const [spread, setSpread] = useState(0);
  const [side, setSide] = useState<Side>('R');
  const [single, setSingle] = useState(() => window.innerWidth < window.innerHeight);
  const pagesRef = useRef<PageSet | null>(null);
  const pages = (pagesRef.current ??= new PageSet(1));
  const sceneRef = useRef<HTMLDivElement>(null);
  const slots = useRef<(HTMLDivElement | null)[]>([]);
  const prevSpread = useRef(0);
  const wood = useMemo(woodUrl, []);

  const api: BookControls = {
    open: () => {
      setSide('R');
      setOpen(true);
    },
    close: () => {
      setOpen(false);
      setSpread(0);
    },
    next: () => {
      if (!open) return api.open();
      if (single && side === 'L') return setSide('R');
      if (spread >= SHEETS) return;
      setSide('L');
      setSpread(spread + 1);
    },
    prev: () => {
      if (!open) return;
      if (single && side === 'R' && spread > 0) return setSide('L');
      if (spread === 0) return api.close();
      setSide('R');
      setSpread(spread - 1);
    },
    goto: (n) => {
      setOpen(true);
      setSpread(Math.min(Math.max(n, 0), SHEETS));
      setSide(n === 0 ? 'R' : 'L');
    },
  };
  controls.current = api;

  useEffect(() => {
    pages.setContent(content);
  }, [pages, content]);

  // Each canvas lives in exactly one face of the book: slot 0 is the cover, 1 the front endpaper,
  // 2 the back endpaper, and 3 + n page n.
  useEffect(() => {
    const canvases = [pages.coverCanvas, pages.frontCanvas, pages.backCanvas];
    for (let i = 0; i < SHEETS * 2; i++) canvases.push(pages.canvas(i));
    canvases.forEach((c, i) => {
      const slot = slots.current[i];
      if (slot && slot.firstChild !== c) slot.replaceChildren(c);
    });
  }, [pages]);

  useEffect(() => {
    const noHover = window.matchMedia('(hover: none)').matches;
    pages.hover(noHover && open && spread < SHEETS ? spread * 2 : -1);
    const atEnd = spread >= SHEETS && (!single || side === 'R');
    onState({ open, spread, spreads: SHEETS + 1, canNext: !atEnd });
  }, [pages, onState, open, spread, side, single]);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      pages.update(Math.min((now - last) / 1000, 0.05));
      last = now;
    };
    raf = requestAnimationFrame(tick);
    const onResize = () => setSingle(window.innerWidth < window.innerHeight);
    const onKey = (ev: KeyboardEvent) => {
      if (ev.metaKey || ev.ctrlKey || ev.altKey) return;
      const c = controls.current;
      if (ev.key === 'ArrowRight' || ev.key === 'PageDown') c?.next();
      else if (ev.key === 'ArrowLeft' || ev.key === 'PageUp') c?.prev();
      else if (ev.key === 'Escape') c?.close();
      else if (ev.key === 'Home') c?.goto(0);
      else if (ev.key === 'End') c?.goto(SHEETS);
      else if (ev.key === 'Enter' && !(ev.target instanceof HTMLButtonElement)) c?.open();
      else return;
      ev.preventDefault();
    };
    // The view leans toward the cursor, written straight to CSS variables to skip re-rendering.
    const onMove = (ev: PointerEvent) => {
      const el = sceneRef.current;
      if (!el || ev.pointerType !== 'mouse') return;
      el.style.setProperty('--lx', ((ev.clientX / window.innerWidth) * 2 - 1).toFixed(3));
      el.style.setProperty('--ly', ((ev.clientY / window.innerHeight) * 2 - 1).toFixed(3));
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointermove', onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointermove', onMove);
      pages.dispose();
    };
  }, [pages, controls]);

  // When several leaves move at once they go one after another, in the direction of travel.
  const from = prevSpread.current;
  useEffect(() => {
    prevSpread.current = spread;
  }, [spread]);
  const forward = spread >= from;

  const at = (ev: React.MouseEvent<HTMLElement>) => {
    const r = ev.currentTarget.getBoundingClientRect();
    return [(ev.clientX - r.left) / r.width, (ev.clientY - r.top) / r.height] as const;
  };

  /** One face showing page `id`: it plays its film on hover and follows its links on click. */
  const face = (id: number, back: boolean) => (
    <div
      className={back ? 'fb-face fb-back' : 'fb-face'}
      ref={(el) => (slots.current[3 + id] = el)}
      onPointerMove={(ev) => ev.pointerType === 'mouse' && pages.hover(id, ...at(ev))}
      onPointerLeave={(ev) => ev.pointerType === 'mouse' && pages.hover(-1)}
      onClick={(ev) => {
        ev.stopPropagation();
        const [u, v] = at(ev);
        const action = pages.actionAt(id, u, v);
        if (action?.type === 'goto') api.goto(action.spread);
        else if (action?.type === 'link') {
          if (action.href.startsWith('mailto:')) window.location.href = action.href;
          else window.open(action.href, '_blank', 'noopener');
        } else if (single ? u >= 0.5 : !back) api.next();
        else api.prev();
      }}
    />
  );

  return (
    <div className="fb" style={{ backgroundImage: `url(${wood})` }}>
      <div className="fb-light" />
      <div className="fb-scene" ref={sceneRef} data-open={open} data-single={single} data-side={side}>
        <div className="fb-book">
          <div className="fb-board fb-base" ref={(el) => (slots.current[2] = el)} onClick={() => api.next()} />
          <div
            className="fb-leaf fb-cover"
            data-turned={open}
            style={{ zIndex: open ? 0 : SHEETS * 2 + 2 }}
            onClick={(ev) => {
              ev.stopPropagation();
              if (open) api.prev();
              else api.open();
            }}
          >
            <div className="fb-face fb-board" ref={(el) => (slots.current[0] = el)} />
            <div className="fb-face fb-back fb-board" ref={(el) => (slots.current[1] = el)} />
          </div>
          {Array.from({ length: SHEETS }, (_, i) => {
            const turned = open && i < spread;
            const lo = Math.min(from, spread);
            const order = forward ? i - lo : Math.max(from, spread) - 1 - i;
            const delay = i >= lo && i < Math.max(from, spread) ? Math.max(0, order) * 0.09 : 0;
            return (
              <div
                key={i}
                className="fb-leaf"
                data-turned={turned}
                style={{
                  zIndex: turned ? i + 1 : SHEETS * 2 - i,
                  transitionDelay: `${delay}s, ${delay + 0.42}s`,
                }}
              >
                {face(i * 2, false)}
                {face(i * 2 + 1, true)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
