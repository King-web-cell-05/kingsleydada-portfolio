/* eslint-disable react/no-unescaped-entities */
"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Server, ShieldCheck, Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // ✅ WhatsApp Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const phone = "2349065644691"
    const text = `Hello Kingsley👋,
My name is ${formData.name}.
📧Email: ${formData.email}
💼Project Type: ${formData.projectType}
📝Message: ${formData.message}`

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")

    setSubmitted(true)
    setFormData({
      name: "",
      email: "",
      projectType: "",
      message: "",
    })

    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-28 px-4 bg-card/30 border-t border-border">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Professional <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Contact</span> Support
        </h2>

        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          Whether you're building a product, exploring a partnership, or need technical consultation,
          I'm available to collaborate on full-stack engineering, cloud architecture, and digital system design.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 bg-secondary/40 border border-border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5" /> Email
            </h3>
            <p className="text-sm text-muted-foreground mb-1">Primary Contact</p>
            
            {/* OPEN IN NEW TAB */}
            <a 
              href="mailto:kingsleydada159@gmail.com" 
              className="text-primary hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              kingsleydada159@gmail.com
            </a>

            <p className="text-sm text-muted-foreground mt-4">Typical response time: 2–6 hrs</p>
          </div>

          <div className="p-6 bg-secondary/40 border border-border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5" /> Phone
            </h3>

            {/* OPEN IN NEW TAB */}
            <a 
              href="tel:+2349065644691" 
              className="text-primary hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              +234 906 564 4691
            </a>

            <div className="mt-4">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" /> Business Hours
              </p>
              <p className="text-sm mt-1">Mon – Fri | 9:00 AM – 6:00 PM (WAT)</p>
            </div>
          </div>

          <div className="p-6 bg-secondary/40 border border-border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Location
            </h3>
            <p className="text-muted-foreground text-sm">Address</p>
            <p className="text-foreground mt-1 leading-relaxed">
              No 4 Idera Street, Oworoshoki<br />Lagos State, Nigeria
            </p>
          </div>
        </div>

        {/* Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

          {/* Technical Info */}
          <div className="space-y-8">
            <div className="p-6 bg-secondary/30 border border-border rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Server className="w-5 h-5" /> Technical Inquiry Categories
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Full-stack development (Next.js, TypeScript, Node.js)</li>
                <li>• Cloud infrastructure & CI/CD pipelines</li>
                <li>• API architecture & system integrations</li>
                <li>• Performance optimization & code audits</li>
                <li>• UI/UX engineering with Tailwind & React</li>
              </ul>
            </div>

            <div className="p-6 bg-secondary/30 border border-border rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> Security & Compliance
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All communications and project details are processed securely.
                Confidential data is handled following strict engineering best practices.
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-3">Follow Me</p>
              <div className="flex gap-3">
                <a 
                  className="p-2 bg-secondary/50 rounded-md hover:bg-primary hover:text-primary-foreground transition" 
                  href="https://github.com/King-web-cell-05"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a 
                  className="p-2 bg-secondary/50 rounded-md hover:bg-primary hover:text-primary-foreground transition" 
                  href="https://www.linkedin.com/in/dada-kingsley-a0858637a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a 
                  className="p-2 bg-secondary/50 rounded-md hover:bg-primary hover:text-primary-foreground transition" 
                  href="https://x.com/codekingz05"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5" />
                </a>

                <a 
                  className="p-2 bg-secondary/50 rounded-md hover:bg-primary hover:text-primary-foreground transition" 
                  href="https://www.instagram.com/kingsleydada/?utm_source=qr&igsh=MWIxcHdnd2Y1aDU3cQ%3D%3D#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-secondary/30 border border-border rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Send a Direct Message</h3>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="yourname@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary outline-none"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-medium mb-2">Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary outline-none"
              >
                <option value="">Select your project type</option>
                <option value="web-app">Web Application</option>
                <option value="fullstack">Full-Stack Build</option>
                <option value="frontend">Frontend UI/UX</option>
                <option value="api-integration">API Integration</option>
                <option value="cloud">Cloud & DevOps</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Describe your request or project details..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary outline-none resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition"
            >
              Send Message 
            </button>

            {submitted && (
              <p className="text-center text-accent pt-2">Opening WhatsApp...</p>
            )}
          </form>
        </div>

        
      </div>
    </section>
  )
}
