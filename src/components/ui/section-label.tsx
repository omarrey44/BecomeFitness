type SectionLabelProps = {
  index: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
};

/** Numbered, measurement-styled section marker (e.g. "03 / Coaching"). */
export function SectionLabel({
  index,
  children,
  tone = "dark",
}: SectionLabelProps) {
  const isDark = tone === "dark";
  const accent = isDark ? "text-lime" : "text-forest";
  const line = isDark ? "bg-lime/60" : "bg-forest/60";
  const muted = isDark ? "text-gray-soft" : "text-charcoal/60";
  return (
    <div className="flex items-center gap-3">
      <span className={`data-label ${accent}`}>{index}</span>
      <span aria-hidden className={`h-px w-8 ${line}`} />
      <span className={`data-label ${muted}`}>{children}</span>
    </div>
  );
}
