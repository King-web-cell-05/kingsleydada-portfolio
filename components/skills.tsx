"use client";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaHtml5,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-500" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-400" /> },

      { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },

      { name: "REST APIs", icon: <FaDatabase className="text-indigo-400" /> },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "UI/UX Design", icon: <FaFigma className="text-pink-400" /> },
      {
        name: "Responsive Design",
        icon: <FaFigma className="text-purple-400" />,
      },
      { name: "Accessibility", icon: <FaFigma className="text-yellow-400" /> },
      { name: "User Research", icon: <FaFigma className="text-cyan-400" /> },
      { name: "Prototyping", icon: <FaFigma className="text-red-400" /> },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Netlify", icon: <SiNetlify className="text-green-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-gray-200" /> },
      { name: "CI/CD", icon: <FaGitAlt className="text-green-400" /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Skills &{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 bg-gray-800/60 border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center gap-2 p-3 bg-gray-700/40 rounded-lg hover:bg-blue-500/20 transition-all duration-300"
                  >
                    <div className="text-3xl">{skill.icon}</div>
                    <span className="text-sm font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
