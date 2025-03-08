import Image from "next/image";
import Link from "next/link";

import CodeIcon from "@/assets/general-icons/code-icon.svg";
import DemoIcon from "@/assets/general-icons/demo-icon.svg";

import { Project } from "@/types/Project";

import styles from "./ProjectItem.module.scss";
import { TechnologyItem } from "../TechnologyItem";

interface Props {
  project: Project;
}

export const ProjectItem = ({ project }: Props) => {
  return (
    <div className={styles.projectItem}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoImageWrapper}>
          <Image
            className={styles.logoImage}
            src={project.logoSvgSrc}
            alt="Project image"
          />
        </div>
        <div className={styles.linkButtons}>
          <Link
            href={project.demoHref}
            className={styles.linkButton}
            target="_blank"
          >
            <Image src={DemoIcon} alt="Demo link icon" />
          </Link>
          <Link
            href={project.repoHref}
            className={styles.linkButton}
            target="_blank"
          >
            <Image src={CodeIcon} alt="Code link icon" />
          </Link>
        </div>
      </div>
      <div>
        <h4 className={styles.projectName}>{project.name}</h4>
        <p className={styles.projectDescription}>{project.description}</p>
      </div>
      <div className={styles.technologiesList}>
        {project.technologiesUsed.map((technology) => (
          <TechnologyItem
            key={technology.title}
            technology={technology}
            variant="small"
          />
        ))}
      </div>
    </div>
  );
};
