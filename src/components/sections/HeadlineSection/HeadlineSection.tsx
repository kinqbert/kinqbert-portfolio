"use client";

import Link from "next/link";
import styles from "./HeadlineSection.module.scss";
import React, { useEffect } from "react";
import { socials } from "@/constants/socials";
import Image from "next/image";

import TopGradient from "@/assets/gradient-backgrounds/top-gradient.png";

import ArrowDown from "@/assets/general-icons/arrow-down.svg";

export const HeadlineSection = () => {
  const squaresAmount = 1600;
  const squaresArray = new Array(squaresAmount);
  squaresArray.fill(<></>);

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";

  //   const timer = setTimeout(() => {
  //     document.body.style.overflow = "auto";
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

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
