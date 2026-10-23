
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Inter } from "next/font/google";
import {
  ArrowUpRight,
  ArrowDownRight,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roles = [
  "Full-Stack Developer",
  "UI/UX Designer",
  "Graphic Designer",
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/King-web-cell-05",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dada-kingsley-a0858637a",
    icon: FaLinkedin,
  },
  {
    name: "X",
    href: "https://x.com/codekingz05",
    icon: FaXTwitter,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/2349065644691",
    icon: FaWhatsapp,
  },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "03", label: "Creative Fields" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Smooth typewriter animation
  useEffect(() => {
    if (reduceMotion) return;

    const currentRole = roles[roleIndex];

    let delay = isDeleting ? 45 : 85;

    if (!isDeleting && displayText === currentRole) {
      delay = 2200;
    } else if (isDeleting && displayText === "") {
      delay = 350;
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          currentRole.slice(
            0,
            displayText.length + (isDeleting ? -1 : 1)
          )
        );
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [roleIndex, displayText, isDeleting, reduceMotion]);

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      delay,
      ease,
    },
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="hero"
      className={`relative isolate min-h-screen overflow-hidden bg-[#090406] text-white ${inter.className}`}
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#080406_0%,#170407_40%,#32050c_75%,#120407_100%)]" />

        <div className="absolute -right-[20%] -top-[40%] h-[750px] w-[900px] rounded-full bg-[#a50920]/35 blur-[140px]" />

        <div className="absolute -left-[25%] top-[15%] h-[600px] w-[600px] rounded-full bg-[#770819]/25 blur-[130px]" />

        <div className="absolute -bottom-[480px] right-[-230px] h-[850px] w-[850px] rounded-full bg-[radial-gradient(circle_at_40%_30%,#f32c3e_0%,#b70b22_32%,#690817_65%,#25040a_100%)] opacity-80 shadow-[0_0_160px_rgba(205,14,38,0.22)] sm:-bottom-[550px] sm:right-[-150px] lg:-bottom-[650px] lg:right-[-180px] lg:h-[1050px] lg:w-[1050px]" />

        <div className="absolute bottom-[-20%] right-[5%] h-[500px] w-[500px] rounded-full bg-[#ff243a]/20 blur-[130px]" />

        <div className="absolute -left-[350px] -top-[520px] h-[950px] w-[1050px] rounded-full bg-black/65 blur-[5px]" />

        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-screen"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.6'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.45)_100%)]" />
      </div>

      {/* MAIN CONTENT */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1320px] items-center px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-20">

          {/* LEFT CONTENT */}

          <div className="relative z-20 min-w-0 max-w-[650px]">

            {/* Availability */}
            <motion.div
              {...reveal(0.05)}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.13] bg-white/[0.055] px-4 py-2.5 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-[#ff4d60]/30" />
                <span className="relative h-2 w-2 rounded-full bg-[#ff5266] shadow-[0_0_12px_rgba(255,70,94,0.6)]" />
              </span>

              <span className="text-[11px] font-medium tracking-[0.08em] text-white/75 sm:text-xs">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>

            {/* Introduction */}
            <motion.p
              {...reveal(0.12)}
              className="mb-4 text-sm font-medium tracking-[0.14em] text-[#ff7583] sm:text-[15px]"
            >
              HELLO, I'M
            </motion.p>

            {/* Name */}
            <motion.h1
              {...reveal(0.18)}
              className="max-w-[700px] text-[clamp(2.65rem,5.4vw,5.1rem)] font-extrabold leading-[1.07] tracking-[-0.065em]"
            >
              <span className="block text-white">
                Dada Kingsley
              </span>

              <span className="block bg-gradient-to-r from-white via-[#ffe3e6] to-[#ff6173] bg-clip-text pb-2 text-transparent">
                Oluwasanmi.
              </span>
            </motion.h1>

            {/* Professional roles - Typewriter */}
            <motion.div
              {...reveal(0.26)}
              className="mt-5 flex min-h-[36px] min-w-0 items-center gap-3"
            >
              <span
                aria-hidden="true"
                className="h-6 w-[3px] shrink-0 rounded-full bg-[#ff5268]"
              />

              <p className="flex min-w-0 items-center text-[15px] font-semibold tracking-[-0.015em] text-white/90 sm:text-[19px]">
                <span className="sr-only">
                  Full-Stack Developer, UI/UX Designer and Graphic Designer
                </span>

                <span aria-hidden="true">
                  {reduceMotion ? roles[0] : displayText}
                </span>

                {!reduceMotion && (
                  <motion.span
                    aria-hidden="true"
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                      times: [0, 0.45, 0.5, 1],
                    }}
                    className="ml-[5px] inline-block h-[21px] w-[2px] shrink-0 rounded-full bg-[#ff5268] shadow-[0_0_9px_rgba(255,82,104,0.45)]"
                  />
                )}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              {...reveal(0.34)}
              className="mt-7 max-w-[510px] text-[14px] leading-[1.9] text-[#c0b2b6] sm:text-[16px]"
            >
              I design and develop modern digital experiences
              that combine clean interfaces, thoughtful design,
              and reliable engineering. From concept to
              production, I build products that look exceptional
              and work seamlessly.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...reveal(0.42)}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="group inline-flex min-h-[51px] items-center justify-center gap-3 rounded-xl bg-[#f02d43] px-7 py-3.5 text-[13px] font-semibold text-white shadow-[0_12px_35px_rgba(220,18,48,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff4055] hover:shadow-[0_16px_40px_rgba(220,18,48,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8794]"
              >
                Let's Work Together

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="group inline-flex min-h-[51px] items-center justify-center gap-3 rounded-xl border border-white/[0.17] bg-white/[0.055] px-7 py-3.5 text-[13px] font-semibold text-white/90 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8794]"
              >
                View My Projects

                <BriefcaseBusiness
                  size={17}
                  className="text-white/65 transition-colors group-hover:text-white"
                />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              {...reveal(0.5)}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <span className="text-xs font-medium text-white/40">
                Connect with me
              </span>

              <div className="h-px w-7 bg-white/20" />

              <div className="flex items-center gap-2">
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.045] text-white/60 backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff6475]/45 hover:bg-[#ff4055]/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8794]"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...reveal(0.58)}
              className="mt-11 grid max-w-[510px] grid-cols-3 border-t border-white/[0.12] pt-7"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`min-w-0 ${
                    index === 0
                      ? "pr-3"
                      : "border-l border-white/[0.12] pl-4 sm:pl-7"
                  }`}
                >
                  <p className="text-[23px] font-bold tracking-[-0.045em] text-white sm:text-[29px]">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-white/45 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 35, scale: 0.97 }
            }
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease,
            }}
            className="relative mx-auto w-full max-w-[400px] lg:max-w-[440px]"
          >
            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-12 rounded-full bg-[#df1634]/20 blur-[90px]"
            />

            {/* Glass image frame */}
            <div className="relative rounded-[30px] border border-white/[0.2] bg-gradient-to-br from-white/[0.19] via-white/[0.045] to-[#a70c22]/[0.16] p-[7px] shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
              <div className="relative aspect-[4/4.65] overflow-hidden rounded-[23px] bg-[#16070b]">

                <Image
                  src="/my-portfolio-pic.jpg"
                  alt="Dada Kingsley Oluwasanmi"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 400px, 440px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.035]"
                />

                {/* Image overlays */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#150307]/85 via-transparent to-[#130307]/10" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#b50d27]/20 mix-blend-screen" />

                {/* Bottom image label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/55">
                        Developer & Designer
                      </p>

                      <p className="text-[18px] font-semibold tracking-[-0.035em] text-white sm:text-[20px]">
                        Building with purpose.
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl">
                      <Code2
                        size={19}
                        className="text-white/90"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability glass card */}
            <div className="absolute -right-2 top-8 hidden items-center gap-3 rounded-2xl border border-white/20 bg-[#250a11]/75 px-4 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:flex xl:-right-6">
              <span className="h-2 w-2 rounded-full bg-[#ff5268] shadow-[0_0_12px_rgba(255,82,104,0.65)]" />

              <span className="text-xs font-medium text-white/85">
                Open to opportunities
              </span>
            </div>

            {/* Development glass card */}
            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-white/15 bg-[#22080e]/85 px-5 py-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:flex xl:-left-7">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ef3048]/15 text-[#ff7180]">
                <Code2 size={18} />
              </div>

              <div>
                <p className="text-[10px] text-white/45">
                  Focused on
                </p>

                <p className="mt-0.5 text-xs font-semibold text-white/90">
                  Design & Development
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.button
        type="button"
        onClick={() => scrollTo("projects")}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/35 transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8794] lg:flex"
        aria-label="Scroll to projects"
      >
        Scroll to explore
        <ArrowDownRight size={15} />
      </motion.button>
    </section>
  );
}
