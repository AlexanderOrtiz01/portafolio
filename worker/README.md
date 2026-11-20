# portfolio-visits

Worker de Cloudflare que registra las visitas del portafolio en KV y las expone al panel privado.

## Puesta en marcha

1. Instala las dependencias:
   ```bash
   cd worker && npm install
   ```
2. Inicia sesión en Cloudflare:
   ```bash
   npx wrangler login
   ```
3. Crea el namespace de KV y pega el `id` que devuelve en `wrangler.toml` (en lugar de `REPLACE_WITH_KV_ID`):
   ```bash
   npx wrangler kv namespace create VISITS
   ```
4. Define el token de administración (usa una cadena larga y aleatoria, por ejemplo `openssl rand -hex 32`):
   ```bash
   npx wrangler secret put ADMIN_TOKEN
   ```
5. Despliega el worker:
   ```bash
   npm run deploy
   ```
6. Copia la URL del worker en un archivo `.env.production` en la raíz del repo:
   ```
   VITE_TRACKER_URL=https://portfolio-visits.<sub>.workers.dev
   ```
   y ejecuta `npm run deploy` en la raíz para publicar el sitio.

## Panel

El panel está en `/portafolio/admin.html`. Pide el `ADMIN_TOKEN` para leer las visitas.

## API

- `POST /track`: cuerpo JSON enviado como `text/plain` (vía `sendBeacon`). Responde `204`.
- `GET /visits?limit=N&cursor=C`: requiere `Authorization: Bearer <ADMIN_TOKEN>`. Devuelve `{ visits, cursor }`, de la más reciente a la más antigua.
