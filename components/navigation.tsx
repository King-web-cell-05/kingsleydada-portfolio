"use client";

import { useEffect, useState } from "react";
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
  icon: React.ElementType;
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

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  /* =========================================================
     HANDLE SCROLL
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => document.getElementById(item.name))
        .filter(Boolean);

      let currentSection = "home";

      sections.forEach((section) => {
        if (!section) return;

        const sectionTop = section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     SCROLL TO SECTION
  ========================================================= */

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(id);

      if (element) {
        const navbarHeight = 80;

        const elementPosition =
          element.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }

    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.07] bg-[#03050a]/90 shadow-2xl shadow-black/20 backdrop-blur-2xl"
            : "border-b border-white/[0.04] bg-[#03050a]/75 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            {/* =================================================
                LOGO
            ================================================= */}

            <button
              type="button"
              onClick={() => scrollToSection("home")}
              aria-label="Go to homepage"
              className="group relative flex items-center"
            >
              <span className="text-xl font-bold tracking-[-0.02em] text-white transition-colors duration-300 sm:text-2xl">
                Dada
                <span className="text-emerald-400">.</span>
              </span>

              {/* Small accent line */}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
            </button>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.name;

                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => scrollToSection(item.name)}
                    className={`group relative rounded-lg px-4 py-2 text-sm font-medium capitalize transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-500 hover:text-gray-200"
                    }`}
                  >
                    {item.name}

                    {/* Active indicator */}
                    <span
                      className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-emerald-400 transition-all duration-300 ${
                        isActive
                          ? "w-5 opacity-100"
                          : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-70"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* =================================================
                DESKTOP CONTACT BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="group hidden items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2.5 text-sm font-medium text-emerald-300 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-200 md:flex"
            >
              Let's Talk

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-300 md:hidden ${
                isOpen
                  ? "border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-300"
                  : "border-white/[0.08] bg-white/[0.025] text-gray-300 hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              {isOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <div
          className={`overflow-hidden border-t border-white/[0.06] bg-[#03050a]/98 backdrop-blur-2xl transition-all duration-300 md:hidden ${
            isOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-6">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name;

                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => scrollToSection(item.name)}
                    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-400/[0.07]"
                        : "hover:bg-white/[0.035]"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                        isActive
                          ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                          : "border-white/[0.06] bg-white/[0.025] text-gray-500 group-hover:border-white/[0.12] group-hover:text-gray-300"
                      }`}
                    >
                      <Icon size={17} />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-sm font-medium capitalize transition-colors ${
                          isActive
                            ? "text-emerald-300"
                            : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {item.name}
                      </p>

                      <p className="mt-0.5 truncate text-[11px] text-gray-600">
                        {item.description}
                      </p>
                    </div>

                    {/* Active dot */}
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
                          : "bg-transparent"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="group mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-3 text-sm font-semibold text-emerald-300 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10"
            >
              Let's Work Together

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] transition-all duration-300 md:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />
    </>
  );
}