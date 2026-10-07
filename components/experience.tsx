/* eslint-disable react/no-unescaped-entities */

"use client";

import { useState } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import { Cinzel, Inter } from "next/font/google";
import { BriefcaseBusiness, Check, GraduationCap, MapPin } from "lucide-react";

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

/* Cards stagger in each time a tab opens */
const list: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const experiences = [
  {
    period: "2025 - Present",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "I create custom websites and web applications for clients, focusing on responsive interfaces, performance, functionality, and user experience.",
    highlights: [
      "Built responsive websites and web applications",
      "Integrated frontends with Next.js and TypeScript",
      "Implemented responsive designs using Tailwind CSS",
      "Optimized application performance and user experience",
      "Worked with clients to understand requirements and deliver tailored solutions",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "C# / ASP.NET",
    ],
  },
  {
    period: "Early 2025",
    role: "Assistant Coding Tutor",
    company: "Olac Academy",
    description:
      "Supported students in understanding programming concepts, developing practical projects, and building confidence with different technologies.",
    highlights: [
      "Provided personalized coding guidance to students",
      "Supported hands-on programming projects",
      "Explained programming concepts using practical examples",
      "Helped students understand real-world development practices",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Programming Fundamentals",
    ],
  },
  {
    period: "2025 - Present",
    role: "Full-Stack Developer Intern",
    company: "Summy Solutions and Technologies",
    description:
      "Contribute to the development of the company's full-stack e-commerce platform while working with the team to implement features, integrate services, and improve application performance.",
    highlights: [
      "Contributed to the development of a full-stack e-commerce platform",
      "Implemented frontend and backend features",
      "Collaborated with the development team on application improvements",
      "Worked with authentication and authorization systems",
      "Integrated Paystack payment functionality",
      "Worked with database management and API integration",
    ],
    techStack: [
      "Next.js",
      "C# / ASP.NET",
      "Tailwind CSS",
      "Paystack",
      "Authentication",
      "Authorization",
      "Database Management",
    ],
  },
];

const education = [
  {
    period: "2025",
    degree: "National Diploma in Computer Science",
    school: "Yaba College of Technology",
    description:
      "Studied computer science with a focus on software development, programming, algorithms, systems, and computer-related technologies.",
  },
  {
    period: "2025",
    degree: "Full-Stack Development Certificate",
    school: "Olac Academy",
    description:
      "Completed full-stack development training covering frontend and backend development, application development, and modern web technologies.",
  },
  {
    period: "2023 - 2024",
    degree: "West Africa Examinations Council Certificate",
    school: "New Ocean Comprehensive High School",
    description:
      "Completed secondary school education with foundational knowledge across various academic subjects, including computer-related studies.",
  },
  {
    period: "2023",
    degree: "Desktop Publishing Certificate",
    school: "Citadel",
    description:
      "Completed desktop publishing training focused on creating visually appealing digital and print publications.",
  },
];

const tabs = [
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "education", label: "Education", icon: GraduationCap },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<TabId>("experience");

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="experience"
        className={`relative overflow-hidden border-y border-white/[0.06] bg-[#03060a] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-32 ${inter.className}`}
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-40 top-[15%] h-[380px] w-[380px] rounded-full bg-emerald-500/[0.06] blur-[130px]" />
          <div className="absolute -right-40 bottom-[10%] h-[360px] w-[360px] rounded-full bg-cyan-500/[0.045] blur-[130px]" />

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

        <div className="relative mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
          >
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.03] py-1.5 pl-3 pr-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md">
              <BriefcaseBusiness className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-xs font-medium text-gray-300">
                My journey
              </span>
            </div>

            <h2
              className={`${cinzel.className} bg-gradient-to-br from-white via-gray-100 to-emerald-400 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl`}
            >
              Experience & Education
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-[15px] font-light leading-8 text-gray-400 sm:text-base">
              My professional experience, technical growth, and educational
              journey in software development and design.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-12 flex justify-center"
          >
            <div
              role="tablist"
              aria-label="Experience or education"
              className="relative inline-flex rounded-2xl border border-white/[0.09] bg-white/[0.03] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md"
            >
              {tabs.map(({ id, label, icon: Icon }) => {
                const isActive = activeTab === id;

                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    id={`tab-${id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${id}`}
                    onClick={() => setActiveTab(id)}
                    className={`relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:px-6 ${
                      isActive
                        ? "text-[#02110b]"
                        : "text-gray-400 hover:text-gray-100"
                    }`}
                  >
                    {/* Sliding pill */}
                    {isActive && (
                      <motion.span
                        layoutId="experience-tab-pill"
                        transition={{ duration: 0.45, ease: EASE }}
                        className="absolute inset-0 rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-500 shadow-[0_8px_30px_-8px_rgba(16,185,129,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]"
                      />
                    )}

                    <Icon className="relative h-4 w-4" />
                    <span className="relative">{label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                id="panel-experience"
                role="tabpanel"
                aria-labelledby="tab-experience"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative"
              >
                {/* Timeline line */}
                <div
                  aria-hidden
                  className="absolute bottom-4 left-[7px] top-4 hidden w-px bg-gradient-to-b from-emerald-400/60 via-emerald-400/20 to-transparent sm:block"
                />

                <motion.ol
                  variants={list}
                  initial="hidden"
                  animate="show"
                  className="space-y-6"
                >
                  {experiences.map((exp, index) => (
                    <motion.li
                      key={`${exp.role}-${index}`}
                      variants={card}
                      className="relative sm:pl-10"
                    >
                      {/* Timeline dot */}
                      <div
                        aria-hidden
                        className="absolute left-0 top-8 hidden h-4 w-4 items-center justify-center rounded-full border border-emerald-400/40 bg-[#03060a] shadow-[0_0_14px_rgba(52,211,153,0.35)] sm:flex"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </div>

                      <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-black/40 backdrop-blur-sm transition-colors duration-500 hover:border-emerald-400/25 hover:bg-white/[0.035] sm:p-8">
                        {/* Top highlight */}
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
                        />

                        {/* Period + location */}
                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                          <span className="rounded-lg border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1 text-xs font-medium text-emerald-300">
                            {exp.period}
                          </span>

                          <div className="flex items-center gap-1.5 text-xs text-gray-500">
                            <MapPin className="h-3 w-3" />
                            Nigeria
                          </div>
                        </div>

                        {/* Role */}
                        <h3 className="text-xl font-semibold tracking-tight text-gray-100 sm:text-2xl">
                          {exp.role}
                        </h3>

                        <p className="mt-1.5 text-sm font-medium text-emerald-400">
                          {exp.company}
                        </p>

                        <p className="mt-5 text-[15px] font-light leading-7 text-gray-400">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <ul className="mt-6 space-y-2.5">
                          {exp.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-3"
                            >
                              <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-emerald-400" />

                              <span className="text-sm font-light leading-6 text-gray-400">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech stack */}
                        {exp.techStack && (
                          <ul className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.08] pt-6">
                            {exp.techStack.map((tech) => (
                              <li
                                key={tech}
                                className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-gray-400 transition-colors duration-300 group-hover:border-emerald-400/15 group-hover:text-emerald-300"
                              >
                                {tech}
                              </li>
                            ))}
                          </ul>
                        )}
                      </article>
                    </motion.li>
                  ))}
                </motion.ol>
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education"
                id="panel-education"
                role="tabpanel"
                aria-labelledby="tab-education"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative"
              >
                {/* Timeline line */}
                <div
                  aria-hidden
                  className="absolute bottom-4 left-[7px] top-4 hidden w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent sm:block"
                />

                <motion.ol
                  variants={list}
                  initial="hidden"
                  animate="show"
                  className="space-y-6"
                >
                  {education.map((edu, index) => (
                    <motion.li
                      key={`${edu.degree}-${index}`}
                      variants={card}
                      className="relative sm:pl-10"
                    >
                      {/* Timeline dot */}
                      <div
                        aria-hidden
                        className="absolute left-0 top-8 hidden h-4 w-4 items-center justify-center rounded-full border border-cyan-400/40 bg-[#03060a] shadow-[0_0_14px_rgba(34,211,238,0.35)] sm:flex"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      </div>

                      <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-black/40 backdrop-blur-sm transition-colors duration-500 hover:border-cyan-400/25 hover:bg-white/[0.035] sm:p-8">
                        {/* Top highlight */}
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
                        />

                        <span className="inline-block rounded-lg border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1 text-xs font-medium text-cyan-300">
                          {edu.period}
                        </span>

                        <h3 className="mt-5 text-xl font-semibold tracking-tight text-gray-100 sm:text-2xl">
                          {edu.degree}
                        </h3>

                        <p className="mt-1.5 text-sm font-medium text-cyan-400">
                          {edu.school}
                        </p>

                        <p className="mt-5 text-[15px] font-light leading-7 text-gray-400">
                          {edu.description}
                        </p>
                      </article>
                    </motion.li>
                  ))}
                </motion.ol>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </MotionConfig>
  );
}