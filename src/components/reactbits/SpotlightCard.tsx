"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { useRef } from "react";

import styles from "./SpotlightCard.module.scss";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
};

type SpotlightProperties = CSSProperties & {
  "--mouse-x": string;
  "--mouse-y": string;
  "--spotlight-color": string;
};

// Local React Bits-style component: kept in-repo so its look and behavior can
// be tailored to this portfolio without adding a runtime UI dependency.
export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.12)",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;

    if (!card) return;

    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
  };

  const style: SpotlightProperties = {
    "--mouse-x": "50%",
    "--mouse-y": "50%",
    "--spotlight-color": spotlightColor,
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${className}`}
      style={style}
      onMouseMove={handlePointerMove}
    >
      {children}
    </div>
  );
}
