import type { Project } from "../types";
import styles from "./styles.module.css";

interface HeroProps {
  project: Project;
}

export function Hero({ project }: HeroProps) {
  const { title, images, links, summary, tags, role } = project;
  const coverImage = images.find((image) => image.order === 0);

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: coverImage
          ? `linear-gradient(#00000080, #00000080), url(${coverImage.src})`
          : undefined,
      }}
    >
      <h1>{title}</h1>
      <p>{summary}</p>
      {links.live && <a href={links.live}>Live Link</a>}
      {links.repo && <a href={links.repo}>Repo Link</a>}
      {links.video && <a href={links.video}>Video</a>}
      {role && <span>{role}</span>}
      {tags.length > 0 && (
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
