import { Project } from "@/types/Project";
import Image from "next/image";

import "./ProjectItem.scss";

interface Props {
  project: Project;
}

export const ProjectItem = ({ project }: Props) => {
  return (
    <div className="project-item">
      <div className="project-item__logo-image-wrapper">
        <Image
          className="project-item__logo-image"
          src={project.logoSvgSrc}
          alt="Project image"
        />
      </div>
      <div className="project-item__text-content">
        <h4 className="project-item__project-name">{project.name}</h4>
        <p className="project-item__project-description">
          {project.description}
        </p>
      </div>
    </div>
  );
};
