import { projects } from "@/constants/projects";
import "./ProjectsSection.scss";
import { ProjectItem } from "@/components/common/ProjectItem";

export const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-section__title">Projects</h2>
      <div className="projects-section__projects-list">
        {projects.map((project, index) => (
          <ProjectItem project={project} key={index} />
        ))}
      </div>
    </section>
  );
};
