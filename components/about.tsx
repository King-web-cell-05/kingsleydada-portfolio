"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Cinzel, Inter } from "next/font/google";
import {
  Code2,
  Palette,
  Layers3,
  Server,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* One reveal for the whole section, staggered once when it enters view */
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

const skills = [
  {
    title: "Full Stack Development",
    description:
      "Building responsive frontend applications, APIs, backend systems, and complete digital products.",
    icon: Layers3,
    tags: ["React", "Next.js", "Node.js", "ASP.NET"],
    iconStyle:
      "border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-400",
    hover: "hover:border-emerald-400/30",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing clean, intuitive, and responsive interfaces focused on usability and user experience.",
    icon: Palette,
    tags: ["Figma", "Prototyping", "Design Systems", "UX"],
    iconStyle: "border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-400",
    hover: "hover:border-cyan-400/30",
  },
  {
    title: "Graphic Design",
    description:
      "Creating visual assets and digital graphics that communicate ideas clearly and strengthen brand identity.",
    icon: Sparkles,
    tags: ["Branding", "Graphics", "Visual Design"],
    iconStyle: "border-sky-400/20 bg-sky-400/[0.07] text-sky-400",
    hover: "hover:border-sky-400/30",
  },
  {
    title: "Software Engineering",
    description:
      "Developing structured, maintainable applications with a focus on performance, scalability, and clean architecture.",
    icon: Server,
    tags: ["TypeScript", "C#", "REST APIs", "Git"],
    iconStyle:
      "border-violet-400/20 bg-violet-400/[0.07] text-violet-400",
    hover: "hover:border-violet-400/30",
  },
];

const stats = [
  { value: "3+", label: "Years experience" },
  { value: "10+", label: "Projects built" },
  { value: "3", label: "Creative fields" },
  { value: "Full", label: "Stack focus" },
];

export default function AboutSection() {
  const [showFull, setShowFull] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className={`relative overflow-hidden border-y border-white/[0.06] bg-[#03060a] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-32 ${inter.className}`}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-[-15%] top-[10%] h-[380px] w-[380px] rounded-full bg-emerald-500/[0.06] blur-[130px]" />
        <div className="absolute bottom-[0%] right-[-15%] h-[420px] w-[420px] rounded-full bg-sky-500/[0.04] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 45%, black 25%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 45%, black 25%, transparent 100%)",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        {/* Section heading */}
        <motion.div variants={item} className="mb-16 text-center sm:mb-20">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.03] py-1.5 pl-3 pr-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            <span className="text-xs font-medium text-gray-300">
              Get to know me
            </span>
          </div>

          <h2
            className={`${cinzel.className} bg-gradient-to-br from-white via-gray-100 to-emerald-400 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl`}
          >
            About Me
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-[15px] font-light leading-8 text-gray-400 sm:text-base">
            A little more about my background, skills, approach, and what I
            bring to digital products.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* About content */}
          <motion.div
            variants={item}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-9 lg:p-10"
          >
            {/* Top highlight */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
            />

            {/* Role header */}
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-400 shadow-[0_0_24px_-6px_rgba(52,211,153,0.5)]">
                <Code2 size={19} />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-100">
                  Developer & creative
                </p>
                <p className="mt-0.5 text-xs text-gray-500">
                  Development, design, and problem solving
                </p>
              </div>
            </div>

            {/* Copy */}
            <div className="space-y-5 text-[15px] font-light leading-8 text-gray-400 sm:text-base">
              <p>
                I'm{" "}
                <span className="font-medium text-gray-100">
                  Dada Kingsley Oluwasanmi
                </span>
                , a Full Stack Developer, UI/UX Designer, and Graphic Designer
                based in Lagos, Nigeria.
              </p>

              <p>
                I build modern digital experiences that bring together{" "}
                <span className="font-medium text-emerald-300">
                  clean engineering
                </span>
                , thoughtful interfaces, and practical user experiences. I
                enjoy taking an idea from concept to a functional and polished
                digital product.
              </p>

              <AnimatePresence initial={false}>
                {showFull && (
                  <motion.div
                    key="more"
                    id="about-more"
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-5">
                      <p>
                        My development experience covers both frontend and
                        backend development. I work with technologies such as{" "}
                        <span className="font-medium text-gray-200">
                          JavaScript, TypeScript, React, Next.js, Node.js, C#,
                          ASP.NET, Tailwind CSS, and REST APIs
                        </span>
                        .
                      </p>

                      <p>
                        On the frontend, I focus on responsive layouts,
                        accessibility, component architecture, animations, and
                        interfaces that feel natural to use. On the backend, I
                        enjoy building APIs, connecting applications to
                        databases, handling authentication, and creating
                        reliable application logic.
                      </p>

                      <p>
                        My design background also influences the way I
                        develop. Before writing code, I think about how a user
                        will understand, navigate, and interact with a
                        product. This helps me bridge the gap between{" "}
                        <span className="font-medium text-gray-200">
                          design and engineering
                        </span>
                        .
                      </p>

                      <p>
                        I'm continuously improving my skills by building real
                        projects, experimenting with new technologies, and
                        learning better ways to solve problems. My goal is to
                        keep growing as a developer while creating digital
                        products that are useful, maintainable, and visually
                        strong.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Read more */}
            <button
              type="button"
              onClick={() => setShowFull((prev) => !prev)}
              aria-expanded={showFull}
              aria-controls="about-more"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-emerald-400 transition-colors duration-300 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03060a]"
            >
              {showFull ? "Show less" : "Read more"}

              <ArrowUpRight
                size={16}
                className={`transition-transform duration-300 ${
                  showFull
                    ? "-rotate-90"
                    : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                }`}
              />
            </button>
          </motion.div>

          {/* Skill cards */}
          <motion.div
            variants={item}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {skills.map(({ title, description, icon: Icon, tags, iconStyle, hover }) => (
              <div
                key={title}
                className={`group relative rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] sm:p-6 ${hover}`}
              >
                <div className="mb-4 flex items-center gap-3.5">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${iconStyle}`}
                  >
                    <Icon size={19} />
                  </div>

                  <h3 className="text-base font-semibold text-gray-100">
                    {title}
                  </h3>
                </div>

                <p className="text-sm font-light leading-7 text-gray-400">
                  {description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div
          variants={item}
          className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] shadow-2xl shadow-black/30 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#070b11] p-6 text-center transition-colors duration-300 hover:bg-[#0a0f18] sm:p-7"
            >
              <p className="bg-gradient-to-br from-white to-emerald-300 bg-clip-text text-3xl font-semibold tabular-nums text-transparent sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}