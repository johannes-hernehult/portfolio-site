import type { Project } from "../types";
import styles from "./styles.module.css";

interface HeroProps {
  project: Project;
}

export function Overview({ project }: HeroProps) {
  const { overview } = project;
  const {} = project;
  return (
    <section className={styles.overview}>
      {overview.length > 0 &&
        overview.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{" "}
    </section>
  );
}
