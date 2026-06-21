import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { philosophy } from "@/lib/content";
import { images } from "@/lib/images";

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-paper text-charcoal">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
        <Reveal>
          <SectionLabel index="01" tone="light">
            Philosophy
          </SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="max-w-xl text-4xl font-extrabold sm:text-5xl">
                {philosophy.title}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote className="mt-10 border-l-2 border-forest pl-6">
                <p className="font-display text-2xl font-semibold leading-snug text-charcoal sm:text-3xl">
                  {philosophy.quote}
                </p>
              </blockquote>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {philosophy.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="text-base leading-relaxed text-charcoal/80">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative">
            <Reveal from="right">
              <div className="relative aspect-[4/5] overflow-hidden rounded-card">
                <Image
                  src={images.philosophy}
                  alt="Detail of disciplined strength training with intentional movement"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="photo-warm object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {philosophy.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-xl border border-charcoal/10 bg-paper-dim/60 px-4 py-3 text-sm font-medium"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
