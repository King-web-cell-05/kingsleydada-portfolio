"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Cinzel, Roboto } from "next/font/google";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["700", "900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayText, setDisplayText] = useState("");
  const roles = ["Fullstack Developer", "UI/UX Designer", "Graphic Designer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect (type + erase)
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 60 : 100;

    if (!isDeleting && displayText.length < currentRole.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (isDeleting && displayText.length > 0) {
      const timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      const timer = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timer);
    } else if (isDeleting && displayText.length === 0) {
      const timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [displayText, isDeleting, currentRoleIndex]);

  // Particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }> = [];

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 3 + 1, // slightly bigger
        opacity: Math.random() * 0.5 + 0.4, // brighter
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(18, 18, 24, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.opacity += (Math.random() - 0.5) * 0.02;
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        particle.opacity = Math.max(0.2, Math.min(1, particle.opacity)); // more visible
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
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
      {/* Particle background */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />

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
                {displayText}
              </p>

              <p className={`text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide relative ${roboto.className}`}>
                Crafting modern, interactive digital experiences with TypeScript, React, Next.js, and C# ASP.NET.
                Specializing in building performant, accessible, and beautifully designed web applications
                that make an impact.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-6 mt-6">
                <a href="https://github.com/King-web-cell-05" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl transition-colors">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/dada-kingsley-a0858637a/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-cyan-400 text-2xl transition-colors">
                  <FaLinkedin />
                </a>
                <a href="https://x.com/codekingz05" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-teal-400 text-2xl transition-colors">
                  <FaTwitter />
                </a>
                <a href="https://wa.me/+2349065644691" className="text-green-500 hover:text-green-400 text-2xl transition-colors">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="px-10 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Hire Me
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-[550px] rounded-xl overflow-hidden shadow-2xl group">
            {/* Glowing overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 via-cyan-300/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Animated glow border */}
            <div className="absolute inset-0 rounded-xl border border-blue-400/50 group-hover:border-blue-300/70 animate-glow transition-all duration-700 pointer-events-none" />

            <Image
              src="/my-portfolio-pic.jpg"
              alt="Developer workspace"
              fill
              className="object-cover transform group-hover:scale-105 group-hover:rotate-[1deg] transition-transform duration-700 ease-out"
              priority
            />

            {/* Light sweep */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-30 group-hover:opacity-60 animate-light-move transition-opacity duration-1000" />
          </div>
        </div>
      </div>

      {/* Disable blinking cursor */}
      <style jsx>{`
        .typing-animation::after {
          content: "";
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 50px rgba(59, 130, 246, 0.8); }
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }

        @keyframes lightMove {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        .animate-light-move {
          animation: lightMove 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
