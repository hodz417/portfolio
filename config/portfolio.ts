import { PortfolioConfig } from "@/types/portfolio";

// ─── Portfolio Configuration ─────────────────────────────────────────────────
// 🔑 This is your SINGLE SOURCE OF TRUTH.
// Edit this file to change ALL content on your portfolio.
// You should NEVER need to modify UI components for content changes.
// ─────────────────────────────────────────────────────────────────────────────

export const portfolio: PortfolioConfig = {
  // ── Personal Information ────────────────────────────────────────────────
  personal: {
    name: "Mahmoud Hussein",
    role: "Flutter Developer",
    location: "Egypt",
    email: "your@email.com",
    phone: "+20XXXXXXXXXX",
    bio: "Flutter Developer focused on building scalable, performant and user-friendly mobile applications. Passionate about clean architecture, beautiful UI, and delivering high-quality digital experiences.",
    avatar: "/images/profile/avatar.webp",
    resumeUrl: "",
  },

  // ── Social Links ────────────────────────────────────────────────────────
  social: {
    github: "https://github.com/USERNAME",
    linkedin: "https://linkedin.com/in/USERNAME",
    twitter: "",
    whatsapp: "+20XXXXXXXXXX",
    instagram: "",
  },

  // ── Navigation ──────────────────────────────────────────────────────────
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  // ── Skills / Tech Stack ─────────────────────────────────────────────────
  skills: [
    { name: "Flutter", category: "Mobile" },
    { name: "Dart", category: "Language" },
    { name: "Firebase", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "Riverpod", category: "State Management" },
    { name: "Bloc", category: "State Management" },
    { name: "SQLite", category: "Database" },
    { name: "Supabase", category: "Backend" },
    { name: "Clean Architecture", category: "Architecture" },
  ],

  // ── Projects ────────────────────────────────────────────────────────────
  projects: [
    {
      title: "Project One",
      slug: "project-one",
      category: "Mobile Application",
      description: "A brief description of your first project. Replace this with real project details.",
      longDescription: "A longer description that appears on the project detail page. Explain the project in more depth here.",
      problem: "Describe the problem this project solves.",
      solution: "Describe how your project solves the problem.",
      features: [
        "Feature one",
        "Feature two",
        "Feature three",
        "Feature four",
      ],
      screenshots: [
        "/images/projects/project-one/screenshot-1.webp",
        "/images/projects/project-one/screenshot-2.webp",
      ],
      image: "/images/projects/project-one/cover.webp",
      technologies: ["Flutter", "Dart", "Firebase", "Riverpod"],
      architecture: "Clean Architecture with feature-first folder structure.",
      challenges: "Describe any challenges you faced during development.",
      results: "Describe the outcome and impact of the project.",
      github: "https://github.com/USERNAME/project-one",
      demo: "",
      featured: true,
    },
    {
      title: "Project Two",
      slug: "project-two",
      category: "Mobile Application",
      description: "A brief description of your second project. Replace this with real project details.",
      longDescription: "A longer description for the detail page.",
      problem: "What problem does this app solve?",
      solution: "How does it solve it?",
      features: [
        "Feature one",
        "Feature two",
        "Feature three",
      ],
      screenshots: [
        "/images/projects/project-two/screenshot-1.webp",
      ],
      image: "/images/projects/project-two/cover.webp",
      technologies: ["Flutter", "Dart", "REST API", "Bloc"],
      architecture: "",
      challenges: "",
      results: "",
      github: "https://github.com/USERNAME/project-two",
      demo: "",
      featured: true,
    },
    {
      title: "Project Three",
      slug: "project-three",
      category: "Mobile Application",
      description: "A brief description of your third project.",
      longDescription: "",
      problem: "",
      solution: "",
      features: [
        "Feature one",
        "Feature two",
      ],
      screenshots: [],
      image: "/images/projects/project-three/cover.webp",
      technologies: ["Flutter", "Dart", "SQLite"],
      github: "",
      demo: "",
      featured: true,
    },
    {
      title: "Project Four",
      slug: "project-four",
      category: "Open Source Package",
      description: "A brief description of your fourth project.",
      longDescription: "",
      problem: "",
      solution: "",
      features: [
        "Feature one",
        "Feature two",
      ],
      screenshots: [],
      image: "/images/projects/project-four/cover.webp",
      technologies: ["Flutter", "Dart"],
      github: "",
      demo: "",
      featured: false,
    },
  ],

  // ── Experience ──────────────────────────────────────────────────────────
  experience: [
    {
      role: "Flutter Developer",
      company: "Your Company / Freelance",
      startDate: "2025",
      endDate: "Present",
      description: "Brief description of your role and responsibilities.",
      responsibilities: [
        "Built cross-platform mobile applications using Flutter",
        "Integrated REST APIs and Firebase services",
        "Implemented clean architecture and state management patterns",
        "Collaborated with design teams to implement pixel-perfect UIs",
      ],
      technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
    },
    {
      role: "Mobile App Developer",
      company: "Previous Company / Project",
      startDate: "2024",
      endDate: "2025",
      description: "Brief description of your earlier role.",
      responsibilities: [
        "Developed and maintained mobile applications",
        "Wrote unit and widget tests",
        "Optimized app performance and reduced load times",
      ],
      technologies: ["Flutter", "Dart", "SQLite"],
    },
  ],

  // ── Services ────────────────────────────────────────────────────────────
  services: [
    {
      title: "Mobile App Development",
      description: "Building cross-platform mobile applications using Flutter with clean architecture and modern state management.",
      icon: "smartphone",
      technologies: ["Flutter", "Dart", "iOS", "Android"],
    },
    {
      title: "UI Implementation",
      description: "Converting Figma designs into responsive, pixel-perfect Flutter interfaces with smooth animations.",
      icon: "palette",
      technologies: ["Flutter", "Figma", "Responsive Design"],
    },
    {
      title: "API Integration",
      description: "Connecting mobile applications with REST APIs, GraphQL endpoints and backend services.",
      icon: "plug",
      technologies: ["REST API", "GraphQL", "Dio", "HTTP"],
    },
    {
      title: "Firebase Integration",
      description: "Authentication, Firestore, Cloud Storage, Push Notifications and other Firebase services.",
      icon: "flame",
      technologies: ["Firebase", "Auth", "Firestore", "FCM"],
    },
  ],

  // ── GitHub ──────────────────────────────────────────────────────────────
  github: {
    profile: "https://github.com/USERNAME",
    username: "USERNAME",
    featuredRepos: [
      {
        name: "repo-name",
        description: "A short description of your repository.",
        url: "https://github.com/USERNAME/repo-name",
        language: "Dart",
        stars: 0,
      },
    ],
  },

  // ── Contact ─────────────────────────────────────────────────────────────
  contact: {
    headline: "Have an idea? Let's build it.",
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    formEnabled: false, // Set to true when you have a form backend (Formspree, etc.)
    formAction: "", // e.g. "https://formspree.io/f/YOUR_FORM_ID"
  },

  // ── SEO ─────────────────────────────────────────────────────────────────
  seo: {
    title: "Mahmoud Hussein | Flutter Developer",
    description: "Flutter Developer specializing in building modern, scalable and high-performance mobile applications.",
    keywords: [
      "Flutter Developer",
      "Mobile App Developer",
      "Dart Developer",
      "Flutter Egypt",
      "Mobile Application Development",
    ],
    ogImage: "/images/og-image.webp",
    canonicalUrl: "",
  },
};
