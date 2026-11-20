import type { Project } from "../types";
import styles from "./styles.module.css";

interface HighlightsProps {
  project: Project;
}

/** Presents the project lessons under a discipline-specific heading. */
export function Highlights({ project }: HighlightsProps) {
  const { lessons, discipline } = project;

  if (lessons.length === 0) return null;

  return (
    <section className={styles.highlights}>
      <h2>
        {discipline === "3d"
          ? "Technical Art & Pipeline Highlights"
          : "Key Engineering Decisions"}
      </h2>
      <ol className={styles.list}>
        {lessons.map((lesson) => (
          <li key={lesson.title} className={styles.card}>
            <h3>{lesson.title}</h3>
            <p>{lesson.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
