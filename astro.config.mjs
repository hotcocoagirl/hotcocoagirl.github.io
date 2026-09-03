import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hotcocoagirl.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
