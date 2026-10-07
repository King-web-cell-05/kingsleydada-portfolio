/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { MotionConfig, motion, type Variants } from "framer-motion";
import { Cinzel, Inter } from "next/font/google";
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
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const quickLinks = [
  { label: "Home", id: "hero" },
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
    breakAll: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 906 564 4691",
    href: "tel:+2349065644691",
    breakAll: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: "",
    breakAll: false,
  },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <MotionConfig reducedMotion="user">
      <footer
        className={`relative overflow-hidden border-t border-white/[0.06] bg-[#02040a] px-5 pt-24 text-white sm:px-8 lg:px-10 ${inter.className}`}
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-500/[0.06] blur-[130px]" />
          <div className="absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-cyan-500/[0.045] blur-[140px]" />

          {/* Fading grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent 100%)",
            }}
          />

          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.5)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* ================= CTA ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative mb-20 overflow-hidden rounded-3xl border border-emerald-400/15 bg-gradient-to-br from-emerald-400/[0.09] via-white/[0.02] to-cyan-400/[0.05] p-7 shadow-2xl shadow-black/40 sm:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
            />

            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <p className="mb-3 text-sm font-medium text-emerald-300">
                  Have a project in mind?
                </p>

                <h3
                  className={`${cinzel.className} bg-gradient-to-br from-white via-gray-100 to-emerald-300 bg-clip-text text-2xl font-bold leading-tight text-transparent sm:text-3xl lg:text-4xl`}
                >
                  Let's build something great together.
                </h3>
              </div>

              <motion.button
                type="button"
                onClick={() => scrollToSection("contact")}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-500 px-7 py-3.5 text-sm font-semibold text-[#02110b] shadow-[0_8px_30px_-8px_rgba(16,185,129,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] transition-shadow duration-300 hover:shadow-[0_12px_40px_-8px_rgba(16,185,129,0.7),inset_0_1px_0_rgba(255,255,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#02040a]"
              >
                {/* Sheen on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[130%]"
                />

                <span className="relative">Start a conversation</span>

                <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.button>
            </div>
          </motion.div>

          {/* ================= MAIN FOOTER ================= */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr] lg:gap-10"
          >
            {/* About */}
            <motion.div variants={fadeUp}>
              <div className="mb-5 flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] shadow-[0_0_24px_-6px_rgba(52,211,153,0.5)]">
                  <span
                    className={`${cinzel.className} text-lg font-bold text-emerald-400`}
                  >
                    DK
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-gray-100">
                    Dada Kingsley
                  </h3>
                  <p className="text-xs text-emerald-400">
                    Developer & designer
                  </p>
                </div>
              </div>

              <p className="max-w-sm text-sm font-light leading-7 text-gray-400">
                Full Stack Developer, UI/UX Designer, and Graphic Designer
                focused on creating modern, responsive, and user-friendly
                digital experiences.
              </p>

              {/* Social links */}
              <div className="mt-7 flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-emerald-400/[0.07] hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.nav variants={fadeUp} aria-label="Footer">
              <h4 className="mb-6 text-sm font-semibold text-gray-100">
                Navigation
              </h4>

              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.id)}
                      className="group flex items-center gap-2 rounded text-sm font-light text-gray-400 transition-colors duration-300 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                    >
                      <span
                        aria-hidden
                        className="h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-4"
                      />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Services */}
            <motion.div variants={fadeUp}>
              <h4 className="mb-6 text-sm font-semibold text-gray-100">
                Services
              </h4>

              <ul className="space-y-3.5">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <li
                      key={service.title}
                      className="flex items-center gap-3 text-sm font-light text-gray-400"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        <Icon className="h-4 w-4 text-emerald-400" />
                      </div>

                      <span>{service.title}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeUp}>
              <h4 className="mb-6 text-sm font-semibold text-gray-100">
                Get in touch
              </h4>

              <ul className="space-y-5">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        <Icon className="h-4 w-4 text-emerald-400" />
                      </div>

                      <div>
                        <p className="mb-0.5 text-xs text-gray-500">
                          {item.label}
                        </p>
                        <p
                          className={`text-sm text-gray-300 transition-colors group-hover:text-emerald-300 ${
                            item.breakAll ? "break-all" : ""
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </>
                  );

                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="group flex items-start gap-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-start gap-3">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>

          {/* ================= BOTTOM BAR ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] py-8 text-center sm:flex-row sm:text-left"
          >
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Dada Kingsley. All rights reserved.
            </p>

            <p className="text-xs text-gray-500">
              Designed & developed by Dada Kingsley
            </p>
          </motion.div>
        </div>
      </footer>
    </MotionConfig>
  );
}