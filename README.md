# Portfolio

Minimal, data-driven personal portfolio built with Next.js (App Router),
TypeScript and Tailwind CSS v4. Deploys to Vercel with zero config.

## Make it yours

Everything content-related lives in one file: **`src/data/site.ts`**
(name, role, tagline, nav, socials, projects, experience, skills, email,
avatar, résumé path). Edit that and the whole site updates.

Then:

1. Replace the placeholders in `public/`: `avatar.jpg`, `resume.pdf`.
   (Regenerate blank ones any time with `python3 scripts/generate-placeholders.py`.)
2. Set `siteConfig.url` to your real domain — it feeds canonical URLs,
   `sitemap.xml`, `robots.txt` and the OG image.
3. Update the OG image copy in `src/app/opengraph-image.tsx`, or delete that
   file to fall back to a static image in `public/`.

## Structure

    src/
      app/
        layout.tsx           # fonts + site-wide metadata
        page.tsx             # section composition
        globals.css          # design tokens (light/dark), ring-card utility
        opengraph-image.tsx  # generated social card
        robots.ts, sitemap.ts
      components/
        chrome.tsx           # header + footer
        hero.tsx
        work.tsx             # project grid
        sections.tsx         # experience, about, contact
        section.tsx          # section wrapper
      data/site.ts           # <-- all content

## Local development

    npm install
    npm run dev      # http://localhost:3000
    npm run build    # production build
    npm run lint

## Deploy to Vercel

Push to a Git repo and import it at [vercel.com/new](https://vercel.com/new),
or from the CLI:

    npm i -g vercel
    vercel            # preview
    vercel --prod     # production

Vercel detects Next.js automatically. `vercel.json` only pins the build
commands, the region (`iad1` — change it to your nearest one), and a few
security headers. The site is fully static; every route is prerendered at
build time, so it runs on Vercel's free tier with no serverless functions.

## Design

Tokens in `src/app/globals.css` follow the Vercel/Geist system: white canvas,
`#171717` text, shadow-as-border cards (`0 0 0 1px` ring instead of CSS
borders), mono uppercase section labels, and a dark mode driven by
`prefers-color-scheme`. Change `--background`, `--foreground`, and `--ring`
to retheme the site.
