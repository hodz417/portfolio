"use client";

import { Service } from "@/types/portfolio";
import { Smartphone, Palette, Plug, Flame, Code, Database, Globe, Layers } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <Card className="group transition-all duration-[var(--transition-base)] hover:border-primary/30 bg-surface">
      <CardHeader>
        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-[var(--transition-base)] group-hover:bg-primary/20">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        {/* Title */}
        <CardTitle>{service.title}</CardTitle>
      </CardHeader>

      <CardContent>
        {/* Description */}
        <p className="text-muted-foreground text-sm">{service.description}</p>
      </CardContent>

      <CardFooter>
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
