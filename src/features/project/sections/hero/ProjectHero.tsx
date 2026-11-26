import type * as React from "react";
import type { Project } from "../../../shared/types";
import styles from "./styles.module.css";

export function ProjectHero({ project }: { project: Project }) {
  const links = project.links.map((link) => (
    <li key={link.url}>
      <a href={link.url} target="_blank" rel="noreferrer" className="btn">
        <span>{link.label}</span>
      </a>
    </li>
  ));
  const tags = project.tags.map((tag) => (
    <li key={tag} className="pill">
      {tag}
    </li>
  ));

  return (
    <section
      className={`${styles.hero} page-hero`}
      style={{ "--hero-image": `url("${project.url}")` } as React.CSSProperties}
    >
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {links.length > 0 && <ul className={styles.links}>{links}</ul>}
      {tags.length > 0 && (
        <ul className={styles.tags} aria-label="Project tags">
          {tags}
        </ul>
      )}
    </section>
  );
}
