"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { YouTubeIcon } from "@/components/ui/social-icons";
import { youtubeVideos, brand } from "@/lib/content";

export function SocialContent() {
  const [active, setActive] = useState<string | null>(null);

  // Esc closes the player
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="social" className="bg-charcoal text-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <SectionLabel index="09">In Motion</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl text-4xl font-extrabold sm:text-5xl">
                Training in Motion.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-lg text-gray-soft">
                Selected clips, technique tips, and education from{" "}
                <span translate="no">@strengthbyeder</span>.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href={brand.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-lime hover:text-lime"
            >
              <YouTubeIcon className="h-4 w-4" /> Visit Channel
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {youtubeVideos.map((video, i) => {
            const hasVideo = video.id.length > 0;
            const thumb = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

            const inner = (
              <>
                <div className="absolute inset-0">
                  {hasVideo ? (
                    <Image
                      src={thumb}
                      alt={video.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal-soft to-ink" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                </div>

                <div className="relative flex items-center justify-between">
                  <YouTubeIcon className="h-5 w-5 text-gray-soft" />
                  {!hasVideo && (
                    <span className="rounded-full border border-ember/40 px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-wider text-ember">
                      Placeholder
                    </span>
                  )}
                </div>

                <div className="relative flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-lime/40 bg-lime/10 text-lime transition-transform group-hover:scale-110">
                    <Play className="h-5 w-5 translate-x-0.5" aria-hidden />
                  </span>
                </div>

                <div className="relative">
                  <p className="line-clamp-2 text-sm font-medium leading-snug text-paper">
                    {video.title}
                  </p>
                  <span className="mt-2 inline-block data-label text-lime">
                    {hasVideo ? "Watch →" : "Add link →"}
                  </span>
                </div>
              </>
            );

            const cardClass =
              "group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-card border border-paper/10 p-5 text-left transition-colors hover:border-lime/40";

            return (
              <Reveal key={i} delay={(i % 4) * 0.06}>
                {hasVideo ? (
                  <button
                    type="button"
                    onClick={() => setActive(video.id)}
                    aria-label={`Play: ${video.title}`}
                    className={`${cardClass} w-full`}
                  >
                    {inner}
                  </button>
                ) : (
                  <a
                    href={brand.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {inner}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox player */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper hover:border-lime hover:text-lime"
            >
              <X className="h-5 w-5" />
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="aspect-[9/16] h-[80vh] max-h-[80vh] max-w-[92vw] overflow-hidden rounded-card border border-paper/10 bg-black"
            >
              <iframe
                title="YouTube video player"
                src={`https://www.youtube-nocookie.com/embed/${active}?autoplay=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
                style={{ border: 0 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
