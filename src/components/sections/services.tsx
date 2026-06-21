import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="coaching" className="bg-paper text-charcoal">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <SectionLabel index="03" tone="light">
                Coaching Services
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl text-4xl font-extrabold sm:text-5xl">
                Built around how you want to train.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal underline-offset-4 hover:underline"
            >
              Not sure which fits? Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.06}>
              <article className="group relative flex h-full flex-col bg-paper p-7 transition-colors duration-300 hover:bg-charcoal hover:text-paper">
                <div className="flex items-start justify-between">
                  <span className="font-display text-3xl font-extrabold text-charcoal/15 transition-colors group-hover:text-lime">
                    {service.number}
                  </span>
                  <ArrowUpRight className="h-5 w-5 -translate-y-1 translate-x-1 text-charcoal/30 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-lime group-hover:opacity-100" />
                </div>

                <h3 className="mt-6 font-display text-xl font-bold">
                  {service.title}
                </h3>
                {service.placeholder && (
                  <span className="mt-2 inline-block w-fit rounded-full border border-ember/40 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-ember">
                    To be confirmed
                  </span>
                )}

                <p className="mt-3 text-sm leading-relaxed text-charcoal/70 transition-colors group-hover:text-paper/70">
                  {service.description}
                </p>

                <dl className="mt-6 space-y-2 border-t border-charcoal/10 pt-4 text-xs transition-colors group-hover:border-paper/15">
                  <div className="flex gap-2">
                    <dt className="data-label shrink-0 text-charcoal/40 group-hover:text-lime">
                      For
                    </dt>
                    <dd className="text-charcoal/70 group-hover:text-paper/70">
                      {service.forWho}
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="data-label shrink-0 text-charcoal/40 group-hover:text-lime">
                      Focus
                    </dt>
                    <dd className="text-charcoal/70 group-hover:text-paper/70">
                      {service.focus}
                    </dd>
                  </div>
                </dl>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal group-hover:text-lime"
                >
                  Inquire <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
