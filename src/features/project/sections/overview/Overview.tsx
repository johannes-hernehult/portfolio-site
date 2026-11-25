import styles from "./styles.module.css";

export default function Overview({ project }) {
  return (
    <section className={styles.overview}>
      <h2>Overview</h2>
      <p>{project.overview}</p>
    </section>
  );
}
