"use client";

import { portfolio } from "@/config/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ─── Featured Projects Section ──────────────────────────────────────────────

export default function Projects() {
  const featuredProjects = portfolio.projects.filter((p) => p.featured);
  const displayProjects =
    featuredProjects.length > 0 ? featuredProjects : portfolio.projects;

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          label="Featured Projects"
          title="My recent work"
          description="A collection of projects that showcase my skills and passion for mobile development."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {displayProjects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
