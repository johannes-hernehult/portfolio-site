import { EXPERIENCES } from "../../../shared/data/experiences";
import type { Experience } from "../../../shared/types";
import styles from "./styles.module.css";

function formatDateRange(from: number, to: number) {
  return from === to ? String(from) : `${from} – ${to}`;
}

function ExperienceCard({ experience }: { experience: Experience }) {
  const { title, organization, from, to, highlights, technologies } = experience;

  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <span className={styles.date}>{formatDateRange(from, to)}</span>
      </div>

      <p className={styles.organization}>{organization}</p>

      {highlights.length > 0 && (
        <ul className={styles.highlights}>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {technologies.length > 0 && (
        <ul className={styles.techList} aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech} className={styles.techTag}>
              {tech}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Experience</h2>
      <ul className={styles.list}>
        {EXPERIENCES.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </ul>
    </section>
  );
}
