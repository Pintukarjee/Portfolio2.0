// ============================================================
//  src/components/Education/Education.jsx
// ============================================================

import { EDUCATION, CERTIFICATIONS } from "../../data/portfolioData.jsx";
import SectionTitle from "../common/SectionTitle";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle label="Education" sub="Academic background & certifications" />

        <div className={styles.timeline}>
          <div className={styles.line} />

          {EDUCATION.map((ed, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.dot} />

              <div className={styles.card}>
                {/* top row: icon + tag */}
                <div className={styles.topRow}>
                  <span className={styles.icon}>{ed.icon}</span>
                  <span className={styles.tag}>{ed.tag}</span>
                </div>

                {/* degree */}
                <h3 className={styles.degree}>{ed.degree}</h3>

                {/* university */}
                <p className={styles.university}>{ed.university}</p>

                {/* location + year */}
                <div className={styles.meta}>
                  <span>📍 {ed.location}</span>
                  <span>🗓 {ed.year}</span>
                </div>

                {/* AWS cert only on graduation card */}
                {index === 0 && CERTIFICATIONS.map((c) => (
                  <div key={c.title} className={styles.certRow}>
                    <span>{c.icon}</span>
                    <span className={styles.certName}>{c.title}</span>
                    <span className={styles.certBadge}>🏆 {c.badge} Certified</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
