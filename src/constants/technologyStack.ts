import {
  IconCPP,
  IconCS,
  IconCSS,
  IconDocker,
  IconExpressJS,
  IconFigma,
  IconGit,
  IconHTML,
  IconJavaScript,
  IconMongoDB,
  IconNextJS,
  IconNodeJS,
  IconNpm,
  IconPhotoshop,
  IconPostgreSQL,
  IconReact,
  IconSequelize,
  IconTypeScript,
  IconVite,
  IconZustand,
} from "@/assets/technology-icons";

import { Technology } from "@/types/Technology";

export const frontEndTechnologies: Technology[] = [
  {
    title: "HTML",
    imageSrc: IconHTML,
  },
  {
    title: "CSS",
    imageSrc: IconCSS,
  },
  {
    title: "JavaScript",
    imageSrc: IconJavaScript,
  },
  {
    title: "TypeScript",
    imageSrc: IconTypeScript,
  },
  {
    title: "React",
    imageSrc: IconReact,
  },
  {
    title: "Next.js",
    imageSrc: IconNextJS,
  },
  {
    title: "Zustand",
    imageSrc: IconZustand,
  },
  {
    title: "Vite",
    imageSrc: IconVite,
  },
];

export const backEndTechnologies: Technology[] = [
  {
    title: "Node.js",
    imageSrc: IconNodeJS,
  },
  {
    title: "Express.js",
    imageSrc: IconExpressJS,
  },
  {
    title: "PostgreSQL",
    imageSrc: IconPostgreSQL,
  },
  {
    title: "Sequelize",
    imageSrc: IconSequelize,
  },
  {
    title: "MongoDB",
    imageSrc: IconMongoDB,
  },
];

export const toolsTechnologies: Technology[] = [
  {
    title: "git",
    imageSrc: IconGit,
  },
  {
    title: "npm",
    imageSrc: IconNpm,
  },
  {
    title: "Figma",
    imageSrc: IconFigma,
  },
  {
    title: "Docker",
    imageSrc: IconDocker,
  },
  {
    title: "Photoshop",
    imageSrc: IconPhotoshop,
  },
];

export const otherTechnologies: Technology[] = [
  {
    title: "C++",
    imageSrc: IconCPP,
  },
  {
    title: "C#",
    imageSrc: IconCS,
  },
];
