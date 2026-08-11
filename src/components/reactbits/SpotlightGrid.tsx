"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { useRef } from "react";

import styles from "./SpotlightGrid.module.scss";

type SpotlightGridProps = {
  children: ReactNode;
  className?: string;
};

type SpotlightProperties = CSSProperties & {
  "--grid-mouse-x": string;
  "--grid-mouse-y": string;
};

export function SpotlightGrid({ children, className = "" }: SpotlightGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const grid = gridRef.current;

    if (!grid) return;

    const bounds = grid.getBoundingClientRect();
    grid.style.setProperty("--grid-mouse-x", `${event.clientX - bounds.left}px`);
    grid.style.setProperty("--grid-mouse-y", `${event.clientY - bounds.top}px`);
  };

  const style: SpotlightProperties = {
    "--grid-mouse-x": "50%",
    "--grid-mouse-y": "50%",
  };

  return (
    <div
      ref={gridRef}
      className={`${styles.grid} ${className}`}
      style={style}
      onMouseMove={handlePointerMove}
    >
      {children}
    </div>
  );
}
