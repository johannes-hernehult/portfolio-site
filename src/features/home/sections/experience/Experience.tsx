import { EXPERIENCES } from "./experiences";
import styles from "./styles.module.css";

function formatDateRange(from, to) {
  return from === to ? String(from) : `${from} – ${to}`;
}

function ExperienceCard({ experience }) {
  const { title, description, from, to, highlights, technologies } = experience;

  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <span className={styles.date}>{formatDateRange(from, to)}</span>
      </div>

      <p className={styles.description}>{description}</p>

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

export default function Experience() {
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
