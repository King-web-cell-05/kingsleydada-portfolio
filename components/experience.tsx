/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    period: "2025 - Present",
    role: "Freelance developer",
    description:
      "Created an intuitive e-commerce printing website ",
    highlights: [
      "Integrated frontends with Next.js & TypeScript",
      "Made use of email.js ",
    ],
    techStack: ["Next.js", "React", "TypeScript"],
  },
  {
    period: "Early 2025",
    role: "Assistant coding tutor",
    company: "Olac Academy",
    description:
      "As an assitant coding tutor, I support students in mastering programming concepts and building projects.",
    highlights: [
      "Personalized coding guidance for students of all levels",
      "Hands-on projects support and real-world examples",
      "Expertise in multiple programming languages and technologies",
    ],
    techStack: ["React", "Next.js", "Node.js", "CSS", "Tailwind CSS"],
  },
];

const education = [
  {
    period: "2025",
    degree: " National Diploma in Computer Science",
    school: "Yaba college of technology",
    description:
      "Focused on software engineering, algorithms, and human-computer interaction. Participated in hackathons and open-source projects.",
  },
    {
    period: "2025",
    degree: "Full-Stack developing certificate",
    school: "Olac Academy",
    description:
      "Certified Full Stack Developer with expertise in designing, building and deploying scalable applications",
  },
  {
    period: "2023-2024",
    degree: "West Africa Examinations Council Certificate",
    school: "New Ocean Comprehensive high school",
    description:
      "Gained foundational knowledge in various subjects with a focus on computer related subjects",
  },
   {
    period: "2023",
    degree: "Destop Publishing certificate",
    school: "Citadel",
    description:
      "Certified desktop publisher with expertise in creating visually appealing and effective publications",
  },
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Experience &{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10 space-x-6">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-2 font-semibold rounded-full transition-colors ${
              activeTab === "experience"
                ? "bg-primary text-white shadow-lg"
                : "bg-card/50 text-primary hover:bg-accent hover:text-white"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2 font-semibold rounded-full transition-colors ${
              activeTab === "education"
                ? "bg-accent text-white shadow-lg"
                : "bg-card/50 text-accent hover:bg-accent hover:text-white"
            }`}
          >
            Education
          </button>
        </div>

        {/* Content with AnimatePresence */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                exit={{ opacity: 0, y: -30, transition: { duration: 0.6 } }}
                className="space-y-6"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.2, duration: 0.8, ease: "easeOut" },
                    }}
                    exit={{ opacity: 0, x: -30, transition: { duration: 0.5 } }}
                    className="relative pl-10 border-l-2 border-primary/50 hover:border-primary transition-colors"
                  >
                    <div className="absolute left-[-12px] top-0 w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg"></div>
                    <div className="p-6 bg-card/50 border border-border rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                      <p className="text-sm text-accent font-semibold mb-1">{exp.period}</p>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary mb-3">{exp.company}</p>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2 mb-2">
                        {exp.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-secondary/50 text-accent rounded-full border border-border"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.techStack?.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-md border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                exit={{ opacity: 0, y: -30, transition: { duration: 0.5 } }}
                className="space-y-6"
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
                    }}
                    exit={{ opacity: 0, x: -30, transition: { duration: 0.3 } }}
                    className="relative pl-8 border-l-2 border-accent/50 hover:border-accent transition-colors"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-accent rounded-full"></div>
                    <div className="p-6 bg-card/50 border border-border rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                      <p className="text-sm text-accent font-semibold mb-1">{edu.period}</p>
                      <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-primary mb-3">{edu.school}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
