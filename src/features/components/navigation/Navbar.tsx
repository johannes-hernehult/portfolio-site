// navigation/Navbar.tsx
import { Link, useLocation } from "react-router";
import { navLinks } from "./navLinks";

/** Renders the site navigation and marks the current section link as active. */
export function Navbar() {
  const { hash: currentHash } = useLocation();

  return (
    <header>
      <Link to="/">
        <img src="/images/jh.jpg" alt="" />
        <span>Johannes Hernehult</span>
        <span>Fullstack Engineer</span>
      </Link>

      <nav>
        {navLinks.map(({ hash, label }) => {
          const isActive = hash === currentHash;

          return (
            <Link
              key={hash}
              to={`/${hash}`}
              className={isActive ? "active" : undefined}
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
