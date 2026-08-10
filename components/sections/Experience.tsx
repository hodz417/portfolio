"use client";

import { portfolio } from "@/config/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceItem from "@/components/ui/ExperienceItem";

// ─── Experience Section ──────────────────────────────────────────────────────

export default function Experience() {
  if (portfolio.experience.length === 0) return null;

  return (
    <section id="experience" className="section bg-surface/30">
      <div className="container">
        <SectionHeader
          label="Experience"
          title="My journey so far"
          description="A timeline of my professional experience and growth."
        />

        <div className="mx-auto max-w-3xl">
          {portfolio.experience.map((exp, index) => (
            <ExperienceItem
              key={`${exp.company}-${exp.startDate}`}
              experience={exp}
              index={index}
              isLast={index === portfolio.experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
