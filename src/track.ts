const SESSION_KEY = 'ev-tracked';

export function trackVisit(): void {
  const base = (import.meta.env.VITE_TRACKER_URL ?? '').replace(/\/+$/, '');
  if (!base) return;
  const host = location.hostname;
  if (host === 'localhost' || host === '127.0.0.1') return;
  try {
    if (localStorage.getItem('ev-admin-skip') === '1') return;
  } catch {
    /* storage unavailable */
  }
  try {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, '1');
  } catch {
    /* storage unavailable: still send */
  }
  let tz = '';
  try {
    tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    /* ignore */
  }
  const body = JSON.stringify({
    path: location.pathname + location.search,
    referrer: document.referrer,
    lang: navigator.language,
    screen: `${screen.width}x${screen.height}`,
    tz,
  });
  const url = `${base}/track`;
  try {
    if (navigator.sendBeacon && navigator.sendBeacon(url, new Blob([body], { type: 'text/plain' }))) return;
  } catch {
    /* fall through */
  }
  fetch(url, { method: 'POST', body, keepalive: true, mode: 'no-cors' }).catch(() => {});
}
