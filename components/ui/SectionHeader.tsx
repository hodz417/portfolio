"use client";

import { cn } from "@/lib/utils";

// ─── Section Header Component ────────────────────────────────────────────────

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="label mb-4 block">{label}</span>
      )}
      <h2 className="heading-lg mb-4">{title}</h2>
      {description && (
        <p
          className={cn(
            "body-lg max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
