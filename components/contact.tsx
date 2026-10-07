/* eslint-disable react/no-unescaped-entities */

"use client";

import { useState } from "react";
import type React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Server,
  ShieldCheck,
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MotionConfig, motion, type Variants } from "framer-motion";
import { Cinzel, Inter } from "next/font/google";

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
    transition: { staggerChildren: 0.12 },
  },
};

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    label: "Primary contact",
    value: "kingsleydada159@gmail.com",
    href: "mailto:kingsleydada159@gmail.com",
    description: "Usually responds within a few hours",
  },
  {
    icon: Phone,
    title: "Phone",
    label: "Direct contact",
    value: "+234 906 564 4691",
    href: "tel:+2349065644691",
    description: "Available during business hours",
  },
  {
    icon: MapPin,
    title: "Location",
    label: "Based in",
    value: "Lagos State, Nigeria",
    href: "",
    description: "Working with clients remotely",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/King-web-cell-05",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dada-kingsley-a0858637a",
  },
  {
    icon: FaXTwitter,
    label: "X",
    href: "https://x.com/codekingz05",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/kingsleydada/",
  },
];

const inquiryCategories = [
  "Full-stack development",
  "Frontend development & UI/UX",
  "API development & integrations",
  "Performance optimization",
  "Responsive web applications",
];

const fieldClass =
  "w-full rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:border-white/[0.16] focus:border-emerald-400/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-emerald-400/15";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phone = "2349065644691";

    const text = `Hello Kingsley 👋

My name is ${formData.name}.

📧 Email: ${formData.email}
💼 Project Type: ${formData.projectType}
📝 Message: ${formData.message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      projectType: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="contact"
        className={`relative overflow-hidden bg-[#03060a] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-32 ${inter.className}`}
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/[0.06] blur-[150px]" />
          <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-cyan-500/[0.04] blur-[130px]" />
          <div className="absolute -right-40 top-[40%] h-[400px] w-[400px] rounded-full bg-sky-500/[0.04] blur-[140px]" />

          {/* Fading grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 40%, black 25%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 40%, black 25%, transparent 100%)",
            }}
          />

          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.5)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* ================= HEADER ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
          >
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.03] py-1.5 pl-3 pr-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
              <span className="text-xs font-medium text-gray-300">
                Let's work together
              </span>
            </div>

            <h2
              className={`${cinzel.className} bg-gradient-to-br from-white via-gray-100 to-emerald-400 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl`}
            >
              Let's Build Something Great
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] font-light leading-8 text-gray-400 sm:text-base">
              Have a project, idea, or opportunity in mind? Send me a message
              and let's discuss how I can help turn it into a reliable and
              polished digital experience.
            </p>
          </motion.div>

          {/* ================= CONTACT CARDS ================= */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              const isLink = Boolean(card.href);

              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-black/40 backdrop-blur-sm transition-colors duration-500 hover:border-emerald-400/25 hover:bg-white/[0.035]"
                >
                  {/* Top highlight */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
                  />

                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-400 shadow-[0_0_24px_-6px_rgba(52,211,153,0.5)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    {isLink && (
                      <ArrowUpRight
                        aria-hidden
                        className="h-4 w-4 text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300"
                      />
                    )}
                  </div>

                  <p className="mb-1.5 text-xs text-gray-500">{card.label}</p>

                  {isLink ? (
                    <a
                      href={card.href}
                      className="break-all rounded text-sm font-semibold text-gray-100 transition-colors hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:text-base"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-gray-100 sm:text-base">
                      {card.value}
                    </p>
                  )}

                  <p className="mt-2.5 text-xs font-light text-gray-500">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ================= MAIN CONTENT ================= */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            {/* ================= LEFT SIDE ================= */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-5"
            >
              {/* What I can help with */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-7"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-400">
                    <Server className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-gray-100">
                      What I can help with
                    </h3>
                    <p className="mt-0.5 text-xs text-gray-500">
                      Areas of development and design
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {inquiryCategories.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      <span className="text-sm font-light text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Business hours */}
              <motion.div
                variants={fadeUp}
                className="relative overflow-hidden rounded-3xl border border-emerald-400/15 bg-gradient-to-br from-emerald-400/[0.08] to-white/[0.015] p-6 shadow-2xl shadow-black/40 sm:p-7"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
                />

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-400">
                    <Clock className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-gray-100">
                      Business hours
                    </h3>

                    <p className="mt-1.5 text-sm font-light text-gray-400">
                      Monday – Friday
                    </p>

                    <p className="mt-1 text-sm font-medium text-emerald-300">
                      9:00 AM – 6:00 PM WAT
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Socials */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-7"
              >
                <p className="mb-4 text-sm font-medium text-gray-300">
                  Connect with me
                </p>

                <div className="grid grid-cols-4 gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="group flex h-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-emerald-400/[0.07] hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                      >
                        <Icon size={17} />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* ================= FORM ================= */}
            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-8"
            >
              {/* Top highlight */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
              />

              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-400 shadow-[0_0_24px_-6px_rgba(52,211,153,0.5)]">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-100">
                    Send a message
                  </h3>

                  <p className="mt-0.5 text-sm font-light text-gray-500">
                    Fill out the form and it will open WhatsApp with your
                    message.
                  </p>
                </div>
              </div>

              {/* Name */}
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="yourname@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>

              {/* Project type */}
              <div className="mb-5">
                <label
                  htmlFor="projectType"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Project type
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className={`${fieldClass} [color-scheme:dark] ${
                    formData.projectType ? "text-white" : "text-gray-500"
                  }`}
                >
                  <option value="">Select your project type</option>
                  <option value="Web Application">Web Application</option>
                  <option value="Full-Stack Build">Full-Stack Build</option>
                  <option value="Frontend / UI/UX">Frontend / UI/UX</option>
                  <option value="API Integration">API Integration</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-7">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`${fieldClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileTap={{ scale: 0.985 }}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-500 px-5 py-3.5 text-sm font-semibold text-[#02110b] shadow-[0_8px_30px_-8px_rgba(16,185,129,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] transition-shadow duration-300 hover:shadow-[0_12px_40px_-8px_rgba(16,185,129,0.7),inset_0_1px_0_rgba(255,255,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03060a]"
              >
                {/* Sheen on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[130%]"
                />

                <MessageCircle className="relative h-4 w-4" />

                <span className="relative">
                  {submitted ? "Opening WhatsApp..." : "Send via WhatsApp"}
                </span>

                {!submitted && (
                  <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                )}
              </motion.button>

              {/* Status message (announced to screen readers) */}
              <div role="status" aria-live="polite" className="min-h-[1.5rem]">
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-center text-xs text-emerald-400"
                  >
                    WhatsApp is opening with your message...
                  </motion.p>
                )}
              </div>
            </motion.form>
          </div>

          {/* ================= BOTTOM ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="mx-auto mb-6 h-px max-w-xs bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

            <div className="inline-flex items-center gap-2 text-sm font-light text-gray-500">
              <ShieldCheck className="h-4 w-4 text-emerald-500/70" />
              <span>Professional communication and secure project discussions</span>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}