/* eslint-disable react/no-unescaped-entities */

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import { Cinzel, Inter } from "next/font/google";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const roles = ["Fullstack Developer", "UI/UX Designer", "Graphic Designer"];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/King-web-cell-05",
    icon: FaGithub,
    hover:
      "hover:border-emerald-400/40 hover:bg-emerald-400/[0.08] hover:text-emerald-300",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dada-kingsley-a0858637a",
    icon: FaLinkedin,
    hover:
      "hover:border-sky-400/40 hover:bg-sky-400/[0.08] hover:text-sky-300",
  },
  {
    label: "X",
    href: "https://x.com/codekingz05",
    icon: FaXTwitter,
    hover: "hover:border-white/30 hover:bg-white/[0.07] hover:text-white",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2349065644691",
    icon: FaWhatsapp,
    hover:
      "hover:border-green-400/40 hover:bg-green-400/[0.08] hover:text-green-300",
  },
];

const stats = [
  { value: "3+", label: "Years experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "3", label: "Creative fields" },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* One orchestrated page-load sequence for the left column */
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* =========================================================
     TYPEWRITER EFFECT
  ========================================================= */

  useEffect(() => {
    // With reduced motion, just show the first role statically.
    if (reduceMotion) {
      setDisplayText(roles[0]);
      return;
    }

    const currentRole = roles[currentRoleIndex];
    let delay = isDeleting ? 45 : 85;
    let next: () => void;

    if (!isDeleting && displayText.length < currentRole.length) {
      next = () => setDisplayText(currentRole.slice(0, displayText.length + 1));
    } else if (!isDeleting) {
      delay = 1800;
      next = () => setIsDeleting(true);
    } else if (displayText.length > 0) {
      next = () => setDisplayText(currentRole.slice(0, displayText.length - 1));
    } else {
      delay = 350;
      next = () => {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      };
    }

    const timer = setTimeout(next, delay);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, reduceMotion]);

  /* =========================================================
     BACKGROUND: CONSTELLATION PARTICLES
  ========================================================= */

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId = 0;
    let isVisible = true;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    };

    let particles: Particle[] = [];
    const LINK_DISTANCE = 130;

    const buildParticles = () => {
      const count = Math.min(70, Math.max(28, Math.floor(width / 22)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        size: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.35 + 0.15,
      }));
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = section.offsetWidth;
      height = section.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
      if (reduceMotion) draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Lines between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);

          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(52, 211, 153, ${
              (1 - dist / LINK_DISTANCE) * 0.12
            })`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(110, 231, 183, ${p.opacity})`;
        ctx.fill();
      }
    };

    const step = () => {
      if (isVisible) {
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }
        draw();
      }
      animationFrameId = requestAnimationFrame(step);
    };

    resizeCanvas();

    if (!reduceMotion) {
      animationFrameId = requestAnimationFrame(step);
    }

    // Pause the animation when the hero is scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(section);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [reduceMotion]);

  /* =========================================================
     IMAGE TILT (pointer-driven)
  ========================================================= */

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 140,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 140,
    damping: 18,
  });

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    mx.set(0);
    my.set(0);
  };

  /* =========================================================
     SCROLL
  ========================================================= */

  const scrollToId = useCallback(
    (id: string) => {
      document.getElementById(id)?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
      });
    },
    [reduceMotion]
  );

  /* =========================================================
     COMPONENT
  ========================================================= */

  return (
    <section
      id="hero"
      ref={sectionRef}
      className={`relative min-h-screen overflow-hidden bg-[#03060a] text-white ${inter.className}`}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-[-15%] top-[10%] h-[320px] w-[320px] rounded-full bg-emerald-500/[0.07] blur-[130px] sm:h-[440px] sm:w-[440px]" />
        <div className="absolute right-[-12%] top-[18%] h-[360px] w-[360px] rounded-full bg-sky-500/[0.045] blur-[140px] sm:h-[480px] sm:w-[480px]" />
        <div className="absolute bottom-[-160px] left-[30%] h-[340px] w-[340px] rounded-full bg-emerald-500/[0.035] blur-[130px]" />
      </div>

      {/* Fading grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 100%)",
        }}
      />

      {/* Particles */}
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
      />

      {/* Film grain for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)]"
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24">
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Availability badge */}
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.03] py-1.5 pl-3 pr-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50 motion-reduce:animate-none" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium text-gray-300">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Introduction */}
            <motion.p
              variants={item}
              className="mb-4 text-sm font-light tracking-wide text-gray-500 sm:text-base"
            >
              Software developer & creative
            </motion.p>

            {/* Main heading */}
            <motion.h1
              variants={item}
              className={`${cinzel.className} leading-[1.05]`}
            >
              <span className="block text-[1.6rem] font-bold tracking-[0.01em] text-gray-500 sm:text-[2rem]">
                Hello, I'm
              </span>

              <span className="mt-2 block bg-gradient-to-br from-white via-gray-100 to-emerald-400 bg-clip-text text-[3rem] font-bold tracking-[0.005em] text-transparent sm:text-[4.3rem] lg:text-[4.8rem]">
                Dada Kingsley
                <br />
                Oluwasanmi
              </span>
            </motion.h1>

            {/* Role */}
            <motion.div variants={item} className="mt-7 flex min-h-[34px] items-center">
              <span
                aria-hidden
                className="mr-4 h-px w-10 bg-gradient-to-r from-transparent to-emerald-400/80 sm:w-14"
              />

              <p className="text-base font-medium text-emerald-300 sm:text-xl">
                <span className="sr-only">
                  Fullstack Developer, UI/UX Designer and Graphic Designer
                </span>

                <span aria-hidden>
                  {displayText}
                  <span className="ml-1 inline-block h-5 w-[2px] translate-y-1 animate-pulse bg-emerald-400 motion-reduce:animate-none" />
                </span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-[15px] font-light leading-8 text-gray-400 sm:text-[17px]"
            >
              I design and build modern digital products with a focus on clean
              code, thoughtful interfaces, and reliable user experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={item}
              className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <motion.button
                onClick={() => scrollToId("contact")}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-500 px-7 py-3.5 text-sm font-semibold text-[#02110b] shadow-[0_8px_30px_-8px_rgba(16,185,129,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] transition-shadow duration-300 hover:shadow-[0_12px_40px_-8px_rgba(16,185,129,0.7),inset_0_1px_0_rgba(255,255,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03060a] sm:w-auto"
              >
                {/* Sheen on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[130%]"
                />

                <span className="relative">Let's work together</span>

                <ArrowUpRight
                  size={17}
                  className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.button>

              <motion.button
                onClick={() => scrollToId("projects")}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-gray-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03060a] sm:w-auto"
              >
                View projects
                <BriefcaseBusiness
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </motion.button>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="mt-9 flex items-center gap-3">
              <span className="mr-1 text-xs text-gray-600">Find me on</span>

              {socials.map(({ label, href, icon: Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ${hover}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="mt-10 flex max-w-md border-t border-white/[0.08] pt-6"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={
                    i === 0
                      ? "pr-6 sm:pr-8"
                      : i === stats.length - 1
                      ? "border-l border-white/[0.08] pl-6 sm:pl-8"
                      : "border-l border-white/[0.08] px-6 sm:px-8"
                  }
                >
                  <p className="text-2xl font-semibold tabular-nums text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT IMAGE SIDE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="relative mx-auto w-full max-w-[370px] sm:max-w-[410px] lg:-translate-y-6"
          >
            {/* Ambient glow */}
            <motion.div
              aria-hidden
              className="absolute -inset-10 rounded-full bg-emerald-500/[0.09] blur-[90px]"
              animate={
                reduceMotion
                  ? undefined
                  : { scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }
              }
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Image frame with tilt */}
            <motion.div
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              style={
                reduceMotion
                  ? undefined
                  : { rotateX, rotateY, transformPerspective: 1100 }
              }
              className="relative rounded-[28px] bg-gradient-to-br from-emerald-300/40 via-white/[0.08] to-white/[0.02] p-[1px] shadow-2xl shadow-black/70"
            >
              <div className="rounded-[27px] bg-[#070b11]/90 p-2.5 backdrop-blur-sm">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[#070a10]">
                  <Image
                    src="/my-portfolio-pic.jpg"
                    alt="Dada Kingsley Oluwasanmi"
                    fill
                    priority
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 410px"
                    className="object-cover grayscale-[30%] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />

                  {/* Depth overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03060a]/70 via-transparent to-black/10" />

                  {/* Inner edge */}
                  <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/[0.07]" />
                </div>
              </div>
            </motion.div>

            {/* Open to work card */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 hidden items-center gap-2.5 rounded-2xl border border-white/[0.1] bg-[#0a0f18]/80 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-xl sm:flex"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
              <span className="text-xs font-medium text-gray-200">
                Open to work
              </span>
            </motion.div>

            {/* Developer card */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-white/[0.1] bg-[#0a0f18]/80 px-5 py-3.5 shadow-xl shadow-black/40 backdrop-blur-xl sm:block"
            >
              <p className="text-[11px] text-gray-500">Currently building</p>
              <p className="mt-1 text-sm font-medium text-emerald-300">
                Fullstack applications
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM SCROLL INDICATOR
      ===================================================== */}

      <motion.button
        type="button"
        onClick={() => scrollToId("projects")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-label="Scroll to projects"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-gray-600 transition-colors hover:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 md:flex"
      >
        Scroll
        <span className="relative h-9 w-[1px] overflow-hidden bg-white/10">
          <motion.span
            className="absolute left-0 top-0 h-3 w-full bg-emerald-400"
            animate={reduceMotion ? undefined : { y: [-12, 36] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.button>
    </section>
  );
}