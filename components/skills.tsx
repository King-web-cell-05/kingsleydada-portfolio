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

import { MotionConfig, motion, type Variants } from "framer-motion";
import { Cinzel, Inter } from "next/font/google";
import {
  Accessibility,
  Code2,
  MonitorSmartphone,
  Palette,
  Server,
  Users,
  Webhook,
  Workflow,
  Wrench,
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

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building modern, responsive and interactive interfaces.",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS / Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "Redux Toolkit", icon: <SiRedux />, color: "text-purple-400" },
      { name: "Framer Motion", icon: <SiFramer />, color: "text-pink-400" },
    ],
  },

  {
    title: "Backend Development",
    description: "Developing APIs, server-side applications and data systems.",
    icon: Server,
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-200" },
      { name: "C#", icon: <SiSharp />, color: "text-purple-500" },
      { name: ".NET", icon: <SiDotnet />, color: "text-blue-500" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
      { name: "REST APIs", icon: <Webhook />, color: "text-emerald-400" },
    ],
  },

  {
    title: "UI/UX & Design",
    description: "Creating intuitive interfaces with a strong visual direction.",
    icon: Palette,
    skills: [
      { name: "UI/UX Design", icon: <FaFigma />, color: "text-pink-400" },
      {
        name: "Responsive Design",
        icon: <MonitorSmartphone />,
        color: "text-purple-400",
      },
      {
        name: "Accessibility",
        icon: <Accessibility />,
        color: "text-yellow-400",
      },
      { name: "User Research", icon: <Users />, color: "text-cyan-400" },
      { name: "Prototyping", icon: <FaFigma />, color: "text-red-400" },
    ],
  },

  {
    title: "Tools & Deployment",
    description:
      "Managing source control, deployment and development workflows.",
    icon: Wrench,
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
      { name: "Vercel", icon: <SiVercel />, color: "text-white" },
      { name: "Netlify", icon: <SiNetlify />, color: "text-teal-400" },
      { name: "CI/CD", icon: <Workflow />, color: "text-emerald-400" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="skills"
        className={`relative overflow-hidden bg-[#03060a] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-32 ${inter.className}`}
      >
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-[-12%] top-[8%] h-[380px] w-[380px] rounded-full bg-emerald-500/[0.06] blur-[130px]" />
          <div className="absolute right-[-12%] top-[35%] h-[420px] w-[420px] rounded-full bg-sky-500/[0.04] blur-[140px]" />
          <div className="absolute bottom-[-160px] left-[30%] h-[340px] w-[340px] rounded-full bg-emerald-500/[0.035] blur-[130px]" />

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
                "radial-gradient(ellipse 70% 60% at 50% 45%, black 25%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 45%, black 25%, transparent 100%)",
            }}
          />

          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.5)_100%)]" />
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative z-10 mx-auto max-w-6xl"
        >
          {/* Section header */}
          <motion.div
            variants={item}
            className="mx-auto mb-16 max-w-2xl text-center sm:mb-20"
          >
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.03] py-1.5 pl-3 pr-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
              <span className="text-xs font-medium text-gray-300">
                What I work with
              </span>
            </div>

            <h2
              className={`${cinzel.className} bg-gradient-to-br from-white via-gray-100 to-emerald-400 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl`}
            >
              Skills & Expertise
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-[15px] font-light leading-8 text-gray-400 sm:text-base">
              A combination of development, design, and modern tools I use to
              transform ideas into functional digital products.
            </p>
          </motion.div>

          {/* Skill categories */}
          <div className="grid gap-5 md:grid-cols-2">
            {skillCategories.map((category) => {
              const CategoryIcon = category.icon;

              return (
                <motion.article
                  key={category.title}
                  variants={item}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-black/40 backdrop-blur-sm transition-colors duration-500 hover:border-emerald-400/20 hover:bg-white/[0.035] sm:p-7"
                >
                  {/* Card glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-emerald-400/[0.05] blur-[70px] transition-all duration-500 group-hover:bg-emerald-400/[0.1]"
                  />

                  {/* Top highlight */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
                  />

                  {/* Category header */}
                  <div className="relative mb-4 flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-400 shadow-[0_0_24px_-6px_rgba(52,211,153,0.5)]">
                      <CategoryIcon size={19} />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-gray-100 sm:text-lg">
                        {category.title}
                      </h3>

                      <p className="mt-0.5 text-xs text-gray-500">
                        {category.skills.length}{" "}
                        {category.skills.length === 1
                          ? "technology"
                          : "technologies"}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="relative mb-6 max-w-md text-sm font-light leading-7 text-gray-400">
                    {category.description}
                  </p>

                  {/* Skills */}
                  <ul className="relative grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {category.skills.map((skill) => (
                      <motion.li
                        key={skill.name}
                        whileHover={{ y: -2 }}
                        className="group/skill flex min-h-[84px] flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.025] px-2 py-3.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.05]"
                      >
                        <div
                          aria-hidden
                          className={`mb-2.5 text-[24px] opacity-90 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:opacity-100 ${skill.color}`}
                        >
                          {skill.icon}
                        </div>

                        <span className="text-xs font-medium leading-tight text-gray-400 transition-colors duration-300 group-hover/skill:text-gray-100">
                          {skill.name}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>

          {/* Bottom statement */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row"
          >
            <p className="max-w-xl text-center text-sm font-light leading-7 text-gray-500 sm:text-left">
              Always learning, experimenting, and improving my approach to
              building better digital experiences.
            </p>

            <div className="flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.03] py-1.5 pl-3 pr-4 text-xs font-medium text-gray-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
              Continuously learning
            </div>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}