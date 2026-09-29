/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  FolderCode,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Globalease - Hr",
    description:
      "A modern and professional HR consulting and academy website designed for Global Ease HR, focused on helping startups, SMEs, and growing businesses build structured, compliant, and people-centered workplaces. The platform presents the company’s HR consulting services, workforce planning solutions, HR strategy support, and learning academy in a clean and engaging interface. With dedicated sections for services, learning resources, team members, career opportunities, FAQs, and blog content, the website provides visitors with an organized way to explore the company’s expertise and connect with its HR professionals.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "OpenWeatherMap API",
    ],
    image: "/global-hr.png",
    link: "https://github.com/davidgraphix/globaleasehr",
    live: "https://glabaleasehr-v2.vercel.app/",
  },

  {
    id: 2,
    title: "Summy Solutions E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with a scalable and modular Next.js architecture, providing a complete shopping experience from product discovery and cart management to checkout and payment processing. The platform includes secure authentication with registration, email verification, password recovery, and protected user accounts, alongside a personalized dashboard for managing orders, wishlists, addresses, notifications, referrals, profiles, and account security. It also features a dedicated administrative dashboard with staff management, permissions, data tables, analytics, charts, and operational tools for managing the platform. ",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    image: "/summy-web.png",
    link: "https://github.com/davidgraphix/summy-web",
    live: "https://www.summysolutions.com/",
  },

  {
    id: 3,
    title: "Quiz App",
    description:
      "An interactive quiz application designed to provide users with a simple and engaging question-and-answer experience. The application manages multiple questions, captures user selections, calculates scores, and presents results after completing the quiz. The interface was designed to remain clear and responsive across different devices while demonstrating practical use of React state management, reusable components, event handling, conditional rendering, and modern utility-first styling.",
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
      "A modern and intuitive corporate website developed for Brand Lift Technologies, designed to showcase the company’s web development capabilities, digital solutions, and professional services. The platform presents the brand through a clean and engaging interface, highlighting its technical expertise, services, and commitment to delivering modern digital experiences. Built with a strong focus on responsive design, usability, visual consistency, and professional presentation, the website provides visitors with a clear understanding of Brand Lift Technologies and its ability to create scalable, user-focused web solutions for businesses and organizations.",
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
      "A modern business and entertainment platform developed for House of 2Talk, combining barbing services, entertainment, event planning, and content creation into a single digital experience. The website presents services clearly while providing visitors with an easy way to explore offerings and initiate customer bookings or enquiries. The interface uses a dark, premium visual direction with responsive layouts, structured service sections, interactive navigation, and mobile-friendly experiences designed to represent the brand professionally.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX",
    ],
    image: "/2talk-pic.jpeg",
    link: "https://github.com/King-web-cell-05/2talk",
    live: "https://house-of-2talk-entertainment.vercel.app",
  },

  {
    id: 6,
    title: "Chess Game",
    description:
      "A desktop chess application developed with C# and Windows Presentation Foundation (WPF). The project focuses on implementing an interactive graphical chess environment where players can interact with the board and manage gameplay through a dedicated desktop interface. It demonstrates practical application of C# programming, WPF interface development, game logic, event handling, board interaction, and desktop application architecture.",
    technologies: [
      "C#",
      "WPF",
      "Game Development",
      "Desktop Application",
    ],
    image: "/chess-game.jpeg",
    link: "https://github.com/King-web-cell-05/Chess",
    live: "",
  },

  {
    id: 7,
    title: "Champions League Simulator",
    description:
      "A football competition simulation backend developed with C# and ASP.NET Core to model competition management, match simulation, results, and standings. The system is structured around teams, competitions, fixtures, matches, standings, and simulation services, providing a foundation for programmatically managing football competition data. The project demonstrates backend architecture, API development, database integration, entity relationships, business logic, and automated match simulation using the .NET ecosystem.",
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
      "A full-stack Employee Management System designed to support core workforce administration and business operations through a centralized web application. The system provides separate experiences for administrators and employees, with functionality covering authentication, role-based access, employee management, attendance tracking, leave management, payslips, and dashboard-based business information. The interface was designed with a professional enterprise-focused visual system, while the application architecture is structured to support integration with a C# ASP.NET Core backend and SQL Server database.",
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
    <section
      id="projects"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#03050a] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/[0.045] blur-[150px]" />

        <div className="absolute -right-40 top-[35%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.035] blur-[140px]" />

        <div className="absolute -left-40 bottom-[10%] h-[350px] w-[350px] rounded-full bg-emerald-500/[0.025] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1450px]">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-3.5 py-1.5">
            <FolderCode className="h-3.5 w-3.5 text-emerald-400" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Selected Work
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[46px]">
            Projects I've{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Built
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            A collection of applications, platforms, and software systems
            developed across frontend engineering, full-stack development,
            backend architecture, desktop applications, and digital product
            design.
          </p>
        </motion.div>

        {/* ================= PROJECT GRID ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-9"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
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
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#070a10] transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/20 hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)]"
            >
              {/* Top Accent */}
              <div className="absolute left-0 right-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* ================= IMAGE ================= */}
              <div className="relative h-60 overflow-hidden bg-black sm:h-72 lg:h-80">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#070a10] via-black/15 to-transparent" />

                <div className="absolute inset-0 bg-emerald-500/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Project Number */}
                <div className="absolute left-5 top-5 flex h-9 min-w-9 items-center justify-center rounded-lg border border-white/10 bg-black/50 px-2.5 backdrop-blur-md">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-zinc-300">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Project Label */}
                <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-md">
                  <Sparkles className="h-3 w-3 text-emerald-400" />

                  <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-300">
                    Featured Project
                  </span>
                </div>

                {/* Hover Icon */}
                <div className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-zinc-300 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="flex min-h-[390px] flex-col p-6 sm:p-7 lg:p-8">
                {/* Title + Description */}
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-100 sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-[15px] sm:leading-7">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mt-7">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
                    Technologies & Tools
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[10px] font-medium text-zinc-400 transition-all duration-300 group-hover:border-emerald-400/10 group-hover:text-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-auto flex flex-col gap-2.5 pt-8 sm:flex-row">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/button flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.025] px-4 py-3 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  >
                    <Github className="h-4 w-4" />

                    <span>View Source</span>

                    <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                  </a>

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-3 text-xs font-bold text-[#03100b] transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_10px_30px_rgba(52,211,153,0.18)]"
                    >
                      <ExternalLink className="h-4 w-4" />

                      <span>Live Preview</span>

                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                    </a>
                  ) : (
                    <div className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-xs font-medium text-zinc-600">
                      <ExternalLink className="h-4 w-4" />

                      <span>Live Preview Unavailable</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ================= BOTTOM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto h-px max-w-xs bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          <p className="mt-6 text-xs text-zinc-600">
            More projects and experiments are continuously being developed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}