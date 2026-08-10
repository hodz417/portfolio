"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types/portfolio";
import TechBadge from "./TechBadge";

// ─── Project Card Component ─────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.slug}`} className="group block">
      <article className="card overflow-hidden transition-all duration-[var(--transition-base)] hover:border-border-hover">
        {/* Project Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-surface">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 transition-opacity duration-[var(--transition-base)] group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Category */}
          <span className="label mb-2 block">{project.category}</span>

          {/* Title */}
          <h3 className="heading-sm mb-3 transition-colors duration-[var(--transition-fast)] group-hover:text-primary">
            {project.title}
          </h3>

          {/* Description */}
          <p className="body-sm mb-4 line-clamp-2">{project.description}</p>

          {/* Technologies */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>

          {/* CTA */}
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-[var(--transition-fast)] group-hover:gap-2.5">
            View Case Study
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}
