import { useEffect, useRef, useState, type MutableRefObject, type PointerEvent } from 'react';
import type { Content } from './i18n';
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

/**
 * The same book without 3D, for browsers that cannot start the graphics card: the page canvases
 * are simply laid side by side. Contents links, films on hover and the keyboard all still work.
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
  const coverRef = useRef<HTMLButtonElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const pages = (pagesRef.current ??= new PageSet(1));

  /** Page id shown on one side, or -1 when that side shows the inside of a cover. */
  const pageId = (s: Side) => {
    const id = s === 'L' ? spread * 2 - 1 : spread * 2;
    return id >= 0 && id < SHEETS * 2 ? id : -1;
  };

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

  // The canvases belong to the page set; here they are only moved into place.
  useEffect(() => {
    const put = (slot: HTMLElement | null, canvas: HTMLCanvasElement) => {
      if (slot && slot.firstChild !== canvas) slot.replaceChildren(canvas);
    };
    put(coverRef.current, pages.coverCanvas);
    put(leftRef.current, spread > 0 ? pages.canvas(spread * 2 - 1) : pages.frontCanvas);
    put(rightRef.current, spread < SHEETS ? pages.canvas(spread * 2) : pages.backCanvas);
    // Without a cursor there is no hover: the film on show simply plays.
    const noHover = window.matchMedia('(hover: none)').matches;
    pages.hover(noHover && open && spread < SHEETS ? spread * 2 : -1);
  }, [pages, open, spread]);

  useEffect(() => {
    const atEnd = spread >= SHEETS && (!single || side === 'R');
    onState({ open, spread, spreads: SHEETS + 1, canNext: !atEnd });
  }, [onState, open, spread, side, single]);

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
      else return;
      ev.preventDefault();
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKey);
      pages.dispose();
    };
  }, [pages, controls]);

  /** Where on the page the pointer is, as fractions from its top-left corner. */
  const at = (ev: PointerEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    const r = ev.currentTarget.getBoundingClientRect();
    return [(ev.clientX - r.left) / r.width, (ev.clientY - r.top) / r.height] as const;
  };

  const page = (s: Side, ref: typeof leftRef) => (
    <div
      className="flat-page"
      ref={ref}
      onPointerMove={(ev) => {
        if (ev.pointerType === 'mouse') pages.hover(pageId(s), ...at(ev));
      }}
      onPointerLeave={(ev) => {
        if (ev.pointerType === 'mouse') pages.hover(-1);
      }}
      onClick={(ev) => {
        const id = pageId(s);
        const [u, v] = at(ev);
        const action = id >= 0 ? pages.actionAt(id, u, v) : null;
        if (action?.type === 'goto') api.goto(action.spread);
        else if (action?.type === 'link') {
          if (action.href.startsWith('mailto:')) window.location.href = action.href;
          else window.open(action.href, '_blank', 'noopener');
        } else if (single ? u >= 0.5 : s === 'R') api.next();
        else api.prev();
      }}
    />
  );

  return (
    <div className="flat" data-open={open} data-single={single} data-side={side}>
      <button type="button" className="flat-cover" ref={coverRef} aria-label={content.ui.open} onClick={api.open} />
      <div className="flat-spread" key={`${spread}${single ? side : ''}`}>
        {page('L', leftRef)}
        {page('R', rightRef)}
      </div>
    </div>
  );
}
