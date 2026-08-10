"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { portfolio } from "@/config/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ─── About Section ───────────────────────────────────────────────────────────

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          label="About Me"
          title="Get to know me"
          align="center"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Profile Image */}
          <ScrollReveal direction="left">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-square overflow-hidden rounded-[var(--radius-xl)] border border-border">
                <Image
                  src={portfolio.personal.avatar}
                  alt={`${portfolio.personal.name} — ${portfolio.personal.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  priority
                />
                {/* Fallback if no image */}
                <div className="absolute inset-0 flex items-center justify-center bg-surface text-6xl font-bold text-muted/20 font-[family-name:var(--font-heading)]">
                  {portfolio.personal.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[var(--radius-xl)] border border-primary/20 -z-10" />
            </div>
          </ScrollReveal>

          {/* Bio Content */}
          <ScrollReveal direction="right">
            <div>
              <h3 className="heading-md mb-2">{portfolio.personal.name}</h3>
              <p className="label mb-4">{portfolio.personal.role}</p>

              <p className="body-lg mb-6">{portfolio.personal.bio}</p>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="body-sm">{portfolio.personal.location}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
