
"use client";

import { useEffect, useState, type ElementType } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  X,
  Menu,
  Home,
  User,
  Code2,
  BriefcaseBusiness,
  ClipboardList,
  Mail,
  ArrowUpRight,
} from "lucide-react";

type NavItem = {
  name: string;
  icon: ElementType;
  description: string;
};

const navItems: NavItem[] = [
  {
    name: "home",
    icon: Home,
    description: "Welcome & introduction",
  },
  {
    name: "about",
    icon: User,
    description: "Who I am",
  },
  {
    name: "skills",
    icon: Code2,
    description: "Tech stack & expertise",
  },
  {
    name: "projects",
    icon: BriefcaseBusiness,
    description: "Selected work",
  },
  {
    name: "experience",
    icon: ClipboardList,
    description: "Professional journey",
  },
  {
    name: "contact",
    icon: Mail,
    description: "Let's connect",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track scroll position and active section
  useEffect(() => {
    let frame = 0;

    const updateNavigation = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);

      const offset = window.scrollY + 140;
      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.name);

        if (section && section.offsetTop <= offset) {
          current = item.name;
        }
      });

      setActiveSection(current);
    };

    const handleScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateNavigation);
      }
    };

    updateNavigation();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  // Escape key, scroll lock and desktop breakpoint
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleBreakpoint = () => {
      if (mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    mediaQuery.addEventListener("change", handleBreakpoint);

    handleBreakpoint();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      mediaQuery.removeEventListener("change", handleBreakpoint);
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: reduceMotion ? "auto" : "smooth",
      });
      return;
    }

    const section = document.getElementById(id);

    if (!section) return;

    const navbarOffset = 85;

    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const mobileOverlay = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[90] bg-black/75 backdrop-blur-[5px] md:hidden"
            aria-hidden="true"
          />

          {/* MOBILE PANEL */}
          <motion.div
            key="mobile-panel"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: -14 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -12 }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.28,
              ease: EASE,
            }}
            className="fixed inset-x-3 top-[78px] z-[100] max-h-[calc(100dvh-92px)] overflow-y-auto overscroll-contain rounded-[22px] border border-[#ff5268]/25 bg-[#15070b] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.7)] sm:inset-x-8 md:hidden"
          >
            {/* HEADING */}
            <div className="mb-4 flex items-center justify-between px-1">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff8290]">
                  Navigation
                </p>
                <p className="mt-1 text-xs text-white/40">
                  Explore my portfolio
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close mobile navigation"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* LINKS */}
            <div className="space-y-1 rounded-2xl border border-white/[0.09] bg-white/[0.035] p-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name;

                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => scrollToSection(item.name)}
                    aria-current={isActive ? "location" : undefined}
                    className={`group flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583] ${
                      isActive
                        ? "border-[#ff5268]/20 bg-[#ff5268]/[0.11]"
                        : "border-transparent hover:bg-white/[0.06]"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                        isActive
                          ? "border-[#ff5268]/25 bg-[#ff5268]/[0.13] text-[#ff8290]"
                          : "border-white/[0.08] bg-white/[0.04] text-white/55"
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-[13px] font-semibold capitalize ${
                          isActive ? "text-white" : "text-white/75"
                        }`}
                      >
                        {item.name}
                      </span>
                      <span className="mt-0.5 block truncate text-[11px] text-white/35">
                        {item.description}
                      </span>
                    </span>

                    {isActive ? (
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5268]" />
                    ) : (
                      <ArrowUpRight
                        size={15}
                        className="shrink-0 text-white/25"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#f02d43] px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#ff4055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583]"
            >
              Let's Work Together
              <ArrowUpRight size={17} />
            </button>

            <p className="mt-4 text-center text-[10px] tracking-[0.08em] text-white/30">
              DESIGN • DEVELOPMENT • CREATIVITY
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* NAVBAR */}
      <nav
        aria-label="Main navigation"
        className={`fixed inset-x-0 top-0 z-[110] border-b transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-white/[0.1] bg-[#100508]/95 shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
            : "border-white/[0.07] bg-[#0c0406]/90 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div
            className={`flex items-center justify-between gap-4 transition-[height] duration-300 ${
              scrolled
                ? "h-[64px] md:h-[66px]"
                : "h-[72px] md:h-[78px]"
            }`}
          >
            {/* LOGO */}
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              aria-label="Go to homepage"
              className="group relative flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583]"
            >
              <span className="text-[23px] font-extrabold tracking-[-0.075em] text-white sm:text-[25px]">
                Dada<span className="text-[#ff5268]">.</span>
              </span>

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#ff5268] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* DESKTOP LINKS */}
            <div className="hidden min-w-0 items-center gap-0.5 md:flex lg:gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.name;

                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => scrollToSection(item.name)}
                    aria-current={isActive ? "location" : undefined}
                    className={`group relative whitespace-nowrap rounded-lg px-2.5 py-2 text-[12px] font-medium capitalize transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583] lg:px-3.5 lg:text-[13px] ${
                      isActive
                        ? "text-white"
                        : "text-white/50 hover:text-white/90"
                    }`}
                  >
                    {item.name}

                    {isActive && (
                      <motion.span
                        layoutId="desktop-active-nav"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                        className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[#ff5268]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* DESKTOP CTA */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="group hidden shrink-0 items-center justify-center gap-2 rounded-xl border border-[#ff5268]/30 bg-[#f02d43]/[0.12] px-3.5 py-2.5 text-[12px] font-semibold text-[#ff8c99] transition-colors hover:bg-[#f02d43] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583] md:inline-flex lg:px-5 lg:text-[13px]"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </button>

            {/* MOBILE TOGGLE */}
            <button
              type="button"
              onClick={() => setIsOpen((previous) => !previous)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className={`relative z-[120] flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583] md:hidden ${
                isOpen
                  ? "border-[#ff5268]/50 bg-[#ff5268]/20 text-[#ff8290]"
                  : "border-white/[0.15] bg-white/[0.07] text-white hover:bg-white/[0.12]"
              }`}
            >
              {isOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Render mobile navigation outside layout stacking contexts */}
      {mounted && createPortal(mobileOverlay, document.body)}
    </>
  );
}
