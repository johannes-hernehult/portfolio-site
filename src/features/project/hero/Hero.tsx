import type { Project } from "../types";
import styles from "./styles.module.css";

interface HeroProps {
  project: Project;
}

export function Hero({ project }: HeroProps) {
  const { title, images, links, summary, tags, role } = project;
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: images[0] ? `url(${images[0].src})` : undefined,
      }}
    >
      <h1>{title}</h1>
      <p>{summary}</p>
      {links.live && <a href={links.live}>Live Link</a>}
      {links.repo && <a href={links.repo}>Repo Link</a>}
      <span>{role}</span>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </section>
  );
}
