import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { brand } from "@/lib/content";
import { images } from "@/lib/images";

export function ConsultationCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.cta}
          alt="Loaded barbell ready for a training session"
          fill
          sizes="100vw"
          className="photo-editorial object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:py-36">
        <Reveal>
          <p className="text-eyebrow text-lime">Start Here</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold sm:text-6xl">
            Your Next Chapter Starts With One Conversation.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-soft">
            Tell us where you are now and where you want to go. We&apos;ll help
            you understand the next step.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-base font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 text-base font-medium text-paper transition-colors hover:border-lime hover:text-lime"
            >
              <Phone className="h-4 w-4" /> Call or Text Eder
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-6 data-label text-gray-soft">By appointment only.</p>
        </Reveal>
      </div>
    </section>
  );
}
