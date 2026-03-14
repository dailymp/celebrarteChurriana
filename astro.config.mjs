import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://celebrartechurriana.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
