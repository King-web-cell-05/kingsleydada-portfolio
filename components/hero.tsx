"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Cinzel, Roboto } from "next/font/google";

// Import Google Fonts
const cinzel = Cinzel({ subsets: ["latin"], weight: ["700","900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300","400","500","700"] });

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayText, setDisplayText] = useState("");
  const roles = ["Fullstack Developer", "UI/UX Designer", "Graphic Designer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (displayText.length < currentRole.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setDisplayText("");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [displayText, currentRoleIndex]);

  // Particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(18, 18, 24, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.opacity += (Math.random() - 0.5) * 0.01;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        particle.opacity = Math.max(0.1, Math.min(0.8, particle.opacity));

        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`; // Tailwind blue-500
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gray-900 text-white">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in">
            <div>
              <h1 className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${cinzel.className}`}>
                <span className="block text-white mb-4">Hello, I'm</span>
                <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Dada Kingsley Oluwasanmi
                </span>
              </h1>

              <p className={`text-2xl md:text-3xl font-light text-blue-400 mb-6 min-h-[50px] ${roboto.className}`}>
                <span className="typing-animation">{displayText}</span>
              </p>

              <p className={`text-gray-300 mb-10 leading-relaxed ${roboto.className}`}>
                Crafting modern, interactive digital experiences with TypeScript, React, and Next.js.
                Specializing in building performant, accessible, and beautifully designed web applications
                that make an impact.
              </p>
            </div>

            <button
              onClick={scrollToContact}
              className="px-10 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Hire Me
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-[550px] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-400/10 to-transparent z-10" />
            <Image
              src="/my-portfolio-pic.jpg"
              alt="Developer workspace"
              fill
              className="object-cover hover:scale-105 transition-   transform duration-500"
              priority
            />
          </div>
        </div>
      </div>

      {/* Typing cursor animation */}
      <style jsx>{`
        .typing-animation::after {
          content: "|";
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          50.01%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
