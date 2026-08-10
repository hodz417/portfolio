"use client";

import { cn } from "@/lib/utils";

// ─── Technology Badge Component ──────────────────────────────────────────────

interface TechBadgeProps {
  name: string;
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
}

export default function TechBadge({
  name,
  variant = "default",
  size = "sm",
  className,
}: TechBadgeProps) {
  const variants = {
    default: "bg-surface border-border text-muted",
    primary: "bg-primary-muted border-primary/20 text-primary",
    secondary: "bg-secondary-muted border-secondary/20 text-secondary",
  };

  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-1.5 text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-full)] border font-mono font-medium transition-colors duration-[var(--transition-fast)]",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {name}
    </span>
  );
}
