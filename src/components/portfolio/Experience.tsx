import { jobs } from "./data";
import shared from "./shared.module.css";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section className={`${shared.column} ${shared.block}`} id="experience">
      <div className={shared.blockInner}>
        <h2
          className={`${shared.label} ${shared.sectionLabel}`}
          data-reveal="fade"
        >
          03 — Experience
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
              <div className={styles.title}>
                <p>{job.company}</p>
                <time className={shared.label}>{job.period}</time>
              </div>
              <h3 className={shared.display}>{job.role}</h3>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
