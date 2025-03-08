import { Technology } from "@/types/Technology";
import styles from "./TechnologyItem.module.scss";
import Image from "next/image";

interface Props {
  technology: Technology;
  variant?: "large" | "small";
}

export const TechnologyItem = ({ technology, variant = "large" }: Props) => {
  return (
    <div
      className={`${styles.technologyItem} ${
        styles[`technologyItem--${variant}`]
      }`}
    >
      <Image
        className={`${styles.image} ${styles[`image--${variant}`]}`}
        src={technology.imageSrc}
        alt={`${technology.title} image`}
      />
      <span className={`${styles.title} ${styles[`title--${variant}`]}`}>
        {technology.title}
      </span>
    </div>
  );
};
