"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FolderSearch } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

// ─── Project Not Found ──────────────────────────────────────────────────────

export default function ProjectNotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-[var(--radius-xl)] bg-primary-muted"
        >
          <FolderSearch className="h-10 w-10 text-primary" />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <h1 className="heading-lg mb-4">Project not found</h1>
          <p className="body-lg mx-auto mb-8 max-w-md">
            This project doesn&apos;t exist or may have been removed. Check out
            my other work instead.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link className={buttonVariants({ variant: "default", size: "lg" })} href="/#projects">
            <ArrowLeft className="h-4 w-4 mr-2" />
            View All Projects
          </Link>
          <Link className={buttonVariants({ variant: "secondary", size: "lg" })} href="/">
            Go Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
