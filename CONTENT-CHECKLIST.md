# Content replacement checklist

Everything below is a **placeholder or needs verification** before launch. Do not
publish any of it as fact until confirmed with the coach. Edit in
`src/lib/content.ts` unless noted.

## Verify (already on site, double-check wording)

- [ ] Brand name, trainer name (Eder Saul)
- [ ] Phone `323.907.9906`, email `becomefitnessandstrength@gmail.com`
- [ ] Address `743 S Olive St, Los Angeles, CA 90014` + "by appointment only"
- [ ] Social links (Facebook, Instagram `@StrengthbyEder`, Yelp)
- [ ] Philosophy quote ("alive, powerful, and connected")

## Confirm before publishing as fact (currently flagged amber)

- [ ] **About → "10,000+ hours"** — confirm or remove (`about.facts`)
- [ ] **About → engineering background** wording
- [ ] **Certifications** — `about.credentialsNote` ("to be confirmed"). Add real
      certs only if verified; otherwise keep generic.
- [ ] **Nutrition guidance** service — confirm it's offered (`services`, `faqs`)
- [ ] **Online / hybrid coaching** — confirm availability (`services`, `faqs`)
- [ ] **FAQ** items flagged `placeholder: true` (nutrition, online, first session)

## Add real content (currently empty placeholders)

- [x] **Testimonials** — 4 verified reviews added (Katie, Amir, Juan, Brenda).
      Pending: Stephanie & Tim are screenshot reviews — re-key as text or add the images.
- [ ] **Client results** — replace `results[]` with authorized milestones/stories.
- [ ] **Social posts** — replace `socialPosts[]` with selected, professional clips
      (real post URLs + titles).

## Do NOT add unless verified

Certifications, medical/rehab claims, awards, client counts, competition results,
years of experience, prices, guaranteed outcomes, fake ratings in JSON-LD.

## Optional polish

- [ ] Real Privacy / Terms / Accessibility pages (footer links are placeholders `#`).
- [ ] Add a verified `aggregateRating` to `src/lib/seo.ts` only with real data.
