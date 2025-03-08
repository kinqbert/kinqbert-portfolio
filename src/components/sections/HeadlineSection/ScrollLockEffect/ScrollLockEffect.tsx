"use client";

import { useEffect } from "react";

export const ScrollLockEffect = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return null;
};
