import BottomGradient from "@/assets/gradient-backgrounds/bottom-gradient.png";
import styles from "./FooterSection.module.scss";

export const FooterSection = () => {
  return (
    <section
      className={styles.footerSection}
      style={{ backgroundImage: `url(${BottomGradient.src})` }}
    >
      <div className={styles.textWrapper}>
        <span className={styles.quote}>
          &lsquo;I do it not because it is easy, <br />
          but because I thought it would be easy&lsquo;
        </span>
        <span className={styles.author}>- Unknown developer</span>
      </div>
    </section>
  );
};
