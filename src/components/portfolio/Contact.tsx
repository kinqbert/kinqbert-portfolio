import { links } from "./data";
import { ArrowIcon } from "./icons";
import { Line } from "./Line";
import shared from "./shared.module.css";
import styles from "./Contact.module.css";

const socials = [
  { label: "GitHub", href: links.github },
  { label: "Telegram", href: links.telegram },
];

export function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <p className={shared.label} data-reveal="fade">
        06 — Contact
      </p>
      <div className={styles.main}>
        <h2 className={shared.display} data-reveal="lines">
          <Line>Have something</Line>
          <Line muted>worth building?</Line>
        </h2>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          className={styles.button}
          aria-label="Message Maksym on LinkedIn"
        >
          <ArrowIcon />
        </a>
      </div>
      <a
        href={links.linkedin}
        target="_blank"
        rel="noreferrer"
        className={`${shared.display} ${styles.handle}`}
        data-reveal="fade"
      >
        <span>/maksym-perekhodko</span>
        <small className={shared.label}>Message me on LinkedIn ↗</small>
      </a>
      <div className={styles.socials} data-reveal="stagger">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className={shared.underline}
          >
            {social.label} <ArrowIcon />
          </a>
        ))}
      </div>
    </section>
  );
}
