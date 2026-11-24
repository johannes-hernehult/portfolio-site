import styles from "./styles.module.css";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/#projects">Projects</Link>
      <Link to="/#experience">Experience</Link>
      <Link to="/#about">About</Link>
      <Link to="/#contact">Contact</Link>
    </nav>
  );
}
