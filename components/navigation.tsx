/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { X, Menu, Home, User, Code, Briefcase, Clipboard, Mail } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const navItems: { name: string; icon: any; description: string }[] = [
    { name: "home", icon: Home, description: "Welcome & Intro" },
    { name: "about", icon: User, description: "Who I am " },
    { name: "skills", icon: Code, description: "My tech stack & expertise" },
    { name: "projects", icon: Briefcase, description: "Portfolio & works" },
    { name: "experience", icon: Clipboard, description: "Professional journey" },
    { name: "contact", icon: Mail, description: "Get in touch" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div
            className="text-2xl md:text-3xl font-extrabold cursor-pointer select-none relative"
            onClick={() => scrollToSection("home")}
          >
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-slow-glow">
              Dada Kingsley
            </span>

            <style jsx>{`
              @keyframes slowGlow {
                0%, 100% { text-shadow: 0 0 5px rgba(59,130,246,0.4),0 0 10px rgba(59,130,246,0.3),0 0 20px rgba(59,130,246,0.2); }
                50% { text-shadow: 0 0 15px rgba(59,130,246,0.8),0 0 25px rgba(59,130,246,0.6),0 0 35px rgba(59,130,246,0.4); }
              }
              .animate-slow-glow { animation: slowGlow 4s ease-in-out infinite; }
            `}</style>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name)}
                className="text-gray-300 hover:text-white transition-colors capitalize font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-md z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-gray-900 border-t border-gray-800 z-50 transform transition-transform duration-300 shadow-lg ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col py-6 px-6 space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name)}
                className="flex flex-col text-left px-4 py-3 rounded-md hover:bg-gray-800 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-300 text-lg font-medium capitalize">{item.name}</span>
                </div>
                <span className="text-gray-400 text-sm mt-1 ml-8">{item.description}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
