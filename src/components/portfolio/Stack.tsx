import { skills } from "./data";
import shared from "./shared.module.css";
import styles from "./Stack.module.css";

export function Stack() {
  return (
    <section
      className={`${shared.column} ${shared.block}`}
      id="stack"
      aria-labelledby="stack-heading"
    >
      <div className={shared.blockInner}>
        <h2
          className={`${shared.label} ${shared.sectionLabel}`}
          id="stack-heading"
          data-reveal="fade"
        >
          04 — Stack
        </h2>
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
      </div>
    </section>
  );
}
