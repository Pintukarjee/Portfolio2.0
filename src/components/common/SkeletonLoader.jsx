// ============================================================
//  src/components/common/SkeletonLoader.jsx
//  Full-page skeleton shown while the app bootstraps
// ============================================================

import styles from "./SkeletonLoader.module.css";

function SkBlock({ width, height, circle }) {
  return (
    <div
      className={styles.block}
      style={{
        width,
        height,
        borderRadius: circle ? "50%" : 8,
      }}
    />
  );
}

export default function SkeletonLoader() {
  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        {/* Avatar */}
        <SkBlock width={96} height={96} circle />

        {/* Name */}
        <SkBlock width={200} height={18} />
        <SkBlock width={140} height={13} />

        {/* Tags */}
        <div className={styles.row}>
          {[80, 100, 90, 70].map((w, i) => (
            <SkBlock key={i} width={w} height={10} />
          ))}
        </div>

        {/* Lines */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className={styles.row}>
            {[120, 100, 140, 80].map((w, j) => (
              <SkBlock key={j} width={w} height={10} />
            ))}
          </div>
        ))}

        {/* Button */}
        <SkBlock width={160} height={44} />
      </div>
    </div>
  );
}
