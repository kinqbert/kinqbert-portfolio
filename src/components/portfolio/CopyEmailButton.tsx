"use client";

import { useEffect, useRef, useState } from "react";

import shared from "./shared.module.css";
import styles from "./Contact.module.css";

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
      className={`${shared.display} ${styles.email}`}
      type="button"
      onClick={copyEmail}
      aria-label={`Copy ${email} to clipboard`}
      data-reveal="fade"
    >
      <span>{email}</span>
      <small className={shared.label} aria-live="polite">
        {isCopied ? "Copied" : "Click to copy"}
      </small>
    </button>
  );
}
