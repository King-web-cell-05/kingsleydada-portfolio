import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Server, ShieldCheck } from 'lucide-react';

export default function Footer() {
  // Scroll function for all sections
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card/30 border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* About / Logo */}
        <div className="space-y-4">
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
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <span
                onClick={() => scrollToSection("hero")}
                className="hover:text-primary transition cursor-pointer"
              >
                Home
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition cursor-pointer"
              >
                About Me
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToSection("skills")}
                className="hover:text-primary transition cursor-pointer"
              >
                Skills
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToSection("projects")}
                className="hover:text-primary transition cursor-pointer"
              >
                Projects
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToSection("experience")}
                className="hover:text-primary transition cursor-pointer"
              >
                Experience
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition cursor-pointer"
              >
                Contact
              </span>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Server className="w-4 h-4" /> Full-stack Development</li>
            <li className="flex items-center gap-2"><Server className="w-4 h-4" /> API & System Architecture</li>
            <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Security & Compliance</li>
            <li className="flex items-center gap-2"><Server className="w-4 h-4" /> Cloud & DevOps</li>
            <li className="flex items-center gap-2"><Server className="w-4 h-4" /> Performance Optimization</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-foreground mb-4">Contact</h4>
          <p className="flex items-center gap-2 text-sm text-muted-foreground"><Mail className="w-4 h-4" /> kingsleydada159@gmail.com</p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground"><Phone className="w-4 h-4" /> +234 906 564 4691</p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="w-4 h-4" /> No 4 Idera Street, Oworoshoki, Lagos</p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-16 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Dada Kingsley. All rights reserved.</p>
      </div>
    </footer>
  );
}
