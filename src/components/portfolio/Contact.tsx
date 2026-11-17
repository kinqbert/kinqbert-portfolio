import { CopyEmailButton } from "./CopyEmailButton";
import { emailAddress, emailHref, links } from "./data";
import { ArrowIcon } from "./icons";
import { Line } from "./Line";
import shared from "./shared.module.css";
import styles from "./Contact.module.css";

const socials = [
  { label: "GitHub", href: links.github },
  { label: "LinkedIn", href: links.linkedin },
  { label: "Telegram", href: links.telegram },
];

export function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <p className={shared.label} data-reveal="fade">
        Contact / Start a conversation
      </p>
      <div className={styles.main}>
        <h2 className={shared.display} data-reveal="lines">
          <Line>Have something</Line>
          <Line muted>worth building?</Line>
        </h2>
        <a
          href={emailHref}
          className={styles.button}
          aria-label="Email Maksym about a project"
        >
          <ArrowIcon />
        </a>
      </div>
      <CopyEmailButton email={emailAddress} />
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
