export const links = {
  github: "https://github.com/kinqbert",
  linkedin: "https://www.linkedin.com/in/maksym-perekhodko/",
  telegram: "https://t.me/perekhodko_m",
  cv: "https://drive.google.com/file/d/1LGtj7QosC5P_yXY0C7ZMM_M5yxTmknrq/view?usp=sharing",
};

export type Project = {
  id: "syncr" | "nice-gadgets";
  number: string;
  category: string;
  scope: string;
  title: string;
  summary: string;
  tags: string[];
  demo: string;
  source: string;
};

export const projects: Project[] = [
  {
    id: "syncr",
    number: "01",
    category: "Featured",
    scope: "Full-stack",
    title: "Syncr",
    summary:
      "A team workspace that brings Kanban, calendars, and real-time chat into one place.",
    tags: ["React", "NestJS", "PostgreSQL", "Socket.IO"],
    demo: "https://demo.syncr.cc",
    source: "https://github.com/kinqbert/syncr",
  },
  {
    id: "nice-gadgets",
    number: "02",
    category: "E-commerce",
    scope: "Front-end",
    title: "Nice Gadgets",
    summary:
      "A device store with fast search, filtering, and sorting on any screen size.",
    tags: ["React", "Zustand", "SCSS"],
    demo: "https://fs-mar24-kyrylos-witnesses.github.io/phone-catalog/",
    source: "https://github.com/fs-mar24-kyrylos-witnesses/phone-catalog",
  },
];

export type Job = {
  number: string;
  company: string;
  period: string;
  role: string;
  tag: string;
  current?: boolean;
  points: string[];
};

export const jobs: Job[] = [
  {
    number: "01",
    company: "Nomic AI",
    period: "Jun 2026 — Present",
    role: "Full-stack engineer",
    tag: "AEC AI",
    current: true,
    points: [
      "Implementing third-party integrations across product workflows.",
      "Building an MCP-based framework connecting AI agents with external tools and services.",
      "Developing end-to-end product features across the React and Node.js stack.",
    ],
  },
  {
    number: "02",
    company: "Sombra",
    period: "Dec 2025 — Jun 2026",
    role: "Software engineer",
    tag: "FinTech product",
    points: [
      "Built a canvas-based FinTech platform for interactive financial modeling.",
      "Implemented Entra ID authentication and role-based access control.",
      "Built Azure Functions ingestion pipelines and multi-tenant data isolation.",
    ],
  },
  {
    number: "03",
    company: "OmiSoft",
    period: "Sep 2024 — Dec 2025",
    role: "Full-stack engineer",
    tag: "AI & real-time systems",
    points: [
      "Delivered AI chatbot, agent workflows, and gaming backend systems.",
      "Owned a real-time chatbot platform using OpenAI API, WebSockets, and JWT.",
      "Cut API response times 30–45% through indexing, caching, and query optimization.",
    ],
  },
];

export const skills = [
  {
    number: "01",
    title: "Interface",
    items: ["React", "Next.js", "TypeScript", "Zustand", "SCSS", "Material UI"],
  },
  {
    number: "02",
    title: "Server",
    items: ["Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    number: "03",
    title: "Architecture",
    items: ["REST API", "Socket.IO", "Prisma", "Drizzle", "OAuth", "RBAC"],
  },
  {
    number: "04",
    title: "Delivery",
    items: ["Docker", "Azure", "GitLab CI", "OpenAI API", "Figma", "Git"],
  },
];

export const education = [
  {
    period: "2022 — 2026",
    title: "Bachelor's in Computer Science",
    school: "Igor Sikorsky Kyiv Polytechnic Institute",
  },
  {
    period: "Additional education",
    title: "Full-stack Developer",
    school: "Mate Academy",
  },
];
