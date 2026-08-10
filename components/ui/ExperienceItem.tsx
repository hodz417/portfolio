"use client";

import { Experience } from "@/types/portfolio";
import TechBadge from "./TechBadge";
import ScrollReveal from "./ScrollReveal";

// ─── Experience Item Component ───────────────────────────────────────────────

interface ExperienceItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export default function ExperienceItem({
  experience,
  index,
  isLast,
}: ExperienceItemProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="relative flex gap-6 pb-12 last:pb-0">
        {/* Timeline Line */}
        {!isLast && (
          <div className="absolute left-[11px] top-[28px] h-[calc(100%-8px)] w-px bg-border" />
        )}

        {/* Timeline Dot */}
        <div className="relative z-10 mt-1.5 flex-shrink-0">
          <div className="h-6 w-6 rounded-full border-2 border-primary bg-bg flex items-center justify-center">
            <div className="h-2.5 w-2.5 rounded-full bg-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Date */}
          <span className="label mb-2 block">
            {experience.startDate} — {experience.endDate}
          </span>

          {/* Role & Company */}
          <h3 className="heading-sm mb-2">{experience.role}</h3>
          <p className="body-md mb-4 text-muted">{experience.company}</p>

          {/* Description */}
          {experience.description && (
            <p className="body-md mb-6">{experience.description}</p>
          )}

          {/* Responsibilities */}
          {experience.responsibilities.length > 0 && (
            <ul className="mb-6 space-y-3">
              {experience.responsibilities.map((item, i) => (
                <li key={i} className="body-sm flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Technologies */}
          {experience.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
