# Asset replacement checklist

All photography is currently **placeholder stock** (Unsplash) defined in
`src/lib/images.ts`. Replace every image with authorized BECOME / Eder Saul photos
before launch.

## How to replace

1. Drop optimized images into `public/images/` (or keep a remote host).
2. Update the URLs in `src/lib/images.ts` (e.g. `hero: "/images/hero.jpg"`).
3. If you keep remote images, add the host to `images.remotePatterns` in
   `next.config.ts` and remove `images.unsplash.com` once unused.
4. Update every `alt` text to describe the real photo.

## Images used

- [ ] `hero` — cinematic coaching / training moment with Eder (first viewport)
- [ ] `philosophy` — detail shot, intentional movement / equipment
- [ ] `about` — real portrait of Eder (coaching or training)
- [ ] `experience` — full-width strength-session band
- [ ] `results` — progress / training (only authorized client imagery)
- [ ] `cta` — atmospheric barbell/plates band
- [ ] `band` — secondary session shot (available for reuse)

## Photography direction

High-contrast, editorial, warm tint, natural skin tones, selective B&W, subtle
grain, cropped compositions. **Avoid** generic fitness models, crowded gym stock,
aggressive/screaming expressions, extreme bodybuilding, and fake before/after.

## Other assets

- [ ] `public/og.jpg` — 1200×630 social share image (referenced in metadata + JSON-LD)
- [ ] Favicon / app icons (replace `src/app/favicon.ico`)
- [ ] Real logo if available (currently a typographic wordmark "BECOME")
