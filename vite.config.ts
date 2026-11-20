import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative paths, so the site works from any folder: GitHub Pages serves it under /<repo>/.
  base: './',
  plugins: [react()],
  server: { port: 5173, host: '127.0.0.1' },
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        // three and react get their own long-cacheable chunks; three loads only after first paint.
        manualChunks(id) {
          if (id.includes('/node_modules/three/')) return 'three';
          if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react';
        },
      },
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        admin: fileURLToPath(new URL('./admin.html', import.meta.url)),
      },
    },
  },
});
