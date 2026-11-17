import type { CSSProperties, ReactNode } from "react";

import shared from "./shared.module.css";

// One masked line of a heading; MotionController slides [data-line] up into view.
export function Line({
  children,
  muted,
}: {
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <span className={shared.line}>
      <span data-line className={muted ? shared.muted : undefined}>
        {children}
      </span>
    </span>
  );
}

// Stagger index for the CSS hero entrance (see [data-hero-reveal] in Portfolio.module.css).
export const heroStep = (index: number) => ({ "--i": index }) as CSSProperties;
