/**
 * PLACEHOLDER photography (Unsplash editorial fitness shots).
 * Every image here MUST be replaced with authorized BECOME / Eder Saul photos
 * before launch — see ASSET-CHECKLIST.md. Prefer high-contrast, editorial,
 * coaching-focused imagery; avoid crowded stock-gym shots.
 */
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=1600`;

export const images = {
  hero: u("1517836357463-d25dfeac3438"), // focused training
  philosophy: u("1583454110551-21f2fa2afe61"), // kettlebell detail
  about: "/images/eder.jpg", // REAL portrait of Eder Saul — drop file at public/images/eder.jpg
  experience: u("1534438327276-14e5300c3a48"), // strength training
  results: u("1574680096145-d05b474e2155"), // dumbbell work
  cta: u("1546483875-ad9014c88eba"), // barbell plates
  band: u("1599058917765-a780eda07a3e"), // gym session
} as const;
