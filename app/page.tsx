"use client"

import { useState, useEffect } from "react"
import HeroSection from "@/components/hero"
import AboutSection from "@/components/about"
import SkillsSection from "@/components/skills"
import ProjectsSection from "@/components/projects"
import ExperienceSection from "@/components/experience"
import ContactSection from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY / totalScroll
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}
