import styles from "./styles.module.css";

import { Link } from "react-router";
import { SocialLinks } from "../../../shared/components/social-links/SocialLinks";

export function HomeHero() {
  return (
    <section className={`${styles.hero} page-hero`}>
      <h1>Full-stack developer building lean, dependable software.</h1>
      <p>
        Backed by 3+ years of agency web development and now expanding into C#
        and .NET in Sweden—open to internship opportunities for April–July 2027.
      </p>

      <Link to="#contact" className="btn">
        <span>Let's connect!</span>
      </Link>
      <SocialLinks placement="hero" />
    </section>
  );
}
