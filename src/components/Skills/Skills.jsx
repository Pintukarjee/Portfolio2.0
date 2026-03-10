import { SKILLS, SKILL_CATEGORIES } from "../../data/portfolioData.jsx";
import SectionTitle from "../common/SectionTitle";
import styles from "./Skills.module.css";

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

function SkillCard({ icon, label, skills }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{icon}</span>
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
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle label="Technical Skills" sub="Technologies I work with" />
        <div className={styles.grid}>
          {SKILL_CATEGORIES.map(({ key, icon, label }) => (
            <SkillCard key={key} icon={icon} label={label} skills={SKILLS[key]} />
          ))}
        </div>
      </div>
    </section>
  );
}
