# hot cocoa girl

Static Astro publication site styled with Tailwind CSS and deployed with GitHub Pages.

## Write a post

Add a Markdown file to `src/content/blog/` with this frontmatter:

```yaml
---
title: "Article Title"
pubDate: 2026-09-01
description: "Brief summary"
tags: ["Philosophy", "Economics"]
---
```

Allowed tags: Nutrition, Happiness, Love, Economics, Morality, God, Philosophy, Art, Beauty, Fashion, Building, Wellness.

## Run locally

```sh
npm install
npm run dev
```

`npm run build` creates the production-ready site in `dist/`.
