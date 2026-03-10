// ============================================================
//  src/components/Hero/DownloadButton.jsx
//  Animated resume download button
// ============================================================

import { useState } from "react";
import styles from "./DownloadButton.module.css";

export default function DownloadButton() {
  const [state, setState] = useState("idle"); // idle | loading | done

  const handleClick = () => {
    if (state !== "idle") return;
    setState("loading");
    setTimeout(() => {
      setState("done");
      setTimeout(() => setState("idle"), 2500);
    }, 1800);
  };

  return (
    <button
      className={`${styles.btn} ${styles[state]}`}
      onClick={handleClick}
    >
      {state === "loading" && (
        <span className={styles.dots}>
          <span />
          <span />
          <span />
        </span>
      )}
      {state === "idle" && <span className={styles.icon}>⬇</span>}
      {state === "done" && <span className={styles.icon}>✓</span>}

      <span className={styles.label}>
        {state === "loading" ? "Preparing…" : state === "done" ? "Ready!" : "Download Resume"}
      </span>
    </button>
  );
}
