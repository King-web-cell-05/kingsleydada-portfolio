"use client"

import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    image: "/ecommerce-dashboard.png",
    link: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, data visualization, and exportable reports.",
    technologies: ["React", "Node.js", "MongoDB", "Recharts"],
    image: "/analytics-dashboard.png",
    link: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Design System",
    description:
      "Comprehensive design system with reusable components, documentation, and interactive component library.",
    technologies: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    image: "/design-system-components.png",
    link: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Mobile App UI",
    description: "Modern mobile application interface with smooth animations, micro-interactions, and delightful UX.",
    technologies: ["React Native", "TypeScript", "Expo", "Figma"],
    image: "/mobile-app-interface-ui-design.jpg",
    link: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Content Management System",
    description:
      "Headless CMS for managing digital content with intuitive UI, version control, and collaborative editing.",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Prisma"],
    image: "/cms-dashboard.png",
    link: "#",
    live: "#",
  },
  {
    id: 6,
    title: "SaaS Platform",
    description:
      "Subscription-based SaaS platform with user authentication, billing integration, and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    image: "/saas-platform-interface.jpg",
    link: "#",
    live: "#",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
