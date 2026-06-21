type LogoProps = {
  className?: string;
  /** Show the "BECOME / Fitness & Strength" wordmark next to the mark. */
  withWordmark?: boolean;
  markClassName?: string;
};

/**
 * BECOME brand lockup — vector recreation of the supplied logo
 * (geometric "B" with a lime lightning bolt). The mark uses currentColor so it
 * adapts to dark/light sections; the bolt stays brand lime.
 *
 * To use the exact supplied artwork instead, drop it at public/become-logo.svg
 * (or .png) and swap this component for a <Image>/<img>. See ASSET-CHECKLIST.md.
 */
export function Logo({
  className,
  withWordmark = true,
  markClassName,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <BecomeMark className={markClassName ?? "h-8 w-8"} />
      {withWordmark && (
        <span className="leading-none">
          <span className="block font-display text-xl font-extrabold tracking-tight">
            BECOME
          </span>
          <span className="data-label block text-[0.6rem] text-lime">
            Fitness &amp; Strength
          </span>
        </span>
      )}
    </span>
  );
}

export function BecomeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="BECOME Fitness & Strength"
    >
      <defs>
        <mask id="become-b-counters">
          <rect x="0" y="0" width="64" height="64" fill="white" />
          {/* Black = punched-out counters (true transparency) */}
          <path d="M29 18 H36 a5 5 0 0 1 0 10 H29 Z" fill="black" />
          <path d="M29 37 H38 a5.5 5.5 0 0 1 0 11 H29 Z" fill="black" />
        </mask>
      </defs>
      {/* B — stem + two lobes, counters masked out */}
      <g fill="currentColor" mask="url(#become-b-counters)">
        <rect x="14" y="12" width="11" height="40" rx="2.5" />
        <path d="M22 12 H37 a11 11 0 0 1 0 22 H22 Z" />
        <path d="M22 31 H40 a11.5 11.5 0 0 1 0 23 H22 Z" />
      </g>
      {/* Lightning bolt */}
      <path
        d="M30 8 L12 36 H22 L17 56 L40 28 H29 L36 8 Z"
        fill="var(--color-lime, #c7f000)"
      />
    </svg>
  );
}
