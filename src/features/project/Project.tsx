import { useParams } from "react-router";
import styles from "./styles.module.css";
import Hero from "./sections/hero/Hero";
import { PROJECTS } from "../shared/data/projects";

export function Project() {
  const { slug } = useParams();
  const project = PROJECTS.find((project) => project.slug === slug);
  if (!project) null;

  return (
    <main className={styles.project}>
      <Hero project={project} />
    </main>
  );
}
