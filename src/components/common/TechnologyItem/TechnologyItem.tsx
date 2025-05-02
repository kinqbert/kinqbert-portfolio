"use client";

import Image from "next/image";
import { useState } from "react";

import { Technology } from "@/types/Technology";
import styles from "./TechnologyItem.module.scss";

interface Props {
  technology: Technology;
  variant?: "large" | "small";
}

export const TechnologyItem = ({ technology, variant = "large" }: Props) => {
  const [rotate, setRotate] = useState(0);

  const handleMouseEnter = () => {
    if (variant === "small") return;

    const min = -5;
    const max = 5;
    const angle = Math.floor(Math.random() * (max - min + 1)) + min;
    setRotate(angle);
  };

  const handleMouseLeave = () => {
    setRotate(0);
  };

  return (
    <div
      className={`${styles.technologyItem} ${
        styles[`technologyItem--${variant}`]
      }`}
      style={
        variant === "large" ? { transform: `rotate(${rotate}deg)` } : undefined
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
