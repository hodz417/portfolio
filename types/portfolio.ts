// ─── Portfolio Type Definitions ───────────────────────────────────────────────
// All editable content types for the portfolio.
// These types ensure type-safety when editing portfolio.ts.

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  avatar: string;
  resumeUrl?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  whatsapp: string;
  instagram: string;
}

export interface Skill {
  name: string;
  category: "Mobile" | "Language" | "Backend" | "Tools" | "Architecture" | "State Management" | "Database" | "Other";
  icon?: string;
}

export interface Project {
  title: string;
  slug: string;
  category: string;
  description: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  features: string[];
  screenshots: string[];
  image: string;
  technologies: string[];
  architecture?: string;
  challenges?: string;
  results?: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Experience {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

export interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  language: string;
  stars?: number;
}

export interface GitHubConfig {
  profile: string;
  username: string;
  featuredRepos: GitHubRepo[];
}

export interface ContactConfig {
  headline: string;
  description: string;
  formEnabled: boolean;
  formAction?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  social: SocialLinks;
  navigation: NavLink[];
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  services: Service[];
  github: GitHubConfig;
  contact: ContactConfig;
  seo: SEOConfig;
}
