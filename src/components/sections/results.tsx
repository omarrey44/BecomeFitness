import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { results } from "@/lib/content";

export function Results() {
  return (
    <section id="results" className="bg-paper text-charcoal">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
        <Reveal>
          <SectionLabel index="06" tone="light">
            Client Results
          </SectionLabel>
        </Reveal>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal delay={0.1}>
            <h2 className="max-w-2xl text-4xl font-extrabold sm:text-5xl">
              Progress You Can Feel. Results You Can Sustain.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-charcoal/70">
              Real client stories, milestones, and progress timelines — added
              only with permission. No fake transformations, no guarantees.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {results.map((r, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-card border border-dashed border-charcoal/25 bg-paper-dim/40 p-7">
                <span className="font-display text-5xl font-extrabold text-charcoal/20">
                  {r.metric}
                </span>
                <p className="mt-4 data-label text-charcoal/50">{r.label}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">
                  {r.body}
                </p>
                {r.placeholder && (
                  <span className="mt-5 inline-block w-fit rounded-full border border-ember/40 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-ember">
                    Placeholder
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
