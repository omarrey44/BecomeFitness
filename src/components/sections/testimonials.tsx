"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { testimonials, brand } from "@/lib/content";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", update).on("reInit", update);
    const id = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(id);
      emblaApi.off("select", update).off("reInit", update);
    };
  }, [emblaApi]);

  return (
    <section id="testimonials" className="bg-charcoal text-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionLabel index="07">Testimonials</SectionLabel>
            <h2 className="mt-6 max-w-2xl text-4xl font-extrabold sm:text-5xl">
              In the words of the people doing the work.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 transition-colors hover:border-lime hover:text-lime disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 transition-colors hover:border-lime hover:text-lime disabled:opacity-30"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="flex min-w-0 shrink-0 grow-0 basis-[85%] flex-col rounded-card border border-paper/10 bg-paper/5 p-8 sm:basis-[48%] lg:basis-[31.5%]"
              >
                <Quote className="h-8 w-8 text-lime" />
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-paper/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-paper/10 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-lime/40 font-display text-sm font-bold text-lime">
                    {t.initials}
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-paper">{t.name}</p>
                    <p className="data-label text-gray-soft">
                      {t.role}
                      {t.duration ? ` · ${t.duration}` : ""}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <a
          href={brand.socials.yelp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-lime underline-offset-4 hover:underline"
        >
          <Star className="h-4 w-4" /> Read More Reviews
        </a>
      </div>
    </section>
  );
}
