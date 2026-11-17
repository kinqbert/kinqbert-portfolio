import type { ComponentType } from "react";

import { projects, type Project } from "./data";
import { StoreMockup, SyncrMockup } from "./ProjectMockups";
import shared from "./shared.module.css";
import styles from "./Projects.module.css";

const mockups: Record<Project["id"], ComponentType> = {
  syncr: SyncrMockup,
  "nice-gadgets": StoreMockup,
};

function ProjectCard({ project }: { project: Project }) {
  const Mockup = mockups[project.id];

  return (
    <article className={styles.card}>
      {/* The mat the product window sits on; the window runs off its bottom edge. */}
      <div className={styles.media} data-reveal="clip" aria-hidden="true">
        <Mockup />
      </div>
      <div className={styles.copy} data-reveal="fade">
        <p className={`${shared.label} ${styles.topline}`}>
          <span>
            {project.number} / {project.category}
          </span>
          <span>{project.scope}</span>
        </p>
        <h3 className={shared.display}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>
        <p className={styles.tags}>{project.tags.join(" · ")}</p>
        <div className={styles.links}>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className={`${shared.underline} ${styles.link}`}
          >
            Live demo ↗
          </a>
          <a
            href={project.source}
            target="_blank"
            rel="noreferrer"
            className={`${shared.underline} ${styles.link}`}
          >
            Source ↗
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section className={`${shared.column} ${styles.projects}`} id="work">
      <div className={styles.inner}>
        <h2 className={`${shared.label} ${styles.label}`} data-reveal="fade">
          02 — Projects
        </h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
