import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { brand, directionsUrl, mapEmbedUrl } from "@/lib/content";

export function Location() {
  const { address } = brand;
  return (
    <section className="bg-charcoal text-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
        <Reveal>
          <SectionLabel index="11">Location</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-8 overflow-hidden rounded-card border border-paper/10 lg:grid-cols-2">
          {/* Details */}
          <div className="p-8 sm:p-10">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              {address.area}
            </h2>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-lime" />
                <div>
                  <p className="data-label text-gray-soft">Address</p>
                  <p className="mt-1 font-medium">
                    {address.street}
                    <br />
                    {address.city}, {address.region} {address.postal}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="h-5 w-5 shrink-0 text-lime" />
                <div>
                  <p className="data-label text-gray-soft">Call or Text</p>
                  <a
                    href={brand.phoneHref}
                    className="mt-1 block font-medium transition-colors hover:text-lime"
                  >
                    {brand.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="h-5 w-5 shrink-0 text-lime" />
                <div>
                  <p className="data-label text-gray-soft">Availability</p>
                  <p className="mt-1 font-medium">By appointment only</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
              >
                Get Directions <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3 text-sm font-medium transition-colors hover:border-lime hover:text-lime"
              >
                <Phone className="h-4 w-4" /> Call or Text
              </a>
            </div>
            <p className="mt-6 text-xs text-gray-soft">
              Verify address and availability before final publication.
            </p>
          </div>

          {/* Map */}
          <div className="relative min-h-[340px] bg-ink lg:min-h-full">
            <iframe
              title={`Map showing ${brand.fullName} in Downtown Los Angeles`}
              src={mapEmbedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
