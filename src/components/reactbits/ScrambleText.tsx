"use client";

import { animate, type JSAnimation } from "animejs";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";

export type ScrambleTextHandle = {
  play: () => void;
};

type ScrambleTextProps = {
  children: string;
  className?: string;
};

const symbols = Array.from("!<>-_\\/[]{}—=+*^?#01");

export const ScrambleText = forwardRef<ScrambleTextHandle, ScrambleTextProps>(
  ({ children, className = "" }, ref) => {
    const textRef = useRef<HTMLSpanElement>(null);
    const animationRef = useRef<JSAnimation | null>(null);
    const characters = useMemo(() => Array.from(children), [children]);

    const play = useCallback(() => {
      const element = textRef.current;

      if (!element) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        element.textContent = children;
        return;
      }

      animationRef.current?.cancel();
      const state = { progress: 0 };

      animationRef.current = animate(state, {
        progress: 1,
        duration: 680,
        ease: "outQuad",
        onUpdate: () => {
          const revealedCharacters = Math.floor(state.progress * characters.length);
          element.textContent = characters
            .map((character, index) => {
              if (character === " " || index < revealedCharacters) return character;
              return symbols[Math.floor(Math.random() * symbols.length)];
            })
            .join("");
        },
        onComplete: () => {
          element.textContent = children;
        },
      });
    }, [characters, children]);

    useImperativeHandle(ref, () => ({ play }), [play]);

    useEffect(() => {
      const startTimer = window.setTimeout(play, 520);

      return () => {
        window.clearTimeout(startTimer);
        animationRef.current?.cancel();
      };
    }, [play]);

    return (
      <span ref={textRef} className={className} aria-label={children}>
        {children}
      </span>
    );
  }
);

ScrambleText.displayName = "ScrambleText";
