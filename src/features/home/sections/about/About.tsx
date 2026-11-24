import styles from "./styles.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About</h2>
      <p>
        After spending over three years building and maintaining 20+ production
        sites in an agency setting, I wanted to push beyond the frontend and own
        the whole stack. I’m currently immersed in a full-stack development
        program in Sweden, combining that past production experience with modern
        application architecture as I prepare for my April–July 2027 internship.
      </p>
      <p>
        Whether I’m structuring a React app or configuring a Linux VPS, my rule
        is the same: keep it simple. I’m unapologetically loyal to feature-based
        folder structures, lean dependencies, and vanilla CSS. That mindset is
        what shaped Count Your Bites, a lightweight calorie tracker I built to
        solve a daily annoyance for my wife and me—now quietly used by a couple
        of friends and next on my list for an architectural rewrite.
      </p>
      <p>
        When I step away from the keyboard, you’ll usually find me hanging out
        with my family, out for a run, at the outdoor gym, or baking something from
        scratch (cooking, on the other hand, I’ll happily skip).
      </p>
    </section>
  );
}
