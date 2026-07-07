import { defineConfig } from 'astro/config';

// Custom domain (blog.janmusiedlak.de) → site at root, kein base nötig.
export default defineConfig({
  site: 'https://blog.janmusiedlak.de',
  markdown: {
    // GFM-Fußnoten auf Deutsch beschriften (Default wäre englisch „Footnotes“).
    remarkRehype: {
      footnoteLabel: 'Fußnoten',
      footnoteBackLabel: 'Zurück zum Text',
    },
  },
});
