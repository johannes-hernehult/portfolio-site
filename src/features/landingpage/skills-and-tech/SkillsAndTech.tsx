import styles from "./styles.module.css";

/** Renders the landing page's skills and technology section. */
export function SkillsAndTech() {
  return (
    <section className={styles.skillsAndTech}>
      <h2>Skills and Tech</h2>
      <div>
        <h3>Skills</h3>
        <ul>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </div>
      <div>
        <h3>Tech</h3>
        <ul>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </div>
    </section>
  );
}
