import { About } from "./About";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { MotionController } from "./MotionController";
import { Projects } from "./Projects";
import { Stack } from "./Stack";
import styles from "./Portfolio.module.css";

export function Portfolio() {
  return (
    <main id="top" className={styles.page}>
      <div
        className={styles.scrollProgress}
        data-scroll="progress"
        aria-hidden="true"
      />
      <MotionController rootId="top" />

      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
