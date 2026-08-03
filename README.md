# Abhishek Sharma-Freelance Portfolio

A statically-generated Next.js site built for speed and SEO. Every route is prerendered to static HTML and ships as a pure static export.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)-static site generation + `output: "export"`
- React 19
- Tailwind CSS v4
- framer-motion-scroll reveals, hover micro-interactions
- lucide-react-icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the dev server.

## Commands

```bash
npm run dev       # start the Next.js dev server
npm run build     # build the static export into the out/ directory
npm run lint      # run oxlint
npm run preview   # build then serve out/ locally
```

## Static export

The site uses `output: "export"` with `trailingSlash: true`, so `next build` generates a fully static `out/` folder (one `index.html` per route) that can be hosted anywhere-GitHub Pages, Netlify, Vercel, etc.

The included GitHub Actions workflow (`/.github/workflows/deploy.yml`) builds and deploys `out/` to GitHub Pages on every push to `main`.

## Structure

```
app/                    # Next.js App Router routes + per-page SEO metadata
  layout.jsx            # root layout: fonts, providers, navbar, footer
  page.jsx              # home
  services/  process/  mentorship/  blog/  about/
  blog/[slug]/          # blog post pages (generateStaticParams)
  not-found.jsx         # custom 404
src/
  routes/               # page components (client)
  components/           # shared components
  lib/                  # config, blog content, CTA context
public/                 # static assets (favicon, etc.)
```

## Configuration

Replace the placeholder credentials in `src/lib/config.js` (HubSpot portal/form IDs, WhatsApp number, Calendly URL) before going live.
