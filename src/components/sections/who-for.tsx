"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { whoFor } from "@/lib/content";

export function WhoFor() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="who" className="bg-charcoal text-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionLabel index="02">Who This Is For</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-extrabold sm:text-5xl">
                Coaching for the goal you actually have.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-gray-soft">
                Whether you are starting out, building back, or chasing a
                serious goal, the program is built around you. Tap a goal to see
                how it works.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 rounded-xl border border-paper/10 bg-paper/5 px-4 py-3 text-sm text-gray-soft">
                Training can be adapted around previous limitations after
                appropriate professional clearance.
              </p>
            </Reveal>
          </div>

          <ul className="divide-y divide-paper/10 border-y border-paper/10">
            {whoFor.map((item, i) => {
              const open = openIndex === i;
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="group flex w-full items-center gap-4 py-5 text-left"
                  >
                    <span className="data-label w-8 shrink-0 text-lime">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-xl font-semibold transition-colors group-hover:text-lime sm:text-2xl">
                      {item.title}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-gray-soft transition-transform duration-300 ${
                        open ? "rotate-45 text-lime" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-6 pl-12 text-gray-soft">
                          {item.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
