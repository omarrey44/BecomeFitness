# Real brand assets

Drop authorized BECOME / Eder Saul photos here, then point `src/lib/images.ts` at them.

## Required now

- **`eder.jpg`** — the B&W instructor portrait (used in the About section,
  `images.about`). Save the provided portrait as `eder.jpg` in this folder.
  Recommended: square or 4:5, ~1200px+, optimized JPG/WebP.

## Optional logo swap

The header/footer/favicon use a built-in vector recreation of the logo
(`src/components/ui/logo.tsx`, `src/app/icon.svg`). To use the exact supplied
artwork instead, save it here (e.g. `become-logo.svg` / `become-logo.png`) and
swap the `<Logo />` usage for an `<Image>`.
