import type { Project } from "../types";
import styles from "./styles.module.css";

interface MoreProjectsProps {
  project: Project;
  projects: Project[];
}

/** Renders the more-projects section on a project page. */
export function MoreProjects({ project, projects }: MoreProjectsProps) {
  return <section className={styles.project}>
    <h2>More projects</h2>
  </section>;
}
