import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

// Dynamically collect all multi-page HTML inputs
const htmlFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));
const input: Record<string, string> = {};
for (const file of htmlFiles) {
  const name = file.replace('.html', '');
  input[name] = path.resolve(__dirname, file);
}

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input,
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
