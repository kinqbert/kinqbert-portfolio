import type { ComponentType } from "react";

import { projects, type Project } from "./data";
import { ArrowIcon, CodeIcon } from "./icons";
import { Line } from "./Line";
import { StoreMockup, SyncrMockup } from "./ProjectMockups";
import shared from "./shared.module.css";
import styles from "./Projects.module.css";

const mockups: Record<Project["id"], ComponentType> = {
  syncr: SyncrMockup,
  "nice-gadgets": StoreMockup,
};

function ProjectLink({ href, source }: { href: string; source?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${shared.underline} ${styles.link}`}
    >
      {source ? <CodeIcon /> : <ArrowIcon />}
      {source ? "Source" : "Live demo"}
    </a>
  );
}

function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  const Mockup = mockups[project.id];

  return (
    <article className={`${styles.project} ${flip ? styles.flipped : ""}`}>
      <div className={styles.copy} data-reveal="fade">
        <div className={`${shared.label} ${styles.topline}`}>
          <span>
            {project.number} / {project.category}
          </span>
          <span>{project.scope}</span>
        </div>
        <div>
          <h3 className={shared.display}>{project.title}</h3>
          <p>{project.summary}</p>
        </div>
        <dl className={styles.details}>
          {project.details.map((detail) => (
            <div key={detail.term}>
              <dt className={shared.label}>{detail.term}</dt>
              <dd>{detail.description}</dd>
            </div>
          ))}
        </dl>
        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className={styles.links}>
          <ProjectLink href={project.demo} />
          <ProjectLink href={project.source} source />
        </div>
      </div>
      {/* The mat the product window sits on; the window drifts inside it on scroll. */}
      <div className={styles.media} data-reveal="clip" aria-hidden="true">
        <Mockup />
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section className={`${shared.column} ${shared.section}`} id="work">
      <div className={shared.sectionHeading}>
        <p className={shared.label} data-reveal="fade">
          Projects / Selected work
        </p>
        <h2 className={shared.display} data-reveal="lines">
          <Line>Things I&apos;ve built,</Line>
          <Line muted>and how they work.</Line>
        </h2>
      </div>

      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          flip={index % 2 === 1}
        />
      ))}
    </section>
  );
}
