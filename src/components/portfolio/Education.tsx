import { education } from "./data";
import shared from "./shared.module.css";
import styles from "./Education.module.css";

export function Education() {
  return (
    <section
      className={`${shared.column} ${shared.block}`}
      id="education"
      aria-labelledby="education-heading"
    >
      <div
        className={`${shared.blockInner} ${styles.education}`}
        data-reveal="fade"
      >
        <h2 className={shared.label} id="education-heading">
          05 — Education
        </h2>
        {education.map((entry) => (
          <div key={entry.title}>
            <span className={shared.label}>{entry.period}</span>
            <h3 className={shared.display}>{entry.title}</h3>
            <p>{entry.school}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
