import { useState, useEffect } from "react";
import { PROFILE, CONTACT, CERTIFICATIONS } from "../../data/portfolioData.jsx";
import DownloadButton from "./DownloadButton";
import styles from "./Hero.module.css";

function TypeWriter({ text, speed = 60 }) {
  const [displayed, setDisplayed] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typer = setInterval(() => {
      setDisplayed(text.slice(0, ++i));
      if (i >= text.length) clearInterval(typer);
    }, speed);
    const blink = setInterval(() => setCursor((v) => !v), 530);
    return () => { clearInterval(typer); clearInterval(blink); };
  }, [text, speed]);

  return (
    <span>
      {displayed}
      <span className={styles.cursor} style={{ opacity: cursor ? 1 : 0 }}>|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="about" className={styles.section}>
      {/* Ambient background orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />

      <div className={styles.content}>
        {/* Profile photo */}
        <div className={styles.photoWrapper}>
          <div className={styles.photoRing}>
            <img
              src={PROFILE.photo}
              alt={PROFILE.name}
              className={styles.photo}
            />
          </div>
          <span className={styles.onlineDot} />
        </div>

        {/* Text */}
        <p className={styles.greeting}>👋 Hello, I'm</p>

        <h1 className={styles.name}>{PROFILE.name}</h1>

        <h2 className={styles.title}>
          <TypeWriter text={PROFILE.title} />
        </h2>

        <p className={styles.tagline}>{PROFILE.tagline}</p>

        {/* Certifications */}
        <div className={styles.certRow}>
          {CERTIFICATIONS.map((c) => (
            <span key={c.title} className={styles.certBadge}>
              {c.icon} {c.badge} Certified
            </span>
          ))}
        </div>

        {/* Contact chips */}
        <div className={styles.chips}>
          <a href={`mailto:${CONTACT.email}`} className={styles.chip}>
            📧 {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phone}`} className={styles.chip}>
            📱 {CONTACT.phone}
          </a>
          <span className={styles.chip}>📍 Berhampur, Odisha</span>
        </div>

        {/* CTA */}
        <DownloadButton />

        {/* Scroll hint */}
        <div className={styles.scrollHint}>
          <span>Scroll to explore</span>
          <div className={styles.scrollLine} />
        </div>
      </div>
    </section>
  );
}
