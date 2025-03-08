import { Technology } from "./Technology";

export interface Project {
  logoSvgSrc: string;
  name: string;
  description: string;
  repoHref: string;
  demoHref: string;
  technologiesUsed: Technology[];
}
