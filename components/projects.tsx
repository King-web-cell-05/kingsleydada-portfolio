/* eslint-disable react/no-unescaped-entities */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  FolderCode,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Todo App",
    description:
      "A clean and intuitive task management application with task creation, deadlines, priority settings, and a responsive user interface.",
    technologies: ["JavaScript", "CSS", "HTML"],
    image: "/todo-app.jpg",
    link: "https://github.com/King-web-cell-05/todo-app",
    live: "https://king-web-cell-05.github.io/todo-app/",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A weather application that provides real-time weather information and forecasts through the OpenWeatherMap API.",
    technologies: ["JavaScript", "CSS", "HTML", "OpenWeatherMap API"],
    image: "/weather-apc.jpg",
    link: "https://github.com/King-web-cell-05/weather-Apc",
    live: "https://king-web-cell-05.github.io/weather-Apc/",
  },
  {
    id: 3,
    title: "Mini Portfolio Website",
    description:
      "A responsive personal portfolio designed to showcase projects, technical skills, creative work, and professional information.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    image: "/king-portfolio.jpg",
    link: "https://github.com/King-web-cell-05/kingsley-portfolio",
    live: "https://king-portfolio-nu.vercel.app/",
  },
  {
    id: 4,
    title: "Quiz App",
    description:
      "An interactive quiz application with user input, multiple questions, score tracking, and a simple responsive interface.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    image: "/quiz-app.png",
    link: "https://github.com/King-web-cell-05/quiz-app",
    live: "https://quiz-app-rho-ebon.vercel.app",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description:
      "A modern real estate platform featuring property listings, filtering, advertisements, authentication, and responsive user experiences.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/real-estate-pic.jpg",
    link: "https://github.com/King-web-cell-05/realestate",
    live: "https://realestate-alpha-eight.vercel.app",
  },
  {
    id: 6,
    title: "House of 2Talk",
    description:
      "A modern entertainment and barbing platform combining service presentation, event planning, content creation, and customer booking experiences.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/2talk-pic.jpeg",
    link: "https://github.com/King-web-cell-05/2talk",
    live: "https://house-of-2talk-entertainment.vercel.app",
  },
  {
    id: 7,
    title: "Chess Game",
    description:
      "A desktop chess application built with C# and WPF, featuring interactive gameplay, move handling, and a dedicated graphical interface.",
    technologies: ["C#", "WPF", "Game Development"],
    image: "/chess-game.jpeg",
    link: "https://github.com/King-web-cell-05/Chess",
    live: "",
  },
  {
    id: 8,
    title: "Champions League Simulator",
    description:
      "A football competition simulator built around match simulation, score tracking, standings, and backend competition management.",
    technologies: ["C#", "ASP.NET Core", "MS SQL Server"],
    image: "/champions-league.jpg",
    link: "https://github.com/King-web-cell-05/ChampionsLeagueSimulatorApi",
    live: "",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#03050a] px-4 py-20 sm:px-6 sm:py-24 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-500/[0.05] blur-[130px]" />

        <div className="absolute right-[-150px] top-[35%] h-[350px] w-[350px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5">
            <FolderCode className="h-3.5 w-3.5 text-emerald-400" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Selected Work
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[42px]">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
            A selection of applications and digital experiences I've built
            across frontend development, backend systems, and creative design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.65,
                    ease: "easeOut",
                  },
                },
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#070a10] transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              {/* Top accent */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-black sm:h-56">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a10] via-black/10 to-transparent" />

                {/* Project number */}
                <div className="absolute left-4 top-4 flex h-8 min-w-8 items-center justify-center rounded-lg border border-white/10 bg-black/50 px-2 backdrop-blur-md">
                  <span className="font-mono text-[11px] font-semibold text-gray-300">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Hover arrow */}
                <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full border border-white/10 bg-black/50 text-gray-300 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* Content */}
              <div className="flex min-h-[285px] flex-col p-5 sm:p-6">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-gray-300 transition-colors duration-300 group-hover:border-emerald-400/10 group-hover:text-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-2.5 pt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/button flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2.5 text-xs font-semibold text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  >
                    <Github className="h-3.5 w-3.5" />

                    <span>View Code</span>

                    <ArrowUpRight className="h-3 w-3 opacity-50 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                  </a>

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-400 px-3 py-2.5 text-xs font-bold text-[#03100b] transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_8px_25px_rgba(52,211,153,0.18)]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />

                      <span>Live Demo</span>

                      <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                    </a>
                  ) : (
                    <div className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-xs font-medium text-gray-600">
                      <ExternalLink className="h-3.5 w-3.5" />

                      <span>Not Available</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-gray-600">
            More projects and experiments are continuously being developed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}