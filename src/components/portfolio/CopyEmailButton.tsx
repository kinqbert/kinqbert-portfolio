"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./Portfolio.module.scss";

export function CopyEmailButton({ email }: { email: string }) {
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    setIsCopied(true);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setIsCopied(false), 1800);
  };

  return (
    <button
      className={styles.email}
      type="button"
      onClick={copyEmail}
      aria-label={`Copy ${email} to clipboard`}
      data-reveal="fade"
    >
      <span>{email}</span>
      <small aria-live="polite">{isCopied ? "Copied" : "Click to copy"}</small>
    </button>
  );
}
