"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

// ─── Button Component ────────────────────────────────────────────────────────

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, external, className, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-[var(--transition-fast)] rounded-[var(--radius-md)] cursor-pointer whitespace-nowrap select-none";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-primary-hover shadow-[0_0_20px_rgba(124,77,255,0.15)] hover:shadow-[0_0_30px_rgba(124,77,255,0.25)]",
      secondary:
        "bg-transparent text-text border border-border hover:border-primary hover:text-primary",
      outline:
        "bg-transparent text-primary border border-primary/30 hover:bg-primary-muted hover:border-primary",
      ghost:
        "bg-transparent text-muted hover:text-text hover:bg-surface-hover",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm gap-1.5",
      md: "px-6 py-3 text-sm gap-2",
      lg: "px-8 py-4 text-base gap-2.5",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
