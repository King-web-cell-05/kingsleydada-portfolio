"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Todo App",
    description:
      "An intuitive todo application featuring task management, deadlines, and priority settings with a sleek UI.",
    technologies: ["JavaScript", "CSS", "HTML"],
    image: "/todo-app.jpg",
    link: "https://github.com/King-web-cell-05/todo-app",
    live: "https://king-web-cell-05.github.io/todo-app/",
  },
  {
    id: 2,
    title: "Login Design",
    description: "Sleek and modern login interface with smooth animations, responsive design.",
    technologies: ["CSS", "HTML"],
    image: "/login-page.jpg",
    link: "https://github.com/King-web-cell-05/login-design",
    live: "https://king-web-cell-05.github.io/login-design/",
  },
  {
    id: 3,
    title: "Weather App",
    description:
        "A stylish weather application that provides real-time weather updates, forecasts, and dynamic backgrounds based on weather conditions.",
    technologies: [ "JavaScript", "CSS", "HTML", "OpenWeatherMap API"],
    image: "/weather-apc.jpg",
    link: "https://github.com/King-web-cell-05/weather-Apc",
    live: "https://king-web-cell-05.github.io/weather-Apc/",
  },
  {
    id: 4,
    title: "Quiz App",
    description: "Interactive quiz application with name input,  questions, and score tracking.",
    technologies: ["React Native", "JavaScript", "Tailwind CSS"],
    image: "/quiz-app.png",
    link: "https://github.com/King-web-cell-05/quiz-app",
    live: "https://quiz-app-rho-ebon.vercel.app",
  },
  {
    id: 5,
      title: "Real Estate Platform",
    description:
      "Comprehensive real estate platform with property listings, advanced search filters, Advertising integration, and user authentication.",
    technologies: ["React Native", "JavaScript", "Tailwind CSS", "Framer Motion"],
    image: "/real-estate-pic.jpg",
    link: "https://github.com/King-web-cell-05/realestate",
    live: "https://realestate-alpha-eight.vercel.app",
  },
  {
    id: 6,
    title: "Mini-Portfolio Website",
    description:
      "A sleek and modern mini-portfolio website to showcase projects, skills, and contact information with responsive design.",
    technologies: ["React Native", "JavaScript", "Tailwind CSS"],
    image: "/king-portfolio.jpg",
    link: "https://github.com/King-web-cell-05/kingsley-portfolio",
    live: "https://king-portfolio-nu.vercel.app/",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6 bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-center text-white">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Project Image */}
              <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col justify-between h-[320px]">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-black rounded-full font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-2">
                  <Link
                    href={project.link}
                    className="flex-1 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-semibold text-center hover:bg-cyan-500/10 transition-colors"
                  >
                    View Code
                  </Link>
                  <Link
                    href={project.live}
                    className="flex-1 px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg text-sm font-semibold text-center hover:bg-cyan-500 transition-colors"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>

              {/* Glow border effect */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl border border-cyan-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
