import { skills } from "./data";
import { Line } from "./Line";
import shared from "./shared.module.css";
import styles from "./Stack.module.css";

export function Stack() {
  return (
    <section
      className={`${shared.column} ${shared.section} ${styles.stack}`}
      id="stack"
    >
      <div className={shared.sectionHeading}>
        <p className={shared.label} data-reveal="fade">
          Stack / Hard skills
        </p>
        <h2 className={shared.display} data-reveal="lines">
          <Line>Tools I reach for,</Line>
          <Line muted>day to day.</Line>
        </h2>
      </div>
      <div className={styles.grid}>
        {skills.map((group) => (
          <div key={group.title} className={styles.card}>
            <div data-reveal="fade">
              <span className={shared.label}>{group.number}</span>
              <h3 className={shared.display}>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
