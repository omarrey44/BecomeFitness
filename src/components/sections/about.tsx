import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/social-icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { about, brand } from "@/lib/content";
import { images } from "@/lib/images";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-ink text-paper"
    >
      <div className="grain absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Portrait */}
          <div className="relative">
            <Reveal from="left">
              <div className="relative aspect-[4/5] overflow-hidden rounded-card">
                <Image
                  src={images.about}
                  alt={`${brand.trainer}, personal trainer and strength coach in Downtown Los Angeles`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="photo-editorial object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6">
                  <p className="font-display text-2xl font-bold">
                    {brand.trainer}
                  </p>
                  <p className="data-label text-lime">
                    Personal Trainer &amp; Strength Coach
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Story */}
          <div>
            <Reveal>
              <SectionLabel index="05">About the Coach</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-extrabold sm:text-5xl">
                {about.title}
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5">
              {about.story.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="leading-relaxed text-gray-soft">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-paper/10 bg-paper/5">
                {about.facts.map((fact) => (
                  <div key={fact.label} className="bg-charcoal/40 p-5">
                    <dt className="data-label text-lime">{fact.label}</dt>
                    <dd
                      className={`mt-1.5 font-display text-base font-semibold ${
                        fact.placeholder ? "text-ember" : "text-paper"
                      }`}
                    >
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-4 text-xs text-ember">
                {about.credentialsNote}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95"
                >
                  Train With Eder
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={brand.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-lime hover:text-lime"
                >
                  <InstagramIcon className="h-4 w-4" /> Follow
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
