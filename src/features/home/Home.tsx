import "../../App.css";
import styles from "./styles.module.css";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";

export function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Projects />

      <section id="experience" className="experience">
        <h2>Experience</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          veniam modi, dolorum repellat libero consequatur laboriosam blanditiis
          doloribus porro eum similique aliquam omnis labore vitae nisi soluta
          quas sed itaque illo provident beatae? Unde, sunt. Maiores ab sunt
          ipsam ipsa aspernatur odio dicta esse recusandae, exercitationem
          necessitatibus? Atque, deserunt ad.
        </p>
      </section>

      <section id="about" className="about">
        <h2>About</h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        velit aspernatur modi unde excepturi blanditiis quisquam aut quasi
        beatae quaerat? Quisquam optio nemo, ab tempore exercitationem at esse,
        cupiditate culpa neque soluta odit!
      </section>

      <section id="contact" className="contact">
        <h2>Let's get in touch</h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem
        pariatur error aliquid quia nam dignissimos maxime amet quos incidunt
        inventore animi eius dolor ducimus quidem quasi quod, ipsum consequuntur
        a.
      </section>
    </main>
  );
}
