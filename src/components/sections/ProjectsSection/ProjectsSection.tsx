import { ProjectItem } from "@/components/common/ProjectItem";

import { projects } from "@/constants/projects";

import styles from "./ProjectsSection.module.scss";

export const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <ul className={styles.projectsList}>
          {projects.map((project, index) => (
            <ProjectItem project={project} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};
