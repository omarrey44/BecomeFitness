import { brand } from "./content";

/**
 * LocalBusiness / HealthClub structured data.
 * NOTE: no aggregateRating is included on purpose — do not add fake ratings.
 * Add a verified rating object only with real, sourced review data.
 */
export function localBusinessJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": ["HealthClub", "SportsActivityLocation"],
    name: brand.fullName,
    description:
      "Personalized strength and body composition coaching in Downtown Los Angeles with Eder Saul. By appointment only.",
    url: siteUrl,
    telephone: brand.phoneHref.replace("tel:", ""),
    email: brand.email,
    image: `${siteUrl}/og.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.address.street,
      addressLocality: brand.address.city,
      addressRegion: brand.address.region,
      postalCode: brand.address.postal,
      addressCountry: "US",
    },
    areaServed: "Downtown Los Angeles",
    sameAs: [
      brand.socials.facebook,
      brand.socials.instagram,
      brand.socials.youtube,
      brand.socials.yelp,
    ],
    employee: {
      "@type": "Person",
      name: brand.trainer,
      jobTitle: "Personal Trainer & Strength Coach",
    },
    availableService: {
      "@type": "Service",
      serviceType: "Personal Training",
    },
  };
}
