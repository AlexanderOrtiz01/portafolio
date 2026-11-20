import '@fontsource/inter-tight/500.css';
import '@fontsource/inter-tight/600.css';
import '@fontsource/inter-tight/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import { createRoot } from 'react-dom/client';
import { trackVisit } from './track';

/**
 * Two looks share the same content: the scroll film (default) and the classic 3D book.
 * `?style=classic` brings the book back; each look loads only its own code and stylesheet.
 */
const classic = new URLSearchParams(location.search).get('style') === 'classic';
const root = createRoot(document.getElementById('root')!);

if (classic) {
  Promise.all([import('./App'), import('./styles.css')]).then(([{ default: App }]) => root.render(<App />));
} else {
  Promise.all([import('./film/FilmApp'), import('./film/film.css')]).then(([{ default: FilmApp }]) =>
    root.render(<FilmApp />),
  );
}
trackVisit();
