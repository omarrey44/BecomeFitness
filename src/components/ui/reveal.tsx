"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger index → adds a small delay so groups cascade in. */
  delay?: number;
  /** Direction the element rises/slides from. */
  from?: "up" | "left" | "right" | "none";
  as?: "div" | "li" | "span";
};

export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  const offset =
    from === "up"
      ? { y: 28 }
      : from === "left"
        ? { x: -28 }
        : from === "right"
          ? { x: 28 }
          : {};

  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
