import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Maksym Perekhodko</span>
      <span>Designed &amp; engineered with care</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
