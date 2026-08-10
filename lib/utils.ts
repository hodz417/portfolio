import { clsx, type ClassValue } from "clsx";

// ─── Utility Functions ───────────────────────────────────────────────────────

/**
 * Merge class names conditionally (lightweight alternative to clsx if needed)
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Generate a slug from a string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Format a URL for safe external linking
 */
export function getExternalLinkProps() {
  return {
    target: "_blank" as const,
    rel: "noopener noreferrer" as const,
  };
}

/**
 * Check if a string is a valid URL
 */
export function isValidUrl(url: string): boolean {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
