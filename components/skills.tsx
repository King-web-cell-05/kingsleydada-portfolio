"use client";

import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiDotnet,
  SiSharp,
  SiMysql,
  SiRedux,
} from "react-icons/si";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Palette, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    shortTitle: "Frontend",
    description: "Building modern, responsive and interactive interfaces.",
    icon: Code2,
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        color: "text-orange-500",
      },
      {
        name: "CSS / Tailwind",
        icon: <SiTailwindcss />,
        color: "text-cyan-400",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        color: "text-yellow-400",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "text-blue-500",
      },
      {
        name: "React",
        icon: <FaReact />,
        color: "text-cyan-400",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "text-white",
      },
      {
        name: "Redux Toolkit",
        icon: <SiRedux />,
        color: "text-purple-400",
      },
      {
        name: "Framer Motion",
        icon: <SiFramer />,
        color: "text-pink-400",
      },
    ],
  },

  {
    title: "Backend Development",
    shortTitle: "Backend",
    description: "Developing APIs, server-side applications and data systems.",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        color: "text-green-500",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        color: "text-gray-200",
      },
      {
        name: "C#",
        icon: <SiSharp />,
        color: "text-purple-500",
      },
      {
        name: ".NET",
        icon: <SiDotnet />,
        color: "text-blue-500",
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        color: "text-blue-400",
      },
      {
        name: "REST APIs",
        icon: <Server />,
        color: "text-emerald-400",
      },
    ],
  },

  {
    title: "UI/UX & Design",
    shortTitle: "Design",
    description: "Creating intuitive interfaces with a strong visual direction.",
    icon: Palette,
    skills: [
      {
        name: "UI/UX Design",
        icon: <FaFigma />,
        color: "text-pink-400",
      },
      {
        name: "Responsive Design",
        icon: <Palette />,
        color: "text-purple-400",
      },
      {
        name: "Accessibility",
        icon: <Palette />,
        color: "text-yellow-400",
      },
      {
        name: "User Research",
        icon: <Palette />,
        color: "text-cyan-400",
      },
      {
        name: "Prototyping",
        icon: <FaFigma />,
        color: "text-red-400",
      },
    ],
  },

  {
    title: "Tools & Deployment",
    shortTitle: "Tools",
    description: "Managing source control, deployment and development workflows.",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        color: "text-white",
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        color: "text-white",
      },
      {
        name: "Netlify",
        icon: <SiNetlify />,
        color: "text-teal-400",
      },
      {
        name: "CI/CD",
        icon: <FaGitAlt />,
        color: "text-emerald-400",
      },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#03050a] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[350px] w-[350px] rounded-full bg-emerald-500/[0.035] blur-[120px]" />

        <div className="absolute right-[-10%] top-[35%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.025] blur-[140px]" />

        <div className="absolute bottom-[-150px] left-[30%] h-[350px] w-[350px] rounded-full bg-emerald-500/[0.025] blur-[120px]" />
      </div>

      {/* Subtle grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.7) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          {/* Small label */}

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-emerald-400/60" />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500">
              What I Work With
            </span>

            <span className="h-px w-8 bg-emerald-400/60" />
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl md:text-5xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          {/* Description */}

          <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
            A combination of development, design, and modern tools I use to
            transform ideas into functional digital products.
          </p>
        </motion.div>

        {/* =================================================
            SKILL CATEGORIES
        ================================================= */}

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: categoryIndex * 0.12,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#070a10]/80 p-5 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-[#090d14]"
              >
                {/* Card glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-400/[0.035] blur-[70px] transition-all duration-500 group-hover:bg-emerald-400/[0.07]" />

                {/* Top border accent */}

                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Category header */}

                <div className="relative mb-5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* Icon */}

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-emerald-400 transition-all duration-300 group-hover:border-emerald-400/20 group-hover:bg-emerald-400/[0.06]">
                      <CategoryIcon size={19} />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-gray-200 sm:text-lg">
                        {category.title}
                      </h3>

                      <p className="mt-0.5 text-[11px] text-gray-600">
                        {category.skills.length}{" "}
                        {category.skills.length === 1
                          ? "technology"
                          : "technologies"}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}

                  <ArrowUpRight
                    size={17}
                    className="text-gray-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400"
                  />
                </div>

                {/* Description */}

                <p className="relative mb-5 max-w-md text-xs leading-6 text-gray-500">
                  {category.description}
                </p>

                {/* Skills */}

                <div className="relative grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.5,
                        delay:
                          categoryIndex * 0.1 +
                          skillIndex * 0.06,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        y: -2,
                      }}
                      className="group/skill flex min-h-[72px] flex-col items-center justify-center rounded-xl border border-white/[0.055] bg-white/[0.018] px-2 py-3 text-center transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
                    >
                      {/* Icon */}

                      <div
                        className={`mb-2 text-[22px] opacity-80 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:opacity-100 ${skill.color}`}
                      >
                        {skill.icon}
                      </div>

                      {/* Name */}

                      <span className="text-[11px] font-medium leading-tight text-gray-500 transition-colors duration-300 group-hover/skill:text-gray-200 sm:text-xs">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-7 sm:flex-row"
        >
          <p className="max-w-xl text-center text-xs leading-6 text-gray-600 sm:text-left">
            Always learning, experimenting, and improving my approach to
            building better digital experiences.
          </p>

          <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />

            Continuously learning
          </div>
        </motion.div>
      </div>
    </section>
  );
}