import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative paths, so the site works from any folder: GitHub Pages serves it under /<repo>/.
  base: './',
  plugins: [react()],
  server: { port: 5173, host: '127.0.0.1' },
});
