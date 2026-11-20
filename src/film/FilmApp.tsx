/**
 * The scroll film: one module built in code owns the screen, the scrollbar is the timeline,
 * and real HTML copy scrolls over it. The engine reads the `data-cue` sections below on its own.
 */
import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { CONTENT, EMAIL, LINKEDIN, LINKEDIN_LABEL, detectLang, type CaseText, type Item, type Lang } from '../i18n';
import { Engine } from './Engine';

const LOGOS = import.meta.glob('../assets/logos/*.{png,svg,webp,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function logoUrl(name: string): string | undefined {
  const hit = Object.keys(LOGOS).find((k) => k.split('/').pop()!.replace(/\.\w+$/, '') === name);
  return hit ? LOGOS[hit] : undefined;
}

const UI: Record<Lang, { scroll: string; classic: string; beats: string[]; drag: string; credit: string }> = {
  es: {
    scroll: 'Desliza para empezar',
    classic: 'Ver como libro',
    beats: ['Inicio', 'Perfil', 'Proyectos', 'Habilidades', 'Formación', 'Contacto'],
    drag: 'Arrastra para girar la pieza',
    credit: 'Pieza 3D construida en código con three.js. Sin modelos de terceros.',
  },
  en: {
    scroll: 'Scroll to begin',
    classic: 'View as a book',
    beats: ['Home', 'Profile', 'Projects', 'Skills', 'Education', 'Contact'],
    drag: 'Drag to turn the piece',
    credit: '3D piece built in code with three.js. No third-party models.',
  },
};

const pad2 = (n: number) => String(n).padStart(2, '0');

function Logos({ logo }: { logo?: string | string[] }) {
  const list = (Array.isArray(logo) ? logo : logo ? [logo] : []).map(logoUrl).filter(Boolean) as string[];
  if (!list.length) return null;
  return (
    <div className="logos">
      {list.map((src) => (
        <img key={src} src={src} alt="" loading="lazy" />
      ))}
    </div>
  );
}

function ItemList({ items }: { items: Item[] }) {
  if (!items.length) return null;
  return (
    <ul className="items">
      {items.map((it) => (
        <li key={it.text}>
          {it.head && (
            <span className="item-head">
              {it.logo && logoUrl(it.logo) && <img src={logoUrl(it.logo)} alt="" />}
              {it.head}
              {it.meta && <em>{it.meta}</em>}
            </span>
          )}
          {it.text}
        </li>
      ))}
    </ul>
  );
}

function Case({ k, n, total }: { k: CaseText; n: number; total: number }) {
  return (
    <section className="beat beat-case" data-cue="case">
      <div className="copy plate">
        <p className="eyebrow">
          <span>
            {pad2(n)} / {pad2(total)}
          </span>
          <span>{k.kicker}</span>
          <span>{k.when}</span>
        </p>
        <Logos logo={k.logo} />
        <h2>{k.title}</h2>
        <p className="sub">{k.sub}</p>
        <p className="body">{k.body}</p>
        <ItemList items={k.items} />
        {k.stack.length > 0 && (
          <ul className="chips" aria-label="Stack">
            {k.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default function FilmApp() {
  const [lang, setLang] = useState<Lang>(detectLang);
  const [mode, setMode] = useState<'loading' | 'ready' | 'still'>('loading');
  const [beat, setBeat] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const callouts = useRef<HTMLElement[]>([]);
  const engine = useRef<Engine | null>(null);
  const c = CONTENT[lang];
  const ui = UI[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = `Edwin Villalta | ${c.cover.title}`;
  }, [lang, c]);

  // The 3D module: a still poster shows until the first real frame, and stays if WebGL fails.
  useEffect(() => {
    if (!stageRef.current) return;
    let e: Engine | null = null;
    try {
      e = new Engine(stageRef.current, {
        onReady: () => setMode((m) => (m === 'still' ? m : 'ready')),
        onFail: () => {
          setMode('still');
          engine.current?.dispose();
          engine.current = null;
        },
      });
      engine.current = e;
      e.setCallouts(callouts.current.filter(Boolean));
    } catch {
      setMode('still');
    }
    return () => {
      e?.dispose();
      engine.current = null;
    };
  }, []);

  // Smooth wheel scrolling on desktop only; touch keeps native scrolling.
  useEffect(() => {
    const fine = matchMedia('(pointer: fine)').matches;
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || calm) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  // The timeline at the bottom follows the scroll; only the active chapter goes through React.
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const tick = () => {
      const max = Math.max(1, root.scrollHeight - innerHeight);
      const p = Math.min(1, Math.max(0, scrollY / max));
      root.style.setProperty('--progress', p.toFixed(4));
      const mid = innerHeight / 2;
      let active = 0;
      document.querySelectorAll<HTMLElement>('[data-chapter]').forEach((el) => {
        if (el.getBoundingClientRect().top <= mid) active = Number(el.dataset.chapter);
      });
      setBeat((b) => (b === active ? b : active));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const jump = (chapter: number) => {
    const el = document.querySelector(`[data-chapter="${chapter}"]`);
    el?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  const classicHref = `?style=classic${lang ? `&lang=${lang}` : ''}`;

  return (
    <div className="film" data-mode={mode}>
      <div className="stage" ref={stageRef} aria-hidden="true">
        <div className="poster" />
      </div>
      <div className="scrim" aria-hidden="true" />

      {/* Labels pinned to each layer of the module during the teardown; the engine places them. */}
      <div className="callouts" aria-hidden="true">
        {c.skills.groups.map((g, i) => (
          <span
            key={i}
            className="callout"
            ref={(el) => {
              if (el) callouts.current[i] = el;
            }}
          >
            <i>{pad2(i + 1)}</i>
            {g.head}
          </span>
        ))}
      </div>

      <header className="nav">
        <a className="brand" href="#top" onClick={(ev) => (ev.preventDefault(), jump(0))}>
          <span className="brand-name">Edwin Villalta</span>
          <span className="brand-role">{c.ui.role}</span>
        </a>
        <nav className="links" aria-label="Links">
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${EMAIL}`}>{c.ui.email}</a>
          <a className="switch" href={classicHref}>
            {ui.classic}
          </a>
          <div className="lang" role="group" aria-label={c.ui.langLabel}>
            {(['es', 'en'] as const).map((l) => (
              <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="beat beat-hero" data-cue="hero" data-chapter="0">
          <div className="copy">
            <p className="eyebrow">
              <span>{c.ui.kicker}</span>
              <span>{c.ui.location}</span>
            </p>
            <h1>
              {c.ui.headline[0]}
              <br />
              <span className="accent">{c.ui.headline[1]}</span>
            </h1>
            <p className="lede">{c.ui.lede.replace(/ Abre el libro.*$| Open the book.*$/, '')}</p>
          </div>
          <p className="scroll-cue" aria-hidden="true">
            <span />
            {ui.scroll}
          </p>
        </section>

        <section className="beat beat-macro" data-cue="macro" data-chapter="1">
          <div className="copy plate">
            <p className="eyebrow">
              <span>{c.profile.kicker}</span>
              <span>{c.profile.when}</span>
            </p>
            <h2>{c.profile.title}</h2>
            <p className="sub">{c.profile.sub}</p>
            <p className="body">{c.profile.body}</p>
            <dl className="facts">
              {c.profile.facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div data-chapter="2">
          {c.cases.map((k, i) => (
            <Case key={k.name} k={k} n={i + 1} total={c.cases.length} />
          ))}
        </div>

        <section className="beat beat-teardown" data-cue="teardown" data-chapter="3">
          <div className="copy plate">
            <p className="eyebrow">
              <span>{c.skills.kicker}</span>
            </p>
            <h2>{c.skills.title}</h2>
            <ol className="groups">
              {c.skills.groups.map((g, i) => (
                <li key={g.head}>
                  <span className="num">{pad2(i + 1)}</span>
                  <strong>{g.head}</strong>
                  <span>{g.text}</span>
                </li>
              ))}
            </ol>
            <p className="hint">{ui.drag}</p>
          </div>
        </section>

        <section className="beat beat-orbit" data-cue="orbit" data-chapter="4">
          <div className="copy plate">
            <p className="eyebrow">
              <span>{c.education.kicker}</span>
            </p>
            <h2>{c.education.title}</h2>
            <ItemList items={c.education.studies.map((s) => ({ ...s, text: s.text }))} />
            <h3>{c.education.certsLabel}</h3>
            <ul className="items">
              {c.education.certs.map((it) => (
                <li key={it.text}>
                  <span className="item-head">
                    <em>{it.meta}</em>
                  </span>
                  {it.text}
                </li>
              ))}
            </ul>
            <h3>{c.education.langsLabel}</h3>
            <dl className="facts">
              {c.education.langs.map((it) => (
                <div key={it.head}>
                  <dt>{it.head}</dt>
                  <dd>{it.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="beat beat-home" data-cue="home" data-chapter="5">
          <div className="copy contact">
            <p className="eyebrow">
              <span>{c.contact.kicker}</span>
            </p>
            <h2 className="ask">
              {c.back.thanks[0]}
              <br />
              <span className="accent">{c.back.thanks[1]}</span>
            </h2>
            <p className="body">{c.contact.body}</p>
            <div className="contact-links">
              <a className="cta" href={`mailto:${EMAIL}`}>
                {c.back.sign}
                <span aria-hidden="true">→</span>
              </a>
              <a className="ghost" href={LINKEDIN} target="_blank" rel="noreferrer">
                {LINKEDIN_LABEL}
              </a>
            </div>
            <dl className="facts">
              <div>
                <dt>{c.contact.emailLabel}</dt>
                <dd>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </dd>
              </div>
              <div>
                <dt>{c.contact.locationLabel}</dt>
                <dd>{c.contact.location}</dd>
              </div>
            </dl>
          </div>
          <footer className="credits">
            <span>© {c.cover.year} Edwin Villalta</span>
            <span>{ui.credit}</span>
            <a href={classicHref}>{ui.classic}</a>
          </footer>
        </section>
      </main>

      <nav className="timeline" aria-label={c.ui.contents}>
        <div className="track">
          <div className="fill" />
        </div>
        <ol>
          {ui.beats.map((b, i) => (
            <li key={b}>
              <button type="button" aria-current={beat === i ? 'step' : undefined} onClick={() => jump(i)}>
                <i>{pad2(i + 1)}</i>
                <span>{b}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
