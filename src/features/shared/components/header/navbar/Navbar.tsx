import styles from "./styles.module.css";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/project/1">Project 1</Link>
      <Link to="/project/2">Project 2</Link>
    </nav>
  );
}
