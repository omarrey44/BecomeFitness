import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { experiencePoints } from "@/lib/content";
import { images } from "@/lib/images";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-ink text-paper"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.experience}
          alt="A focused, technique-driven strength training session"
          fill
          sizes="100vw"
          className="photo-editorial object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:py-36">
        <Reveal>
          <SectionLabel index="08">The Experience</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl text-4xl font-extrabold sm:text-6xl">
            Every Session Has a Purpose.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-lg text-gray-soft">
            No wandering, no guesswork. Each session is structured, coached, and
            adjusted in real time — so your effort translates into progress.
          </p>
        </Reveal>

        <ul className="mt-12 grid max-w-3xl gap-x-8 gap-y-4 sm:grid-cols-2">
          {experiencePoints.map((point, i) => (
            <Reveal key={point} delay={i * 0.05} as="li">
              <div className="flex items-center gap-3 border-b border-paper/10 pb-4">
                <Check className="h-5 w-5 shrink-0 text-lime" />
                <span className="font-display text-lg font-medium">{point}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
