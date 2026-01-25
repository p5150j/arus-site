# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
npm run dev          # Development server with Turbopack
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint linting
```

Node version: 18 (see .nvmrc)

## Architecture Overview

This is a Next.js 15 marketing/portfolio site with a blog, using the App Router and TypeScript.

### Key Directories

- `src/app/` - Next.js App Router pages and routes
- `src/components/` - Reusable React components (Header, Footer, Contact)
- `src/lib/posts.ts` - Blog post utilities (getAllPosts, getPostBySlug, getAllPostSlugs)
- `src/content/posts/` - Markdown blog posts with YAML frontmatter

### Blog System

Blog posts are markdown files in `src/content/posts/` with frontmatter:
```yaml
---
title: "Post Title"
description: "Short excerpt"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
---
```

The blog post renderer uses a custom `formatContent()` function in `src/app/blog/[slug]/page.tsx` (not an external markdown library) that converts markdown to HTML with Tailwind classes.

### SEO

- Root layout (`src/app/layout.tsx`) contains comprehensive JSON-LD schema markup
- `generateMetadata()` functions provide dynamic metadata for pages
- Auto-generated routes: `/robots.ts`, `/sitemap.ts`, `/feed.xml/route.ts`

### Styling

- Tailwind CSS with utility classes inline in JSX
- Dark theme (#0a0a0a background)
- Geist font family loaded globally
- No CSS modules or styled-components

### Deployment

Deployed to Netlify. Config in `netlify.toml`.

## Key Patterns

- Server components by default (use 'use client' sparingly)
- Static generation with `generateStaticParams()` for blog posts
- Path alias: `@/*` maps to `./src/*`
- No state management library (content is static)
- No testing framework currently installed
