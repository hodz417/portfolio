"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { portfolio } from "@/config/portfolio";
import Button from "@/components/ui/Button";

// ─── Navbar Component ────────────────────────────────────────────────────────

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll for sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy
      const sections = portfolio.navigation
        .map((item) => item.href.replace("#", ""))
        .filter(Boolean);

      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[var(--transition-base)] ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container flex h-16 items-center justify-between md:h-20"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo / Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="font-[family-name:var(--font-heading)] text-lg font-bold text-text transition-colors hover:text-primary"
        >
          {portfolio.personal.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex" role="menubar">
          {portfolio.navigation.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <li key={item.href} role="none">
                <a
                  href={item.href}
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`text-sm font-medium transition-colors duration-[var(--transition-fast)] hover:text-text ${
                    isActive ? "text-text" : "text-muted"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="mt-1 h-0.5 rounded-full bg-primary"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            size="sm"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
          >
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] text-muted transition-colors hover:bg-surface hover:text-text md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="container flex flex-col gap-2 pt-8"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {portfolio.navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="rounded-[var(--radius-md)] px-4 py-3 text-lg font-medium text-muted transition-colors hover:bg-surface hover:text-text"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mt-4 px-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
