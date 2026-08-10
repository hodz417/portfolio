"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

// ─── Global 404 Page ─────────────────────────────────────────────────────────

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-1/3 bottom-1/3 h-[250px] w-[250px] rounded-full bg-secondary/3 blur-[100px]" />
      </div>

      <div className="container relative text-center">
        {/* 404 Number */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-4 font-[family-name:var(--font-heading)] text-[8rem] font-bold leading-none tracking-tighter md:text-[12rem]"
        >
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
            404
          </span>
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="heading-md mb-4">Page not found</h2>
          <p className="body-lg mx-auto mb-8 max-w-md">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link className={buttonVariants({ variant: "default", size: "lg" })} href="/">
            <Home className="h-4 w-4 mr-2" />
            Go Home
          </Link>
          <button
            className={buttonVariants({ variant: "secondary", size: "lg" })}
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </button>
        </motion.div>
      </div>

      {/* CSS animation for gradient */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </main>
  );
}
