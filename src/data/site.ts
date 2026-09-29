/**
 * Single source of truth for all portfolio content.
 * Edit this file (and nothing else) to make the site yours.
 */

export const siteConfig = {
  name: "Felix Luis A. Faustino",
  role: "Computer Science Student",
  tagline: "I build full-stack web apps that people actually use.",
  description:
    "BS Computer Science student at New Era University, building full-stack products with React, Tailwind and Supabase.",
  // TODO: replace with your real domain — feeds canonical URLs, sitemap, robots, OG.
  url: "https://your-domain.com",
  locale: "en_US",
  email: "felixluis.faustino@neu.edu.ph",
  phone: "+63 960-415-8396",
  location: "Quezon City, Philippines",
  avatar: "/profile.jpg",
  resumeUrl: "/resume.pdf", // page 2 of CV-OJT.docx

  nav: [
    { label: "Work", href: "#work" },
    { label: "Education", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/fausturnacht" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/felix-luis-faustino-2630ab170",
    },
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
  period?: string;
  featured?: boolean;
};

export const projects: readonly Project[] = [
  {
    title: "Student Disciplinary Management System",
    description:
      "Full-stack mobile web app for recording and tracking student disciplinary cases. Uses OCR to pull student credentials straight off physical IDs, with an image-manipulation pipeline that keeps the text legible under variable lighting.",
    href: "https://fe-2-osd-management-system.vercel.app/",
    repo: "https://github.com/fausturnacht/FE2-OSD-Management-System",
    tags: ["React", "Tailwind CSS", "Supabase", "OCR"],
    period: "Apr 2026 – May 2026",
    featured: true,
  },
  {
    title: "Product Management System",
    description:
      "Inventory, pricing, monitoring and auditing for company products. Led a 6-member team through Agile delivery and built the internal CRUD API that decoupled business logic from the UI.",
    href: "https://zendata-hope-pms.vercel.app/",
    repo: "https://github.com/fausturnacht/SE2-Zendata-HopePMS",
    tags: ["React", "Tailwind CSS", "Supabase", "REST API", "Agile"],
    period: "Mar 2026 – May 2026",
    featured: true,
  },
  {
    title: "Syllabus & Curriculum Tracker",
    description:
      "Full-stack course tracker where professors monitor and advise students in their own section, backed by a persistent prerequisite map enforced client-side.",
    href: "https://pe-2-km-syllabus-curriculum-map.vercel.app/",
    repo: "https://github.com/JLNerecina/PE2-KM-Curriculum-Map",
    tags: ["React", "Tailwind CSS", "Supabase"],
    period: "Mar 2026 – May 2026",
  },
  {
    title: "Memorandum of Agreement Manager",
    description:
      "MOA dashboard with rule-based access control — registration and login restricted to approved email organizations, backed by role-gated actions and a full audit trail.",
    href: "https://neu-moa-manager.web.app/",
    repo: "https://github.com/fausturnacht/NEU-MOA-Manager",
    tags: ["React", "Tailwind CSS", "RBAC", "Authentication"],
    period: "Feb 2026 – Mar 2026",
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
    company: "New Era University",
    title: "Bachelor of Science in Computer Science",
    period: "2023 — 2027",
    location: "Quezon City",
    summary: "CHED (CMSP) Scholar, President's & Dean's Lister, 1.37 GPA.",
    highlights: [
      "Association of Computer Science Students — member, 2023 – 2025",
      "Coursework across web development, data analytics and machine learning",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  href?: string;
};

export const certifications: readonly Certification[] = [
  {
    name: "React (Basic)",
    issuer: "HackerRank",
    date: "Aug 2026",
    href: "https://www.hackerrank.com/certificates/5d7ad5325682",
  },
  {
    name: "Certified University Student",
    issuer: "Google Gemini",
    date: "Jan 2026",
    href: "https://edu.google.accredible.com/f509058d-6e72-40d4-9dc1-5ced05bb601a",
  },
  {
    name: "Oracle Cloud Infrastructure 2024 (Fundamental, AI, Data)",
    issuer: "Oracle University",
    date: "Dec 2024",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=AB14C43C1911251C4166E1E3AF5C822C3C438FC7C6B48C00042D0B1456E1C5DF",
  },
  {
    name: "SQL and Relational Databases",
    issuer: "Cognitive Class",
    date: "Oct 2024",
    href: "https://courses.cognitiveclass.ai/certificates/f5753967501a42f8985f9a839d629489",
  },
];

export type SkillGroup = {
  label: string;
  skills: readonly string[];
};

export const skills: readonly SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "Java", "PHP", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Laravel", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Supabase",
      "Visual Studio Code",
      "Claude Code",
      "Google Colab",
    ],
  },
  {
    label: "Technical",
    skills: [
      "Object-Oriented Programming",
      "Web Development",
      "Data Analytics",
      "Machine Learning",
    ],
  },
];
