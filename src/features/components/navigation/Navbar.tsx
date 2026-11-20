import { Link } from "react-router";
import { useActiveNavLinkIndex } from "./useActiveNavLinkIndex";

const navLinks = [
  { hash: "#about-me", label: "About Me" },
  { hash: "#projects", label: "Projects" },
  { hash: "#experiences", label: "Experiences" },
  { hash: "#contact", label: "Contact" },
];

/** Renders the site navigation and marks the current section link as active. */
export function Navbar() {
  const activeIndex = useActiveNavLinkIndex();

  return (
    <header>
      <Link to="/">
        <img src="images/jh.jpg" alt="Profile photo of Johannes Hernehult" />
      </Link>
      <Link to="/">
        <span>Johannes Hernehult</span>
        <br />
        <span>Fullstack Engineer</span>
      </Link>

      <nav>
        {navLinks.map(({ hash, label }, index) => {
          const isActive = index === activeIndex;

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
