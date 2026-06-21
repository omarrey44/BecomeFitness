import { Star } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
} from "@/components/ui/social-icons";
import { BecomeMark } from "@/components/ui/logo";
import { brand, nav } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-paper/10 bg-ink pb-28 pt-16 sm:pb-16">
      <div className="grain absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <BecomeMark className="h-11 w-11 text-paper" />
              <p className="font-display text-3xl font-extrabold tracking-tight">
                BECOME
                <span className="block text-base font-medium text-gray-soft">
                  Fitness &amp; Strength
                </span>
              </p>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-soft">
              Become stronger in body, movement, and mindset. Personalized
              strength coaching in Downtown Los Angeles.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={brand.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper transition-colors hover:border-lime hover:text-lime"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={brand.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper transition-colors hover:border-lime hover:text-lime"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={brand.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper transition-colors hover:border-lime hover:text-lime"
              >
                <YouTubeIcon className="h-4 w-4" />
              </a>
              <a
                href={brand.socials.yelp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper transition-colors hover:border-lime hover:text-lime"
              >
                <Star className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="data-label text-lime">Explore</p>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-soft transition-colors hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="data-label text-lime">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-gray-soft">
              <li>
                <a
                  href={brand.phoneHref}
                  className="transition-colors hover:text-paper"
                >
                  {brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={brand.emailHref}
                  className="break-all transition-colors hover:text-paper"
                >
                  {brand.email}
                </a>
              </li>
              <li className="pt-1">
                {brand.address.street}
                <br />
                {brand.address.city}, {brand.address.region}{" "}
                {brand.address.postal}
              </li>
              <li className="pt-1 text-paper">By appointment only</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/10 pt-6 text-xs text-gray-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.fullName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a href="#" className="transition-colors hover:text-paper">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-paper">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-paper">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
