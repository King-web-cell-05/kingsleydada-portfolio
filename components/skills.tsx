
"use client";

import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiVercel,
  SiNetlify,
  SiDotnet,
  SiSharp,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiPostman,

} from "react-icons/si";

import { motion, useReducedMotion } from "framer-motion";
import { Inter } from "next/font/google";

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
  ArrowUpRight,
  Database,
  ShieldCheck,
  Boxes,
} from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const EASE = [0.22, 1, 0.36, 1] as const;

const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Building modern, responsive, and interactive interfaces with a focus on performance and user experience.",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
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
        color: "text-blue-400",
      },
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
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
    description:
      "Developing secure APIs, server-side applications, and reliable backend systems using modern technologies.",
    icon: Server,
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "C#", icon: <SiSharp />, color: "text-purple-400" },
      { name: "ASP.NET Core", icon: <SiDotnet />, color: "text-violet-400" },
      { name: ".NET", icon: <SiDotnet />, color: "text-blue-400" },
      { name: "REST APIs", icon: <Webhook />, color: "text-[#ff7583]" },
      {
        name: "Entity Framework Core",
        icon: <Boxes />,
        color: "text-purple-300",
      },
      {
        name: "JWT Authentication",
        icon: <ShieldCheck />,
        color: "text-amber-400",
      },
      {
        name: "API Integration",
        icon: <Workflow />,
        color: "text-cyan-400",
      },
    ],
  },
  {
    title: "Database Management",
    description:
      "Working with relational databases, data modeling, queries, and efficient application data management.",
    icon: Database,
    skills: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        color: "text-blue-400",
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        color: "text-blue-400",
      },
  
      {
        name: "SQL",
        icon: <Database />,
        color: "text-[#ff7583]",
      },
      {
        name: "Database Design",
        icon: <Boxes />,
        color: "text-violet-400",
      },
    ],
  },
  {
    title: "UI/UX & Design",
    description:
      "Designing accessible, intuitive interfaces with thoughtful visual direction and user-centered interactions.",
    icon: Palette,
    skills: [
      {
        name: "UI/UX Design",
        icon: <FaFigma />,
        color: "text-pink-400",
      },
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
      {
        name: "User Research",
        icon: <Users />,
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
    description:
      "Using professional development tools, version control, deployment platforms, and efficient engineering workflows.",
    icon: Wrench,
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
      { name: "Vercel", icon: <SiVercel />, color: "text-white" },
      {
        name: "Netlify",
        icon: <SiNetlify />,
        color: "text-teal-400",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        color: "text-orange-400",
      },
  
      {
        name: "Docker",
        icon: <FaDocker />,
        color: "text-blue-400",
      },
      {
        name: "CI/CD",
        icon: <Workflow />,
        color: "text-[#ff7583]",
      },
    ],
  },
];

export default function SkillsSection() {
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
      id="skills"
      className={`relative isolate overflow-hidden border-t border-white/[0.06] bg-[#090406] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32 ${inter.className}`}
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#090406_0%,#160508_45%,#25060d_75%,#0b0406_100%)]" />

        <div className="absolute -left-[20%] top-[10%] h-[550px] w-[550px] rounded-full bg-[#a50920]/[0.12] blur-[140px]" />

        <div className="absolute -right-[15%] top-[35%] h-[600px] w-[600px] rounded-full bg-[#b70b22]/[0.12] blur-[150px]" />

        <div className="absolute bottom-[-20%] left-[25%] h-[450px] w-[450px] rounded-full bg-[#ff243a]/[0.06] blur-[130px]" />

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
              WHAT I WORK WITH
            </span>
          </div>

          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.12] tracking-[-0.055em]">
            Skills &{" "}
            <span className="bg-gradient-to-r from-white via-[#ffd9de] to-[#ff6173] bg-clip-text text-transparent">
              Expertise.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[580px] text-[14px] leading-7 text-white/50 sm:text-[16px] sm:leading-8">
            A combination of development, design, and modern tools
            I use to transform ideas into functional digital products.
          </p>
        </motion.div>

        {/* SKILL CATEGORIES */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <motion.article
                key={category.title}
                {...reveal(0.08 + index * 0.07)}
                className="group relative overflow-hidden rounded-[24px] border border-white/[0.1] bg-white/[0.035] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#ff5268]/30 hover:bg-white/[0.05] hover:shadow-[0_25px_70px_rgba(0,0,0,0.25)] sm:p-7"
              >
                {/* Card glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#b70b22]/[0.09] blur-[75px]"
                />

                {/* Top highlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#ff5268]/45 to-transparent"
                />

                {/* Category header */}
                <div className="relative mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#ff5268]/25 bg-[#ff5268]/[0.1] text-[#ff7583]">
                    <CategoryIcon size={21} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-white sm:text-[18px]">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-[11px] text-white/40">
                      {category.skills.length}{" "}
                      {category.skills.length === 1
                        ? "Technology"
                        : "Technologies"}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="relative mb-6 max-w-[460px] text-[13px] leading-[1.85] text-white/50 sm:text-[14px]">
                  {category.description}
                </p>

                {/* Technology grid */}
                <ul className="relative grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill.name}
                      whileHover={reduceMotion ? undefined : { y: -3 }}
                      transition={{
                        duration: 0.2,
                        ease: EASE,
                      }}
                      className="group/skill flex min-h-[94px] flex-col items-center justify-center rounded-2xl border border-white/[0.09] bg-white/[0.035] px-2 py-4 text-center transition-[border-color,background-color] duration-300 hover:border-[#ff5268]/25 hover:bg-[#ff5268]/[0.055]"
                    >
                      <div
                        aria-hidden="true"
                        className={`mb-2.5 text-[25px] transition-transform duration-300 group-hover/skill:scale-110 ${skill.color}`}
                      >
                        {skill.icon}
                      </div>

                      <span className="text-[11px] font-medium leading-5 text-white/60 transition-colors duration-300 group-hover/skill:text-white sm:text-xs">
                        {skill.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          {...reveal(0.2)}
          className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/[0.1] pt-8 sm:flex-row"
        >
          <p className="max-w-[590px] text-center text-[13px] leading-7 text-white/45 sm:text-left sm:text-[14px]">
            Always learning, experimenting, and refining my
            approach to building better digital experiences.
          </p>

          <div className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-[#ff5268]/20 bg-[#ff5268]/[0.07] px-4 py-2.5 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5268] shadow-[0_0_10px_rgba(255,82,104,0.5)]" />

            <span className="text-[11px] font-medium text-[#ff9aa5]">
              Continuously Learning
            </span>

            <ArrowUpRight
              size={13}
              className="text-[#ff7583]/70"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
