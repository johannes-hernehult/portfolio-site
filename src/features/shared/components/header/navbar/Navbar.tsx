import { Link, useLocation, useNavigate } from "react-router";
import { useActiveSection } from "../../../hooks/useActiveSection";
import styles from "./styles.module.css";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

const sectionIds = sections.map(({ id }) => id);

export default function Navbar() {
  const { activeSectionId, activateSection } = useActiveSection(sectionIds);
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname.startsWith("/project/")) {
    const cameFromHome = (
      location.state as { fromHome?: boolean } | null
    )?.fromHome;

    return (
      <nav className={styles.nav} aria-label="Project navigation">
        <button
          type="button"
          onClick={() =>
            cameFromHome ? navigate(-1) : navigate("/#projects")
          }
        >
          &lt; Back
        </button>
      </nav>
    );
  }

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      {sections.map(({ id, label }) => (
        <Link
          key={id}
          to={`/#${id}`}
          onClick={() => activateSection(id)}
          className={activeSectionId === id ? styles.active : undefined}
          aria-current={activeSectionId === id ? "location" : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
