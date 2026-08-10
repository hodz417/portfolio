"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { portfolio } from "@/config/portfolio";
import Button from "@/components/ui/Button";

// ─── Hero Section ────────────────────────────────────────────────────────────

const floatingTech = ["Flutter", "Dart", "Firebase"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-secondary/3 blur-[100px]" />
      </div>

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="label mb-8 inline-block"
            >
              {portfolio.personal.role}
            </motion.span>

            {/* Headline */}
            <h1 className="heading-xl mb-8">
              Building beautiful mobile experiences with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Flutter
              </span>
              .
            </h1>

            {/* Subtitle */}
            <p className="body-lg mb-10 max-w-xl">
              {portfolio.personal.bio}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" href="#projects">
                View My Work
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="lg" href="#contact">
                Let&apos;s Talk
                <ExternalLink className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — Floating Tech Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative hidden h-[400px] lg:block"
          >
            {/* Central glow */}
            <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]" />

            {/* Floating tech badges */}
            {floatingTech.map((tech, i) => {
              const positions = [
                { top: "15%", left: "20%", delay: 0 },
                { top: "45%", right: "10%", delay: 0.2 },
                { bottom: "20%", left: "30%", delay: 0.4 },
              ];
              const pos = positions[i];

              return (
                <motion.div
                  key={tech}
                  className="absolute"
                  style={{
                    top: pos.top,
                    bottom: pos.bottom,
                    left: pos.left,
                    right: pos.right,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.6 + pos.delay,
                    duration: 0.5,
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="rounded-[var(--radius-lg)] border border-border bg-surface/80 px-6 py-3 font-mono text-sm text-muted backdrop-blur-sm"
                  >
                    <span className="text-primary">&lt;</span>
                    {tech}
                    <span className="text-primary"> /&gt;</span>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Decorative dots */}
            <div className="absolute right-[15%] top-[10%] h-2 w-2 rounded-full bg-primary/40" />
            <div className="absolute left-[15%] bottom-[15%] h-1.5 w-1.5 rounded-full bg-secondary/40" />
            <div className="absolute right-[30%] bottom-[30%] h-1 w-1 rounded-full bg-primary/30" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted">Scroll</span>
          <ArrowDown className="h-4 w-4 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
