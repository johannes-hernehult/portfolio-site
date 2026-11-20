import styles from "./styles.module.css";
import { Link, useLocation } from "react-router";
import { navLinks } from "./navLinks";

/** Renders the site navigation and marks the current section link as active. */
export function Navbar() {
  const { hash: currentHash } = useLocation();

  return (
    <header>
      <Link to="/" className={styles.homeLink}>
        <img src="/images/jh.jpg" alt="" />
        <span className={styles.name}>Johannes Hernehult</span>
        <span className={styles.role}>Fullstack Engineer</span>
      </Link>

      <nav>
        {navLinks.map(({ hash, label }) => {
          const isActive = hash === currentHash;

          return (
            <Link
              key={hash}
              to={`/${hash}`}
              className={isActive ? styles.active : undefined}
              aria-current={isActive ? "location" : undefined}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
