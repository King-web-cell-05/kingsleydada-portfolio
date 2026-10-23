
"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Inter } from "next/font/google";
import {
  ArrowUpRight,
  ExternalLink,
  FolderCode,
  Github,
  Code2,
  Layers3,
  Monitor,
  ArrowRight,
} from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const EASE = [0.22, 1, 0.36, 1] as const;

type ProjectCategory =
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "Desktop";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  live: string;
  category: ProjectCategory;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Globalease - HR",
    description:
      "A professional HR consulting and academy platform showcasing workforce solutions, HR services, learning resources, and company expertise.",
    technologies: ["TypeScript", "HTML5", "Next.js", "Tailwind CSS"],
    image: "/global-hr.png",
    link: "https://github.com/davidgraphix/globaleasehr",
    live: "https://glabaleasehr-v2.vercel.app/",
    category: "Frontend",
  },
  {
    id: 2,
    title: "Summy Solutions E-commerce Platform",
    description:
      "A full-stack e-commerce platform featuring product discovery, cart management, checkout, authentication, user accounts, and an administrative dashboard.",
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
    category: "Full Stack",
    featured: true,
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
    category: "Frontend",
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
    category: "Frontend",
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
    category: "Frontend",
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
    category: "Desktop",
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
    category: "Backend",
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
    category: "Full Stack",
    featured: true,
  },
];

const filters = [
  "All Projects",
  "Full Stack",
  "Frontend",
  "Backend",
  "Desktop",
] as const;

type Filter = (typeof filters)[number];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All Projects");
  const reduceMotion = useReducedMotion();

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: {
      duration: 0.7,
      delay,
      ease: EASE,
    },
  });

  return (
    <section
      id="projects"
      className={`relative isolate overflow-hidden border-t border-white/[0.07] bg-[#090406] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32 ${inter.className}`}
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#090406_0%,#160508_45%,#25060d_75%,#0b0406_100%)]" />

        <div className="absolute left-1/2 top-0 h-[600px] w-[850px] -translate-x-1/2 rounded-full bg-[#a50920]/[0.12] blur-[160px]" />

        <div className="absolute -right-[20%] top-[35%] h-[650px] w-[650px] rounded-full bg-[#b70b22]/[0.1] blur-[150px]" />

        <div className="absolute -left-[15%] bottom-[10%] h-[550px] w-[550px] rounded-full bg-[#ff243a]/[0.06] blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px]">
        {/* HEADER */}
        <motion.div
          {...reveal(0)}
          className="mx-auto mb-12 max-w-[720px] text-center sm:mb-14"
        >
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#ff5268]/20 bg-[#ff5268]/[0.07] px-4 py-2 backdrop-blur-xl">
            <FolderCode size={14} className="text-[#ff7583]" />

            <span className="text-[11px] font-medium tracking-[0.06em] text-[#ff9aa5]">
              SELECTED WORK
            </span>
          </div>

          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.12] tracking-[-0.055em]">
            Projects{" "}
            <span className="bg-gradient-to-r from-white via-[#ffd9de] to-[#ff6173] bg-clip-text text-transparent">
              I've Built.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-7 text-white/50 sm:text-[16px] sm:leading-8">
            A selection of real-world applications, digital platforms,
            and software systems built across frontend, full-stack,
            backend, and desktop development.
          </p>
        </motion.div>

        {/* FILTER BAR */}
        <motion.div
          {...reveal(0.1)}
          className="mb-9 flex flex-wrap items-center justify-center gap-2 sm:mb-11"
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`relative overflow-hidden rounded-xl border px-4 py-2.5 text-[12px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583] sm:px-5 sm:text-[13px] ${
                  isActive
                    ? "border-[#ff5268]/40 bg-[#ff5268]/[0.14] text-[#ff9aa5]"
                    : "border-white/[0.1] bg-white/[0.035] text-white/50 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* PROJECT COUNT */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-[12px] font-medium text-white/45">
            Showing{" "}
            <span className="text-white/80">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>

          <div className="flex items-center gap-2 text-[11px] text-white/35">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5268]" />
            Curated portfolio
          </div>
        </div>

        {/* PROJECT GRID */}
        <motion.div layout className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 18, scale: 0.98 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -12, scale: 0.98 }
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  ease: EASE,
                  layout: { duration: 0.35 },
                }}
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-[24px] border bg-white/[0.035] shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-[#ff5268]/35 hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)] ${
                  project.featured
                    ? "border-[#ff5268]/20"
                    : "border-white/[0.1]"
                }`}
              >
                {/* TOP ACCENT */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-10 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#ff5268]/50 to-transparent"
                />

                {/* PROJECT IMAGE */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#130609]">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100407]/85 via-transparent to-black/10" />

                  {/* CATEGORY LABEL */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-white/20 bg-[#100609]/75 px-3 py-2 backdrop-blur-xl sm:left-5 sm:top-5">
                    <Code2 size={13} className="text-[#ff7583]" />

                    <span className="text-[11px] font-semibold text-white/90">
                      {project.category}
                    </span>
                  </div>

                  {/* FEATURED BADGE */}
                  {project.featured && (
                    <div className="absolute right-4 top-4 rounded-lg border border-[#ff7583]/30 bg-[#270910]/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#ff9aa5] backdrop-blur-xl sm:right-5 sm:top-5">
                      Featured
                    </div>
                  )}

                  {/* IMAGE QUICK ACTION */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live preview of ${project.title}`}
                      className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-xl transition-all duration-300 hover:border-[#ff7583]/50 hover:bg-[#f02d43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583] sm:bottom-5 sm:right-5"
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  )}
                </div>

                {/* PROJECT CONTENT */}
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-[19px] font-bold leading-snug tracking-[-0.035em] text-white sm:text-[22px]">
                      {project.title}
                    </h3>

                    <span className="shrink-0 text-[11px] font-semibold tabular-nums text-[#ff7583]/70">
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-[13px] leading-[1.85] text-white/50 sm:text-[14px]">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-lg border border-white/[0.1] bg-white/[0.045] px-2.5 py-1.5 text-[10px] font-medium text-white/55 transition-colors duration-300 group-hover:border-[#ff5268]/20 group-hover:text-white/75 sm:text-[11px]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* ACTION BUTTONS */}
                  <div className="mt-auto grid grid-cols-1 gap-3 pt-7 sm:grid-cols-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.title}`}
                      className="group/button flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/[0.13] bg-white/[0.055] px-4 py-3 text-[12px] font-semibold text-white/85 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.09] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583] sm:text-[13px]"
                    >
                      <Github size={17} />

                      View Source

                      <ArrowUpRight
                        size={14}
                        className="text-white/40 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                      />
                    </a>

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live website for ${project.title}`}
                        className="group/button flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#f02d43] px-4 py-3 text-[12px] font-semibold text-white shadow-[0_8px_25px_rgba(220,18,48,0.15)] transition-all duration-300 hover:bg-[#ff4055] hover:shadow-[0_12px_30px_rgba(220,18,48,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583] sm:text-[13px]"
                      >
                        <ExternalLink size={16} />

                        Live Preview

                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                        />
                      </a>
                    ) : (
                      <div className="flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-[12px] font-medium text-white/35 sm:text-[13px]">
                        <Monitor size={16} />
                        Source Only
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM SECTION */}
        <motion.div
          {...reveal(0.1)}
          className="mt-14 flex flex-col items-center gap-6 border-t border-white/[0.1] pt-10 text-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ff5268]/20 bg-[#ff5268]/[0.08] text-[#ff7583]">
            <Layers3 size={22} />
          </div>

          <div>
            <h3 className="text-[18px] font-semibold tracking-[-0.025em] text-white">
              More than just projects.
            </h3>

            <p className="mx-auto mt-3 max-w-[500px] text-[13px] leading-7 text-white/45">
              Every project represents an opportunity to solve a
              problem, explore a technology, and build something
              meaningful.
            </p>
          </div>

          <a
            href="https://github.com/King-web-cell-05"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-[#ff5268]/25 bg-[#ff5268]/[0.08] px-5 py-3 text-[12px] font-semibold text-[#ff9aa5] transition-all duration-300 hover:border-[#ff5268]/45 hover:bg-[#ff5268]/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583]"
          >
            <Github size={16} />

            Explore My GitHub

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
