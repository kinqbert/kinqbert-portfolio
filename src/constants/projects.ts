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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    demoHref: "https://kinqbert.github.io/my-bike-landing/",
    repoHref: "https://github.com/kinqbert/my-bike-landing",
    logoSvgSrc: MyBikeLogo,
    technologiesUsed: [HTMLTechnology, SCSSTechnology],
  },
];
