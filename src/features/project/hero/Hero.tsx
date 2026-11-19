import type { Project } from "../types";
import styles from "./styles.module.css";

interface HeroProps {
  project: Project;
}

export function Hero({ project }: HeroProps) {
  return (
    <section className={styles.hero}>
      <h1>{project.title}</h1>
      <p>{project.summary}</p>
      {project.links.live && <a href={project.links.live}>Live Link</a>}
      {project.links.repo && <a href={project.links.repo}>Repo Link</a>}
      <span>{project.role}</span>
      <ul>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </section>
  );
}
