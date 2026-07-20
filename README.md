# yugam-sharma-site

Personal site and blog for Yugam Sharma — resume/portfolio built with Next.js
(App Router), TypeScript, Tailwind CSS, and file-system MDX. Deployed on
Vercel.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also regenerates public/resume.pdf)
npm run generate:pdf   # regenerate the resume PDF only
```

## Project structure

```
app/          Routes (App Router): /, /resume, /blog, /blog/[slug],
              sitemap.ts, robots.ts
components/   Shared UI (Header, Footer, Section)
content/      MDX content — blog posts live in content/blog/*.mdx
data/         Typed data layer — resume.ts (single source of truth for the
              resume page AND the PDF), site.ts (nav, links, metadata)
lib/          Utilities — blog.ts (filesystem MDX loading)
scripts/      generate-resume-pdf.tsx — renders data/resume.ts to
              public/resume.pdf at build time (prebuild hook)
```

## Adding a blog post

Create `content/blog/my-post-slug.mdx` with frontmatter:

```yaml
---
title: "Post title"
date: "2026-08-01"
summary: "One-line summary shown in listings and used for SEO."
tags: ["kubernetes", "aws"]
---
```

The listing page, post page, home-page "Latest Posts", and sitemap all pick it
up automatically — no code changes needed.

## Adding a new site section (e.g. /projects)

1. Create `app/projects/page.tsx` (plus a `data/projects.ts` file if it's
   data-driven).
2. Add `{ label: "Projects", href: "/projects" }` to `nav` in `data/site.ts` —
   the header nav and sitemap update automatically.

Layout, header, footer, fonts, and metadata defaults all come from
`app/layout.tsx`, so new sections inherit them for free.

## Updating the resume

Edit `data/resume.ts`. The `/resume` page and the downloadable PDF are both
rendered from it; the PDF is regenerated on every build.

## Deployment

Pushes to `main` deploy automatically via Vercel's GitHub integration
(`npm run build` runs the PDF prebuild step on Vercel too).
