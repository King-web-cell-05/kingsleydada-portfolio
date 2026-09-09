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
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

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

  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      label: "Primary Contact",
      value: "kingsleydada159@gmail.com",
      href: "mailto:kingsleydada159@gmail.com",
      description: "Usually responds within a few hours",
    },
    {
      icon: Phone,
      title: "Phone",
      label: "Direct Contact",
      value: "+234 906 564 4691",
      href: "tel:+2349065644691",
      description: "Available during business hours",
    },
    {
      icon: MapPin,
      title: "Location",
      label: "Based In",
      value: "Lagos State, Nigeria",
      href: "#",
      description: "Working with clients remotely",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/King-web-cell-05",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dada-kingsley-a0858637a",
    },
    {
      icon: Twitter,
      label: "X",
      href: "https://x.com/codekingz05",
    },
    {
      icon: Instagram,
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

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#03050a] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/[0.04] blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
      </div>

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            Let's Work Together
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Great
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
            Have a project, idea, or opportunity in mind? Send me a message
            and let's discuss how I can help turn it into a reliable and
            polished digital experience.
          </p>
        </motion.div>

        {/* ================= CONTACT CARDS ================= */}
        <div className="mb-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#070a10] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/[0.06] text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  {card.title !== "Location" && (
                    <ArrowUpRight className="h-4 w-4 text-zinc-600 transition-colors group-hover:text-emerald-300" />
                  )}
                </div>

                <p className="mb-1 text-xs uppercase tracking-wider text-zinc-500">
                  {card.label}
                </p>

                {card.href !== "#" ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith("mailto:") || card.href.startsWith("tel:") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="break-all text-sm font-semibold text-zinc-100 transition-colors hover:text-emerald-300 sm:text-base"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-zinc-100 sm:text-base">
                    {card.value}
                  </p>
                )}

                <p className="mt-2 text-xs text-zinc-500">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {/* Inquiry Card */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#070a10] p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.05] text-cyan-300">
                  <Server className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    What I Can Help With
                  </h3>
                  <p className="mt-0.5 text-xs text-zinc-500">
                    Areas of development and design
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {inquiryCategories.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-white/[0.05] bg-white/[0.015] px-3 py-2.5"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />

                    <span className="text-sm text-zinc-400">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="rounded-2xl border border-emerald-400/10 bg-gradient-to-br from-emerald-400/[0.07] to-transparent p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <Clock className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Business Hours
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Monday – Friday
                  </p>

                  <p className="mt-1 text-sm font-medium text-emerald-300">
                    9:00 AM – 6:00 PM WAT
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#070a10] p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
                Connect With Me
              </p>

              <div className="grid grid-cols-4 gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group flex h-11 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-zinc-500 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/[0.06] hover:text-emerald-300"
                    >
                      <Icon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ================= FORM ================= */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/[0.07] bg-[#070a10] p-5 sm:p-7"
          >
            <div className="mb-7">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/[0.06] text-emerald-300">
                <MessageCircle className="h-5 w-5" />
              </div>

              <h3 className="text-xl font-semibold text-white">
                Send a Message
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Fill out the form and it will open WhatsApp with your message.
              </p>
            </div>

            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/[0.08] bg-[#03050a] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/10"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="yourname@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/[0.08] bg-[#03050a] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/10"
              />
            </div>

            {/* Project Type */}
            <div className="mb-5">
              <label
                htmlFor="projectType"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Project Type
              </label>

              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/[0.08] bg-[#03050a] px-4 py-3 text-sm text-zinc-300 outline-none transition-all duration-300 focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/10"
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
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-zinc-300"
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
                className="w-full resize-none rounded-xl border border-white/[0.08] bg-[#03050a] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/10"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-semibold text-[#03110b] transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] active:scale-[0.99]"
            >
              <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />

              {submitted ? "Opening WhatsApp..." : "Send via WhatsApp"}

              {!submitted && (
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              )}
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-center text-xs text-emerald-400"
              >
                WhatsApp is opening with your message...
              </motion.p>
            )}
          </motion.form>
        </div>

        {/* ================= BOTTOM ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 border-t border-white/[0.06] pt-6 text-center"
        >
          <div className="inline-flex items-center gap-2 text-xs text-zinc-600">
            <ShieldCheck className="h-4 w-4 text-emerald-500/70" />
            <span>
              Professional communication • Secure project discussions
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}