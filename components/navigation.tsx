
"use client";

import { useEffect, useState, type ElementType } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  // Scroll tracking
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

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  // Close mobile menu with Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Close menu when switching to desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = () => {
      if (mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Smooth navigation
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

  return (
    <>
      {/* NAVBAR */}
      <nav
        aria-label="Main navigation"
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled
            ? "border-white/[0.1] bg-[#100508]/90 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
            : "border-white/[0.055] bg-[#0c0406]/70 backdrop-blur-xl"
        }`}
      >
        {/* Subtle top glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-20 -top-32 h-48 w-96 rounded-full bg-[#b70b22]/[0.12] blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
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
              <span className="text-[23px] font-extrabold tracking-[-0.075em] text-white transition-colors duration-300 sm:text-[25px]">
                Dada
                <span className="text-[#ff5268]">.</span>
              </span>

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#ff5268] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* DESKTOP NAVIGATION */}
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

                    {/* Active underline */}
                    {isActive && (
                      <motion.span
                        layoutId="desktop-active-nav"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                        className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[#ff5268] shadow-[0_0_12px_rgba(255,82,104,0.4)]"
                      />
                    )}

                    {!isActive && (
                      <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#ff5268]/70 transition-all duration-300 group-hover:w-4" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* DESKTOP CONTACT CTA */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="group hidden shrink-0 items-center justify-center gap-2 rounded-xl border border-[#ff5268]/30 bg-[#f02d43]/[0.12] px-3.5 py-2.5 text-[12px] font-semibold text-[#ff8c99] transition-all duration-300 hover:border-[#ff5268]/60 hover:bg-[#f02d43] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583] md:inline-flex lg:px-5 lg:text-[13px]"
            >
              Let's Talk

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583] md:hidden ${
                isOpen
                  ? "border-[#ff5268]/40 bg-[#ff5268]/15 text-[#ff8290]"
                  : "border-white/[0.12] bg-white/[0.055] text-white/85 hover:border-[#ff5268]/30 hover:bg-white/[0.09]"
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              key="mobile-menu"
              initial={
                reduceMotion
                  ? { opacity: 1, height: "auto" }
                  : { opacity: 0, height: 0 }
              }
              animate={{ opacity: 1, height: "auto" }}
              exit={
                reduceMotion
                  ? { opacity: 0, height: 0 }
                  : { opacity: 0, height: 0 }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                ease,
              }}
              className="overflow-hidden border-t border-white/[0.08] bg-[#130609]/95 backdrop-blur-2xl md:hidden"
            >
              <div className="mx-auto max-h-[calc(100dvh-80px)] max-w-[1320px] overflow-y-auto px-5 pb-5 pt-4 sm:px-8">

                {/* Mobile heading */}
                <div className="mb-4 flex items-center justify-between px-1">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ff7583]">
                      Navigation
                    </p>
                    <p className="mt-1 text-xs text-white/40">
                      Explore my portfolio
                    </p>
                  </div>

                  <span className="h-px w-10 bg-gradient-to-r from-[#ff5268]/70 to-transparent" />
                </div>

                {/* Navigation items */}
                <div className="space-y-1 rounded-2xl border border-white/[0.09] bg-white/[0.035] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.name;

                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => scrollToSection(item.name)}
                        aria-current={isActive ? "location" : undefined}
                        className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583] ${
                          isActive
                            ? "border border-[#ff5268]/15 bg-[#ff5268]/[0.09]"
                            : "border border-transparent hover:bg-white/[0.055]"
                        }`}
                      >
                        {/* Icon */}
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                            isActive
                              ? "border-[#ff5268]/25 bg-[#ff5268]/[0.13] text-[#ff7583]"
                              : "border-white/[0.08] bg-white/[0.04] text-white/50 group-hover:border-white/[0.15] group-hover:text-white"
                          }`}
                        >
                          <Icon size={18} strokeWidth={1.8} />
                        </div>

                        {/* Text */}
                        <div className="min-w-0 flex-1">
                          <p
                            className={`text-[13px] font-semibold capitalize ${
                              isActive
                                ? "text-white"
                                : "text-white/75 group-hover:text-white"
                            }`}
                          >
                            {item.name}
                          </p>

                          <p className="mt-0.5 truncate text-[11px] text-white/35">
                            {item.description}
                          </p>
                        </div>

                        {/* Active marker */}
                        {isActive ? (
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5268] shadow-[0_0_10px_rgba(255,82,104,0.5)]" />
                        ) : (
                          <ArrowUpRight
                            size={15}
                            className="shrink-0 text-white/20 transition-colors group-hover:text-[#ff7583]"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Mobile CTA */}
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="group mt-4 flex min-h-[49px] w-full items-center justify-center gap-2 rounded-xl bg-[#f02d43] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_8px_30px_rgba(220,18,48,0.2)] transition-all duration-300 hover:bg-[#ff4055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583]"
                >
                  Let's Work Together

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>

                {/* Mobile footer */}
                <p className="mt-5 text-center text-[10px] tracking-[0.08em] text-white/30">
                  DESIGN • DEVELOPMENT • CREATIVITY
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* MOBILE BACKDROP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="navigation-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/65 backdrop-blur-[3px] md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
