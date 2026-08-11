"use client";

import { animate, type JSAnimation } from "animejs";
import { useEffect, useMemo, useRef } from "react";

type WaveScrambleTextProps = {
  children: string;
  className?: string;
  interval?: number;
};

const symbols = Array.from("!<>-_\\/[]{}—=+*^?#01");

export function WaveScrambleText({
  children,
  className = "",
  interval = 5600,
}: WaveScrambleTextProps) {
  const characters = useMemo(() => Array.from(children), [children]);
  const characterRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const animationRef = useRef<JSAnimation | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const playWave = () => {
      animationRef.current?.cancel();
      const state = { cursor: -2 };

      animationRef.current = animate(state, {
        cursor: characters.length + 2,
        duration: Math.max(1450, characters.length * 95),
        ease: "inOutSine",
        onUpdate: () => {
          characterRefs.current.forEach((element, index) => {
            if (!element) return;

            const distanceFromWave = state.cursor - index;
            const isInsideWave = distanceFromWave >= 0 && distanceFromWave <= 2.4;
            const originalCharacter = characters[index];

            element.textContent =
              isInsideWave && originalCharacter !== " "
                ? symbols[Math.floor(Math.random() * symbols.length)]
                : originalCharacter;
            element.style.color = isInsideWave ? "#ffffff" : "";
            element.style.textShadow = isInsideWave
              ? "0 0 14px rgba(255, 255, 255, 0.28)"
              : "";
          });
        },
        onComplete: () => {
          characterRefs.current.forEach((element, index) => {
            if (!element) return;
            element.textContent = characters[index];
            element.style.color = "";
            element.style.textShadow = "";
          });
        },
      });
    };

    const initialTimer = window.setTimeout(playWave, 900);
    const intervalTimer = window.setInterval(playWave, interval);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(intervalTimer);
      animationRef.current?.cancel();
    };
  }, [characters, interval]);

  return (
    <span className={className} aria-label={children}>
      {characters.map((character, index) => (
        <span
          key={`${character}-${index}`}
          ref={(element) => {
            characterRefs.current[index] = element;
          }}
          aria-hidden="true"
        >
          {character}
        </span>
      ))}
    </span>
  );
}
