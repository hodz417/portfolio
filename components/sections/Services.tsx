"use client";

import { portfolio } from "@/config/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ─── Services Section ────────────────────────────────────────────────────────

export default function Services() {
  if (portfolio.services.length === 0) return null;

  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeader
          label="Services"
          title="What I can do for you"
          description="I offer a range of mobile development services to help bring your ideas to life."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
