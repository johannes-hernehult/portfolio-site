import styles from "./styles.module.css";

import { Link } from "react-router";
import { SocialLinks } from "../../../shared/components/social-links/SocialLinks";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Lorem ipsum dolor sit.</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nihil
        recusandae eaque!
      </p>

      <Link to="#contact" className="btn">
        <span>Let's connect!</span>
      </Link>
      <SocialLinks placement="hero" />
    </section>
  );
}
