import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://mj01-sports-site.vercel.app',
  integrations: [mdx()],
});
