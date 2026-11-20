/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TRACKER_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
