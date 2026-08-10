"use client";

import { ArrowUpRight, Star, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { portfolio } from "@/config/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ─── GitHub / Open Source Section ────────────────────────────────────────────

export default function GitHubSection() {
  const { github } = portfolio;

  return (
    <section id="github" className="section bg-surface/30">
      <div className="container">
        <SectionHeader
          label="Open Source"
          title="Open Source & GitHub"
          description="I enjoy building, experimenting and sharing software projects with the developer community."
        />

        {/* Featured Repos */}
        {github.featuredRepos.length > 0 && (
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {github.featuredRepos.map((repo, index) => (
              <ScrollReveal key={repo.name} delay={index * 0.1}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group block p-6 transition-all duration-[var(--transition-base)] hover:border-primary/30"
                >
                  {/* Repo Header */}
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-primary" />
                      <h3 className="font-[family-name:var(--font-mono)] text-sm font-semibold text-text group-hover:text-primary transition-colors">
                        {repo.name}
                      </h3>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-all duration-[var(--transition-fast)] group-hover:opacity-100" />
                  </div>

                  {/* Description */}
                  <p className="body-sm mb-4 line-clamp-2">
                    {repo.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-xs text-muted">
                        <span className="h-3 w-3 rounded-full bg-secondary" />
                        {repo.language}
                      </span>
                    )}
                    {repo.stars !== undefined && repo.stars > 0 && (
                      <span className="flex items-center gap-1 text-xs text-muted">
                        <Star className="h-3.5 w-3.5" />
                        {repo.stars}
                      </span>
                    )}
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <ScrollReveal>
          <div className="flex justify-center">
            <Button
              variant="secondary"
              size="lg"
              href={github.profile}
              external
            >
              <GithubIcon className="h-5 w-5" />
              View GitHub Profile
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
