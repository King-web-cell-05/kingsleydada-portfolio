/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Code2,
  Palette,
  Figma,
  ArrowUpRight,
  Heart,
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
    {
      icon: Code2,
      title: "Full-Stack Development",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
    },
    {
      icon: Figma,
      title: "Graphic Design",
    },
    {
      icon: Code2,
      title: "Web Applications",
    },
    {
      icon: ArrowUpRight,
      title: "API & Backend Development",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/King-web-cell-05",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dada-kingsley-a0858637a",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://x.com/codekingz05",
      label: "X",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/kingsleydada/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#020409] px-6 pt-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-500/[0.05] blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/[0.04] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
                <span className="text-lg font-bold text-emerald-400">
                  DK
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  Dada Kingsley
                </h3>
                <p className="text-xs text-emerald-400">
                  Developer • Designer
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Full Stack Developer, UI/UX Designer, and Graphic Designer
              focused on creating modern, responsive, and user-friendly
              digital experiences.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-gray-400 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-400"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.1,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Navigation
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                  >
                    <span className="h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Services
            </h4>

            <ul className="space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.li
                    key={service.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-sm text-gray-400"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03]">
                      <Icon className="h-4 w-4 text-emerald-400" />
                    </div>

                    <span>{service.title}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.3,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Get In Touch
            </h4>

            <div className="space-y-5">
              <a
                href="mailto:kingsleydada159@gmail.com"
                className="group flex items-start gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03]">
                  <Mail className="h-4 w-4 text-emerald-400" />
                </div>

                <div>
                  <p className="mb-1 text-xs text-gray-500">Email</p>
                  <p className="break-all text-sm text-gray-300 transition-colors group-hover:text-emerald-400">
                    kingsleydada159@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+2349065644691"
                className="group flex items-start gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03]">
                  <Phone className="h-4 w-4 text-emerald-400" />
                </div>

                <div>
                  <p className="mb-1 text-xs text-gray-500">Phone</p>
                  <p className="text-sm text-gray-300 transition-colors group-hover:text-emerald-400">
                    +234 906 564 4691
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03]">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                </div>

                <div>
                  <p className="mb-1 text-xs text-gray-500">Location</p>
                  <p className="text-sm leading-6 text-gray-300">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 overflow-hidden rounded-2xl border border-emerald-400/10 bg-gradient-to-r from-emerald-400/[0.07] via-white/[0.02] to-cyan-400/[0.05] p-6 md:p-8"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Have a project in mind?
              </p>

              <h3 className="text-xl font-bold text-white md:text-2xl">
                Let's build something great together.
              </h3>
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="group inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-400 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400 hover:text-black"
            >
              Start a Conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-7 text-center sm:flex-row sm:text-left"
        >
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Dada Kingsley. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-gray-500">
            Designed & developed 
            by Dada Kingsley
          </p>
        </motion.div>
      </div>
    </footer>
  );
}