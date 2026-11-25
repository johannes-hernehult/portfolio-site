import styles from "./styles.module.css";

export default function Hero({ project }) {
  const links = project.links.map((link) => (
    <li key={link.type}>
      <a href={link.url} target="_blank" rel="noreferrer" className="btn">
        <span>{link.type}</span>
      </a>
    </li>
  ));

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: project.url
          ? `linear-gradient(180deg, rgba(10, 10, 14, 0.56) 0%, rgba(10, 10, 14, 0.84) 100%), url("${project.url}")`
          : undefined,
      }}
    >
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {links.length > 0 && <ul className={styles.links}>{links}</ul>}
      {/*Tags listed out here*/}
    </section>
  );
}
