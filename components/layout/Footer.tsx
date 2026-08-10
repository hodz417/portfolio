"use client";

import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { portfolio } from "@/config/portfolio";
import { isValidUrl } from "@/lib/utils";

// ─── Footer Component ────────────────────────────────────────────────────────

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = Object.entries(portfolio.social).filter(
    ([, url]) => isValidUrl(url)
  );

  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="container py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-[family-name:var(--font-heading)] text-lg font-bold text-text transition-colors hover:text-primary"
            >
              {portfolio.personal.name.split(" ")[0]}
              <span className="text-primary">.</span>
            </a>
            <p className="mt-1 text-sm text-muted">{portfolio.personal.role}</p>
          </div>

          {/* Nav Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {portfolio.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-[var(--transition-fast)] hover:text-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(([key, url]) => {
              const Icon = socialIcons[key];
              if (!Icon) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] text-muted transition-all duration-[var(--transition-fast)] hover:bg-surface-hover hover:text-text"
                  aria-label={`${key} profile`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex items-center justify-center gap-1 border-t border-border pt-8 text-sm text-muted">
          <span>© {year} {portfolio.personal.name}.</span>
          <span className="flex items-center gap-1">
            Built with <Heart className="h-3.5 w-3.5 text-primary" /> using Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}
