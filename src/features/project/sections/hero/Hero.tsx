import styles from "./styles.module.css";

export default function Hero({ project }) {
  return (
    <section
      className={styles.hero}
      style={{
        background: project.url
          ? `linear-gradient(#00000020, #00000020), url("${project.url}")`
          : undefined,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </section>
  );
}
