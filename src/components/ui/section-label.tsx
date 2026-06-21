type SectionLabelProps = {
  index: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
};

/**
 * Editorial section marker: an oversized ghost index number paired with an
 * accent dot + label. Lime accent on dark sections, deep "forest" green on
 * light/beige sections (lime washes out on beige). Shared by all sections.
 */
export function SectionLabel({
  index,
  children,
  tone = "dark",
}: SectionLabelProps) {
  const isDark = tone === "dark";
  const ghost = isDark ? "text-paper/10" : "text-charcoal/10";
  const accent = isDark ? "text-lime" : "text-forest";
  const dot = isDark ? "bg-lime" : "bg-forest";

  return (
    <div className="flex items-center gap-4">
      <span
        aria-hidden
        className={`font-display text-6xl font-extrabold leading-none tracking-tighter sm:text-7xl ${ghost}`}
      >
        {index}
      </span>
      <span className="flex items-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5">
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${dot}`}
          />
          <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${dot}`} />
        </span>
        <span className={`data-label ${accent}`}>{children}</span>
        <span
          aria-hidden
          className={`h-px w-8 ${isDark ? "bg-lime/40" : "bg-forest/40"}`}
        />
      </span>
    </div>
  );
}
