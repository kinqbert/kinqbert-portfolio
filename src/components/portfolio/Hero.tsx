import { WaveScrambleText } from "@/components/reactbits/WaveScrambleText";

import { links } from "./data";
import { HeroBackground } from "./HeroBackground";
import { ArrowIcon } from "./icons";
import { heroStep } from "./Line";
import shared from "./shared.module.css";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <HeroBackground />
      <div className={styles.inner} data-scroll="hero">
        <p
          className={`${shared.label} ${styles.name}`}
          data-hero-reveal
          style={heroStep(1)}
        >
          <WaveScrambleText>Maksym Perekhodko</WaveScrambleText>
        </p>
        <h1
          className={`${shared.display} ${styles.title}`}
          aria-label="I build digital systems that hold up."
        >
          <span data-hero-reveal style={heroStep(2)}>
            I build digital
          </span>
          <span
            data-hero-reveal
            style={heroStep(3)}
            className={styles.titleMuted}
          >
            systems that
          </span>
          <span data-hero-reveal style={heroStep(4)}>
            hold up<span className={shared.accentDot}>.</span>
          </span>
        </h1>
        <div className={styles.bottom} data-hero-reveal style={heroStep(5)}>
          <p>
            I ship production web apps end to end with React, TypeScript,
            Node.js, and NestJS.
          </p>
          {/* LinkedIn is the goal, so it gets the filled pill; the résumé is the supporting link. */}
          <div className={styles.actions}>
            <a
              href={links.linkedin}
              className={styles.primaryButton}
              target="_blank"
              rel="noreferrer"
            >
              Get in touch
              <ArrowIcon />
            </a>
            <a
              href={links.cv}
              target="_blank"
              rel="noreferrer"
              className={`${shared.underline} ${styles.textLink}`}
            >
              View résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
