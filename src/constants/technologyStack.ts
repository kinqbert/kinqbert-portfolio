import {
  IconBulma,
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
  IconSCSS,
  IconSequelize,
  IconTypeScript,
  IconVite,
  IconZustand,
} from "@/assets/technology-icons";

import { Technology } from "@/types/Technology";

export const HTMLTechnology: Technology = {
  title: "HTML",
  imageSrc: IconHTML,
};

export const CSSTechnology: Technology = {
  title: "CSS",
  imageSrc: IconCSS,
};

export const BulmaTechnology: Technology = {
  title: "Bulma",
  imageSrc: IconBulma,
};

export const SCSSTechnology: Technology = {
  title: "SCSS",
  imageSrc: IconSCSS,
};

export const JavaScriptTechnology: Technology = {
  title: "JavaScript",
  imageSrc: IconJavaScript,
};

export const TypeScriptTechnology: Technology = {
  title: "TypeScript",
  imageSrc: IconTypeScript,
};

export const ReactTechnology: Technology = {
  title: "React",
  imageSrc: IconReact,
};

export const NextJSTechnology: Technology = {
  title: "Next.js",
  imageSrc: IconNextJS,
};

export const ZustandTechnology: Technology = {
  title: "Zustand",
  imageSrc: IconZustand,
};

export const ViteTechnology: Technology = {
  title: "Vite",
  imageSrc: IconVite,
};

// Back-End Technologies
export const NodeJSTechnology: Technology = {
  title: "Node.js",
  imageSrc: IconNodeJS,
};

export const ExpressJSTechnology: Technology = {
  title: "Express.js",
  imageSrc: IconExpressJS,
};

export const PostgreSQLTechnology: Technology = {
  title: "PostgreSQL",
  imageSrc: IconPostgreSQL,
};

export const SequelizeTechnology: Technology = {
  title: "Sequelize",
  imageSrc: IconSequelize,
};

export const MongoDBTechnology: Technology = {
  title: "MongoDB",
  imageSrc: IconMongoDB,
};

// Tools Technologies
export const GitTechnology: Technology = {
  title: "git",
  imageSrc: IconGit,
};

export const NpmTechnology: Technology = {
  title: "npm",
  imageSrc: IconNpm,
};

export const FigmaTechnology: Technology = {
  title: "Figma",
  imageSrc: IconFigma,
};

export const DockerTechnology: Technology = {
  title: "Docker",
  imageSrc: IconDocker,
};

export const PhotoshopTechnology: Technology = {
  title: "Photoshop",
  imageSrc: IconPhotoshop,
};

// Other Technologies
export const CPPTechnology: Technology = {
  title: "C++",
  imageSrc: IconCPP,
};

export const CSTechnology: Technology = {
  title: "C#",
  imageSrc: IconCS,
};

// Arrays of Technologies
export const frontEndTechnologies: Technology[] = [
  HTMLTechnology,
  CSSTechnology,
  SCSSTechnology,
  JavaScriptTechnology,
  TypeScriptTechnology,
  ReactTechnology,
  NextJSTechnology,
  ZustandTechnology,
  ViteTechnology,
];

export const backEndTechnologies: Technology[] = [
  NodeJSTechnology,
  ExpressJSTechnology,
  PostgreSQLTechnology,
  SequelizeTechnology,
  MongoDBTechnology,
];

export const toolsTechnologies: Technology[] = [
  GitTechnology,
  NpmTechnology,
  FigmaTechnology,
  DockerTechnology,
  PhotoshopTechnology,
];

export const otherTechnologies: Technology[] = [CPPTechnology, CSTechnology];
