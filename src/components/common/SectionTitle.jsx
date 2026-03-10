// ============================================================
//  src/components/common/SectionTitle.jsx
// ============================================================

import styles from "./SectionTitle.module.css";

export default function SectionTitle({ label, sub }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{label}</h2>
      {sub && <p className={styles.sub}>{sub}</p>}
      <div className={styles.line} />
    </div>
  );
}
