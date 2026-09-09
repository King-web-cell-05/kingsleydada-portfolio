/* eslint-disable react/no-unescaped-entities */

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Check,
  GraduationCap,
  MapPin,
} from "lucide-react";

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

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience"
  );

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#03050a] px-4 py-20 sm:px-6 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-[20%] h-[350px] w-[350px] rounded-full bg-emerald-500/[0.04] blur-[120px]" />

        <div className="absolute right-[-120px] bottom-[10%] h-[320px] w-[320px] rounded-full bg-cyan-500/[0.035] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5">
            <BriefcaseBusiness className="h-3.5 w-3.5 text-emerald-400" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              My Journey
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[42px]">
            Experience &{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
            My professional experience, technical growth, and educational
            journey in software development and design.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex rounded-xl border border-white/[0.07] bg-[#070a10] p-1.5">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-5 ${
                activeTab === "experience"
                  ? "bg-emerald-400 text-[#03100b] shadow-[0_8px_25px_rgba(52,211,153,0.12)]"
                  : "text-gray-500 hover:text-gray-200"
              }`}
            >
              <BriefcaseBusiness className="h-3.5 w-3.5" />
              Experience
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-5 ${
                activeTab === "education"
                  ? "bg-emerald-400 text-[#03100b] shadow-[0_8px_25px_rgba(52,211,153,0.12)]"
                  : "text-gray-500 hover:text-gray-200"
              }`}
            >
              <GraduationCap className="h-3.5 w-3.5" />
              Education
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute bottom-4 left-[7px] top-4 hidden w-px bg-gradient-to-b from-emerald-400/60 via-emerald-400/20 to-transparent sm:block" />

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.article
                    key={`${exp.role}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.55,
                      ease: "easeOut",
                    }}
                    className="relative sm:pl-10"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-7 hidden h-4 w-4 items-center justify-center rounded-full border border-emerald-400/40 bg-[#03050a] sm:flex">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#070a10] p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-emerald-400/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:p-6">
                      {/* Top accent */}
                      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Period */}
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                        <span className="rounded-md border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                          {exp.period}
                        </span>

                        <div className="flex items-center gap-1.5 text-[11px] text-gray-600">
                          <MapPin className="h-3 w-3" />
                          Nigeria
                        </div>
                      </div>

                      {/* Role */}
                      <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                        {exp.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-emerald-400">
                        {exp.company}
                      </p>

                      {/* Description */}
                      <p className="mt-4 text-sm leading-6 text-gray-400">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-5">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-600">
                          Key Contributions
                        </p>

                        <div className="space-y-2">
                          {exp.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="flex items-start gap-2.5"
                            >
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />

                              <span className="text-xs leading-5 text-gray-400">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      {exp.techStack && (
                        <div className="mt-5 border-t border-white/[0.06] pt-4">
                          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-600">
                            Technologies
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[10px] font-medium text-gray-400 transition-colors duration-300 group-hover:border-emerald-400/10 group-hover:text-emerald-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute bottom-4 left-[7px] top-4 hidden w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent sm:block" />

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.article
                    key={`${edu.degree}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.55,
                      ease: "easeOut",
                    }}
                    className="relative sm:pl-10"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-7 hidden h-4 w-4 items-center justify-center rounded-full border border-cyan-400/40 bg-[#03050a] sm:flex">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#070a10] p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:p-6">
                      {/* Top accent */}
                      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Period */}
                      <div className="mb-4">
                        <span className="rounded-md border border-cyan-400/15 bg-cyan-400/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                          {edu.period}
                        </span>
                      </div>

                      {/* Education */}
                      <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                        {edu.degree}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-cyan-400">
                        {edu.school}
                      </p>

                      <p className="mt-4 text-sm leading-6 text-gray-400">
                        {edu.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}