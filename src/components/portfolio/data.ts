export const links = {
  github: "https://github.com/kinqbert",
  linkedin: "https://www.linkedin.com/in/maksym-perekhodko/",
  telegram: "https://t.me/perekhodko_m",
  cv: "https://drive.google.com/file/d/1LGtj7QosC5P_yXY0C7ZMM_M5yxTmknrq/view?usp=sharing",
};

export const heroFacts = [
  { label: "Now", value: "Nomic AI", current: true },
  { label: "Before", value: "Sombra, OmiSoft" },
  { label: "Experience", value: "2+ years, commercial" },
  { label: "Education", value: "BSc Computer Science" },
];

export type Project = {
  id: "syncr" | "nice-gadgets";
  number: string;
  category: string;
  scope: string;
  title: string;
  summary: string;
  details: { term: string; description: string }[];
  tags: string[];
  demo: string;
  source: string;
};

export const projects: Project[] = [
  {
    id: "syncr",
    number: "01",
    category: "Featured project",
    scope: "Full-stack",
    title: "Syncr",
    summary:
      "A team collaboration workspace unifying Kanban tasks, dashboards, calendars, real-time chat, notifications, and role-based teams.",
    details: [
      {
        term: "Context",
        description:
          "Collaboration work was split across task, calendar, and messaging tools.",
      },
      {
        term: "My role",
        description:
          "I designed and built the full product flow, from the React interface to the NestJS API and data model.",
      },
      {
        term: "Engineering",
        description:
          "Socket.IO keeps chat and notifications live; PostgreSQL and role-based access keep team data structured and scoped.",
      },
      {
        term: "Outcome",
        description:
          "One responsive workspace now covers six core collaboration flows with real-time updates and permission-aware teams.",
      },
    ],
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
      "A polished device store with fast search, filtering, sorting, and rich product detail pages across screen sizes.",
    details: [
      {
        term: "Context",
        description:
          "A large device catalog needed to remain easy to browse on both desktop and mobile.",
      },
      {
        term: "My role",
        description:
          "I implemented the front-end product experience and its responsive catalog interactions as part of the project team.",
      },
      {
        term: "Engineering",
        description:
          "Reusable React views and centralized Zustand state connect search, filters, sorting, and product detail navigation.",
      },
      {
        term: "Outcome",
        description:
          "Shoppers can move from discovery to a detailed product view in one consistent flow across screen sizes.",
      },
    ],
    tags: ["React", "Zustand", "SCSS", "BEM"],
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
