import styles from "./styles.module.css";
import { Navbar } from "./navbar/Navbar";
import { Link } from "react-router";

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        Johannes Hernehult
      </Link>
      <Navbar />
    </header>
  );
}
