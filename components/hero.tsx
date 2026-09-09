/* eslint-disable react/no-unescaped-entities */

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cinzel, Roboto } from "next/font/google";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import {
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const roles = [
  "Fullstack Developer",
  "UI/UX Designer",
  "Graphic Designer",
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* =========================================================
     TYPEWRITER EFFECT
  ========================================================= */

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 90;

    if (!isDeleting && displayText.length < currentRole.length) {
      const timer = setTimeout(() => {
        setDisplayText(
          currentRole.slice(0, displayText.length + 1)
        );
      }, typingSpeed);

      return () => clearTimeout(timer);
    }

    if (isDeleting && displayText.length > 0) {
      const timer = setTimeout(() => {
        setDisplayText(
          currentRole.slice(0, displayText.length - 1)
        );
      }, typingSpeed);

      return () => clearTimeout(timer);
    }

    if (
      !isDeleting &&
      displayText.length === currentRole.length
    ) {
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);

      return () => clearTimeout(timer);
    }

    if (isDeleting && displayText.length === 0) {
      const timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRoleIndex(
          (prev) => (prev + 1) % roles.length
        );
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [displayText, isDeleting, currentRoleIndex]);

  /* =========================================================
     BACKGROUND PARTICLES
  ========================================================= */

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const particles = Array.from(
      { length: 45 },
      () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        size: Math.random() * 1.4 + 0.3,
        opacity: Math.random() * 0.3 + 0.08,
      })
    );

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (
          particle.x < 0 ||
          particle.x > canvas.width
        ) {
          particle.vx *= -1;
        }

        if (
          particle.y < 0 ||
          particle.y > canvas.height
        ) {
          particle.vy *= -1;
        }

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(52, 211, 153, ${particle.opacity})`;

        ctx.fill();
      });

      animationFrameId =
        requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    return () => {
      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  /* =========================================================
     SCROLL FUNCTIONS
  ========================================================= */

  const scrollToContact = () => {
    const element =
      document.getElementById("contact");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToProjects = () => {
    const element =
      document.getElementById("projects");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  /* =========================================================
     COMPONENT
  ========================================================= */

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#020408] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main emerald glow */}
        <div className="absolute left-[-15%] top-[15%] h-[300px] w-[300px] rounded-full bg-emerald-500/[0.055] blur-[120px] sm:h-[400px] sm:w-[400px]" />

        {/* Blue glow */}
        <div className="absolute right-[-15%] top-[20%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.035] blur-[130px] sm:h-[450px] sm:w-[450px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-150px] left-[30%] h-[350px] w-[350px] rounded-full bg-emerald-500/[0.025] blur-[120px]" />
      </div>

      {/* =====================================================
          SUBTLE GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.016]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* =====================================================
          PARTICLES
      ===================================================== */}

      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 opacity-40"
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-12 pt-24 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="max-w-2xl"
          >
            {/* Availability badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-2 backdrop-blur-md sm:mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span
                className={`text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400 sm:text-[11px] ${roboto.className}`}
              >
                Available for opportunities
              </span>
            </motion.div>

            {/* Introduction */}

            <p
              className={`mb-3 text-xs font-medium uppercase tracking-[0.18em] text-gray-500 sm:text-sm ${roboto.className}`}
            >
              Software Developer & Creative
            </p>

            {/* Main heading */}

            <h1
              className={`leading-[1.02] ${cinzel.className}`}
            >
              <span className="block text-[2.8rem] font-black tracking-[-0.035em] text-gray-400 sm:text-[4rem] lg:text-[4.5rem]">
                Hello, I'm
              </span>

              <span className="mt-1 block text-[3.1rem] font-black tracking-[-0.04em] text-white sm:text-[4.4rem] lg:text-[5rem]">
                Dada Kingsley
              </span>

              <span className="mt-1 block text-[3.1rem] font-black tracking-[-0.04em] text-emerald-400 sm:text-[4.4rem] lg:text-[5rem]">
                Oluwasanmi
              </span>
            </h1>

            {/* Role */}

            <div className="mt-6 flex min-h-[34px] items-center">
              <span className="mr-3 h-px w-7 bg-emerald-400/70 sm:w-10" />

              <p
                className={`text-base font-medium text-emerald-300 sm:text-xl ${roboto.className}`}
              >
                {displayText}

                <span className="ml-1 inline-block h-5 w-[2px] translate-y-1 bg-emerald-400 animate-pulse" />
              </p>
            </div>

            {/* Description */}

            <p
              className={`mt-5 max-w-xl text-[14px] leading-7 text-gray-500 sm:text-base ${roboto.className}`}
            >
              I design and build modern digital products
              with a focus on clean code, thoughtful
              interfaces, and reliable user experiences.
            </p>

            {/* Buttons */}

            <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <motion.button
                onClick={scrollToContact}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-[#02110b] shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:bg-emerald-400 sm:w-auto"
              >
                Let's Work Together

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.button>

              <motion.button
                onClick={scrollToProjects}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/[0.09] bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.05] hover:text-white sm:w-auto"
              >
                View Projects

                <BriefcaseBusiness
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </motion.button>
            </div>

            {/* Socials */}

            <div className="mt-7 flex items-center gap-2.5">
              <span className="mr-1 text-[9px] uppercase tracking-[0.18em] text-gray-600 sm:mr-2 sm:text-[10px]">
                Connect
              </span>

              <a
                href="https://github.com/King-web-cell-05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/[0.06] hover:text-emerald-300"
              >
                <FaGithub size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/dada-kingsley-a0858637a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/[0.06] hover:text-blue-300"
              >
                <FaLinkedin size={16} />
              </a>

              <a
                href="https://x.com/codekingz05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                <FaTwitter size={15} />
              </a>

              <a
                href="https://wa.me/+2349065644691"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-green-400/[0.06] hover:text-green-300"
              >
                <FaWhatsapp size={17} />
              </a>
            </div>

            {/* Stats */}

            <div className="mt-7 flex max-w-md border-t border-white/[0.07] pt-5">
              <div className="pr-5 sm:pr-7">
                <p className="text-xl font-bold text-gray-200">
                  3+
                </p>

                <p className="mt-0.5 text-[10px] text-gray-600 sm:text-[11px]">
                  Years Experience
                </p>
              </div>

              <div className="border-l border-white/[0.07] px-5 sm:px-7">
                <p className="text-xl font-bold text-gray-200">
                  10+
                </p>

                <p className="mt-0.5 text-[10px] text-gray-600 sm:text-[11px]">
                  Projects
                </p>
              </div>

              <div className="border-l border-white/[0.07] pl-5 sm:pl-7">
                <p className="text-xl font-bold text-gray-200">
                  3
                </p>

                <p className="mt-0.5 text-[10px] text-gray-600 sm:text-[11px]">
                  Creative Fields
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT IMAGE SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[370px] -translate-y-2 sm:max-w-[400px] sm:-translate-y-4 lg:-translate-y-8"
          >
            {/* Ambient glow */}

            <motion.div
              className="absolute -inset-8 rounded-full bg-emerald-500/[0.06] blur-[80px]"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.4, 0.65, 0.4],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Image frame */}

            <motion.div
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative rounded-[24px] border border-white/[0.08] bg-white/[0.02] p-2 shadow-2xl shadow-black/60 backdrop-blur-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[#070a10]">
                <Image
                  src="/my-portfolio-pic.jpg"
                  alt="Dada Kingsley Oluwasanmi"
                  fill
                  priority
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 400px"
                  className="object-cover grayscale-[25%] transition-all duration-700 hover:scale-[1.03] hover:grayscale-0"
                />

                {/* Dark image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#020408]/50 via-transparent to-black/10" />

                {/* Subtle emerald edge */}

                <div className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-inset ring-emerald-400/[0.08]" />
              </div>
            </motion.div>

            {/* Open to work card */}

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 top-6 hidden items-center gap-2.5 rounded-xl border border-white/[0.08] bg-[#080c14]/90 px-3.5 py-2.5 shadow-xl backdrop-blur-xl sm:flex"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />

              <span className="text-xs font-medium text-gray-300">
                Open to work
              </span>
            </motion.div>

            {/* Developer card */}

            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-4 hidden rounded-xl border border-white/[0.08] bg-[#080c14]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
            >
              <p className="text-[9px] uppercase tracking-[0.15em] text-gray-600">
                Currently building
              </p>

              <p className="mt-1 text-xs font-medium text-emerald-300">
                Fullstack Applications
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-gray-600 md:flex"
      >
        <span className="h-px w-5 bg-gray-700" />

        Scroll to explore

        <span className="h-px w-5 bg-gray-700" />
      </motion.div>
    </section>
  );
}