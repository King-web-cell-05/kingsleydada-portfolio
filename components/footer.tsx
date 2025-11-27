/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Server, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="bg-card/30 border-t border-border py-16 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* About / Logo */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground">Dada Kingsley</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Full-stack engineer specializing in modern web apps, cloud solutions, and secure system architecture.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://github.com/King-web-cell-05" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/50 rounded-md hover:bg-primary hover:text-primary-foreground transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/dada-kingsley-a0858637a" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/50 rounded-md hover:bg-primary hover:text-primary-foreground transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/codekingz05" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/50 rounded-md hover:bg-primary hover:text-primary-foreground transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/kingsleydada/?utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/50 rounded-md hover:bg-primary hover:text-primary-foreground transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false }}
        >
          <h4 className="text-xl font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["hero", "about", "skills", "projects", "experience", "contact"].map((section) => (
              <li key={section}>
                <span
                  onClick={() => scrollToSection(section)}
                  className="hover:text-primary transition cursor-pointer capitalize"
                >
                  {section === "hero" ? "Home" : section}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false}}
        >
          <h4 className="text-xl font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Server className="w-4 h-4" /> Full-stack Development</li>
            <li className="flex items-center gap-2"><Server className="w-4 h-4" /> API & System Architecture</li>
            <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Security & Compliance</li>
            <li className="flex items-center gap-2"><Server className="w-4 h-4" /> Cloud & DevOps</li>
            <li className="flex items-center gap-2"><Server className="w-4 h-4" /> Performance Optimization</li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false }}
        >
          <h4 className="text-xl font-semibold text-foreground mb-4">Contact</h4>
          <p className="flex items-center gap-2 text-sm text-muted-foreground"><Mail className="w-4 h-4" /> kingsleydada159@gmail.com</p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground"><Phone className="w-4 h-4" /> +234 906 564 4691</p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="w-4 h-4" /> No 4 Idera Street, Oworoshoki, Lagos</p>
        </motion.div>

      </div>

      {/* Footer Bottom */}
      <motion.div
        className="mt-16 border-t border-border pt-6 text-center text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
      >
        <p>© {new Date().getFullYear()} Dada Kingsley. All rights reserved.</p>
      </motion.div>
    </motion.div>
  );
}
