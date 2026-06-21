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
  const muted = tone === "dark" ? "text-gray-soft" : "text-charcoal/60";
  return (
    <div className="flex items-center gap-3">
      <span className="data-label text-lime">{index}</span>
      <span aria-hidden className="h-px w-8 bg-lime/60" />
      <span className={`data-label ${muted}`}>{children}</span>
    </div>
  );
}
