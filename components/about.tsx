/* eslint-disable react/no-unescaped-entities */

"use client";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-card/30 border-y border-border">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance text-center">
          About{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        {/* Main About Text */}
        <div className="space-y-8 text-lg leading-relaxed text-muted-foreground font-outfit">
          <p>
            I'm <span className="font-semibold text-foreground">Dada Kingsley Oluwasanmi</span>, a passionate{" "}
            <span className="text-primary font-medium">Full Stack Developer</span> and{" "}
            <span className="text-accent font-medium">UI/UX Designer</span> based in Lagos, Nigeria. 
            I specialize in building visually appealing, high-performance, and scalable digital experiences 
            that combine technical precision with user-centered design. My goal is to transform complex ideas 
            into elegant web solutions that deliver both functionality and aesthetic impact.
          </p>

          <p>
            With hands-on experience across startups, agencies, and tech companies, I’ve worked on everything 
            from responsive websites to enterprise-level applications. My core technologies include{" "}
            <span className="font-medium text-foreground">TypeScript, React, Next.js, Node.js, and Tailwind CSS</span>, 
            and I take pride in architecting clean, maintainable, and reusable codebases. I’m particularly 
            drawn to projects that challenge me to merge innovation with usability.
          </p>

          <p>
            My professional journey has been guided by a few key principles:{" "}
            <span className="font-semibold text-foreground">consistency, scalability, and empathy for users</span>. 
            Whether I’m developing an API, optimizing performance, or designing user flows, I strive to ensure 
            every interaction feels seamless and meaningful. Beyond development, I’m also passionate about{" "}
            mentoring upcoming developers, contributing to open-source projects, and staying current with the 
            fast-paced evolution of technology.
          </p>

          <p>
            Outside of work, I’m an advocate for lifelong learning. You’ll often find me exploring new design 
            systems, studying emerging JavaScript frameworks, or experimenting with UI animations to enhance 
            interactivity. I also enjoy engaging with the tech community, sharing insights, and collaborating 
            with other developers to create solutions that inspire.
          </p>

         
        </div>

        {/* Quick Info / Highlights */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 bg-card/40 border border-border rounded-xl p-8 shadow-lg">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">      <span className="text-blue-500">💻</span> Technical Expertise</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>Full Stack Development with React, Next.js, and Node.js</li>
              <li>TypeScript, JavaScript (ES6+), and RESTful APIs</li>
              <li>UI/UX Design and Prototyping (Figma, Framer)</li>
              <li>Performance Optimization and Accessibility</li>
              <li>Version Control and CI/CD (Git, GitHub Actions, Vercel)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">  <span className="text-cyan-400">✨</span> Beyond the Code</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>Mentorship and Developer Advocacy</li>
              <li>Collaborative Team Leadership</li>
              <li>Continuous Learning and Experimentation</li>
              <li>Passion for Modern Web Aesthetics</li>
              <li>Community Involvement & Open Source</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
