import type { Metadata, Viewport } from "next";
import { Sora, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { localBusinessJsonLd } from "@/lib/seo";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono-data",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.becomefitnessandstrength.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "BECOME Fitness & Strength — Personal Training in Downtown Los Angeles",
    template: "%s · BECOME Fitness & Strength",
  },
  description:
    "Personalized strength and body composition coaching with Eder Saul in Downtown Los Angeles. Become stronger, move better, and live with confidence. By appointment only.",
  keywords: [
    "personal trainer Downtown Los Angeles",
    "strength coach Los Angeles",
    "personal training DTLA",
    "body composition coach Los Angeles",
    "strength training Downtown LA",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "BECOME Fitness & Strength",
    title: "BECOME Stronger. Move Better. Live With Confidence.",
    description:
      "Personalized strength and fitness coaching in Downtown Los Angeles with Eder Saul. By appointment only.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BECOME Fitness & Strength — Personal Training DTLA",
    description:
      "Personalized strength and body composition coaching in Downtown Los Angeles.",
  },
  robots: { index: true, follow: true },
  category: "fitness",
};

export const viewport: Viewport = {
  themeColor: "#101212",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sora.variable} ${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-charcoal text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd(siteUrl)),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-lime focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
