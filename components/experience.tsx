
"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Inter } from "next/font/google";
import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Check,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const EASE = [0.22, 1, 0.36, 1] as const;

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
  {
    id: "experience",
    label: "Experience",
    icon: BriefcaseBusiness,
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
  },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<TabId>("experience");
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
      id="experience"
      className={`relative isolate overflow-hidden border-t border-white/[0.07] bg-[#090406] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32 ${inter.className}`}
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#090406_0%,#160508_45%,#25060d_75%,#0b0406_100%)]" />

        <div className="absolute -left-[20%] top-[15%] h-[550px] w-[550px] rounded-full bg-[#a50920]/[0.12] blur-[140px]" />

        <div className="absolute -right-[15%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-[#b70b22]/[0.12] blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px]">
        {/* HEADER */}
        <motion.div
          {...reveal(0)}
          className="mx-auto mb-12 max-w-[700px] text-center sm:mb-14"
        >
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#ff5268]/20 bg-[#ff5268]/[0.07] px-4 py-2 backdrop-blur-xl">
            <BriefcaseBusiness size={14} className="text-[#ff7583]" />

            <span className="text-[11px] font-medium tracking-[0.06em] text-[#ff9aa5]">
              MY JOURNEY
            </span>
          </div>

          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.12] tracking-[-0.055em]">
            Experience &{" "}
            <span className="bg-gradient-to-r from-white via-[#ffd9de] to-[#ff6173] bg-clip-text text-transparent">
              Education.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[14px] leading-7 text-white/50 sm:text-[16px] sm:leading-8">
            My professional experience, technical growth, and
            educational journey in software development and design.
          </p>
        </motion.div>

        {/* TABS */}
        <motion.div
          {...reveal(0.1)}
          className="mb-12 flex justify-center"
        >
          <div
            role="tablist"
            aria-label="Experience or education"
            className="inline-flex items-center gap-1 rounded-2xl border border-white/[0.1] bg-white/[0.045] p-1.5 backdrop-blur-xl"
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
                  className={`relative flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[12px] font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583] sm:min-w-[150px] sm:px-7 sm:text-[13px] ${
                    isActive
                      ? "text-white"
                      : "text-white/45 hover:text-white/80"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="experience-active-tab"
                      transition={{
                        duration: reduceMotion ? 0 : 0.35,
                        ease: EASE,
                      }}
                      className="absolute inset-0 rounded-xl border border-[#ff5268]/30 bg-[#f02d43] shadow-[0_8px_24px_rgba(220,18,48,0.2)]"
                    />
                  )}

                  <Icon size={16} className="relative z-10" />

                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* TAB CONTENT */}
        <AnimatePresence mode="wait" initial={false}>
          {activeTab === "experience" ? (
            <motion.div
              key="experience"
              id="panel-experience"
              role="tabpanel"
              aria-labelledby="tab-experience"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                ease: EASE,
              }}
              className="relative"
            >
              {/* TIMELINE LINE */}
              <div
                aria-hidden="true"
                className="absolute bottom-8 left-[8px] top-8 hidden w-px bg-gradient-to-b from-[#ff5268]/65 via-[#ff5268]/25 to-transparent sm:block"
              />

              <ol className="space-y-6">
                {experiences.map((exp, index) => (
                  <li
                    key={`${exp.role}-${index}`}
                    className="relative sm:pl-11"
                  >
                    {/* TIMELINE DOT */}
                    <div
                      aria-hidden="true"
                      className="absolute left-0 top-9 hidden h-[17px] w-[17px] items-center justify-center rounded-full border border-[#ff5268]/50 bg-[#150609] shadow-[0_0_15px_rgba(255,82,104,0.2)] sm:flex"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ff5268]" />
                    </div>

                    {/* EXPERIENCE CARD */}
                    <article className="group relative overflow-hidden rounded-[24px] border border-white/[0.1] bg-white/[0.035] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-[border-color,background-color] duration-300 hover:border-[#ff5268]/30 hover:bg-white/[0.05] sm:p-8">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#ff5268]/45 to-transparent"
                      />

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#b70b22]/[0.08] blur-[70px]"
                      />

                      {/* PERIOD AND LOCATION */}
                      <div className="relative mb-5 flex flex-wrap items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-lg border border-[#ff5268]/25 bg-[#ff5268]/[0.09] px-3 py-1.5 text-[11px] font-semibold text-[#ff9aa5]">
                          <CalendarDays size={13} />
                          {exp.period}
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-[11px] text-white/35">
                          <MapPin size={13} />
                          Nigeria
                        </span>
                      </div>

                      {/* ROLE */}
                      <h3 className="relative text-[19px] font-bold leading-snug tracking-[-0.035em] text-white sm:text-[23px]">
                        {exp.role}
                      </h3>

                      <p className="relative mt-1.5 text-[13px] font-semibold text-[#ff8290]">
                        {exp.company}
                      </p>

                      {/* DESCRIPTION */}
                      <p className="relative mt-5 text-[13px] leading-[1.9] text-white/55 sm:text-[14px]">
                        {exp.description}
                      </p>

                      {/* HIGHLIGHTS */}
                      <ul className="relative mt-6 grid gap-3">
                        {exp.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#ff5268]/20 bg-[#ff5268]/[0.09]">
                              <Check size={12} className="text-[#ff8290]" />
                            </span>

                            <span className="text-[12px] leading-6 text-white/55 sm:text-[13px]">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* TECHNOLOGIES */}
                      <ul className="relative mt-7 flex flex-wrap gap-2 border-t border-white/[0.09] pt-6">
                        {exp.techStack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-lg border border-white/[0.1] bg-white/[0.045] px-2.5 py-1.5 text-[10px] font-medium text-white/50 transition-colors duration-300 group-hover:border-[#ff5268]/20 group-hover:text-white/75 sm:text-[11px]"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </li>
                ))}
              </ol>
            </motion.div>
          ) : (
            <motion.div
              key="education"
              id="panel-education"
              role="tabpanel"
              aria-labelledby="tab-education"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                ease: EASE,
              }}
              className="relative"
            >
              {/* TIMELINE LINE */}
              <div
                aria-hidden="true"
                className="absolute bottom-8 left-[8px] top-8 hidden w-px bg-gradient-to-b from-[#ff5268]/65 via-[#ff5268]/25 to-transparent sm:block"
              />

              <ol className="space-y-6">
                {education.map((edu, index) => (
                  <li
                    key={`${edu.degree}-${index}`}
                    className="relative sm:pl-11"
                  >
                    {/* TIMELINE DOT */}
                    <div
                      aria-hidden="true"
                      className="absolute left-0 top-9 hidden h-[17px] w-[17px] items-center justify-center rounded-full border border-[#ff5268]/50 bg-[#150609] sm:flex"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ff5268]" />
                    </div>

                    {/* EDUCATION CARD */}
                    <article className="group relative overflow-hidden rounded-[24px] border border-white/[0.1] bg-white/[0.035] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-[border-color,background-color] duration-300 hover:border-[#ff5268]/30 hover:bg-white/[0.05] sm:p-8">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#ff5268]/45 to-transparent"
                      />

                      {/* PERIOD */}
                      <span className="inline-flex items-center gap-2 rounded-lg border border-[#ff5268]/25 bg-[#ff5268]/[0.09] px-3 py-1.5 text-[11px] font-semibold text-[#ff9aa5]">
                        <CalendarDays size={13} />
                        {edu.period}
                      </span>

                      {/* DEGREE */}
                      <h3 className="mt-5 text-[19px] font-bold leading-snug tracking-[-0.035em] text-white sm:text-[23px]">
                        {edu.degree}
                      </h3>

                      <p className="mt-1.5 text-[13px] font-semibold text-[#ff8290]">
                        {edu.school}
                      </p>

                      <p className="mt-5 text-[13px] leading-[1.9] text-white/55 sm:text-[14px]">
                        {edu.description}
                      </p>
                    </article>
                  </li>
                ))}
              </ol>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOTTOM FOOTER */}
        <motion.div
          {...reveal(0.1)}
          className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/[0.1] pt-8 text-center sm:flex-row sm:text-left"
        >
          <p className="max-w-[570px] text-[13px] leading-7 text-white/45">
            Every experience and learning opportunity contributes
            to the way I design, build, and solve problems.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-[#ff5268]/25 bg-[#ff5268]/[0.08] px-5 py-3 text-[12px] font-semibold text-[#ff9aa5] transition-all duration-300 hover:border-[#ff5268]/45 hover:bg-[#ff5268]/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7583]"
          >
            Let's Connect

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
