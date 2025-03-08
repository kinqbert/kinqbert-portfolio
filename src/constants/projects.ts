import { Project } from "@/types/Project";

import MyBikeLogo from "@/assets/project-icons/mybike-logo.svg";
import NiceGadgetsLogo from "@/assets/project-icons/nice-gadgets-logo.svg";
import TodoLogo from "@/assets/project-icons/todo-logo.svg";
import {
  BulmaTechnology,
  HTMLTechnology,
  ReactTechnology,
  SCSSTechnology,
  TypeScriptTechnology,
  ViteTechnology,
  ZustandTechnology,
} from "./technologyStack";

export const projects: Project[] = [
  {
    name: "Nice Gadgets Store",
    description:
      "Sleek and user-friendly shop for browsing mobile phones and other devices. It features a clean interface with search, filter, and sorting options, providing detailed phone specifications and images.",
    demoHref: "https://fs-mar24-kyrylos-witnesses.github.io/phone-catalog/",
    repoHref: "https://github.com/fs-mar24-kyrylos-witnesses/phone-catalog",
    logoSvgSrc: NiceGadgetsLogo,
    technologiesUsed: [
      ReactTechnology,
      TypeScriptTechnology,
      SCSSTechnology,
      ViteTechnology,
      ZustandTechnology,
    ],
  },
  {
    name: "ToDo Application",
    description:
      "Task management tool built with React and TypeScript, using local storage for persistence. It allows adding, deleting, and modifying tasks, with filtering options to view all, active, or completed assignments..",
    demoHref: "https://kinqbert.github.io/react_todo-app/",
    repoHref: "https://github.com/kinqbert/react_todo-app",
    logoSvgSrc: TodoLogo,
    technologiesUsed: [
      ReactTechnology,
      SCSSTechnology,
      TypeScriptTechnology,
      BulmaTechnology,
    ],
  },
  {
    name: "MyBike Landing",
    description:
      "Responsive static website designed to highlight bicycles and related accessories. It features a modern user interface with smooth animations, built using HTML and SCSS. The site serves as an excellent template for bike-related businesses or product showcases.",
    demoHref: "https://kinqbert.github.io/my-bike-landing/",
    repoHref: "https://github.com/kinqbert/my-bike-landing",
    logoSvgSrc: MyBikeLogo,
    technologiesUsed: [HTMLTechnology, SCSSTechnology],
  },
];
