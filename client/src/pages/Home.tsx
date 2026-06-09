import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter, BookOpen, Mail, ExternalLink, Code2, Shield, Zap } from "lucide-react";

/**
 * Design Philosophy: Modern Minimalist with Dark Elegance
 * - Deep navy/black backgrounds with electric cyan accents
 * - Clean, professional layout showcasing cybersecurity expertise
 * - Minimal whitespace and geometric elements
 * - Smooth animations and modern interactions
 */

export default function Home() {
  const projects = [
    {
      name: "pramod-jogdand-website",
      description: "Personal professional website",
      language: "TypeScript",
      url: "https://github.com/Prem2868/pramod-jogdand-website",
      featured: true,
    },
    {
      name: "portfolio",
      description: "Professional terminal-style portfolio website",
      language: "HTML",
      url: "https://github.com/Prem2868/portfolio",
      featured: true,
    },
    {
      name: "mythospramod",
      description: "Advanced cybersecurity assistant and security awareness toolkit",
      language: "HTML",
      url: "https://github.com/Prem2868/mythospramod",
      featured: true,
    },
    {
      name: "cybersec-toolkit",
      description: "Comprehensive toolkit for cybersecurity analysis and defense",
      language: "Python",
      url: "https://github.com/Prem2868/cybersec-toolkit",
    },
    {
      name: "experiment-ai-memory-simulation",
      description: "Investigating AI memory retention and recall mechanisms",
      language: "Python",
      url: "https://github.com/Prem2868/experiment-ai-memory-simulation",
    },
    {
      name: "study-network-behavior-analysis",
      description: "Network traffic patterns and anomaly detection analysis",
      language: "Python",
      url: "https://github.com/Prem2868/study-network-behavior-analysis",
    },
  ];

  const skills = [
    { category: "Languages", items: ["Python", "Java", "C", "TypeScript", "HTML/CSS"] },
    { category: "Security", items: ["Ethical Hacking", "Vulnerability Assessment", "Network Security", "Threat Analysis"] },
    { category: "Tools & Platforms", items: ["Linux", "Debian", "Git", "Docker", "CNC Programming"] },
    { category: "Specializations", items: ["AI Systems", "Cyber Threat Analysis", "Open Source Development", "Security Research"] },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/Prem2868", color: "hover:text-cyan-400" },
    { icon: Linkedin, label: "LinkedIn", url: "https://in.linkedin.com/in/pramod-jogdand-49a5b8292", color: "hover:text-cyan-400" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com/PSjogdand", color: "hover:text-cyan-400" },
    { icon: BookOpen, label: "Quora", url: "https://www.quora.com/profile/Pramod-Jogdand-6", color: "hover:text-cyan-400" },
    { icon: Mail, label: "Blogspot", url: "https://pramodjogdand1.blogspot.com", color: "hover:text-cyan-400" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-xl font-bold font-mono text-cyan-400">
            prem2868
          </div>
          <div className="flex gap-6">
            <a href="#projects" className="text-sm hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="text-sm hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="text-sm hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background with hero image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663735112497/eZPxpsFLjBkjNQA3zQJ27w/hero-bg-dark-emtVv7cHimFL5LtkLbTu3a.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold font-mono text-cyan-400">
                  Pramod Jogdand
                </h1>
                <p className="text-2xl text-blue-300">
                  Security Researcher & Developer
                </p>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Building open-source security tools for the research community. Cybersecurity analyst at Sophos with expertise in AI systems, threat analysis, and ethical hacking.
              </p>

              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">📍 Pune, India</p>
                <p className="text-sm text-muted-foreground">🏢 Founder @Prem-Labs</p>
                <p className="text-sm text-muted-foreground">💼 Cybersecurity Analyst at Sophos (2023-present)</p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-background">
                  <a href="https://github.com/Prem2868">View GitHub</a>
                </Button>
                <Button asChild variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
                  <a href="https://pramod-jogdand.pages.dev">My Blog</a>
                </Button>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Geometric frame */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400 shadow-lg shadow-cyan-400/20" />
                <div className="absolute inset-4 rounded-full border border-blue-500/50" />

                {/* Profile image */}
                <img
                  src="/api/placeholder/320/320"
                  alt="Pramod Jogdand"
                  className="w-full h-full rounded-full object-cover"
                />

                {/* Accent elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 border-2 border-cyan-400 rotate-45" />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-blue-500 rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg border border-border hover:border-cyan-400 transition-all duration-200 ${link.color} group`}
                  title={link.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold font-mono text-cyan-400 mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {projects.filter(p => p.featured).map((project) => (
              <Card
                key={project.name}
                className="bg-card border-border hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 group cursor-pointer"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <p className="text-sm text-foreground/70">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {project.language}
                    </span>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
                  >
                    View on GitHub →
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* All Projects */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">All Projects</h3>
            <div className="grid gap-3">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg border border-border hover:border-cyan-400 hover:bg-secondary/50 transition-all duration-200 group flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-sm text-foreground/60">{project.description}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground whitespace-nowrap ml-4">
                    {project.language}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t border-border bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold font-mono text-cyan-400 mb-12">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-300 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm bg-background border border-cyan-400/30 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold font-mono text-cyan-400 mb-8">About Me</h2>

          <div className="space-y-6 text-foreground/80">
            <p>
              I'm a dedicated cybersecurity enthusiast and researcher with a passion for ensuring digital safety. With expertise in ethical hacking, secure coding, vulnerability assessment, and network security, I work to build robust solutions for the security community.
            </p>

            <p>
              As a freelance security researcher since 2022, I've been developing open-source security tools and frameworks. My work focuses on analyzing cyber threats, understanding AI systems vulnerabilities, and creating practical security solutions for real-world challenges.
            </p>

            <p>
              Currently working as a Cybersecurity Analyst at Sophos, I combine my research background with practical security implementation. I'm proficient in Python, Java, C, and modern web technologies, with deep knowledge of Linux systems and cybersecurity best practices.
            </p>

            <div className="pt-4 flex gap-3">
              <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
              <p>
                <strong>My Mission:</strong> Building open-source security tools and conducting research that helps protect the digital infrastructure and educate the security community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-border bg-secondary/30">
        <div className="container text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold font-mono text-cyan-400 mb-4">Get In Touch</h2>
            <p className="text-foreground/70 text-lg">
              Interested in collaborating or discussing security research? Let's connect!
            </p>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-background">
              <a href="https://github.com/Prem2868">GitHub</a>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://in.linkedin.com/in/pramod-jogdand-49a5b8292">LinkedIn</a>
            </Button>
            <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white">
              <a href="https://twitter.com/PSjogdand">Twitter</a>
            </Button>
            <Button asChild variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
              <a href="https://pramodjogdand1.blogspot.com">Blogspot</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-background/50">
        <div className="container text-center text-sm text-foreground/60">
          <p>© 2026 Pramod Jogdand. Built with React & Tailwind CSS.</p>
          <p className="mt-2">Security Researcher | AI Systems Analyst | Open Source Contributor</p>
        </div>
      </footer>
    </div>
  );
}
