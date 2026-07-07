import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
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
      // Mitdenk-Mechanismen (Stil-Leitfaden §6) — alle optional
      tldr: z.array(z.string()).optional(),
      sources: z
        .array(z.object({ label: z.string(), url: z.string().url().optional() }))
        .optional(),
      glossary: z
        .array(z.object({ term: z.string(), definition: z.string() }))
        .optional(),
      reasoningSeed: z.object({ these: z.string(), frage: z.string() }).optional(),
    }),
});

export const collections = { posts };
