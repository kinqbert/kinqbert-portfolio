import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

import PortfolioLogo from "@/assets/portfolio-logo.svg";

import { WaveScrambleText } from "@/components/reactbits/WaveScrambleText";

import { CopyEmailButton } from "./CopyEmailButton";
import { HeroBackground } from "./HeroBackground";
import { MotionController } from "./MotionController";
import styles from "./Portfolio.module.scss";

const links = {
  github: "https://github.com/kinqbert",
  linkedin: "https://www.linkedin.com/in/maksym-perekhodko/",
  telegram: "https://t.me/perekhodko_m",
  cv: "https://drive.google.com/file/d/1LGtj7QosC5P_yXY0C7ZMM_M5yxTmknrq/view?usp=sharing",
};

const emailAddress = "perekhodko.maksym@gmail.com";
const emailHref = `mailto:${emailAddress}?subject=Let%27s%20build%20something`;

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
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={styles.projectLink}
    >
      {children === "Source" ? <CodeIcon /> : <ArrowIcon />}
      {children}
    </a>
  );
}

// One masked line of a heading; MotionController slides [data-line] up into view.
function Line({ children, muted }: { children: ReactNode; muted?: boolean }) {
  return (
    <span className={styles.line}>
      <span data-line className={muted ? styles.muted : undefined}>
        {children}
      </span>
    </span>
  );
}

// Stagger index for the CSS hero entrance.
const heroStep = (index: number) => ({ "--i": index }) as CSSProperties;

export function Portfolio() {
  return (
    <main id="top" className={styles.page}>
      <div
        className={styles.scrollProgress}
        data-scroll="progress"
        aria-hidden="true"
      />
      <MotionController rootId="top" />

      <header className={styles.header} data-hero-reveal style={heroStep(0)}>
        <div className={styles.headerInner}>
          <a href="#top" className={styles.logo}>
            <Image
              src={PortfolioLogo}
              alt="Maksym Perekhodko — home"
              priority
            />
          </a>
          <nav className={styles.nav} aria-label="Main navigation">
            <a href="#work">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#stack">Stack</a>
          </nav>
          <a href={emailHref} className={styles.headerCta}>
            Let&apos;s talk
          </a>
        </div>
      </header>

      <section className={styles.hero}>
        <HeroBackground />
        <div className={styles.heroInner} data-scroll="hero">
          <p className={styles.heroName} data-hero-reveal style={heroStep(1)}>
            <WaveScrambleText>Maksym Perekhodko</WaveScrambleText>
          </p>
          <h1
            className={styles.heroTitle}
            aria-label="I build digital systems that hold up."
          >
            <span data-hero-reveal style={heroStep(2)}>
              I build digital
            </span>
            <span
              data-hero-reveal
              style={heroStep(3)}
              className={styles.italic}
            >
              systems that
            </span>
            <span data-hero-reveal style={heroStep(4)}>
              hold up<span className={styles.accentDot}>.</span>
            </span>
          </h1>
          <div
            className={styles.heroBottom}
            data-hero-reveal
            style={heroStep(5)}
          >
            <p>
              I ship production web apps end to end with React, TypeScript,
              Node.js, and NestJS.
            </p>
            <div className={styles.heroActions}>
              <a
                href={links.cv}
                className={styles.primaryButton}
                target="_blank"
                rel="noreferrer"
              >
                View résumé
                <ArrowIcon />
              </a>
              <a href="#contact" className={styles.textLink}>
                Get in touch
              </a>
            </div>
          </div>
        </div>
        <dl className={styles.heroFacts} data-hero-reveal style={heroStep(6)}>
          <div>
            <dt>Now</dt>
            <dd>
              <i aria-hidden="true" /> Nomic AI
            </dd>
          </div>
          <div>
            <dt>Before</dt>
            <dd>Sombra, OmiSoft</dd>
          </div>
          <div>
            <dt>Experience</dt>
            <dd>2+ years, commercial</dd>
          </div>
          <div>
            <dt>Education</dt>
            <dd>BSc Computer Science</dd>
          </div>
        </dl>
      </section>

      <section className={styles.about} aria-labelledby="about-heading">
        <p className={styles.kicker} id="about-heading" data-reveal="fade">
          About / Who I am
        </p>
        <p className={styles.aboutText} data-reveal="fade">
          I&apos;m a full-stack engineer with <em>2+ years</em> of commercial
          experience shipping production web apps with{" "}
          <em>React, TypeScript, Node.js, and NestJS</em>. I&apos;ve worked
          across FinTech, AI automation, real-time chat, and gaming backends,
          and I&apos;m currently building <em>AI agent tooling at Nomic AI</em>.
          A computer science background keeps me focused on maintainable
          architecture, fast APIs, and features that work end to end.
        </p>
      </section>

      <section className={styles.section} id="work">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker} data-reveal="fade">
            Projects / Selected work
          </p>
          <h2 data-reveal="lines">
            <Line>Things I&apos;ve built,</Line>
            <Line muted>and how they work.</Line>
          </h2>
        </div>

        <article className={`${styles.project} ${styles.projectFeatured}`}>
          <div className={styles.projectCopy} data-reveal="fade">
            <div className={styles.projectTopline}>
              <span>01 / Featured project</span>
              <span>Full-stack</span>
            </div>
            <div>
              <h3>Syncr</h3>
              <p>
                A team collaboration workspace unifying Kanban tasks,
                dashboards, calendars, real-time chat, notifications, and
                role-based teams.
              </p>
            </div>
            <dl className={styles.projectDetails}>
              <div>
                <dt>Context</dt>
                <dd>
                  Collaboration work was split across task, calendar, and
                  messaging tools.
                </dd>
              </div>
              <div>
                <dt>My role</dt>
                <dd>
                  I designed and built the full product flow, from the React
                  interface to the NestJS API and data model.
                </dd>
              </div>
              <div>
                <dt>Engineering</dt>
                <dd>
                  Socket.IO keeps chat and notifications live; PostgreSQL and
                  role-based access keep team data structured and scoped.
                </dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>
                  One responsive workspace now covers six core collaboration
                  flows with real-time updates and permission-aware teams.
                </dd>
              </div>
            </dl>
            <ul className={styles.tags}>
              <li>React</li>
              <li>NestJS</li>
              <li>PostgreSQL</li>
              <li>Socket.IO</li>
            </ul>
            <div className={styles.projectLinks}>
              <ProjectLink href="https://demo.syncr.cc">Live demo</ProjectLink>
              <ProjectLink href="https://github.com/kinqbert/syncr">
                Source
              </ProjectLink>
            </div>
          </div>
          <div
            className={styles.projectMedia}
            data-reveal="clip"
            aria-hidden="true"
          >
            <div className={styles.syncrVisual} data-scroll="parallax">
              <div className={styles.browserBar}>
                <i />
                <i />
                <i />
                <span>workspace / product-team</span>
              </div>
              <div className={styles.appShell}>
                <aside>
                  <b>S</b>
                  <i />
                  <i />
                  <i />
                  <i />
                </aside>
                <div className={styles.board}>
                  <div className={styles.boardHeader}>
                    <span>Product sprint</span>
                    <i />
                  </div>
                  <div className={styles.columns}>
                    <div>
                      <b>TO DO</b>
                      <span />
                      <span />
                      <span />
                    </div>
                    <div>
                      <b>IN PROGRESS</b>
                      <span className={styles.activeCard} />
                      <span />
                    </div>
                    <div>
                      <b>DONE</b>
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className={`${styles.project} ${styles.projectSecondary}`}>
          <div
            className={styles.projectMedia}
            data-reveal="clip"
            aria-hidden="true"
          >
            <div className={styles.gadgetStoreVisual} data-scroll="parallax">
              <div className={styles.browserBar}>
                <i />
                <i />
                <i />
                <span>nice-gadgets / catalog</span>
              </div>
              <div className={styles.storeShell}>
                <header className={styles.storeHeader}>
                  <b>NG</b>
                  <nav>
                    <span>Phones</span>
                    <span>Tablets</span>
                    <span>Accessories</span>
                  </nav>
                  <i />
                </header>
                <div className={styles.storeBody}>
                  <aside className={styles.storeFilters}>
                    <strong>Filters</strong>
                    <span />
                    <span />
                    <span />
                    <div>
                      <i />
                      <i />
                    </div>
                  </aside>
                  <div className={styles.storeCatalog}>
                    <div className={styles.storeCatalogHeader}>
                      <div>
                        <small>Catalog</small>
                        <strong>Mobile phones</strong>
                      </div>
                      <span>24 products</span>
                    </div>
                    <div className={styles.productGrid}>
                      <div className={styles.productCard}>
                        <div className={styles.device}>
                          <i />
                          <span />
                        </div>
                        <b>Phone 14 Pro</b>
                        <small>$999</small>
                      </div>
                      <div className={styles.productCard}>
                        <div className={styles.device}>
                          <i />
                          <span />
                        </div>
                        <b>Phone 15</b>
                        <small>$1,099</small>
                      </div>
                      <div className={styles.productCard}>
                        <div className={styles.device}>
                          <i />
                          <span />
                        </div>
                        <b>Phone 15 Plus</b>
                        <small>$1,199</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.projectCopy} data-reveal="fade">
            <div className={styles.projectTopline}>
              <span>02 / E-commerce</span>
              <span>Front-end</span>
            </div>
            <div>
              <h3>Nice Gadgets</h3>
              <p>
                A polished device store with fast search, filtering, sorting,
                and rich product detail pages across screen sizes.
              </p>
            </div>
            <dl className={styles.projectDetails}>
              <div>
                <dt>Context</dt>
                <dd>
                  A large device catalog needed to remain easy to browse on both
                  desktop and mobile.
                </dd>
              </div>
              <div>
                <dt>My role</dt>
                <dd>
                  I implemented the front-end product experience and its
                  responsive catalog interactions as part of the project team.
                </dd>
              </div>
              <div>
                <dt>Engineering</dt>
                <dd>
                  Reusable React views and centralized Zustand state connect
                  search, filters, sorting, and product detail navigation.
                </dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>
                  Shoppers can move from discovery to a detailed product view in
                  one consistent flow across screen sizes.
                </dd>
              </div>
            </dl>
            <ul className={styles.tags}>
              <li>React</li>
              <li>Zustand</li>
              <li>SCSS</li>
              <li>BEM</li>
            </ul>
            <div className={styles.projectLinks}>
              <ProjectLink href="https://fs-mar24-kyrylos-witnesses.github.io/phone-catalog/">
                Live demo
              </ProjectLink>
              <ProjectLink href="https://github.com/fs-mar24-kyrylos-witnesses/phone-catalog">
                Source
              </ProjectLink>
            </div>
          </div>
        </article>
      </section>

      <section
        className={`${styles.section} ${styles.experience}`}
        id="experience"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.kicker} data-reveal="fade">
            Experience / Where I&apos;ve built
          </p>
          <h2 data-reveal="lines">
            <Line>Where I&apos;ve worked,</Line>
            <Line muted>and what I shipped there.</Line>
          </h2>
        </div>

        <div className={styles.experienceGrid}>
          <article className={styles.experienceCard} data-reveal="fade">
            <div className={styles.experienceTopline}>
              <span>01</span>
              <span className={styles.current}>
                <i /> Current <em>AEC AI</em>
              </span>
            </div>
            <div className={styles.experienceTitle}>
              <p>Nomic AI</p>
              <time>Jun 2026 — Present</time>
            </div>
            <h3>Full-stack engineer</h3>
            <ul>
              <li>
                Implementing third-party integrations across product workflows.
              </li>
              <li>
                Building an MCP-based framework connecting AI agents with
                external tools and services.
              </li>
              <li>
                Developing end-to-end product features across the React and
                Node.js stack.
              </li>
            </ul>
          </article>

          <article className={styles.experienceCard} data-reveal="fade">
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
              <li>
                Built a canvas-based FinTech platform for interactive financial
                modeling.
              </li>
              <li>
                Implemented Entra ID authentication and role-based access
                control.
              </li>
              <li>
                Built Azure Functions ingestion pipelines and multi-tenant data
                isolation.
              </li>
            </ul>
          </article>

          <article className={styles.experienceCard} data-reveal="fade">
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
              <li>
                Delivered AI chatbot, agent workflows, and gaming backend
                systems.
              </li>
              <li>
                Owned a real-time chatbot platform using OpenAI API, WebSockets,
                and JWT.
              </li>
              <li>
                Cut API response times 30–45% through indexing, caching, and
                query optimization.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.stackSection}`}
        id="stack"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.kicker} data-reveal="fade">
            Stack / Hard skills
          </p>
          <h2 data-reveal="lines">
            <Line>Tools I reach for,</Line>
            <Line muted>day to day.</Line>
          </h2>
        </div>
        <div className={styles.skillGrid}>
          {skills.map((group) => (
            <div key={group.title} className={styles.skillCard}>
              <div data-reveal="fade">
                <span>{group.number}</span>
                <h3>{group.title}</h3>
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

      <section className={styles.education} data-reveal="fade">
        <p className={styles.kicker}>Education / Foundation</p>
        <div>
          <span>2022 — 2026</span>
          <h3>Bachelor&apos;s in Computer Science</h3>
          <p>Igor Sikorsky Kyiv Polytechnic Institute</p>
        </div>
        <div>
          <span>Additional education</span>
          <h3>Full-stack Developer</h3>
          <p>Mate Academy</p>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <p className={styles.kicker} data-reveal="fade">
          Contact / Start a conversation
        </p>
        <div className={styles.contactMain}>
          <h2 data-reveal="lines">
            <Line>Have something</Line>
            <Line muted>worth building?</Line>
          </h2>
          <a
            href={emailHref}
            className={styles.contactButton}
            aria-label="Email Maksym about a project"
          >
            <ArrowIcon />
          </a>
        </div>
        <CopyEmailButton email={emailAddress} />
        <div className={styles.socials} data-reveal="stagger">
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub <ArrowIcon />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowIcon />
          </a>
          <a href={links.telegram} target="_blank" rel="noreferrer">
            Telegram <ArrowIcon />
          </a>
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
