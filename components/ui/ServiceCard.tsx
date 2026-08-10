"use client";

import { Service } from "@/types/portfolio";
import { Smartphone, Palette, Plug, Flame, Code, Database, Globe, Layers } from "lucide-react";
import TechBadge from "./TechBadge";

// ─── Icon Map ────────────────────────────────────────────────────────────────

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  smartphone: Smartphone,
  palette: Palette,
  plug: Plug,
  flame: Flame,
  code: Code,
  database: Database,
  globe: Globe,
  layers: Layers,
};

// ─── Service Card Component ──────────────────────────────────────────────────

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Code;

  return (
    <article className="card p-8 transition-all duration-[var(--transition-base)] hover:border-primary/30 group">
      {/* Icon */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-primary-muted transition-colors duration-[var(--transition-base)] group-hover:bg-primary/20">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      {/* Title */}
      <h3 className="heading-sm mb-4">{service.title}</h3>

      {/* Description */}
      <p className="body-sm mb-6">{service.description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-3">
        {service.technologies.map((tech) => (
          <TechBadge key={tech} name={tech} size="sm" />
        ))}
      </div>
    </article>
  );
}
