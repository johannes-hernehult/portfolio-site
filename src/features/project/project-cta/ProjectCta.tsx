import type { Project } from "../types";
import styles from "./styles.module.css";

interface FooterCtaProps {
  project: Project;
  projects: Project[];
  limit?: number;
}

export function ProjectCta({ project, projects, limit = 2 }: FooterCtaProps) {
  return <section className={styles.projectCta}>Project cta</section>;
}
