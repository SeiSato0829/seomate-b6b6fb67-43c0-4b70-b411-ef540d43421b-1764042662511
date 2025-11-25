import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://seomate-test-7-1764042660528.netlify.app',
  sitemap: true,
  integrations: [],
  vite: {
    define: {
      'import.meta.env.SITE_NAME': JSON.stringify('SEOメイト テストブログ 7'),
      'import.meta.env.SITE_DOMAIN': JSON.stringify('seomate-test-7-1764042660528.netlify.app'),
      'import.meta.env.THEME': JSON.stringify('default')
    }
  }
});
