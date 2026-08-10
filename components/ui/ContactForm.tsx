"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Button from "./Button";
import { portfolio } from "@/config/portfolio";

// ─── Contact Form Component ─────────────────────────────────────────────────

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setFormState("loading");

    try {
      if (portfolio.contact.formAction) {
        const res = await fetch(portfolio.contact.formAction, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error("Failed to send message");
      }

      setFormState("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setFormState("idle"), 5000);
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 5000);
    }
  };

  const inputStyles =
    "w-full rounded-[var(--radius-md)] border border-border bg-surface px-4 py-3 text-text placeholder:text-muted/50 transition-colors duration-[var(--transition-fast)] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 font-[family-name:var(--font-body)]";

  if (formState === "success") {
    return (
      <div className="card flex flex-col items-center justify-center p-12 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-green-400" />
        <h3 className="heading-sm mb-2">Message Sent!</h3>
        <p className="body-sm">Thank you for reaching out. I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="body-sm mb-2 block font-medium text-text">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`${inputStyles} ${errors.name ? "border-red-400" : ""}`}
          disabled={formState === "loading"}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="body-sm mb-2 block font-medium text-text">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`${inputStyles} ${errors.email ? "border-red-400" : ""}`}
          disabled={formState === "loading"}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="body-sm mb-2 block font-medium text-text">
          Message
        </label>
        <textarea
          id="contact-message"
          placeholder="Tell me about your project..."
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputStyles} resize-none ${errors.message ? "border-red-400" : ""}`}
          disabled={formState === "loading"}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Error State */}
      {formState === "error" && (
        <div className="flex items-center gap-2 rounded-[var(--radius-md)] bg-red-400/10 p-3 text-sm text-red-400">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          Failed to send message. Please try again or contact me directly.
        </div>
      )}

      {/* Submit */}
      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={formState === "loading"}>
        {formState === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
