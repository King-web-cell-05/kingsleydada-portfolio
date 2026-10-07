/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { MotionConfig, motion, type Variants } from "framer-motion";
import { Cinzel, Inter } from "next/font/google";
import { ArrowUpRight, ExternalLink, FolderCode, Github } from "lucide-react";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

/* Cards stagger as the grid enters view */
const grid: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const projects = [
  {
    id: 1,
    title: "Globalease - Hr",
    description:
      "A professional HR consulting and academy website showcasing workforce solutions, HR services, learning resources, and company expertise.",
    technologies: ["TypeScript", "HTML5", "Next.js", "Tailwind CSS"],
    image: "/global-hr.png",
    link: "https://github.com/davidgraphix/globaleasehr",
    live: "https://glabaleasehr-v2.vercel.app/",
  },

  {
    id: 2,
    title: "Summy Solutions E-commerce Platform",
    description:
      "A full-stack e-commerce platform featuring product discovery, cart management, checkout, authentication, user accounts, and an admin dashboard.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "C#",
      "ASP.NET",
      "PostgreSQL",
      "Flutterwave",
    ],
    image: "/summy-web.png",
    link: "https://github.com/davidgraphix/summy-web",
    live: "https://www.summysolutions.com/",
  },

  {
    id: 3,
    title: "Quiz App",
    description:
      "An interactive quiz application with multiple questions, score tracking, answer selection, and responsive result handling.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "State Management",
    ],
    image: "/quiz-webapp.png",
    link: "https://github.com/King-web-cell-05/quiz-app",
    live: "https://quiz-app-rho-ebon.vercel.app",
  },

  {
    id: 4,
    title: "Brand Lift Technologies",
    description:
      "A modern corporate website showcasing digital services, technical expertise, and professional solutions through a responsive interface.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
    image: "/brandlift.png",
    link: "https://github.com/davidgraphix/brandlift-technologies",
    live: "https://brandlift-technologies.vercel.app",
  },

  {
    id: 5,
    title: "House of 2Talk",
    description:
      "A modern entertainment and business platform combining barbing, event planning, comedy, and content creation services.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX",
    ],
    image: "/barbing-web.jpeg",
    link: "https://github.com/King-web-cell-05/2talk",
    live: "https://house-of-2talk-entertainment.vercel.app",
  },

  {
    id: 6,
    title: "Chess Game",
    description:
      "A desktop chess application built with C# and WPF, featuring an interactive board and core chess gameplay functionality.",
    technologies: ["C#", "WPF", "Game Development", "Desktop Application"],
    image: "/chess-game.jpeg",
    link: "https://github.com/King-web-cell-05/Chess",
    live: "",
  },

  {
    id: 7,
    title: "Champions League Simulator",
    description:
      "An ASP.NET Core football simulation API for managing teams, competitions, fixtures, matches, standings, and automated results.",
    technologies: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "MS SQL Server",
      "REST API",
    ],
    image: "/champions-league.jpg",
    link: "https://github.com/King-web-cell-05/ChampionsLeagueSimulatorApi",
    live: "",
  },

  {
    id: 8,
    title: "Employee Management System",
    description:
      "A full-stack enterprise system for employee administration, attendance, leave management, payslips, authentication, and role-based dashboards.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "C#",
      "ASP.NET Core",
      "SQL Server",
      "REST API",
    ],
    image: "/employee-management.png",
    link: "https://github.com/King-web-cell-05/fullstack-ems",
    live: "https://enterprise-ems-bice.vercel.app",
  },
];

export default function ProjectsSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="projects"
        className={`relative overflow-hidden border-y border-white/[0.06] bg-[#03060a] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-32 ${inter.className}`}
      >
        {/* ================= BACKGROUND ================= */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-1/2 top-0 h-[500px] w-[640px] -translate-x-1/2 rounded-full bg-emerald-500/[0.06] blur-[150px]" />
          <div className="absolute -right-40 top-[35%] h-[420px] w-[420px] rounded-full bg-sky-500/[0.04] blur-[140px]" />
          <div className="absolute -left-40 bottom-[10%] h-[360px] w-[360px] rounded-full bg-emerald-500/[0.035] blur-[130px]" />

          {/* Fading grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 40%, black 25%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 40%, black 25%, transparent 100%)",
            }}
          />

          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.5)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-[1350px]">
          {/* ================= HEADER ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
          >
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.03] py-1.5 pl-3 pr-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md">
              <FolderCode className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-xs font-medium text-gray-300">
                Selected work
              </span>
            </div>

            <h2
              className={`${cinzel.className} bg-gradient-to-br from-white via-gray-100 to-emerald-400 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl`}
            >
              Projects I've Built
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] font-light leading-8 text-gray-400 sm:text-base">
              A collection of applications, platforms, and software systems
              developed across frontend engineering, full-stack development,
              backend architecture, desktop applications, and digital product
              design.
            </p>
          </motion.div>

          {/* ================= PROJECT GRID ================= */}
          <motion.div
            variants={grid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-8"
          >
            {projects.map((project) => (
              <motion.article
                key={project.id}
                variants={fadeUp}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] shadow-2xl shadow-black/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/25 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
              >
                {/* Top highlight */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
                />

                {/* ================= IMAGE ================= */}
                <div className="relative h-60 overflow-hidden bg-black sm:h-72 lg:h-80">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b11] via-black/10 to-transparent" />

                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.05]" />
                </div>

                {/* ================= CONTENT ================= */}
                <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-100 sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-[15px] font-light leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-gray-400 transition-colors duration-300 group-hover:border-emerald-400/15 group-hover:text-emerald-300"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.title}`}
                      className="group/button flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-sm font-medium text-gray-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03060a]"
                    >
                      <Github className="h-4 w-4" />
                      View source
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                    </a>

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live preview of ${project.title}`}
                        className="group/button relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-500 px-4 py-3 text-sm font-semibold text-[#02110b] shadow-[0_8px_30px_-8px_rgba(16,185,129,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] transition-shadow duration-300 hover:shadow-[0_12px_40px_-8px_rgba(16,185,129,0.7),inset_0_1px_0_rgba(255,255,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03060a]"
                      >
                        {/* Sheen on hover */}
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/30 blur-md transition-all duration-700 group-hover/button:left-[130%]"
                        />

                        <ExternalLink className="relative h-4 w-4" />
                        <span className="relative">Live preview</span>
                        <ArrowUpRight className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                      </a>
                    ) : (
                      <div className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm font-medium text-gray-600">
                        <ExternalLink className="h-4 w-4" />
                        No live preview
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* ================= BOTTOM ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="mx-auto h-px max-w-xs bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

            <p className="mt-6 text-sm font-light text-gray-500">
              More projects and experiments are always in progress.
            </p>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}