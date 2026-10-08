"use client";

import { animate, createScope, onScroll, stagger } from "animejs";
import Lenis from "lenis";
import { useEffect } from "react";

declare global {
  interface Window {
    __motionReady?: boolean;
  }
}

const ease = "outExpo";

// Delay between elements that enter the viewport in the same frame.
const BATCH_STAGGER = 90;

function reveal(element: HTMLElement, delay: number) {
  switch (element.dataset.reveal) {
    case "lines":
      animate(element.querySelectorAll("[data-line]"), {
        y: ["110%", "0%"],
        duration: 1300,
        delay: stagger(110, { start: delay }),
        ease,
      });
      break;

    case "stagger":
      animate(element.children, {
        opacity: [0, 1],
        y: [28, 0],
        duration: 1000,
        delay: stagger(80, { start: delay }),
        ease,
      });
      break;

    case "clip":
      animate(element, {
        opacity: [0, 1],
        scale: [0.92, 1],
        clipPath: ["inset(14% 10% 14% 10% round 24px)", "inset(0% 0% 0% 0% round 8px)"],
        duration: 1500,
        delay,
        ease,
        // Drop the clip afterwards so the box-shadow is visible again.
        onComplete: () => {
          element.style.clipPath = "";
        },
      });
      break;

    default:
      animate(element, {
        opacity: [0, 1],
        y: [40, 0],
        duration: 1100,
        delay,
        ease,
      });
  }
}

export function MotionController({ rootId }: { rootId: string }) {
  useEffect(() => {
    window.__motionReady = true;

    const root = document.getElementById(rootId);
    if (
      !root ||
      !document.documentElement.classList.contains("motion") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const lenis = new Lenis({ autoRaf: true, anchors: true, lerp: 0.16 });

    const scope = createScope({ root }).add(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries
            .filter((entry) => entry.isIntersecting)
            .forEach((entry, index) => {
              reveal(entry.target as HTMLElement, index * BATCH_STAGGER);
              observer.unobserve(entry.target);
            });
        },
        { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
      );

      root
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element) => observer.observe(element));

      animate("[data-scroll='progress']", {
        scaleX: [0, 1],
        ease: "linear",
        autoplay: onScroll({
          target: root,
          enter: "start start",
          leave: "end end",
          sync: true,
        }),
      });

      // Scroll triggers use the untransformed parent so movement can't feed back into progress.
      root
        .querySelectorAll<HTMLElement>("[data-scroll='hero']")
        .forEach((element) => {
          animate(element, {
            y: [0, -140],
            opacity: [1, 0.1],
            ease: "linear",
            autoplay: onScroll({
              target: element.parentElement ?? element,
              enter: "start start",
              leave: "start end",
              sync: true,
            }),
          });
        });

      root
        .querySelectorAll<HTMLElement>("[data-scroll='parallax']")
        .forEach((element) => {
          animate(element, {
            y: [36, -36],
            ease: "linear",
            autoplay: onScroll({
              target: element.parentElement ?? element,
              sync: true,
            }),
          });
        });

      return () => observer.disconnect();
    });

    return () => {
      scope.revert();
      lenis.destroy();
    };
  }, [rootId]);

  return null;
}
