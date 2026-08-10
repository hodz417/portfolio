"use client";

import { portfolio } from "@/config/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ─── Tech Stack Section ─────────────────────────────────────────────────────

// Group skills by category
function groupByCategory(skills: typeof portfolio.skills) {
  const groups: Record<string, typeof portfolio.skills> = {};
  for (const skill of skills) {
    if (!groups[skill.category]) {
      groups[skill.category] = [];
    }
    groups[skill.category].push(skill);
  }
  return groups;
}

export default function TechStack() {
  const grouped = groupByCategory(portfolio.skills);

  return (
    <section id="tech-stack" className="section bg-surface/30">
      <div className="container">
        <SectionHeader
          label="Tech Stack"
          title="Technologies I work with"
          description="My core tools and technologies for building modern mobile applications."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(grouped).map(([category, skills], groupIndex) => (
            <ScrollReveal key={category} delay={groupIndex * 0.1}>
              <div className="card p-6">
                <h3 className="label mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 rounded-[var(--radius-md)] border border-border bg-bg px-4 py-2.5 transition-all duration-[var(--transition-fast)] hover:border-primary/30 hover:shadow-[0_0_15px_rgba(124,77,255,0.08)]"
                    >
                      <span className="text-sm font-medium text-text-secondary group-hover:text-text transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
