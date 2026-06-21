"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo, BecomeMark } from "@/components/ui/logo";
import { brand, nav } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const reduce = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const ids = nav.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Mobile menu: focus first link on open, Escape to close, restore focus on close
  useEffect(() => {
    if (!open) return;
    const trigger = menuButtonRef.current; // persistent node; safe to use in cleanup
    const id = requestAnimationFrame(() => firstLinkRef.current?.focus());
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40">
      <div className="px-3 pt-3 sm:px-5">
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "border border-paper/10 bg-charcoal/80 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          {/* Wordmark */}
          <a href="#hero" aria-label="BECOME Fitness & Strength — home" className="text-paper">
            <Logo markClassName="h-9 w-9" />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  className={`relative text-sm font-medium transition-colors hover:text-paper ${
                    active === item.href ? "text-paper" : "text-gray-soft"
                  }`}
                >
                  {item.label}
                  {active === item.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-lime"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95 sm:inline-block"
            >
              Start Your Journey
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-haspopup="dialog"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-paper lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <BecomeMark className="h-9 w-9 text-paper" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/15"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.ul
              className="flex flex-col gap-1 px-5 pt-6"
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: reduce ? 0 : 0.05 } },
              }}
            >
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <a
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.href ? "true" : undefined}
                    className="block border-b border-paper/10 py-4 font-display text-3xl font-bold tracking-tight text-paper"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className="px-5 pt-8">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-lime px-6 py-4 text-center text-base font-semibold text-ink"
              >
                Start Your Journey
              </a>
              <a
                href={brand.phoneHref}
                className="mt-3 block text-center data-label text-gray-soft"
              >
                Call or Text {brand.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
