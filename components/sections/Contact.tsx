"use client";

import { Mail, MessageCircle, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { portfolio } from "@/config/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/ui/ContactForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { isValidUrl } from "@/lib/utils";

// ─── Contact Section ─────────────────────────────────────────────────────────

interface ContactLink {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}

export default function Contact() {
  const contactLinks: ContactLink[] = [
    ...(portfolio.personal.email
      ? [
          {
            icon: Mail,
            label: "Email",
            value: portfolio.personal.email,
            href: `mailto:${portfolio.personal.email}`,
          },
        ]
      : []),
    ...(isValidUrl(portfolio.social.github)
      ? [
          {
            icon: GithubIcon,
            label: "GitHub",
            value: portfolio.github.username || "GitHub",
            href: portfolio.social.github,
          },
        ]
      : []),
    ...(isValidUrl(portfolio.social.linkedin)
      ? [
          {
            icon: LinkedinIcon,
            label: "LinkedIn",
            value: "LinkedIn Profile",
            href: portfolio.social.linkedin,
          },
        ]
      : []),
    ...(portfolio.social.whatsapp
      ? [
          {
            icon: MessageCircle,
            label: "WhatsApp",
            value: portfolio.social.whatsapp,
            href: `https://wa.me/${portfolio.social.whatsapp.replace(/[^0-9]/g, "")}`,
          },
        ]
      : []),
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          label="Get in Touch"
          title={portfolio.contact.headline}
          description={portfolio.contact.description}
        />

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h3 className="heading-sm">Contact Information</h3>
                <p className="body-md">
                  Feel free to reach out through any of the following channels.
                </p>

                <div className="flex flex-col gap-4">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="group flex items-center gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-4 transition-all duration-[var(--transition-fast)] hover:border-primary/30 hover:bg-surface-hover"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-primary-muted transition-colors group-hover:bg-primary/20">
                        <link.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted">{link.label}</p>
                        <p className="text-sm font-medium text-text">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  ))}

                  {/* Location */}
                  <div className="flex items-center gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-secondary-muted">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">Location</p>
                      <p className="text-sm font-medium text-text">
                        {portfolio.personal.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form or CTA */}
            <ScrollReveal direction="right">
              {portfolio.contact.formEnabled ? (
                <ContactForm />
              ) : (
                <div className="card flex flex-col items-center justify-center p-12 text-center">
                  <Mail className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="heading-sm mb-3">Start a Conversation</h3>
                  <p className="body-sm mb-6">
                    Prefer email? Send me a message and I&apos;ll get back to you
                    as soon as possible.
                  </p>
                  <Button
                    href={`mailto:${portfolio.personal.email}`}
                    variant="primary"
                    size="md"
                  >
                    <Mail className="h-4 w-4" />
                    Send Email
                  </Button>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
