import type { ReactNode } from "react";

import { jobs } from "./data";
import shared from "./shared.module.css";
import styles from "./Experience.module.css";

// Measured results ("30–45%") are the strongest proof in a bullet, so lift them out of the muted text.
const METRIC = /(\d+(?:[–-]\d+)?%)/;

function withMetrics(point: string): ReactNode {
  return point
    .split(METRIC)
    .map((part, index) =>
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part,
    );
}

export function Experience() {
  return (
    <section
      className={`${shared.column} ${shared.block}`}
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className={shared.blockInner}>
        <h2
          className={`${shared.label} ${shared.sectionLabel}`}
          id="experience-heading"
          data-reveal="fade"
        >
          02 — Experience
        </h2>

        <div className={styles.grid}>
          {jobs.map((job) => (
            <article
              key={job.company}
              className={styles.card}
              data-reveal="fade"
            >
              <div className={`${shared.label} ${styles.topline}`}>
                <span>{job.number}</span>
                {job.current ? (
                  <span className={styles.current}>
                    <i /> Current <em>{job.tag}</em>
                  </span>
                ) : (
                  <span>{job.tag}</span>
                )}
              </div>
              {/* The employer is what differs between roles, so it takes the serif. */}
              <h3 className={shared.display}>{job.company}</h3>
              <div className={styles.meta}>
                <p>{job.role}</p>
                <time className={shared.label}>{job.period}</time>
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{withMetrics(point)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
