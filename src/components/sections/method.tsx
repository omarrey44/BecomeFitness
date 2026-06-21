import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { method } from "@/lib/content";

export function Method() {
  return (
    <section id="method" className="bg-charcoal text-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
        <Reveal>
          <SectionLabel index="04">The Coaching Method</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            A clear path from where you are to where you want to be.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute left-[1.35rem] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-lime via-paper/20 to-transparent lg:left-0 lg:top-[1.35rem] lg:h-px lg:w-full lg:bg-gradient-to-r"
          />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {method.map((m, i) => (
              <Reveal key={m.step} delay={i * 0.1} as="li">
                <div className="relative pl-14 lg:pl-0 lg:pt-14">
                  <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-lime bg-charcoal font-mono text-sm font-semibold text-lime">
                    {m.step}
                  </span>
                  <h3 className="font-display text-2xl font-bold">{m.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-soft">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
