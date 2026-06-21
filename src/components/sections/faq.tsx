"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-paper text-charcoal">
      <div className="mx-auto max-w-4xl px-5 py-24 sm:py-32">
        <SectionLabel index="12" tone="light">
          FAQ
        </SectionLabel>
        <h2 className="mt-6 text-4xl font-extrabold sm:text-5xl">
          Questions, answered.
        </h2>

        <div className="mt-12 divide-y divide-charcoal/15 border-y border-charcoal/15">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-button-${i}`;
            return (
              <div key={i}>
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-lg font-semibold sm:text-xl">
                      {faq.q}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-charcoal/50 transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-olive" : ""
                      }`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 leading-relaxed text-charcoal/75">
                        {faq.a}
                        {faq.placeholder && (
                          <span className="mt-2 block text-xs font-medium text-ember">
                            Answer to be confirmed before launch.
                          </span>
                        )}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
