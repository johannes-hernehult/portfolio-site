import type { Project } from "../types";
import styles from "./styles.module.css";

interface HeroProps {
  project: Project;
}

/** Displays the overview paragraphs for a project. */
export function Overview({ project }: HeroProps) {
  const { overview } = project;
  const {} = project;
  return (
    <section className={styles.overview}>
      <h2>Overview</h2>
      {overview.length > 0 &&
        overview.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{" "}
    </section>
  );
}
