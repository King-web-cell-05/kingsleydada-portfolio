/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cinzel, Roboto } from "next/font/google";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["700", "900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ["Fullstack Developer", "UI/UX Designer", "Graphic Designer"];

  // Typewriter Effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 60 : 100;

    if (!isDeleting && displayText.length < currentRole.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    }

    if (isDeleting && displayText.length > 0) {
      const timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    }

    if (!isDeleting && displayText.length === currentRole.length) {
      const timer = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timer);
    }

    if (isDeleting && displayText.length === 0) {
      const timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [displayText, isDeleting, currentRoleIndex]);

  // Canvas Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2,
      opacity: Math.random() * 0.5 + 0.3,
    }));

    const animate = () => {
      ctx.fillStyle = "rgba(18,18,24,0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += (Math.random() - 0.5) * 0.01;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        p.opacity = Math.max(0.1, Math.min(0.8, p.opacity));
        ctx.fillStyle = `rgba(59,130,246, ${p.opacity})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gray-900 text-white">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-40 items-center">

          {/* LEFT TEXT SIDE */}
          <div className="space-y-10">

            <h1 className={`text-4xl md:text-5xl font-extrabold ${cinzel.className}`}>
              <span className="text-white block mt-10">Hello, I&apos;m</span>
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Dada Kingsley Oluwasanmi
              </span>
            </h1>

            <div className="min-h-[60px] flex items-center">
              <p className={`text-2xl md:text-3xl text-blue-400 ${roboto.className}`}>
                {displayText}

                <span className="ml-1 inline-block w-[2px] h-[32px] bg-blue-400 animate-blink"></span>


              </p>
            </div>

            <p className={`text-lg text-gray-300 leading-relaxed ${roboto.className}`}>
              Software Developer with a passion for crafting innovative solutions. Skilled in designing, building, and deploying software applications, with expertise in multiple programming languages and technologies. 
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-6 mt-6">
              <a className="text-gray-300 hover:text-white text-2xl" href="https://github.com/King-web-cell-05" target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a className="text-blue-500 hover:text-cyan-400 text-2xl" href="https://www.linkedin.com/in/dada-kingsley-a0858637a"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a className="text-cyan-400 hover:text-teal-400 text-2xl" href="https://x.com/codekingz05"
                target="_blank"
                rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a className="text-green-500 hover:text-green-400 text-2xl" href="https://wa.me/+2349065644691"
                target="_blank"
                rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>

            <button
              onClick={scrollToContact}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
            >
              Hire Me
            </button>
          </div>

          {/* IMAGE SIDE */}
          <div className="relative h-96 md:h-[550px]">
            {/* Glow / Pulse Background */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 opacity-20 blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Image */}
            <motion.div
              className="relative h-full rounded-xl overflow-hidden shadow-2xl "
              animate={{
                scale: [1, 1.03, 1],
                rotate: [0, 1.5, -1.5, 0],

              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/my-portfolio-pic.jpg"
                alt="Portfolio Image"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
