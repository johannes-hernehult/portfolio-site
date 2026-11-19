import type { Project } from "../types";
import styles from "./styles.module.css";

interface FooterCtaProps {
  project: Project;
  projects: Project[];
}

export function ProjectCta({ project, projects }: FooterCtaProps) {
  return <section className={styles.projectCta}>Project cta</section>;
}
