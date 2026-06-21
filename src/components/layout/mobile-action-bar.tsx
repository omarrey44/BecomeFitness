import { Phone, MapPin, CalendarCheck } from "lucide-react";
import { brand, directionsUrl } from "@/lib/content";

/** Fixed thumb-friendly action bar — mobile only. */
export function MobileActionBar() {
  const item =
    "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[0.7rem] font-medium";
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-paper/10 bg-charcoal/90 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-md items-stretch divide-x divide-paper/10">
        <a href={brand.phoneHref} className={`${item} text-paper`}>
          <Phone className="h-5 w-5" />
          Call
        </a>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} text-paper`}
        >
          <MapPin className="h-5 w-5" />
          Directions
        </a>
        <a href="#contact" className={`${item} bg-lime text-ink`}>
          <CalendarCheck className="h-5 w-5" />
          Consult
        </a>
      </div>
    </div>
  );
}
