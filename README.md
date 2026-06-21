# BECOME Fitness & Strength

Premium personal-training website for **BECOME Fitness & Strength** (Eder Saul) — a
boutique strength-coaching brand in Downtown Los Angeles.

**Become Stronger. Move Better. Live With Confidence.**

## Tech stack

- **Next.js 16** (App Router, Turbopack) · **TypeScript** · **React 19**
- **Tailwind CSS v4** (CSS-first `@theme` design tokens)
- **Framer Motion** (reveal, hero, accordions, carousel transitions)
- **React Hook Form + Zod** (multi-step consultation form, client + server validation)
- **Resend** (consultation + confirmation emails, with demo fallback)
- **Lucide React** icons · **Embla Carousel** (testimonials) · **next/image**
- Deploy: **Vercel**

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in values (optional for demo)
npm run dev                  # http://localhost:3000
```

```bash
npm run build && npm start   # production build
```

> Demo mode: with no `RESEND_API_KEY`, the consultation form still validates and
> "succeeds" — it logs non-sensitive metadata to the server console instead of
> emailing. Add the key (see `.env.example`) to send real email.

## Project structure

```
src/
  app/
    layout.tsx              fonts, metadata, JSON-LD, chrome
    page.tsx                homepage section composition
    globals.css             design system (Tailwind v4 @theme)
    sitemap.ts · robots.ts  SEO files
    api/consultation/route.ts   Resend handler (server-side Zod validation)
  components/
    layout/                 announcement bar, navbar, footer, mobile action bar
    sections/               hero → faq (one file per section)
    form/consultation-form.tsx   multi-step RHF + Zod form
    ui/                     reveal (motion), section-label
  lib/
    content.ts              ALL site copy + data (single source of truth)
    schema.ts               Zod consultation schema
    seo.ts                  LocalBusiness JSON-LD
    images.ts               PLACEHOLDER photography (replace before launch)
```

## Editing content

All copy and data live in **`src/lib/content.ts`** — services, FAQ, philosophy,
about, testimonials, social posts, contact details. Edit there; sections read
from it.

## Content integrity

This build follows strict rules: nothing invented. Certifications, results,
testimonials, prices, and credentials are **placeholders** clearly flagged in the
UI (amber "to be confirmed" / "placeholder" badges) until verified.

- See [`CONTENT-CHECKLIST.md`](./CONTENT-CHECKLIST.md) before launch.
- See [`ASSET-CHECKLIST.md`](./ASSET-CHECKLIST.md) for photos/video to replace.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add env vars (`RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `COACH_EMAIL`,
   `NEXT_PUBLIC_SITE_URL`) in **Project → Settings → Environment Variables**.
4. Deploy. Verify your sending domain in Resend for production email.

## Accessibility & performance

- Semantic landmarks, skip link, labeled forms, accessible accordions, visible
  focus, `prefers-reduced-motion` respected.
- `next/image` with AVIF/WebP, responsive `sizes`, priority hero only.
- Server components by default; client only where interactive.
