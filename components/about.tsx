
"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Inter } from "next/font/google";
import {
  Code2,
  Palette,
  Layers3,
  Server,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const EASE = [0.22, 1, 0.36, 1] as const;

const skills = [
  {
    title: "Full Stack Development",
    description:
      "Building responsive applications, robust APIs, and complete digital products from frontend to backend.",
    icon: Layers3,
    tags: ["React", "Next.js", "Node.js", "ASP.NET"],
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive, accessible interfaces with a focus on usability, clarity, and seamless experiences.",
    icon: Palette,
    tags: ["Figma", "Prototyping", "Design Systems", "UX"],
  },
  {
    title: "Graphic Design",
    description:
      "Developing visual identities and creative assets that communicate ideas and strengthen brands.",
    icon: Sparkles,
    tags: ["Branding", "Graphics", "Visual Design"],
  },
  {
    title: "Software Engineering",
    description:
      "Engineering scalable, maintainable systems with clean architecture and reliable application logic.",
    icon: Server,
    tags: ["TypeScript", "C#", "REST APIs", "Git"],
  },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "03", label: "Creative Fields" },
  { value: "Full", label: "Stack Focus" },
];

export default function AboutSection() {
  const [showFull, setShowFull] = useState(false);
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: 0.75,
      delay,
      ease: EASE,
    },
  });

  return (
    <section
      id="about"
      className={`relative isolate overflow-hidden border-t border-white/[0.07] bg-[#090406] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32 ${inter.className}`}
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#090406_0%,#160508_45%,#25060d_75%,#0b0406_100%)]" />

        <div className="absolute -left-[20%] top-[10%] h-[550px] w-[550px] rounded-full bg-[#a50920]/[0.12] blur-[140px]" />

        <div className="absolute -right-[15%] bottom-[-15%] h-[650px] w-[650px] rounded-full bg-[#b70b22]/[0.14] blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px]">
        {/* SECTION HEADER */}
        <motion.div
          {...reveal(0)}
          className="mx-auto mb-14 max-w-[680px] text-center sm:mb-16"
        >
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#ff5268]/20 bg-[#ff5268]/[0.07] px-4 py-2 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5268] shadow-[0_0_10px_rgba(255,82,104,0.5)]" />

            <span className="text-[11px] font-medium tracking-[0.06em] text-[#ff9aa5]">
              GET TO KNOW ME
            </span>
          </div>

          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.12] tracking-[-0.055em]">
            About{" "}
            <span className="bg-gradient-to-r from-white via-[#ffd9de] to-[#ff6173] bg-clip-text text-transparent">
              Me.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-7 text-white/50 sm:text-[16px] sm:leading-8">
            A closer look at my background, expertise, and the
            approach I bring to building meaningful digital products.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid items-start gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8">
          {/* BIOGRAPHY CARD */}
          <motion.div
            {...reveal(0.1)}
            className="group relative overflow-hidden rounded-[26px] border border-white/[0.11] bg-white/[0.035] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#ff5268]/50 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#b70b22]/[0.08] blur-[90px]"
            />

            {/* CARD HEADER */}
            <div className="relative mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#ff5268]/25 bg-[#ff5268]/[0.1] text-[#ff7583]">
                <Code2 size={21} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white">
                  Developer & Creative
                </h3>

                <p className="mt-1 text-xs text-white/40">
                  Engineering, design & problem solving
                </p>
              </div>
            </div>

            {/* BIOGRAPHY */}
            <div className="relative space-y-5 text-[14px] leading-[1.95] text-white/60 sm:text-[15px]">
              <p>
                I'm{" "}
                <span className="font-semibold text-white">
                  Dada Kingsley Oluwasanmi
                </span>
                , a Full-Stack Developer, UI/UX Designer, and
                Graphic Designer based in Lagos, Nigeria.
              </p>

              <p>
                I build modern digital experiences that combine{" "}
                <span className="font-medium text-[#ff8a98]">
                  clean engineering
                </span>
                , thoughtful interfaces, and practical user
                experiences. I enjoy transforming ideas into
                functional, polished, and reliable digital products.
              </p>

              {/* EXPANDABLE CONTENT */}
              <AnimatePresence initial={false}>
                {showFull && (
                  <motion.div
                    key="about-more"
                    id="about-more"
                    initial={
                      reduceMotion
                        ? false
                        : { height: 0, opacity: 0 }
                    }
                    animate={{ height: "auto", opacity: 1 }}
                    exit={
                      reduceMotion
                        ? { opacity: 0 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0.45,
                      ease: EASE,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-5 pt-5">
                      <p>
                        My development experience spans both
                        frontend and backend technologies, including{" "}
                        <span className="font-medium text-white/85">
                          JavaScript, TypeScript, React, Next.js,
                          Node.js, C#, ASP.NET, Tailwind CSS,
                          and REST APIs.
                        </span>
                      </p>

                      <p>
                        On the frontend, I focus on responsive
                        layouts, accessibility, reusable components,
                        and intuitive interactions. On the backend,
                        I build APIs, work with databases,
                        implement authentication, and develop
                        reliable application logic.
                      </p>

                      <p>
                        My background in design shapes how I
                        approach software development. I consider
                        how people understand, navigate, and
                        interact with products, helping me bridge
                        the gap between{" "}
                        <span className="font-medium text-white/85">
                          design and engineering.
                        </span>
                      </p>

                      <p>
                        I continue to sharpen my skills through
                        practical projects, exploring new
                        technologies, and applying better
                        engineering practices. My goal is to
                        create useful, scalable, and visually
                        compelling digital solutions.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* READ MORE */}
            <button
              type="button"
              onClick={() => setShowFull((prev) => !prev)}
              aria-expanded={showFull}
              aria-controls="about-more"
              className="group/btn relative mt-8 inline-flex items-center gap-2 rounded-lg text-[13px] font-semibold text-[#ff7583] transition-colors duration-300 hover:text-[#ffa0aa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583]"
            >
              {showFull ? "Show Less" : "Read More About Me"}

              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  showFull ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* BOTTOM DECORATION */}
            <div className="relative mt-9 flex items-center gap-3 border-t border-white/[0.09] pt-6">
              <div className="h-1.5 w-1.5 rounded-full bg-[#ff5268]" />

              <span className="text-[11px] font-medium tracking-[0.08em] text-white/35">
                DESIGN-DRIVEN DEVELOPMENT
              </span>

              <div className="ml-auto h-px w-10 bg-gradient-to-r from-[#ff5268]/40 to-transparent" />
            </div>
          </motion.div>

          {/* EXPERTISE CARDS */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.title}
                  {...reveal(0.15 + index * 0.07)}
                  className="group relative overflow-hidden rounded-[20px] border border-white/[0.1] bg-white/[0.035] p-5 backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#ff5268]/30 hover:bg-white/[0.055] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] sm:p-6"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#b70b22]/[0.08] blur-[55px] transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="relative mb-4 flex items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#ff5268]/20 bg-[#ff5268]/[0.09] text-[#ff7583] transition-colors duration-300 group-hover:border-[#ff5268]/40 group-hover:bg-[#ff5268]/[0.14]">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-[15px] font-semibold tracking-[-0.015em] text-white/90">
                      {skill.title}
                    </h3>
                  </div>

                  <p className="relative text-[13px] leading-[1.85] text-white/50">
                    {skill.description}
                  </p>

                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/[0.09] bg-white/[0.045] px-2.5 py-1.5 text-[10px] font-medium text-white/50 transition-colors duration-300 group-hover:border-[#ff5268]/15 group-hover:text-white/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* STATS */}
        <motion.div
          {...reveal(0.25)}
          className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-white/[0.1] bg-white/[0.1] shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group bg-[#120609] px-5 py-7 text-center transition-colors duration-300 hover:bg-[#20090f] sm:px-6 sm:py-9"
            >
              <p className="bg-gradient-to-r from-white via-[#ffe3e6] to-[#ff7583] bg-clip-text text-[29px] font-bold tracking-[-0.055em] text-transparent sm:text-[35px]">
                {stat.value}
              </p>

              <p className="mt-2 text-[11px] font-medium text-white/40 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* SECTION FOOTER */}
        <motion.div
          {...reveal(0.3)}
          className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
        >
          <p className="text-[13px] text-white/40">
            Interested in collaborating on a project?
          </p>

          <button
            type="button"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: reduceMotion ? "auto" : "smooth",
              })
            }
            className="group inline-flex items-center gap-1.5 rounded-md text-[13px] font-semibold text-[#ff7583] transition-colors hover:text-[#ffabb4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583]"
          >
            Let's connect

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
