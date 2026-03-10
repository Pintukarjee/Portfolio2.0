import { useEffect } from "react";
import { SKILLS, SKILL_CATEGORIES } from "../../data/portfolioData.jsx";
import SectionTitle from "../common/SectionTitle";
import styles from "./Skills.module.css";

// ── Per-category emoji animation classes ─────────────────────
const EMOJI_CLASS = {
  backend:     "emoji-backend",
  cloud:       "emoji-cloud",
  frontend:    "emoji-frontend",
  database:    "emoji-database",
  tools:       "emoji-tools",
  methodology: "emoji-methodology",
};

// ── Inject keyframes once into <head> ────────────────────────
const ANIM_CSS = `
  /* ☕ Backend – two steam wisps rising */
  @keyframes steam1 {
    0%   { transform: translateY(0px)   scaleX(1);   opacity: .8; }
    100% { transform: translateY(-16px) scaleX(1.5); opacity: 0;  }
  }
  @keyframes steam2 {
    0%   { transform: translateY(0px)   scaleX(1);   opacity: .6; }
    100% { transform: translateY(-20px) scaleX(.6);  opacity: 0;  }
  }
  .emoji-backend {
    position: relative;
    display: inline-block;
  }
  .emoji-backend::before,
  .emoji-backend::after {
    content: "〜";
    position: absolute;
    top: -4px;
    font-size: 9px;
    color: #93c5fd;
    pointer-events: none;
    line-height: 1;
  }
  .emoji-backend::before { left: 1px;  animation: steam1 1.5s ease-out infinite; }
  .emoji-backend::after  { left: 9px;  animation: steam2 1.5s ease-out infinite .6s; }

  /* ☁️ Cloud – soft floating drift */
  @keyframes cloudFloat {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    33%       { transform: translateY(-5px) translateX(2px); }
    66%       { transform: translateY(-3px) translateX(-2px); }
  }
  .emoji-cloud {
    display: inline-block;
    animation: cloudFloat 3.5s ease-in-out infinite;
  }

  /* 🎨 Frontend – rainbow hue cycle */
  @keyframes colorSpin {
    0%   { filter: hue-rotate(0deg)   drop-shadow(0 0 2px rgba(255,100,200,0)); }
    50%  { filter: hue-rotate(180deg) drop-shadow(0 0 6px rgba(255,100,200,.6)); }
    100% { filter: hue-rotate(360deg) drop-shadow(0 0 2px rgba(255,100,200,0)); }
  }
  .emoji-frontend {
    display: inline-block;
    animation: colorSpin 3s linear infinite;
  }

  /* 🗄️ Database – vertical stack pulse */
  @keyframes dbPulse {
    0%, 100% { transform: scaleY(1)    scaleX(1);    filter: brightness(1);   }
    30%       { transform: scaleY(1.14) scaleX(.96);  filter: brightness(1.3); }
    65%       { transform: scaleY(.92) scaleX(1.04);  filter: brightness(.85); }
  }
  .emoji-database {
    display: inline-block;
    transform-origin: 50% 100%;
    animation: dbPulse 2s ease-in-out infinite;
  }

  /* 🔧 Tools – bolt-tightening wiggle */
  @keyframes wrenchTurn {
    0%, 100% { transform: rotate(0deg);   }
    20%       { transform: rotate(-28deg); }
    50%       { transform: rotate(22deg);  }
    75%       { transform: rotate(-12deg); }
  }
  .emoji-tools {
    display: inline-block;
    transform-origin: 50% 75%;
    animation: wrenchTurn 2s ease-in-out infinite;
  }

  /* 📋 Methodology – page flip */
  @keyframes pageFlip {
    0%, 100% { transform: rotateY(0deg);   }
    30%       { transform: rotateY(-35deg); }
    65%       { transform: rotateY(18deg);  }
  }
  .emoji-methodology {
    display: inline-block;
    animation: pageFlip 2.6s ease-in-out infinite;
  }
`;

// ── Official logos via Devicons CDN ──────────────────────────
const LOGO = {
  "Core Java":            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Spring Boot":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Spring":               "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Spring MVC":           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Hibernate":            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
  "JPA":                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Servlet":              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "JSP":                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "REST API":             "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "Microservices":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "JWT":                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Multithreading":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Auth & Authorization": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "ORM":                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
  "AWS CP":               "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "Docker":               "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Kafka":                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  "Redis":                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "HTML5":                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS3":                 "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Bootstrap":            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "JavaScript":           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "ReactJS":              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "MySQL":                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "RDBMS":                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "IntelliJ IDEA":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
  "Eclipse":              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
  "STS":                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "VS Code":              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Postman":              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "Git":                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub":               "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Agile":                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  "Scrum":                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
};

function SkillBadge({ label }) {
  const src = LOGO[label];
  return (
    <span className={styles.badge}>
      {src ? (
        <img
          src={src}
          alt={label}
          className={styles.badgeLogo}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      ) : (
        <span className={styles.badgeDot} />
      )}
      <span className={styles.badgeLabel}>{label}</span>
    </span>
  );
}

function SkillCard({ categoryKey, icon, label, skills }) {
  const emojiClass = EMOJI_CLASS[categoryKey] ?? "";
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {/* Animated emoji */}
        <span className={`${styles.cardIcon} ${emojiClass}`}>{icon}</span>
        <h3 className={styles.cardTitle}>{label}</h3>
      </div>
      <div className={styles.badges}>
        {skills.map((s) => (
          <SkillBadge key={s} label={s} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  // Inject animation CSS once on mount
  useEffect(() => {
    if (document.getElementById("skill-emoji-anim")) return;
    const tag = document.createElement("style");
    tag.id = "skill-emoji-anim";
    tag.textContent = ANIM_CSS;
    document.head.appendChild(tag);
    return () => document.getElementById("skill-emoji-anim")?.remove();
  }, []);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle label="Technical Skills" sub="Technologies I work with" />
        <div className={styles.grid}>
          {SKILL_CATEGORIES.map(({ key, icon, label }) => (
            <SkillCard
              key={key}
              categoryKey={key}
              icon={icon}
              label={label}
              skills={SKILLS[key]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
