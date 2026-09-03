import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.enum([
      'Nutrition', 'Happiness', 'Love', 'Economics', 'Morality', 'God',
      'Philosophy', 'Art', 'Beauty', 'Fashion', 'Building', 'Wellness',
    ])).min(1),
  }),
});

export const collections = { blog };
