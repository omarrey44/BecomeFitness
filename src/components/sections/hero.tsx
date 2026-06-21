"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Dumbbell,
  Activity,
  Shield,
  User,
  MapPin,
} from "lucide-react";
import { images } from "@/lib/images";

const headlineLines = ["Become Stronger.", "Move Better.", "Live With Confidence."];

const metricCards = [
  {
    n: "01",
    icon: Dumbbell,
    label: "Strength",
    value: "Progressive\nby Design",
  },
  {
    n: "02",
    icon: Activity,
    label: "Mobility",
    value: "Move Well.\nMove Often.",
  },
  {
    n: "03",
    icon: Shield,
    label: "Confidence",
    value: "Built Through\nConsistency",
  },
];

const trustBar = [
  {
    icon: User,
    label: "Personalized Programming",
    sub: "Tailored to your goals",
  },
  {
    icon: Dumbbell,
    label: "Strength & Body Composition",
    sub: "Real results. Lasting change.",
  },
  {
    icon: Activity,
    label: "Movement With Purpose",
    sub: "Train for life, not just workouts",
  },
  {
    icon: MapPin,
    label: "Downtown Los Angeles",
    sub: "Premium coaching experience",
  },
];

// Notched-corner card shape (top-right cut), matching the reference.
const notch = {
  clipPath:
    "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="grain relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink pb-10 pt-28 sm:pb-12"
    >
      {/* Background photograph */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.hero}
          alt="Eder Saul coaching a focused strength-training session in Downtown Los Angeles"
          fill
          priority
          sizes="100vw"
          className="photo-editorial object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/55 to-transparent" />
      </div>

      {/* Decorative left ruler + grid (desktop) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 -z-[5] hidden w-40 lg:block"
      >
        <div className="absolute left-6 top-[16%] flex flex-col items-center gap-2">
          <span className="data-label text-gray-soft/70">01</span>
          <span className="h-24 w-px bg-gradient-to-b from-lime via-paper/20 to-transparent" />
        </div>
        <span className="data-label absolute left-6 top-[42%] text-gray-soft/50">
          03
        </span>
        <div className="ruler-x absolute bottom-[18%] left-0 h-32 w-40 opacity-30 [mask-image:linear-gradient(to_right,black,transparent)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5">
        <div className="grid items-end gap-10 lg:grid-cols-[1.55fr_0.85fr]">
          {/* Left: copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-eyebrow text-lime"
            >
              <span className="inline-block h-2.5 w-0.5 bg-lime" />
              Personal Strength &amp; Body Composition Coaching
            </motion.p>

            <h1 className="mt-5 text-display max-w-4xl font-extrabold uppercase">
              {headlineLines.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.15 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {i === 2 ? <span className="text-lime">{line}</span> : line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-7 max-w-md text-lg leading-relaxed text-gray-soft"
            >
              Personalized strength and fitness coaching designed around your
              body, your goals, and the life you want to live.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-lime px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-transform hover:scale-[1.03] active:scale-95"
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#coaching"
                className="inline-flex items-center gap-2 rounded-xl border border-paper/25 px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-paper backdrop-blur-sm transition-colors hover:border-lime hover:text-lime"
              >
                Explore Coaching
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <p className="mt-6 flex items-center gap-2 data-label text-gray-soft">
              <span className="inline-block h-2.5 w-0.5 bg-lime" />
              Coaching by appointment only.
            </p>
          </div>

          {/* Right: numbered metric cards (desktop) */}
          <div className="hidden flex-col gap-4 lg:flex">
            {metricCards.map((card, i) => (
              <motion.article
                key={card.n}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.7 }}
                style={notch}
                className="relative border border-paper/12 bg-charcoal/55 p-5 backdrop-blur-md"
              >
                <div className="flex items-start justify-between">
                  <card.icon className="h-5 w-5 text-lime" aria-hidden />
                  <span className="data-label text-gray-soft/70">{card.n}</span>
                </div>
                <p className="mt-4 data-label text-lime">{card.label}</p>
                <p className="mt-1 whitespace-pre-line font-display text-lg font-semibold leading-tight text-paper">
                  {card.value}
                </p>
                <span className="mt-4 block h-0.5 w-10 bg-lime" />
              </motion.article>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="relative mt-10 overflow-hidden rounded-2xl border border-paper/12 bg-charcoal/55 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 divide-y divide-paper/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {trustBar.map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-4">
                <item.icon
                  className="h-5 w-5 shrink-0 text-lime"
                  aria-hidden
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-paper">
                    {item.label}
                  </p>
                  <p className="truncate text-xs text-gray-soft">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-lime to-transparent" />
        </motion.div>

        <div className="mt-6 hidden items-center gap-2 data-label text-gray-soft sm:flex">
          <MapPin className="h-4 w-4 text-lime" aria-hidden /> Downtown Los Angeles
          <ArrowDown className="ml-2 h-4 w-4 animate-bounce text-lime" />
        </div>
      </div>
    </section>
  );
}
