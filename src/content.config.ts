import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  // Unterstrich-Dateien (z. B. _template.md) sind keine Artikel.
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      date: z.coerce.date(),
      description: z.string().optional(),
      draft: z.boolean().optional().default(false),
      kind: z.enum(['Standpunkt', 'Einordnung', 'Erfahrungsbericht']).optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Kern-Set (Stil-Leitfaden §6): TL;DR und Reasoning Seed sind Pflicht.
      tldr: z.array(z.string()).min(1),
      reasoningSeed: z.object({ these: z.string(), frage: z.string() }),
      // Situativ (§6): Glossar/Quellen optional. Quellen laufen bevorzugt als Fußnoten im Body.
      sources: z
        .array(z.object({ label: z.string(), url: z.string().url().optional() }))
        .optional(),
      glossary: z
        .array(z.object({ term: z.string(), definition: z.string() }))
        .optional(),
    }),
});

export const collections = { posts };
