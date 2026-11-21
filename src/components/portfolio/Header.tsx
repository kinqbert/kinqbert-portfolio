import Image from "next/image";

import PortfolioLogo from "@/assets/portfolio-logo.svg";

import { links } from "./data";
import { heroStep } from "./Line";
import shared from "./shared.module.css";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header} data-hero-reveal style={heroStep(0)}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          <Image src={PortfolioLogo} alt="Maksym Perekhodko — home" priority />
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#experience" className={shared.underline}>
            Experience
          </a>
          <a href="#work" className={shared.underline}>
            Projects
          </a>
          <a href="#stack" className={shared.underline}>
            Stack
          </a>
        </nav>
        <a
          href={links.linkedin}
          className={styles.cta}
          target="_blank"
          rel="noreferrer"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
