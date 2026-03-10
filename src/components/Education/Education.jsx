import { useEffect } from "react";
import { EDUCATION, CERTIFICATIONS } from "../../data/portfolioData.jsx";
import SectionTitle from "../common/SectionTitle";
import styles from "./Education.module.css";

// ── Animation keyframes ───────────────────────────────────────
const ANIM_CSS = `
  /* 🎓 Graduation cap – toss & land */
  @keyframes capToss {
    0%, 100% { transform: translateY(0px) rotate(0deg);   }
    30%       { transform: translateY(-10px) rotate(-12deg); }
    60%       { transform: translateY(-6px)  rotate(8deg);  }
    80%       { transform: translateY(-2px)  rotate(-4deg); }
  }
  .edu-icon-0 {
    display: inline-block;
    animation: capToss 2.8s ease-in-out infinite;
  }

  /* 🏫 School – gentle bounce */
  @keyframes schoolBounce {
    0%, 100% { transform: translateY(0px) scaleY(1);    }
    40%       { transform: translateY(-8px) scaleY(1.05); }
    70%       { transform: translateY(-3px) scaleY(.97); }
  }
  .edu-icon-1 {
    display: inline-block;
    animation: schoolBounce 2.2s ease-in-out infinite;
  }

  /* 📚 Books – page flip / wobble */
  @keyframes bookFlip {
    0%, 100% { transform: rotate(0deg) scaleX(1);    }
    25%       { transform: rotate(-8deg) scaleX(.95); }
    50%       { transform: rotate(0deg) scaleX(1.05); }
    75%       { transform: rotate(6deg) scaleX(.97);  }
  }
  .edu-icon-2 {
    display: inline-block;
    transform-origin: 50% 80%;
    animation: bookFlip 2.5s ease-in-out infinite;
  }

  /* 📍 Location pin – drop bounce */
  @keyframes pinDrop {
    0%, 100% { transform: translateY(0px) scaleY(1);    }
    40%       { transform: translateY(-5px) scaleY(1.1); }
    65%       { transform: translateY(1px) scaleY(.95);  }
  }
  .edu-pin {
    display: inline-block;
    animation: pinDrop 2s ease-in-out infinite;
  }

  /* 🗓 Calendar – flip */
  @keyframes calFlip {
    0%, 100% { transform: rotateY(0deg);   }
    40%       { transform: rotateY(-25deg); }
    70%       { transform: rotateY(10deg);  }
  }
  .edu-cal {
    display: inline-block;
    animation: calFlip 3s ease-in-out infinite;
  }

  /* ☁️ AWS cert icon – float */
  @keyframes awsFloat {
    0%, 100% { transform: translateY(0px);  }
    50%       { transform: translateY(-5px); }
  }
  .edu-cert-icon {
    display: inline-block;
    animation: awsFloat 2.5s ease-in-out infinite;
  }

  /* 🏆 Trophy – shine pulse */
  @keyframes trophyShine {
    0%, 100% { filter: brightness(1)   drop-shadow(0 0 0px gold); }
    50%       { filter: brightness(1.4) drop-shadow(0 0 6px gold); }
  }
  .edu-trophy {
    display: inline-block;
    animation: trophyShine 2s ease-in-out infinite;
  }

  /* Card slide-in from left */
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-32px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  .edu-card-anim {
    animation: slideInLeft .55s cubic-bezier(.22,.68,0,1.2) both;
  }
  .edu-card-anim:nth-child(1) { animation-delay: .1s; }
  .edu-card-anim:nth-child(2) { animation-delay: .25s; }
  .edu-card-anim:nth-child(3) { animation-delay: .4s; }

  /* Timeline dot pulse */
  @keyframes dotPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,.5); transform: scale(1);    }
    50%       { box-shadow: 0 0 0 7px rgba(99,102,241,0); transform: scale(1.2); }
  }
  .edu-dot-pulse {
    animation: dotPulse 2s ease-in-out infinite;
  }
`;

// Icon animation class by index
const ICON_CLASS = ["edu-icon-0", "edu-icon-1", "edu-icon-2"];

export default function Education() {
  useEffect(() => {
    if (document.getElementById("edu-anim-css")) return;
    const tag = document.createElement("style");
    tag.id = "edu-anim-css";
    tag.textContent = ANIM_CSS;
    document.head.appendChild(tag);
    return () => document.getElementById("edu-anim-css")?.remove();
  }, []);

  return (
    <section id="education" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle label="Education" sub="Academic background & certifications" />

        <div className={styles.timeline}>
          <div className={styles.line} />

          {EDUCATION.map((ed, index) => (
            <div key={index} className={`${styles.item} edu-card-anim`}>
              {/* Pulsing dot */}
              <div className={`${styles.dot} edu-dot-pulse`} />

              <div className={styles.card}>
                {/* top row: icon + tag */}
                <div className={styles.topRow}>
                  <span className={`${styles.icon} ${ICON_CLASS[index] ?? ""}`}>
                    {ed.icon}
                  </span>
                  <span className={styles.tag}>{ed.tag}</span>
                </div>

                {/* degree */}
                <h3 className={styles.degree}>{ed.degree}</h3>

                {/* university */}
                <p className={styles.university}>{ed.university}</p>

                {/* location + year */}
                <div className={styles.meta}>
                  <span>
                    <span className="edu-pin">📍</span> {ed.location}
                  </span>
                  <span>
                    <span className="edu-cal">🗓</span> {ed.year}
                  </span>
                </div>

                {/* AWS cert only on graduation card */}
                {index === 0 && CERTIFICATIONS.map((c) => (
                  <div key={c.title} className={styles.certRow}>
                    <span className="edu-cert-icon">{c.icon}</span>
                    <span className={styles.certName}>{c.title}</span>
                    <span className={styles.certBadge}>
                      <span className="edu-trophy">🏆</span> {c.badge} Certified
                    </span>
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
