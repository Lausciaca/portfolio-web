import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Cambia `site` por tu URL final de Vercel cuando la tengas.
// Ej: https://laureano-sciacaluga.vercel.app
export default defineConfig({
  site: 'https://tu-portfolio.vercel.app',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
