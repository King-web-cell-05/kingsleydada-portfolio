/* eslint-disable react/no-unescaped-entities */

"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/navigation";

const HeroSection = dynamic(() => import("@/components/hero"));
const AboutSection = dynamic(() => import("@/components/about"));
const SkillsSection = dynamic(() => import("@/components/skills"));
const ProjectsSection = dynamic(() => import("@/components/projects"));
const ExperienceSection = dynamic(() => import("@/components/experience"));
const ContactSection = dynamic(() => import("@/components/contact"));
const FooterSection = dynamic(()=> import("@/components/footer"));

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / totalScroll;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div >
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
