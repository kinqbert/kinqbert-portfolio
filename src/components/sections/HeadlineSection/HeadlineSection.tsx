import Image from "next/image";
import Link from "next/link";
import React from "react";

import ArrowDown from "@/assets/general-icons/arrow-down.svg";

import { socials } from "@/constants/socials";

import styles from "./HeadlineSection.module.scss";
import { ScrollLockEffect } from "./ScrollLockEffect/ScrollLockEffect";

export const HeadlineSection = () => {
  const squaresAmount = 1600;
  const squaresArray = new Array(squaresAmount);
  squaresArray.fill(<></>);

  const tileColorClasses = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
  ];

  return (
    <section className={styles.headlineSection}>
      <ScrollLockEffect />
      <ul className={styles.socials}>
        {socials.map((socialItem, index) => (
          <React.Fragment key={index}>
            {!!index && <div className={styles.socialsSeparator}></div>}
            <Link href={socialItem.href} className={styles.socialsLink}>
              <Image src={socialItem.iconSrc} alt="Social icon" />
            </Link>
          </React.Fragment>
        ))}
      </ul>
      <div className={styles.content}>
        <h1 className={styles.headline}>Hello there</h1>
        <p className={styles.subtext}>
          My name is Maksym Perekhodko,
          <br />
          I&apos;m a <u>Full-stack engineer</u>.
        </p>
      </div>
      <Image className={styles.arrowDown} src={ArrowDown} alt="Arrow down" />
      <div className={styles.background}>
        {squaresArray.map((_, index) => {
          const tileColorIndex = Math.round(
            Math.random() * (tileColorClasses.length - 1)
          );

          return (
            <div
              key={index}
              className={`${styles.backgroundTile} ${
                styles[`backgroundTile--${tileColorClasses[tileColorIndex]}`]
              }`}
            ></div>
          );
        })}
      </div>
    </section>
  );
};
