"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Layers3,
  Server,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function AboutSection() {
  const [showFull, setShowFull] = useState(false);

  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#03050a] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[15%] h-[350px] w-[350px] rounded-full bg-emerald-500/[0.035] blur-[120px]" />

        <div className="absolute right-[-15%] bottom-[5%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.025] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.8) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.8) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-14 text-center sm:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.02] px-3.5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
              Get to know me
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            A little more about my background, skills, approach, and what I
            bring to digital products.
          </p>
        </motion.div>

        {/* Main About Layout */}
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.018] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-9"
          >
            {/* Small Label */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-400/10 bg-emerald-400/[0.06] text-emerald-400">
                <Code2 size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-200">
                  Developer & Creative
                </p>

                <p className="text-[11px] text-gray-600">
                  Development • Design • Problem Solving
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="space-y-5 text-[15px] leading-7 text-gray-500 sm:text-base">
              <p>
                I'm{" "}
                <span className="font-semibold text-gray-200">
                  Dada Kingsley Oluwasanmi
                </span>
                , a Full Stack Developer, UI/UX Designer, and Graphic Designer
                based in Lagos, Nigeria.
              </p>

              <p>
                I build modern digital experiences that bring together{" "}
                <span className="font-medium text-emerald-300">
                  clean engineering
                </span>
                , thoughtful interfaces, and practical user experiences. I
                enjoy taking an idea from concept to a functional and polished
                digital product.
              </p>

              {showFull && (
                <>
                  <p>
                    My development experience covers both frontend and backend
                    development. I work with technologies such as{" "}
                    <span className="font-medium text-gray-300">
                      JavaScript, TypeScript, React, Next.js, Node.js, C#,
                      ASP.NET, Tailwind CSS, and REST APIs
                    </span>
                    .
                  </p>

                  <p>
                    On the frontend, I focus on responsive layouts,
                    accessibility, component architecture, animations, and
                    interfaces that feel natural to use. On the backend, I
                    enjoy building APIs, connecting applications to databases,
                    handling authentication, and creating reliable application
                    logic.
                  </p>

                  <p>
                    My design background also influences the way I develop.
                    Before writing code, I think about how a user will
                    understand, navigate, and interact with a product. This
                    helps me bridge the gap between{" "}
                    <span className="font-medium text-gray-300">
                      design and engineering
                    </span>
                    .
                  </p>

                  <p>
                    I'm continuously improving my skills by building real
                    projects, experimenting with new technologies, and learning
                    better ways to solve problems. My goal is to keep growing
                    as a developer while creating digital products that are
                    useful, maintainable, and visually strong.
                  </p>
                </>
              )}
            </div>

            {/* Read More */}
            <button
              onClick={() => setShowFull((prev) => !prev)}
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors duration-300 hover:text-emerald-300"
            >
              {showFull ? "Show Less" : "Read More"}

              <ArrowUpRight
                size={16}
                className={`transition-transform duration-300 ${
                  showFull
                    ? "rotate-[-90deg]"
                    : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                }`}
              />
            </button>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {/* Full Stack Development */}
            <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.018] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.025] sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/[0.06] text-emerald-400">
                  <Layers3 size={19} />
                </div>

                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-700">
                  01
                </span>
              </div>

              <h3 className="text-base font-semibold text-gray-200">
                Full Stack Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Building responsive frontend applications, APIs, backend
                systems, and complete digital products.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "ASP.NET"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[10px] text-gray-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.018] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.025] sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.05] text-cyan-400">
                  <Palette size={19} />
                </div>

                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-700">
                  02
                </span>
              </div>

              <h3 className="text-base font-semibold text-gray-200">
                UI/UX Design
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Designing clean, intuitive, and responsive interfaces focused
                on usability and user experience.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Figma", "Prototyping", "Design Systems", "UX"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[10px] text-gray-500"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Creative Design */}
            <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.018] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.025] sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-400/[0.05] text-blue-400">
                  <Sparkles size={19} />
                </div>

                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-700">
                  03
                </span>
              </div>

              <h3 className="text-base font-semibold text-gray-200">
                Graphic Design
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Creating visual assets and digital graphics that communicate
                ideas clearly and strengthen brand identity.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Branding", "Graphics", "Visual Design"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[10px] text-gray-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend / Engineering */}
            <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.018] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.025] sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/10 bg-violet-400/[0.05] text-violet-400">
                  <Server size={19} />
                </div>

                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-700">
                  04
                </span>
              </div>

              <h3 className="text-base font-semibold text-gray-200">
                Software Engineering
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Developing structured, maintainable applications with a focus
                on performance, scalability, and clean architecture.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["TypeScript", "C#", "REST APIs", "Git"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[10px] text-gray-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-8 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018] sm:grid-cols-4"
        >
          {/* Stat 1 */}
          <div className="border-b border-white/[0.06] p-5 text-center sm:border-b-0 sm:border-r sm:p-6">
            <p className="text-2xl font-bold text-gray-200 sm:text-3xl">
              3+
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-gray-600">
              Years Experience
            </p>
          </div>

          {/* Stat 2 */}
          <div className="border-b border-white/[0.06] p-5 text-center sm:border-b-0 sm:border-r sm:p-6">
            <p className="text-2xl font-bold text-gray-200 sm:text-3xl">
              10+
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-gray-600">
              Projects Built
            </p>
          </div>

          {/* Stat 3 */}
          <div className="border-r border-white/[0.06] p-5 text-center sm:p-6">
            <p className="text-2xl font-bold text-emerald-400 sm:text-3xl">
              3
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-gray-600">
              Creative Fields
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-5 text-center sm:p-6">
            <p className="text-2xl font-bold text-gray-200 sm:text-3xl">
              Full
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-gray-600">
              Stack Focus
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}