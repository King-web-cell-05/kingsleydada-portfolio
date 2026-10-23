
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Inter } from "next/font/google";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Send,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const EASE = [0.22, 1, 0.36, 1] as const;

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    label: "SEND AN EMAIL",
    value: "kingsleydada159@gmail.com",
    href: "mailto:kingsleydada159@gmail.com",
    description: "For project inquiries and collaborations",
  },
  {
    icon: Phone,
    title: "Phone",
    label: "DIRECT CONTACT",
    value: "+234 906 564 4691",
    href: "tel:+2349065644691",
    description: "Available during business hours",
  },
  {
    icon: MapPin,
    title: "Location",
    label: "BASED IN",
    value: "Lagos State, Nigeria",
    href: "",
    description: "Open to remote collaborations",
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

const services = [
  "Full-stack web applications",
  "Frontend development & UI/UX",
  "Backend APIs & integrations",
  "Responsive business websites",
  "Performance & optimization",
];

const projectTypes = [
  "Web Application",
  "Full-Stack Development",
  "Frontend / UI/UX",
  "Backend / API Development",
  "Business Website",
  "Other",
];

const fieldClass =
  "w-full min-w-0 rounded-xl border border-white/[0.11] bg-[#12090c]/75 px-4 py-3.5 text-[13px] text-white placeholder:text-white/25 outline-none transition-[border-color,background-color,box-shadow] duration-300 hover:border-white/20 focus:border-[#ff5268]/55 focus:bg-[#1b0b10] focus:ring-4 focus:ring-[#ff5268]/[0.08] sm:text-[14px]";

type ContactForm = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState("");
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: {
      duration: 0.7,
      delay,
      ease: EASE,
    },
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status) setStatus("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = [
      "Hello Kingsley,",
      "",
      "I'd like to discuss a project with you.",
      "",
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Project Type: ${formData.projectType}`,
      "",
      "Project Details:",
      formData.message.trim(),
    ].join("\n");

    const url = `https://wa.me/2349065644691?text=${encodeURIComponent(text)}`;

    setStatus(
      "WhatsApp is opening. Review your message and tap Send to complete your inquiry."
    );

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className={`relative isolate overflow-hidden border-t border-white/[0.07] bg-[#090406] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32 ${inter.className}`}
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#090406_0%,#160508_45%,#25060d_75%,#0b0406_100%)]" />

        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#a50920]/[0.12] blur-[150px]" />

        <div className="absolute -left-[15%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-[#b70b22]/[0.1] blur-[150px]" />

        <div className="absolute -right-[15%] top-[40%] h-[550px] w-[550px] rounded-full bg-[#ff243a]/[0.06] blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px]">
        {/* HEADER */}
        <motion.div
          {...reveal()}
          className="mx-auto mb-14 max-w-[730px] text-center sm:mb-16"
        >
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#ff5268]/20 bg-[#ff5268]/[0.07] px-4 py-2 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5268] shadow-[0_0_10px_rgba(255,82,104,0.5)]" />

            <span className="text-[11px] font-medium tracking-[0.07em] text-[#ff9aa5]">
              LET'S WORK TOGETHER
            </span>
          </div>

          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.12] tracking-[-0.055em]">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-white via-[#ffd9de] to-[#ff6173] bg-clip-text text-transparent">
              Something Great.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-7 text-white/50 sm:text-[16px] sm:leading-8">
            Have a project, idea, or opportunity in mind? Tell me
            what you're working on, and let's explore how to bring
            it to life.
          </p>
        </motion.div>

        {/* CONTACT INFORMATION */}
        <div className="mb-7 grid gap-4 md:grid-cols-3 lg:gap-5">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                {...reveal(0.08 + index * 0.08)}
                className="group relative min-w-0 overflow-hidden rounded-[22px] border border-white/[0.1] bg-white/[0.035] p-6 backdrop-blur-xl transition-[border-color,background-color] duration-300 hover:border-[#ff5268]/30 hover:bg-white/[0.055]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#ff5268]/45 to-transparent"
                />

                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff5268]/25 bg-[#ff5268]/[0.1] text-[#ff7583]">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  {card.href && (
                    <ArrowUpRight
                      size={17}
                      className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ff7583]"
                    />
                  )}
                </div>

                <p className="text-[10px] font-semibold tracking-[0.1em] text-[#ff8290]/75">
                  {card.label}
                </p>

                {card.href ? (
                  <a
                    href={card.href}
                    className="mt-2 block break-all text-[14px] font-semibold text-white/90 transition-colors hover:text-[#ff9aa5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583] sm:text-[15px]"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-2 text-[14px] font-semibold text-white/90 sm:text-[15px]">
                    {card.value}
                  </p>
                )}

                <p className="mt-2 text-[12px] leading-6 text-white/40">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* MAIN CONTACT AREA */}
        <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-7">
          {/* LEFT COLUMN */}
          <div className="space-y-5">
            {/* SERVICES */}
            <motion.div
              {...reveal(0.1)}
              className="relative overflow-hidden rounded-[24px] border border-white/[0.1] bg-white/[0.035] p-6 backdrop-blur-xl sm:p-7"
            >
              <div className="mb-6 flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff5268]/20 bg-[#ff5268]/[0.09] text-[#ff7583]">
                  <Sparkles size={19} />
                </div>

                <div>
                  <h3 className="text-[16px] font-semibold text-white">
                    What I Can Help With
                  </h3>

                  <p className="mt-1 text-[12px] text-white/40">
                    Development, design & engineering
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.075] bg-white/[0.025] px-3.5 py-3"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-[#ff7583]"
                    />

                    <span className="text-[13px] text-white/65">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* AVAILABILITY */}
            <motion.div
              {...reveal(0.15)}
              className="relative overflow-hidden rounded-[24px] border border-[#ff5268]/20 bg-gradient-to-br from-[#ff5268]/[0.1] to-white/[0.025] p-6 backdrop-blur-xl sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#ff5268]/25 bg-[#ff5268]/[0.1] text-[#ff7583]">
                  <Clock3 size={19} />
                </div>

                <div>
                  <h3 className="text-[16px] font-semibold text-white">
                    Business Hours
                  </h3>

                  <p className="mt-2 text-[13px] text-white/50">
                    Monday – Friday
                  </p>

                  <p className="mt-1 text-[14px] font-semibold text-[#ff9aa5]">
                    9:00 AM – 6:00 PM WAT
                  </p>

                  <p className="mt-3 text-[12px] leading-6 text-white/40">
                    Feel free to send an inquiry at any time.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div
              {...reveal(0.2)}
              className="rounded-[24px] border border-white/[0.1] bg-white/[0.035] p-6 backdrop-blur-xl sm:p-7"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-[15px] font-semibold text-white">
                    Find Me Online
                  </h3>

                  <p className="mt-1 text-[12px] text-white/40">
                    Connect and explore my work
                  </p>
                </div>

                <ArrowUpRight size={17} className="text-[#ff7583]/60" />
              </div>

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
                      title={social.label}
                      className="flex h-12 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.045] text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff5268]/35 hover:bg-[#ff5268]/[0.1] hover:text-[#ff9aa5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583]"
                    >
                      <Icon size={19} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* CONTACT FORM */}
          <motion.form
            {...reveal(0.12)}
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[26px] border border-white/[0.12] bg-white/[0.04] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8 lg:p-9"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#ff5268]/60 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#b70b22]/[0.08] blur-[90px]"
            />

            {/* FORM HEADER */}
            <div className="relative mb-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#ff5268]/25 bg-[#ff5268]/[0.1] text-[#ff7583]">
                <MessageCircle size={21} />
              </div>

              <div>
                <h3 className="text-[20px] font-bold tracking-[-0.03em] text-white sm:text-[23px]">
                  Tell Me About Your Project
                </h3>

                <p className="mt-1.5 text-[12px] leading-6 text-white/45 sm:text-[13px]">
                  Complete the form to prepare a WhatsApp message.
                </p>
              </div>
            </div>

            {/* NAME AND EMAIL */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-[12px] font-semibold text-white/75"
                >
                  Full Name <span className="text-[#ff7583]">*</span>
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={100}
                  required
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-[12px] font-semibold text-white/75"
                >
                  Email Address <span className="text-[#ff7583]">*</span>
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={254}
                  required
                  className={fieldClass}
                />
              </div>
            </div>

            {/* PROJECT TYPE */}
            <div className="mt-5">
              <label
                htmlFor="contact-project-type"
                className="mb-2 block text-[12px] font-semibold text-white/75"
              >
                Project Type <span className="text-[#ff7583]">*</span>
              </label>

              <select
                id="contact-project-type"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className={`${fieldClass} [color-scheme:dark] ${
                  formData.projectType ? "text-white" : "text-white/35"
                }`}
              >
                <option value="">Select a service</option>

                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* MESSAGE */}
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="contact-message"
                  className="text-[12px] font-semibold text-white/75"
                >
                  Project Details <span className="text-[#ff7583]">*</span>
                </label>

                <span className="text-[10px] tabular-nums text-white/30">
                  {formData.message.length}/2000
                </span>
              </div>

              <textarea
                id="contact-message"
                name="message"
                rows={7}
                placeholder="Tell me about your idea, project requirements, timeline, or what you'd like to build..."
                value={formData.message}
                onChange={handleChange}
                maxLength={2000}
                required
                className={`${fieldClass} min-h-[180px] resize-y`}
              />
            </div>

            {/* SUBMIT */}
            <motion.button
              type="submit"
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              className="group relative mt-7 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#f02d43] px-5 py-4 text-[13px] font-semibold text-white shadow-[0_10px_30px_rgba(220,18,48,0.18)] transition-[background-color,box-shadow] duration-300 hover:bg-[#ff4055] hover:shadow-[0_14px_40px_rgba(220,18,48,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583] focus-visible:ring-offset-2 focus-visible:ring-offset-[#100609]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[130%]"
              />

              <Send size={17} className="relative" />

              <span className="relative">Continue to WhatsApp</span>

              <ArrowUpRight
                size={16}
                className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.button>

            {/* FORM STATUS */}
            <div role="status" aria-live="polite">
              {status && (
                <p className="mt-4 text-center text-[12px] leading-6 text-[#ff9aa5]">
                  {status}
                </p>
              )}
            </div>

            {/* FORM FOOTER */}
            <div className="mt-6 flex items-start gap-2.5 border-t border-white/[0.09] pt-5">
              <ShieldCheck
                size={16}
                className="mt-0.5 shrink-0 text-[#ff7583]/80"
              />

              <p className="text-[11px] leading-6 text-white/40">
                Your details are used to prepare the message. Nothing is
                submitted until you confirm and send it in WhatsApp.
              </p>
            </div>
          </motion.form>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          {...reveal(0.1)}
          className="mt-14 flex flex-col items-center justify-between gap-5 rounded-[22px] border border-white/[0.1] bg-white/[0.035] px-6 py-6 text-center backdrop-blur-xl sm:flex-row sm:px-8 sm:text-left"
        >
          <div>
            <h3 className="text-[16px] font-semibold text-white">
              Prefer a quick conversation?
            </h3>

            <p className="mt-1.5 text-[12px] leading-6 text-white/45">
              Reach out directly on WhatsApp to discuss your project.
            </p>
          </div>

          <a
            href="https://wa.me/2349065644691"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#ff5268]/30 bg-[#ff5268]/[0.1] px-5 py-3 text-[12px] font-semibold text-[#ff9aa5] transition-all duration-300 hover:border-[#ff5268]/50 hover:bg-[#ff5268]/[0.17] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583]"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
