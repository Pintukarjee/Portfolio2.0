// ============================================================
//  src/components/Projects/Projects.jsx
//  Projects will be added here later
// ============================================================

import { PROJECTS } from "../../data/portfolioData.jsx";
import SectionTitle from "../common/SectionTitle";
import styles from "./Projects.module.css";

function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>🚀</span>
        <div className={styles.cardLinks}>
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className={styles.link}>
              🐙 GitHub
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className={styles.link}>
              🔗 Live
            </a>
          )}
        </div>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
      <div className={styles.techRow}>
        {tech.map((t) => (
          <span key={t} className={styles.techBadge}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle label="Projects" sub="Things I've built" />

        {PROJECTS.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>🚀</span>
            <p className={styles.emptyText}>
              Exciting projects are on the way — check back soon!
            </p>
          </div>
        ) : (
          <div className={styles.grid}>
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
