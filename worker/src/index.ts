export interface Env {
  VISITS: KVNamespace;
  ALLOWED_ORIGIN: string;
  ADMIN_TOKEN?: string;
}

export interface Visit {
  id: string;
  ts: string;
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
}

const MAX_BODY = 4096;
const MAX_FIELD = 300;
const MAX_METADATA = 1024;
const TTL_SECONDS = 90 * 24 * 60 * 60;
const BOT_RE = /bot|crawl|spider|preview|headless/i;
const DEV_ORIGINS = ['http://127.0.0.1:5173', 'http://localhost:5173'];
const CLIENT_FIELDS = ['path', 'referrer', 'lang', 'screen', 'tz'] as const;
const CF_FIELDS = [
  'country',
  'city',
  'region',
  'postalCode',
  'latitude',
  'longitude',
  'timezone',
  'asOrganization',
  'colo',
] as const;

function clip(value: unknown): string | undefined {
  if (value === undefined || value === null) return undefined;
  const s = typeof value === 'string' ? value : String(value);
  return s.slice(0, MAX_FIELD);
}

function allowedOrigins(env: Env): string[] {
  return [env.ALLOWED_ORIGIN, ...DEV_ORIGINS];
}

function corsFor(request: Request, env: Env): Record<string, string> {
  const origin = request.headers.get('Origin');
  const headers: Record<string, string> = { Vary: 'Origin' };
  if (origin && allowedOrigins(env).includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

function json(body: unknown, status: number, headers: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...headers,
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

async function sha256(text: string): Promise<Uint8Array> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return new Uint8Array(digest);
}

async function isAuthorized(request: Request, env: Env): Promise<boolean> {
  const expected = env.ADMIN_TOKEN;
  if (!expected) return false;
  const header = request.headers.get('Authorization') ?? '';
  const match = /^Bearer\s+(.+)$/i.exec(header);
  const given = match ? match[1].trim() : '';
  const [a, b] = await Promise.all([sha256(given), sha256(expected)]);
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0 && given.length > 0;
}

function buildMetadata(visit: Visit): Visit | undefined {
  const enc = new TextEncoder();
  if (enc.encode(JSON.stringify(visit)).length <= MAX_METADATA) return visit;
  const { ua: _ua, referrer: _ref, ...slim } = visit;
  if (enc.encode(JSON.stringify(slim)).length <= MAX_METADATA) return slim as Visit;
  return undefined; // too large even without ua/referrer; list falls back to get()
}

async function handleTrack(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  const headers = { 'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN };
  const ua = request.headers.get('User-Agent') ?? '';
  if (BOT_RE.test(ua)) return new Response(null, { status: 204, headers });

  const declared = Number(request.headers.get('Content-Length') ?? '0');
  if (declared > MAX_BODY) return new Response(null, { status: 204, headers });
  const raw = await request.text();
  if (new TextEncoder().encode(raw).length > MAX_BODY) {
    return new Response(null, { status: 204, headers });
  }

  let body: Record<string, unknown> = {};
  try {
    const parsed: unknown = raw ? JSON.parse(raw) : {};
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      body = parsed as Record<string, unknown>;
    }
  } catch {
    body = {};
  }

  const id = crypto.randomUUID();
  const visit: Visit = { id, ts: new Date().toISOString() };
  for (const f of CLIENT_FIELDS) {
    const v = clip(body[f]);
    if (v !== undefined) visit[f] = v;
  }
  const ip = request.headers.get('CF-Connecting-IP');
  if (ip) visit.ip = ip;
  if (ua) visit.ua = clip(ua);

  const cf = (request.cf ?? {}) as Record<string, unknown>;
  for (const f of CF_FIELDS) {
    const v = clip(cf[f]);
    if (v !== undefined) visit[f] = v;
  }

  const key = `v:${(9999999999999 - Date.now()).toString().padStart(13, '0')}:${id}`;
  const metadata = buildMetadata(visit);
  ctx.waitUntil(
    env.VISITS.put(key, JSON.stringify(visit), {
      expirationTtl: TTL_SECONDS,
      ...(metadata ? { metadata } : {}),
    }),
  );

  return new Response(null, { status: 204, headers });
}

async function handleVisits(request: Request, env: Env, url: URL): Promise<Response> {
  const cors = corsFor(request, env);
  if (!(await isAuthorized(request, env))) {
    return json({ error: 'unauthorized' }, 401, cors);
  }

  const rawLimit = Number.parseInt(url.searchParams.get('limit') ?? '', 10);
  const limit = Number.isFinite(rawLimit) && rawLimit > 0 ? Math.min(rawLimit, 1000) : 200;
  const cursor = url.searchParams.get('cursor') || undefined;

  const list = await env.VISITS.list<Visit>({ prefix: 'v:', limit, cursor });
  const visits = await Promise.all(
    list.keys.map(async (k): Promise<Visit | null> => {
      if (k.metadata) return k.metadata;
      return env.VISITS.get<Visit>(k.name, 'json');
    }),
  );

  return json(
    {
      visits: visits.filter((v): v is Visit => v !== null),
      cursor: list.list_complete ? null : list.cursor,
    },
    200,
    cors,
  );
}

function handleOptions(request: Request, env: Env): Response {
  return new Response(null, {
    status: 204,
    headers: {
      ...corsFor(request, env),
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization, Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') return handleOptions(request, env);
    if (request.method === 'POST' && url.pathname === '/track') return handleTrack(request, env, ctx);
    if (request.method === 'GET' && url.pathname === '/visits') return handleVisits(request, env, url);

    return new Response('Not found', { status: 404 });
  },
} satisfies ExportedHandler<Env>;
