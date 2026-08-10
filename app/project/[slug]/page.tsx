import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  CheckCircle,
  Code2,
  Layers,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { portfolio } from "@/config/portfolio";
import { GithubIcon } from "@/components/ui/SocialIcons";
import Button from "@/components/ui/Button";
import TechBadge from "@/components/ui/TechBadge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ─── Static Params (SSG) ────────────────────────────────────────────────────

export async function generateStaticParams() {
  return portfolio.projects.map((project) => ({
    slug: project.slug,
  }));
}

// ─── Dynamic Metadata ────────────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | ${portfolio.personal.name}`,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${portfolio.personal.name}`,
      description: project.description,
      type: "article",
      ...(project.image && { images: [project.image] }),
    },
  };
}

// ─── Project Detail Page ─────────────────────────────────────────────────────

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolio.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20">
        {/* ── Back Navigation ──────────────────────────────────────────── */}
        <div className="container pt-8">
          <ScrollReveal>
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-text"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </ScrollReveal>
        </div>

        {/* ── Project Hero ─────────────────────────────────────────────── */}
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              {/* Category */}
              <span className="label mb-4 block">{project.category}</span>

              {/* Title */}
              <h1 className="heading-xl mb-6">{project.title}</h1>

              {/* Description */}
              <p className="body-lg mb-8 max-w-2xl">
                {project.longDescription || project.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <Button variant="secondary" size="lg" href={project.github} external>
                    <GithubIcon className="h-5 w-5" />
                    View Code
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                )}
                {project.demo && (
                  <Button variant="primary" size="lg" href={project.demo} external>
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Cover Image ──────────────────────────────────────────────── */}
        <section className="container pb-16">
          <ScrollReveal>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[var(--radius-xl)] border border-border">
              <div className="relative aspect-[16/9] bg-surface">
                <Image
                  src={project.image}
                  alt={`${project.title} cover`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                  priority
                />
                {/* Fallback if no image */}
                <div className="absolute inset-0 flex items-center justify-center bg-surface">
                  <div className="text-center">
                    <Code2 className="mx-auto mb-3 h-12 w-12 text-primary/30" />
                    <p className="font-mono text-sm text-muted/40">
                      {project.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Problem & Solution ───────────────────────────────────────── */}
        {(project.problem || project.solution) && (
          <section className="bg-surface/30 py-16 md:py-20">
            <div className="container">
              <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 md:gap-12">
                {project.problem && (
                  <ScrollReveal direction="left">
                    <div className="card p-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-primary-muted">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="heading-sm mb-3">The Problem</h2>
                      <p className="body-md">{project.problem}</p>
                    </div>
                  </ScrollReveal>
                )}
                {project.solution && (
                  <ScrollReveal direction="right">
                    <div className="card p-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-secondary-muted">
                        <Lightbulb className="h-6 w-6 text-secondary" />
                      </div>
                      <h2 className="heading-sm mb-3">The Solution</h2>
                      <p className="body-md">{project.solution}</p>
                    </div>
                  </ScrollReveal>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── Features ─────────────────────────────────────────────────── */}
        {project.features.length > 0 && (
          <section className="py-16 md:py-20">
            <div className="container">
              <div className="mx-auto max-w-4xl">
                <ScrollReveal>
                  <h2 className="heading-md mb-8">Key Features</h2>
                </ScrollReveal>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.features.map((feature, i) => (
                    <ScrollReveal key={i} delay={i * 0.05}>
                      <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-surface p-4 transition-colors hover:border-border-hover">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="body-md text-text">{feature}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Screenshots ──────────────────────────────────────────────── */}
        {project.screenshots.length > 0 && (
          <section className="bg-surface/30 py-16 md:py-20">
            <div className="container">
              <div className="mx-auto max-w-5xl">
                <ScrollReveal>
                  <h2 className="heading-md mb-8">Screenshots</h2>
                </ScrollReveal>
                <div className="grid gap-6 md:grid-cols-2">
                  {project.screenshots.map((src, i) => (
                    <ScrollReveal key={i} delay={i * 0.1}>
                      <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-border">
                        <div className="relative aspect-[9/16] bg-surface sm:aspect-[4/3]">
                          <Image
                            src={src}
                            alt={`${project.title} screenshot ${i + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Architecture / Challenges / Results ──────────────────────── */}
        {(project.architecture || project.challenges || project.results) && (
          <section className="py-16 md:py-20">
            <div className="container">
              <div className="mx-auto max-w-4xl space-y-8">
                {project.architecture && (
                  <ScrollReveal>
                    <div className="card p-8">
                      <div className="mb-3 flex items-center gap-3">
                        <Layers className="h-5 w-5 text-primary" />
                        <h2 className="heading-sm">Architecture</h2>
                      </div>
                      <p className="body-md">{project.architecture}</p>
                    </div>
                  </ScrollReveal>
                )}
                {project.challenges && (
                  <ScrollReveal>
                    <div className="card p-8">
                      <div className="mb-3 flex items-center gap-3">
                        <Target className="h-5 w-5 text-secondary" />
                        <h2 className="heading-sm">Challenges</h2>
                      </div>
                      <p className="body-md">{project.challenges}</p>
                    </div>
                  </ScrollReveal>
                )}
                {project.results && (
                  <ScrollReveal>
                    <div className="card p-8">
                      <div className="mb-3 flex items-center gap-3">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <h2 className="heading-sm">Results</h2>
                      </div>
                      <p className="body-md">{project.results}</p>
                    </div>
                  </ScrollReveal>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── Tech Stack ───────────────────────────────────────────────── */}
        {project.technologies.length > 0 && (
          <section className="bg-surface/30 py-16 md:py-20">
            <div className="container">
              <div className="mx-auto max-w-4xl">
                <ScrollReveal>
                  <h2 className="heading-md mb-6">Technologies Used</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} variant="primary" size="md" />
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        )}

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <section className="py-16 md:py-20">
          <div className="container">
            <ScrollReveal>
              <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 rounded-[var(--radius-xl)] border border-border bg-surface p-8 sm:flex-row sm:p-10">
                <div>
                  <h2 className="heading-sm mb-2">Interested in working together?</h2>
                  <p className="body-sm">Let&apos;s discuss your next project.</p>
                </div>
                <Button variant="primary" size="lg" href="/#contact">
                  Get in Touch
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
