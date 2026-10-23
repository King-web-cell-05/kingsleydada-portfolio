
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Inter } from "next/font/google";
import {
  Mail,
  Phone,
  MapPin,
  Code2,
  Palette,
  PenTool,
  MonitorSmartphone,
  Server,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const EASE = [0.22, 1, 0.36, 1] as const;

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const services = [
  { icon: Code2, title: "Full-Stack Development" },
  { icon: Palette, title: "UI/UX Design" },
  { icon: PenTool, title: "Graphic Design" },
  { icon: MonitorSmartphone, title: "Web Applications" },
  { icon: Server, title: "API & Backend Development" },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/King-web-cell-05",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/dada-kingsley-a0858637a",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/codekingz05",
    label: "X",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/kingsleydada/",
    label: "Instagram",
  },
];

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "kingsleydada159@gmail.com",
    href: "mailto:kingsleydada159@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 906 564 4691",
    href: "tel:+2349065644691",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: "",
  },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: 0.7,
      delay,
      ease: EASE,
    },
  });

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer
      className={`relative isolate overflow-hidden border-t border-white/[0.07] bg-[#080305] px-5 pt-16 text-white sm:px-8 sm:pt-20 lg:px-12 ${inter.className}`}
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#090406_0%,#160508_45%,#1e060c_75%,#080305_100%)]" />

        <div className="absolute -left-[15%] top-0 h-[500px] w-[500px] rounded-full bg-[#a50920]/[0.1] blur-[150px]" />

        <div className="absolute -right-[15%] bottom-0 h-[550px] w-[550px] rounded-full bg-[#b70b22]/[0.08] blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.35)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px]">
        {/* CALL TO ACTION */}
        <motion.div
          {...reveal()}
          className="relative mb-16 overflow-hidden rounded-[26px] border border-[#ff5268]/20 bg-gradient-to-br from-[#ff5268]/[0.11] via-white/[0.035] to-[#ff5268]/[0.045] p-7 shadow-[0_25px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-10 lg:mb-20 lg:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#ff5268]/[0.11] blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#ff5268]/60 to-transparent"
          />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-[670px]">
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#ff5268]/20 bg-[#ff5268]/[0.08] px-3.5 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff5268]" />

                <span className="text-[11px] font-semibold tracking-[0.06em] text-[#ff9aa5]">
                  HAVE A PROJECT IN MIND?
                </span>
              </div>

              <h2 className="text-[clamp(1.8rem,3.4vw,3rem)] font-extrabold leading-[1.16] tracking-[-0.05em]">
                Let's create something{" "}
                <span className="bg-gradient-to-r from-white via-[#ffd9de] to-[#ff6173] bg-clip-text text-transparent">
                  exceptional.
                </span>
              </h2>

              <p className="mt-4 max-w-[530px] text-[13px] leading-7 text-white/50 sm:text-[14px]">
                From the first idea to the finished product,
                let's build a digital experience that makes an impact.
              </p>
            </div>

            <motion.button
              type="button"
              onClick={() => scrollToSection("contact")}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-xl bg-[#f02d43] px-6 py-3.5 text-[12px] font-semibold text-white shadow-[0_10px_30px_rgba(220,18,48,0.2)] transition-[background-color,box-shadow] duration-300 hover:bg-[#ff4055] hover:shadow-[0_14px_40px_rgba(220,18,48,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583] sm:text-[13px]"
            >
              Start a Conversation

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.button>
          </div>
        </motion.div>

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-11 pb-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_1fr_1.15fr] lg:gap-10 lg:pb-16">
          {/* BRAND */}
          <motion.div {...reveal(0.05)}>
            <div className="mb-5 flex items-center gap-3.5">
              <button
                type="button"
                onClick={() => scrollToSection("home")}
                aria-label="Back to home"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#ff5268]/25 bg-[#ff5268]/[0.1] text-[17px] font-extrabold tracking-[-0.05em] text-[#ff8290] transition-colors hover:border-[#ff5268]/50 hover:bg-[#ff5268]/[0.16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583]"
              >
                DK
              </button>

              <div>
                <h3 className="text-[17px] font-bold tracking-[-0.03em] text-white">
                  Dada Kingsley
                </h3>

                <p className="mt-1 text-[11px] font-medium text-[#ff8290]">
                  Developer & Designer
                </p>
              </div>
            </div>

            <p className="max-w-[340px] text-[13px] leading-[1.9] text-white/45">
              Full-Stack Developer, UI/UX Designer, and Graphic Designer
              focused on creating modern, reliable, and thoughtfully
              designed digital experiences.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.11] bg-white/[0.045] text-white/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff5268]/35 hover:bg-[#ff5268]/[0.1] hover:text-[#ff9aa5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583]"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* NAVIGATION */}
          <motion.nav {...reveal(0.1)} aria-label="Footer navigation">
            <h3 className="mb-6 text-[13px] font-bold tracking-[-0.01em] text-white">
              Navigation
            </h3>

            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="group inline-flex items-center gap-2 text-left text-[13px] text-white/45 transition-colors duration-300 hover:text-[#ff9aa5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583]"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-[#ff7583] transition-all duration-300 group-hover:w-3"
                    />

                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* SERVICES */}
          <motion.div {...reveal(0.15)}>
            <h3 className="mb-6 text-[13px] font-bold tracking-[-0.01em] text-white">
              What I Do
            </h3>

            <ul className="space-y-3.5">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <li
                    key={service.title}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#ff5268]/15 bg-[#ff5268]/[0.07] text-[#ff7583]">
                      <Icon size={15} strokeWidth={1.8} />
                    </div>

                    <span className="text-[12px] leading-6 text-white/50">
                      {service.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div {...reveal(0.2)}>
            <h3 className="mb-6 text-[13px] font-bold tracking-[-0.01em] text-white">
              Get In Touch
            </h3>

            <ul className="space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex min-w-0 items-start gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583]"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-[#ff7583]">
                          <Icon size={16} />
                        </div>

                        <div className="min-w-0">
                          <p className="mb-1 text-[11px] text-white/35">
                            {item.label}
                          </p>

                          <p className="break-words text-[12px] leading-6 text-white/65 transition-colors group-hover:text-[#ff9aa5]">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-[#ff7583]">
                          <Icon size={16} />
                        </div>

                        <div>
                          <p className="mb-1 text-[11px] text-white/35">
                            {item.label}
                          </p>

                          <p className="text-[12px] leading-6 text-white/65">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.09] py-7 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] leading-6 text-white/35">
            © {year} Dada Kingsley Oluwasanmi. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-1.5 text-[11px] text-white/35">
            Designed & developed 
         
            by Dada Kingsley
          </p>
        </div>
      </div>
    </footer>
  );
}
