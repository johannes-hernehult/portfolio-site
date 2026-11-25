import styles from "./styles.module.css";
import Navbar from "./navbar/Navbar";
import { Link, useLocation } from "react-router";
import { useScrollToRef } from "../../hooks/useScrollToRef";

export function Header() {
  useScrollToRef();
  const { pathname } = useLocation();
  const isProjectPage = pathname.startsWith("/project/");

  return (
    <header className={styles.header}>
      {!isProjectPage && (
        <Link to="/" className={styles.brand}>
          Johannes Hernehult
        </Link>
      )}
      <Navbar />
    </header>
  );
}
