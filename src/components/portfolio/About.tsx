import shared from "./shared.module.css";
import styles from "./About.module.css";

export function About() {
  return (
    <section
      className={`${shared.column} ${styles.about}`}
      aria-labelledby="about-heading"
    >
      <p className={shared.label} id="about-heading" data-reveal="fade">
        About / Who I am
      </p>
      <p className={`${shared.display} ${styles.text}`} data-reveal="fade">
        I&apos;m a full-stack engineer with <em>2+ years</em> of commercial
        experience shipping production web apps with{" "}
        <em>React, TypeScript, Node.js, and NestJS</em>. I&apos;ve worked across
        FinTech, AI automation, real-time chat, and gaming backends, and
        I&apos;m currently building <em>AI agent tooling at Nomic AI</em>. A
        computer science background keeps me focused on maintainable
        architecture, fast APIs, and features that work end to end.
      </p>
    </section>
  );
}
