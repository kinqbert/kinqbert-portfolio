"use client";

import { animate, createScope, stagger } from "animejs";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import PortfolioLogo from "@/assets/portfolio-logo.svg";

import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { SpotlightGrid } from "@/components/reactbits/SpotlightGrid";
import {
  ScrambleText,
  type ScrambleTextHandle,
} from "@/components/reactbits/ScrambleText";
import { WaveScrambleText } from "@/components/reactbits/WaveScrambleText";

import styles from "./Portfolio.module.scss";

const Dither = dynamic(() => import("@/components/reactbits/Dither"), {
  ssr: false,
});

const links = {
  github: "https://github.com/kinqbert",
  linkedin: "https://www.linkedin.com/in/maksym-perekhodko/",
  telegram: "https://t.me/perekhodko_m",
  cv: "https://drive.google.com/file/d/1LGtj7QosC5P_yXY0C7ZMM_M5yxTmknrq/view?usp=sharing",
};

const emailAddress = "perekhodko.maksym@gmail.com";

const skills = [
  {
    number: "01",
    title: "Interface",
    items: ["React", "Next.js", "TypeScript", "Zustand", "SCSS", "Material UI"],
  },
  {
    number: "02",
    title: "Server",
    items: ["Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    number: "03",
    title: "Architecture",
    items: ["REST API", "Socket.IO", "Prisma", "Drizzle", "OAuth", "RBAC"],
  },
  {
    number: "04",
    title: "Delivery",
    items: ["Docker", "Azure", "GitLab CI", "OpenAI API", "Figma", "Git"],
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 16 16 4M7 4h9v9" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="m7 5-5 5 5 5M13 5l5 5-5 5" />
  </svg>
);

function ProjectLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.projectLink}>
      {children === "Source" ? <CodeIcon /> : <ArrowIcon />}
      {children}
    </a>
  );
}

export function Portfolio() {
  const root = useRef<HTMLElement>(null);
  const copyResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resumeText = useRef<ScrambleTextHandle>(null);
  const talkText = useRef<ScrambleTextHandle>(null);
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = emailAddress;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    setIsEmailCopied(true);
    if (copyResetTimer.current) clearTimeout(copyResetTimer.current);
    copyResetTimer.current = setTimeout(() => setIsEmailCopied(false), 1800);
  };

  useEffect(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scope = createScope({ root }).add(() => {
      animate("[data-hero-reveal]", {
        opacity: [0, 1],
        y: [42, 0],
        duration: 1000,
        delay: stagger(95),
        ease: "outExpo",
      });

      animate("[data-pulse]", {
        scale: [1, 1.35, 1],
        opacity: [1, 0.45, 1],
        duration: 2200,
        loop: true,
        ease: "inOutSine",
      });

      const revealElements = root.current?.querySelectorAll<HTMLElement>("[data-reveal]");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            animate(entry.target, {
              opacity: [0, 1],
              y: [36, 0],
              duration: 850,
              ease: "outExpo",
            });
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.14 }
      );

      revealElements?.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    });

    return () => scope.revert();
  }, []);

  useEffect(() => {
    return () => {
      if (copyResetTimer.current) clearTimeout(copyResetTimer.current);
    };
  }, []);

  return (
    <main ref={root} className={styles.page}>
      <header className={styles.header} data-hero-reveal>
        <div className={styles.headerInner}>
          <div className={styles.logo} aria-label="Maksym Perekhodko">
            <Image src={PortfolioLogo} alt="" priority />
          </div>
          <nav className={styles.nav} aria-label="Main navigation">
            <a href="#work">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#stack">Stack</a>
          </nav>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className={styles.headerCta}
            onMouseEnter={() => talkText.current?.play()}
            onFocus={() => talkText.current?.play()}
          >
            <ScrambleText ref={talkText}>LET&apos;S TALK</ScrambleText>
          </a>
        </div>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.ditherBackground} aria-hidden="true">
          <Dither
            waveColor={[0.48, 0.48, 0.48]}
            waveSpeed={0.035}
            waveFrequency={2.8}
            waveAmplitude={0.32}
            colorNum={4}
            pixelSize={3}
            enableMouseInteraction
            mouseRadius={0.72}
          />
        </div>
        <div className={styles.heroInner}>
          <div className={styles.heroMain}>
            <p className={styles.eyebrow} data-hero-reveal>
              <span data-pulse /> Full-stack engineer · Ukraine
            </p>
            <h1 className={styles.heroTitle} aria-label="I build digital systems that hold up">
              <span data-hero-reveal>I build digital</span>
              <span data-hero-reveal className={styles.outlineText}>systems that</span>
              <span data-hero-reveal>hold up.</span>
            </h1>
            <div className={styles.heroBottom} data-hero-reveal>
              <p>
                My name is <WaveScrambleText className={styles.animatedName}>Maksym Perekhodko</WaveScrambleText>. I&apos;m a full-stack engineer.
              </p>
              <div className={styles.heroActions}>
                <a
                  href={links.cv}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryButton}
                  onMouseEnter={() => resumeText.current?.play()}
                  onFocus={() => resumeText.current?.play()}
                >
                  <ScrambleText ref={resumeText}>VIEW RÉSUMÉ</ScrambleText>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.metrics} aria-label="Career highlights" data-reveal>
        <div><span>Current position</span><strong>Full-stack</strong></div>
        <div><span>Commercial experience</span><strong>2+ years</strong></div>
        <div><span>Personal projects</span><strong>3 projects</strong></div>
        <div><span>Primary technologies</span><strong>React / Node</strong></div>
      </section>

      <section className={styles.section} id="work">
        <div className={styles.sectionHeading} data-reveal>
          <p className={styles.kicker}>Projects / selected work</p>
          <h2>Built for real use,<br /><span>not just the screenshot.</span></h2>
        </div>

        <SpotlightCard className={`${styles.project} ${styles.projectFeatured}`}>
          <div className={styles.projectCopy} data-reveal>
            <div className={styles.projectTopline}>
              <span>01 / Featured project</span>
              <span>Full-stack</span>
            </div>
            <div>
              <h3>Syncr</h3>
              <p>
                A team collaboration workspace unifying Kanban tasks, dashboards,
                calendars, real-time chat, notifications, and role-based teams.
              </p>
            </div>
            <ul className={styles.tags}>
              <li>React</li><li>NestJS</li><li>PostgreSQL</li><li>Socket.IO</li>
            </ul>
            <div className={styles.projectLinks}>
              <ProjectLink href="https://demo.syncr.cc">Live demo</ProjectLink>
              <ProjectLink href="https://github.com/kinqbert/syncr">Source</ProjectLink>
            </div>
          </div>
          <div className={styles.syncrVisual} data-reveal aria-hidden="true">
            <div className={styles.browserBar}>
              <i /><i /><i /><span>workspace / product-team</span>
            </div>
            <div className={styles.appShell}>
              <aside><b>S</b><i /><i /><i /><i /></aside>
              <div className={styles.board}>
                <div className={styles.boardHeader}><span>Product sprint</span><i /></div>
                <div className={styles.columns}>
                  <div><b>TO DO</b><span /><span /><span /></div>
                  <div><b>IN PROGRESS</b><span className={styles.activeCard} /><span /></div>
                  <div><b>DONE</b><span /><span /></div>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className={`${styles.project} ${styles.projectSecondary}`}
          spotlightColor="rgba(255, 255, 255, 0.1)"
        >
          <div className={styles.gadgetStoreVisual} data-reveal aria-hidden="true">
            <div className={styles.browserBar}>
              <i /><i /><i /><span>nice-gadgets / catalog</span>
            </div>
            <div className={styles.storeShell}>
              <header className={styles.storeHeader}>
                <b>NG</b>
                <nav><span>Phones</span><span>Tablets</span><span>Accessories</span></nav>
                <i />
              </header>
              <div className={styles.storeBody}>
                <aside className={styles.storeFilters}>
                  <strong>Filters</strong>
                  <span /><span /><span />
                  <div><i /><i /></div>
                </aside>
                <div className={styles.storeCatalog}>
                  <div className={styles.storeCatalogHeader}>
                    <div><small>Catalog</small><strong>Mobile phones</strong></div>
                    <span>24 products</span>
                  </div>
                  <div className={styles.productGrid}>
                    <div className={styles.productCard}>
                      <div className={styles.device}><i /><span /></div>
                      <b>Phone 14 Pro</b><small>$999</small>
                    </div>
                    <div className={styles.productCard}>
                      <div className={styles.device}><i /><span /></div>
                      <b>Phone 15</b><small>$1,099</small>
                    </div>
                    <div className={styles.productCard}>
                      <div className={styles.device}><i /><span /></div>
                      <b>Phone 15 Plus</b><small>$1,199</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.projectCopy} data-reveal>
            <div className={styles.projectTopline}>
              <span>02 / E-commerce</span>
              <span>Front-end</span>
            </div>
            <div>
              <h3>Nice Gadgets</h3>
              <p>
                A polished device store with fast search, filtering, sorting, and
                rich product detail pages across screen sizes.
              </p>
            </div>
            <ul className={styles.tags}>
              <li>React</li><li>Zustand</li><li>SCSS</li><li>BEM</li>
            </ul>
            <div className={styles.projectLinks}>
              <ProjectLink href="https://fs-mar24-kyrylos-witnesses.github.io/phone-catalog/">Live demo</ProjectLink>
              <ProjectLink href="https://github.com/fs-mar24-kyrylos-witnesses/phone-catalog">Source</ProjectLink>
            </div>
          </div>
        </SpotlightCard>
      </section>

      <section className={`${styles.section} ${styles.experience}`} id="experience">
        <div className={styles.sectionHeading} data-reveal>
          <p className={styles.kicker}>Experience / Where I&apos;ve built</p>
          <h2>Production-minded<br /><span>from UI to infrastructure.</span></h2>
        </div>

        <div className={styles.experienceGrid}>
          <article className={styles.experienceCard} data-reveal>
            <div className={styles.experienceTopline}>
              <span>01</span>
              <span className={styles.current}><i data-pulse /> Current <em>AEC AI</em></span>
            </div>
            <div className={styles.experienceTitle}>
              <p>Newsoft</p>
              <time>Jun 2026 — Present</time>
            </div>
            <h3>Full-stack engineer</h3>
            <ul>
              <li>Implementing third-party integrations across product workflows.</li>
              <li>Building an MCP-based framework connecting AI agents with external tools and services.</li>
              <li>Developing end-to-end product features across the React and Node.js stack.</li>
            </ul>
          </article>

          <article className={styles.experienceCard} data-reveal>
            <div className={styles.experienceTopline}>
              <span>02</span>
              <span>FinTech product</span>
            </div>
            <div className={styles.experienceTitle}>
              <p>Sombra</p>
              <time>Dec 2025 — Jun 2026</time>
            </div>
            <h3>Software engineer</h3>
            <ul>
              <li>Built a canvas-based FinTech platform for interactive financial modeling.</li>
              <li>Implemented Entra ID authentication and role-based access control.</li>
              <li>Built Azure Functions ingestion pipelines and multi-tenant data isolation.</li>
            </ul>
          </article>

          <article className={styles.experienceCard} data-reveal>
            <div className={styles.experienceTopline}>
              <span>03</span>
              <span>AI &amp; real-time systems</span>
            </div>
            <div className={styles.experienceTitle}>
              <p>OmiSoft</p>
              <time>Sep 2024 — Dec 2025</time>
            </div>
            <h3>Full-stack engineer</h3>
            <ul>
              <li>Delivered AI chatbot, agent workflows, and gaming backend systems.</li>
              <li>Owned a real-time chatbot platform using OpenAI API, WebSockets, and JWT.</li>
              <li>Cut API response times 30–45% through indexing, caching, and query optimization.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.stackSection}`} id="stack">
        <div className={styles.sectionHeading} data-reveal>
          <p className={styles.kicker}>Stack / Hard skills</p>
          <h2>The right technology<br /><span>for the product in front of me.</span></h2>
        </div>
        <SpotlightGrid className={styles.skillGrid}>
          {skills.map((group) => (
            <div key={group.title} className={styles.skillCard}>
              <div data-reveal>
                <span>{group.number}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </SpotlightGrid>
      </section>

      <section className={styles.education} data-reveal>
        <p className={styles.kicker}>Education / foundation</p>
        <div>
          <span>2022 — 2026</span>
          <h3>Bachelor&apos;s in Computer Science</h3>
          <p>Igor Sikorsky Kyiv Polytechnic Institute</p>
        </div>
        <div>
          <span>Additional education</span>
          <h3>Full-stack Developer</h3>
          <p>Mate academy</p>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <p className={styles.kicker} data-reveal>Contact / Start a conversation</p>
        <div className={styles.contactMain} data-reveal>
          <h2>Have something<br />worth building?</h2>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className={styles.contactButton}
            aria-label="Open Maksym's LinkedIn profile"
          >
            <ArrowIcon />
          </a>
        </div>
        <button
          className={styles.email}
          type="button"
          onClick={copyEmail}
          aria-label={`Copy ${emailAddress} to clipboard`}
          data-reveal
        >
          <span>{emailAddress}</span>
          <small aria-live="polite">{isEmailCopied ? "Copied" : "Click to copy"}</small>
        </button>
        <div className={styles.socials} data-reveal>
          <a href={links.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
          <a href={links.telegram} target="_blank" rel="noreferrer">Telegram <ArrowIcon /></a>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Maksym Perekhodko</span>
        <span>Designed &amp; engineered with care</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
