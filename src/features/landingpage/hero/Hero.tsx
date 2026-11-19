import styles from "./styles.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Lorem ipsum dolor sit.</h1>
      <p className={styles.subHeading}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className={styles.ctaButton}>CTA</button>
    </section>
  );
}
