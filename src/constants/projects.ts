import { Project } from "@/types/Project";

import MyBikeLogo from "@/assets/project-icons/mybike-logo.svg";
import NiceGadgetsLogo from "@/assets/project-icons/nice-gadgets-logo.svg";
import TodoLogo from "@/assets/project-icons/todo-logo.svg";

export const projects: Project[] = [
  {
    name: "Nice Gadgets Store",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    demoUrl: "",
    repoUrl: "",
    logoSvgSrc: NiceGadgetsLogo,
  },
  {
    name: "ToDo Application",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    demoUrl: "",
    repoUrl: "",
    logoSvgSrc: TodoLogo,
  },
  {
    name: "MyBike Landing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    demoUrl: "",
    repoUrl: "",
    logoSvgSrc: MyBikeLogo,
  },
];
