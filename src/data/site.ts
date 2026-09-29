/**
 * Single source of truth for all portfolio content.
 * Edit this file (and nothing else) to make the site yours.
 */

export const siteConfig = {
  name: "Your Name",
  role: "Software Engineer",
  tagline: "I build things for the web.",
  description:
    "Software engineer working on products, performance, and developer experience.",
  url: "https://your-domain.com", // used for canonical URLs + sitemap
  locale: "en_US",
  email: "you@example.com",
  location: "Berlin, Germany",
  avatar: "/avatar.jpg", // place a file in /public, or point at an external URL
  resumeUrl: "/resume.pdf", // place a file in /public

  nav: [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/yourhandle" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle" },
    { label: "X", href: "https://x.com/yourhandle" },
  ],
} as const;

export type Project = {
  title: string;
  description: string;
  href?: string;
  repo?: string;
  image?: string;
  tags: readonly string[];
  year?: string;
  featured?: boolean;
};

export const projects: readonly Project[] = [
  {
    title: "Project One",
    description:
      "One sentence on what it does and why it mattered. Lead with the outcome, not the stack.",
    href: "https://example.com",
    repo: "https://github.com/yourhandle/project-one",
    tags: ["Next.js", "TypeScript", "Postgres"],
    year: "2025",
    featured: true,
  },
  {
    title: "Project Two",
    description: "A second project. Keep the description to one or two lines.",
    tags: ["Go", "Kubernetes"],
    year: "2024",
  },
  {
    title: "Project Three",
    description: "A third project. Three is usually enough to start.",
    tags: ["Rust", "WebAssembly"],
    year: "2023",
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  summary: string;
  highlights?: readonly string[];
};

export const experience: readonly Role[] = [
  {
    company: "Current Company",
    title: "Senior Software Engineer",
    period: "2023 — Present",
    location: "Remote",
    summary: "What you own and who you work with.",
    highlights: ["Shipped thing X, resulting in Y", "Led migration of Z"],
  },
  {
    company: "Previous Company",
    title: "Software Engineer",
    period: "2020 — 2023",
    location: "Berlin",
    summary: "Short scope of work.",
  },
];

export type SkillGroup = {
  label: string;
  skills: readonly string[];
};

export const skills: readonly SkillGroup[] = [
  { label: "Languages", skills: ["TypeScript", "Go", "Python", "SQL"] },
  { label: "Frontend", skills: ["React", "Next.js", "Tailwind CSS"] },
  { label: "Backend", skills: ["Node.js", "PostgreSQL", "Redis"] },
  { label: "Infra", skills: ["Vercel", "Docker", "GitHub Actions"] },
];
