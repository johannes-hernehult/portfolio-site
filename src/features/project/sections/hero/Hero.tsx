import styles from "./styles.module.css";

type Project = {
  title: string;
  description: string;
  url?: string;
  links: { type: string; url: string }[];
  tags: string[];
};

export default function Hero({ project }: { project: Project }) {
  const links = project.links.map((link) => (
    <li key={link.type}>
      <a href={link.url} target="_blank" rel="noreferrer" className="btn">
        <span>{link.type}</span>
      </a>
    </li>
  ));
  const tags = project.tags.map((tag) => <li key={tag}>{tag}</li>);

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: project.url
          ? `linear-gradient(180deg, rgba(10, 10, 14, 0.75) 0%, rgba(10, 10, 14, 0.95) 100%), url("${project.url}")`
          : undefined,
      }}
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
