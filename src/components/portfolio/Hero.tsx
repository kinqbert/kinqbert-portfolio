import { WaveScrambleText } from "@/components/reactbits/WaveScrambleText";

import { heroFacts, links } from "./data";
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
          <div className={styles.actions}>
            <a
              href={links.cv}
              className={styles.primaryButton}
              target="_blank"
              rel="noreferrer"
            >
              View résumé
              <ArrowIcon />
            </a>
            <a
              href="#contact"
              className={`${shared.underline} ${styles.textLink}`}
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
      <dl className={styles.facts} data-hero-reveal style={heroStep(6)}>
        {heroFacts.map((fact) => (
          <div key={fact.label}>
            <dt className={shared.label}>{fact.label}</dt>
            <dd>
              {fact.current && <i aria-hidden="true" />}
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
