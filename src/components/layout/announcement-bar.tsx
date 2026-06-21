import { brand } from "@/lib/content";

export function AnnouncementBar() {
  return (
    <div className="relative z-50 border-b border-paper/10 bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-center sm:justify-between">
        <p className="data-label hidden text-gray-soft sm:flex sm:items-center sm:gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
          </span>
          Personal Training · Downtown Los Angeles
        </p>
        <p className="data-label hidden items-center gap-2 text-gray-soft sm:flex">
          By Appointment Only
        </p>
        <a
          href={brand.phoneHref}
          className="data-label flex items-center gap-1.5 text-lime transition-colors hover:text-paper"
        >
          <span className="text-gray-soft sm:hidden">DTLA ·</span>
          <span className="hidden sm:inline">Call or Text </span>
          {brand.phone}
        </a>
      </div>
    </div>
  );
}
