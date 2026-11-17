"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import styles from "./HeroBackground.module.css";

const Dither = dynamic(() => import("@/components/reactbits/Dither"), {
  ssr: false,
});

export function HeroBackground() {
  const container = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!container.current) return;

    const observer = new IntersectionObserver(([entry]) =>
      setIsVisible(entry.isIntersecting),
    );
    observer.observe(container.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={container}
      className={`${styles.background} ${isReady ? styles.ready : ""}`}
      aria-hidden="true"
    >
      <Dither
        waveColor={[0.48, 0.48, 0.48]}
        waveSpeed={0.035}
        waveFrequency={2.8}
        waveAmplitude={0.32}
        colorNum={4}
        pixelSize={3}
        enableMouseInteraction
        mouseRadius={0.72}
        paused={!isVisible}
        onReady={() => setIsReady(true)}
      />
    </div>
  );
}
