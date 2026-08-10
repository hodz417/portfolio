"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types/portfolio";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ─── Project Card Component ─────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.slug}`} className="group block">
      <Card className="group overflow-hidden transition-all duration-[var(--transition-base)] hover:border-border-hover border-transparent bg-surface">
        {/* Project Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-[var(--transition-base)] group-hover:opacity-100" />
        </div>

        <CardHeader className="pb-3">
          {/* Category */}
          <span className="label text-primary">{project.category}</span>

          {/* Title */}
          <CardTitle className="transition-colors duration-[var(--transition-fast)] group-hover:text-primary">
            {project.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="pb-4">
          {/* Description */}
          <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
        </CardContent>

        <CardFooter className="flex flex-col items-start gap-4 pb-6">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTA */}
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-[var(--transition-fast)] group-hover:gap-2.5">
            View Case Study
            <ArrowRight className="h-4 w-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
