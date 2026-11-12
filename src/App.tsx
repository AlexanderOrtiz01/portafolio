import { useEffect, useRef, useState } from 'react';
import { CONTENT, EMAIL, LINKEDIN, detectLang, tocEntries, type Lang } from './i18n';
import { Stage, type StageState } from './scene/Stage';
import { loadAssets } from './scene/pages';

const pad2 = (n: number) => String(n).padStart(2, '0');

export default function App() {
  const [lang, setLang] = useState<Lang>(detectLang);
  const [state, setState] = useState<StageState>({ open: false, spread: 0, spreads: 10, canNext: true });
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<Stage | null>(null);
  const langRef = useRef(lang);
  const c = CONTENT[lang];

  useEffect(() => {
    let cancelled = false;
    loadAssets().then(() => {
      if (cancelled || !hostRef.current) return;
      try {
        const stage = new Stage(hostRef.current, CONTENT[langRef.current], setState);
        stageRef.current = stage;
        setReady(true);
        // `?p=3` opens the book straight at that spread.
        const p = Number(new URLSearchParams(location.search).get('p'));
        if (Number.isInteger(p) && p >= 1) stage.goto(p - 1);
      } catch (err) {
        console.error(err);
        setFailed(true);
      }
    });
    return () => {
      cancelled = true;
      stageRef.current?.dispose();
      stageRef.current = null;
    };
  }, []);

  useEffect(() => {
    langRef.current = lang;
    document.documentElement.lang = lang;
    document.title = `Edwin Villalta | ${c.cover.title}`;
    stageRef.current?.setContent(c);
  }, [lang, c]);

  const stage = stageRef.current;
  const { open, spread, spreads, canNext } = state;

  return (
    <div className="app" data-open={open} data-ready={ready} ref={hostRef}>
      <div className="vignette" aria-hidden="true" />

      <header className="nav">
        <div className="brand">
          <span className="brand-name">Edwin Villalta</span>
          <span className="brand-role">{c.ui.role}</span>
        </div>
        <nav className="links" aria-label="Links">
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${EMAIL}`}>{c.ui.email}</a>
          <div className="lang" role="group" aria-label={c.ui.langLabel}>
            {(['es', 'en'] as const).map((l) => (
              <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <section className="hero" aria-hidden={open}>
        <p className="kicker">{c.ui.kicker}</p>
        <h1>
          {c.ui.headline[0]}
          <br />
          {c.ui.headline[1]}
        </h1>
        <p className="lede">{c.ui.lede}</p>
        <button type="button" className="cta" tabIndex={open ? -1 : 0} onClick={() => stage?.open()}>
          {c.ui.open}
          <span aria-hidden="true">→</span>
        </button>
      </section>

      <p className="hint hint-closed" aria-hidden="true">
        {c.ui.hintClosed}
      </p>

      <footer className="bar" aria-hidden={!open}>
        <button type="button" className="ghost" tabIndex={open ? 0 : -1} onClick={() => stage?.close()}>
          <span aria-hidden="true">×</span> {c.ui.close}
        </button>
        <p className="hint">{c.ui.hintOpen}</p>
        <div className="pager">
          <button type="button" tabIndex={open ? 0 : -1} aria-label={c.ui.prev} onClick={() => stage?.prev()}>
            ←
          </button>
          <span className="count">
            {pad2(spread + 1)} <i>/</i> {pad2(spreads)}
          </span>
          <button
            type="button"
            tabIndex={open ? 0 : -1}
            aria-label={c.ui.next}
            disabled={!canNext}
            onClick={() => stage?.next()}
          >
            →
          </button>
        </div>
      </footer>

      {failed && (
        <div className="fallback" role="alert">
          <p>{c.ui.noWebgl}</p>
          <button type="button" className="ghost" onClick={() => location.reload()}>
            {c.ui.retry}
          </button>
        </div>
      )}

      {/* The book lives in a canvas; this is the same content for assistive technology. */}
      <article className="sr-only">
        <h2>{c.profile.title}</h2>
        <p>{c.profile.sub}</p>
        <p>{c.profile.body}</p>
        <nav aria-label={c.ui.contents}>
          <ol>
            {tocEntries(c).map((e) => (
              <li key={e.spread}>
                <button type="button" onClick={() => stage?.goto(e.spread)}>
                  {e.name} — {e.kind}
                </button>
              </li>
            ))}
          </ol>
        </nav>
        {c.cases.map((k) => (
          <section key={k.name}>
            <h3>{k.title}</h3>
            <p>{k.sub}</p>
            <p>{k.body}</p>
            <ul>
              {k.items.map((it) => (
                <li key={it.text}>
                  {it.head ? `${it.head}${it.meta ? ` (${it.meta})` : ''}: ` : ''}
                  {it.text}
                </li>
              ))}
            </ul>
            <p>{k.stack.join(', ')}</p>
          </section>
        ))}
        <section>
          <h3>{c.skills.title}</h3>
          <ul>
            {c.skills.groups.map((g) => (
              <li key={g.head}>
                {g.head}: {g.text}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3>{c.education.title}</h3>
          <ul>
            {[...c.education.studies, ...c.education.certs, ...c.education.langs].map((it) => (
              <li key={it.text + (it.head ?? '')}>{[it.head, it.text, it.meta].filter(Boolean).join(' — ')}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>{c.contact.title}</h3>
          <p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a> · <a href={LINKEDIN}>LinkedIn</a> · {c.contact.location}
          </p>
        </section>
      </article>
    </div>
  );
}
