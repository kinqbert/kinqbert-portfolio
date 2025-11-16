import {
  IconChakra,
  IconCSS,
  IconDocker,
  IconDrizzle,
  IconExpressJS,
  IconFigma,
  IconGit,
  IconHTML,
  IconJavaScript,
  IconJWT,
  IconMongoDB,
  IconNestJS,
  IconNextJS,
  IconNodeJS,
  IconNpm,
  IconPostgreSQL,
  IconPrisma,
  IconReact,
  IconRedis,
  IconSCSS,
  IconSequelize,
  IconSocketIO,
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

export const BootstrapTechnology: Technology = {
  title: "Bootstrap",
  imageSrc: null,
};

export const BEMTechnology: Technology = {
  title: "BEM",
  imageSrc: null,
};

export const RestAPITechnology: Technology = {
  title: "REST API",
  imageSrc: null,
};

export const NodeJSTechnology: Technology = {
  title: "Node.js",
  imageSrc: IconNodeJS,
};

export const ExpressJSTechnology: Technology = {
  title: "Express.js",
  imageSrc: IconExpressJS,
};

export const NestJSTechnology: Technology = {
  title: "Nest.js",
  imageSrc: IconNestJS,
};

export const MongoDBTechnology: Technology = {
  title: "MongoDB",
  imageSrc: IconMongoDB,
};

export const PostgreSQLTechnology: Technology = {
  title: "PostgreSQL",
  imageSrc: IconPostgreSQL,
};

export const RedisTechnology: Technology = {
  title: "Redis",
  imageSrc: IconRedis,
};

export const PrismaTechnology: Technology = {
  title: "Prisma",
  imageSrc: IconPrisma,
};

export const DrizzleTechnology: Technology = {
  title: "Drizzle",
  imageSrc: IconDrizzle,
};

export const SequelizeTechnology: Technology = {
  title: "Sequelize",
  imageSrc: IconSequelize,
};

export const SocketIOTechnology: Technology = {
  title: "Socket.IO",
  imageSrc: IconSocketIO,
};

export const JWTTechnology: Technology = {
  title: "JWT",
  imageSrc: IconJWT,
};

export const OAuthTechnology: Technology = {
  title: "OAuth",
  imageSrc: null,
};

export const RBACTechnology: Technology = {
  title: "RBAC",
  imageSrc: null,
};

export const GitTechnology: Technology = {
  title: "Git",
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

export const VSCodeTechnology: Technology = {
  title: "VS Code",
  imageSrc: null,
};

export const GitHubActionsTechnology: Technology = {
  title: "GitHub Actions",
  imageSrc: null,
};

export const GitLabCITechnology: Technology = {
  title: "GitLab CI",
  imageSrc: null,
};

export const JMeterTechnology: Technology = {
  title: "JMeter",
  imageSrc: null,
};

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
  BootstrapTechnology,
  BEMTechnology,
  RestAPITechnology,
];

export const backEndTechnologies: Technology[] = [
  NodeJSTechnology,
  ExpressJSTechnology,
  NestJSTechnology,
  MongoDBTechnology,
  PostgreSQLTechnology,
  RedisTechnology,
  PrismaTechnology,
  DrizzleTechnology,
  SequelizeTechnology,
  SocketIOTechnology,
  JWTTechnology,
  OAuthTechnology,
  RBACTechnology,
];

export const toolsTechnologies: Technology[] = [
  GitTechnology,
  NpmTechnology,
  FigmaTechnology,
  DockerTechnology,
  VSCodeTechnology,
  GitHubActionsTechnology,
  GitLabCITechnology,
  JMeterTechnology,
];
