import shared from "./shared.module.css";
import styles from "./About.module.css";

export function About() {
  return (
    <section
      className={`${shared.column} ${styles.about}`}
      id="about"
      aria-labelledby="about-heading"
    >
      <div className={styles.inner}>
        <h2
          className={`${shared.label} ${styles.label}`}
          id="about-heading"
          data-reveal="fade"
        >
          01 — About
        </h2>
        <p className={`${shared.display} ${styles.text}`} data-reveal="fade">
          I&apos;m a full-stack engineer with <em>2+ years</em> of shipping
          production web apps, mostly with{" "}
          <em>React, TypeScript, Node.js, and NestJS</em>. I like owning
          features end to end and writing code the next person can maintain.{" "}
          <em>BSc in Computer Science</em>, Igor Sikorsky Kyiv Polytechnic
          Institute.
        </p>
      </div>
    </section>
  );
}
