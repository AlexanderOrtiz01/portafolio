import { useCallback, useEffect, useMemo, useState, type FormEvent } from 'react';

type Visit = {
  id?: string;
  ts?: string;
  ip?: string;
  ua?: string;
  path?: string;
  referrer?: string;
  lang?: string;
  screen?: string;
  tz?: string;
  country?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  latitude?: string;
  longitude?: string;
  timezone?: string;
  asOrganization?: string;
  colo?: string;
};

const BASE = (import.meta.env.VITE_TRACKER_URL ?? '').replace(/\/+$/, '');
const TOKEN_KEY = 'ev-admin-token';
const SKIP_KEY = 'ev-admin-skip';
const PAGE = 100;

function readSession(): string {
  try {
    return sessionStorage.getItem(TOKEN_KEY) ?? '';
  } catch {
    return '';
  }
}
function writeSession(v: string | null) {
  try {
    if (v) sessionStorage.setItem(TOKEN_KEY, v);
    else sessionStorage.removeItem(TOKEN_KEY);
  } catch {
    /* ignore */
  }
}
function readSkip(): boolean {
  try {
    return localStorage.getItem(SKIP_KEY) === '1';
  } catch {
    return false;
  }
}

function parseUa(ua = ''): string {
  if (!ua) return '';
  let browser = 'Otro';
  if (/bot|crawl|spider|slurp|preview/i.test(ua)) browser = 'Bot';
  else if (/Edg\//.test(ua)) browser = 'Edge';
  else if (/OPR\/|Opera/.test(ua)) browser = 'Opera';
  else if (/SamsungBrowser/.test(ua)) browser = 'Samsung';
  else if (/Firefox\/|FxiOS/.test(ua)) browser = 'Firefox';
  else if (/Chrome\/|CriOS/.test(ua)) browser = 'Chrome';
  else if (/Safari\//.test(ua)) browser = 'Safari';
  let os = '';
  if (/iPhone|iPad|iPod/.test(ua)) os = 'iOS';
  else if (/Android/.test(ua)) os = 'Android';
  else if (/Windows/.test(ua)) os = 'Windows';
  else if (/Mac OS X|Macintosh/.test(ua)) os = 'macOS';
  else if (/CrOS/.test(ua)) os = 'ChromeOS';
  else if (/Linux/.test(ua)) os = 'Linux';
  return os ? `${browser} · ${os}` : browser;
}

function location(v: Visit): string {
  return [v.city, v.region, v.country].filter(Boolean).join(', ');
}
function dateOf(v: Visit): Date | null {
  if (!v.ts) return null;
  const d = new Date(v.ts);
  return isNaN(d.getTime()) ? null : d;
}
function csvCell(s: unknown): string {
  const t = s == null ? '' : String(s);
  return /[",\n\r]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t;
}

const FIELDS: (keyof Visit)[] = [
  'id', 'ts', 'ip', 'ua', 'path', 'referrer', 'lang', 'screen', 'tz', 'country', 'city', 'region',
  'postalCode', 'latitude', 'longitude', 'timezone', 'asOrganization', 'colo',
];

export default function Admin() {
  const [token, setToken] = useState(readSession);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [visits, setVisits] = useState<Visit[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState<string | null>(null);
  const [skip, setSkip] = useState(readSkip);

  const load = useCallback(
    async (tok: string, cur: string | null) => {
      setLoading(true);
      setError('');
      try {
        const params = new URLSearchParams({ limit: String(PAGE) });
        if (cur) params.set('cursor', cur);
        const res = await fetch(`${BASE}/visits?${params}`, { headers: { Authorization: `Bearer ${tok}` } });
        if (res.status === 401) {
          writeSession(null);
          setToken('');
          setVisits([]);
          setCursor(null);
          setError('Token inválido');
          return;
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as { visits?: Visit[]; cursor?: string | null };
        setVisits((prev) => (cur ? [...prev, ...(data.visits ?? [])] : data.visits ?? []));
        setCursor(data.cursor ?? null);
      } catch (e) {
        setError(`No se pudieron cargar las visitas (${e instanceof Error ? e.message : 'error'})`);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    if (BASE && token) load(token, null);
  }, [token, load]);

  const sorted = useMemo(
    () => [...visits].sort((a, b) => (dateOf(b)?.getTime() ?? 0) - (dateOf(a)?.getTime() ?? 0)),
    [visits],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sorted;
    return sorted.filter((v) =>
      Object.values(v).some((x) => x != null && String(x).toLowerCase().includes(q)) ||
      parseUa(v.ua).toLowerCase().includes(q),
    );
  }, [sorted, query]);

  const stats = useMemo(() => {
    const ips = new Set(visits.map((v) => v.ip).filter(Boolean));
    const today = new Date().toDateString();
    const todayCount = visits.filter((v) => dateOf(v)?.toDateString() === today).length;
    const counts = new Map<string, number>();
    for (const v of visits) {
      const c = v.country || '—';
      counts.set(c, (counts.get(c) ?? 0) + 1);
    }
    const top = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
    return { total: visits.length, unique: ips.size, today: todayCount, top };
  }, [visits]);

  const login = (e: FormEvent) => {
    e.preventDefault();
    const t = input.trim();
    if (!t) return;
    writeSession(t);
    setToken(t);
    setInput('');
  };

  const logout = () => {
    writeSession(null);
    setToken('');
    setVisits([]);
    setCursor(null);
    setError('');
  };

  const toggleSkip = () => {
    const next = !skip;
    try {
      if (next) localStorage.setItem(SKIP_KEY, '1');
      else localStorage.removeItem(SKIP_KEY);
    } catch {
      /* ignore */
    }
    setSkip(next);
  };

  const exportCsv = () => {
    const rows = [FIELDS.join(','), ...filtered.map((v) => FIELDS.map((f) => csvCell(v[f])).join(','))];
    const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `visitas-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };

  if (!BASE) {
    return (
      <main className="adm adm-center">
        <p className="adm-msg">Configura VITE_TRACKER_URL</p>
      </main>
    );
  }

  if (!token) {
    return (
      <main className="adm adm-center">
        <form className="adm-login" onSubmit={login}>
          <h1>Visitas</h1>
          <label htmlFor="adm-token">Token de acceso</label>
          <input
            id="adm-token"
            type="password"
            autoComplete="current-password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
          <button type="submit">Entrar</button>
          {error && <p className="adm-error">{error}</p>}
        </form>
      </main>
    );
  }

  return (
    <main className="adm">
      <header className="adm-head">
        <h1>Visitas</h1>
        <div className="adm-actions">
          <button type="button" onClick={exportCsv} disabled={!filtered.length}>Exportar CSV</button>
          <button type="button" onClick={toggleSkip} aria-pressed={skip}>
            {skip ? 'Navegador excluido ✓' : 'Excluir este navegador'}
          </button>
          <button type="button" onClick={logout}>Cerrar sesión</button>
        </div>
      </header>

      <section className="adm-stats">
        <div><span>Total</span><strong>{stats.total}</strong></div>
        <div><span>IPs únicas</span><strong>{stats.unique}</strong></div>
        <div><span>Hoy</span><strong>{stats.today}</strong></div>
        <div className="adm-top">
          <span>Países principales</span>
          <ul>
            {stats.top.length ? stats.top.map(([c, n]) => <li key={c}>{c} <b>{n}</b></li>) : <li>—</li>}
          </ul>
        </div>
      </section>

      <input
        className="adm-search"
        type="search"
        placeholder="Buscar en cualquier campo…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {error && <p className="adm-error">{error}</p>}

      <div className="adm-table-wrap">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Fecha</th><th>Hora</th><th>IP</th><th>Ubicación</th><th>Proveedor</th>
              <th>Dispositivo</th><th>Pantalla</th><th>Idioma</th><th>Página</th><th>Referencia</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((v, i) => {
              const key = v.id ?? `${v.ts}-${i}`;
              const d = dateOf(v);
              const isOpen = open === key;
              return [
                <tr
                  key={key}
                  className={isOpen ? 'is-open' : undefined}
                  onClick={() => setOpen(isOpen ? null : key)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setOpen(isOpen ? null : key);
                    }
                  }}
                >
                  <td>{d ? d.toLocaleDateString() : ''}</td>
                  <td>{d ? d.toLocaleTimeString() : ''}</td>
                  <td className="mono">{v.ip}</td>
                  <td>{location(v)}</td>
                  <td>{v.asOrganization}</td>
                  <td title={v.ua}>{parseUa(v.ua)}</td>
                  <td>{v.screen}</td>
                  <td>{v.lang}</td>
                  <td className="mono">{v.path}</td>
                  <td className="trunc" title={v.referrer}>{v.referrer}</td>
                </tr>,
                isOpen && (
                  <tr key={`${key}-x`} className="adm-detail">
                    <td colSpan={10}><pre>{JSON.stringify(v, null, 2)}</pre></td>
                  </tr>
                ),
              ];
            })}
            {!filtered.length && !loading && (
              <tr><td colSpan={10} className="adm-empty">Sin visitas</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="adm-foot">
        {loading && <span>Cargando…</span>}
        {cursor && !loading && (
          <button type="button" onClick={() => load(token, cursor)}>Cargar más</button>
        )}
      </div>
    </main>
  );
}
