import { Link } from "react-router";
import { useActiveSection } from "../../../hooks/useActiveSection";
import { SocialLinks } from "../../social-links/SocialLinks";
import styles from "./styles.module.css";

const sections: ReadonlyArray<{ id: string; label: string }> = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const sectionIds = sections.map(({ id }) => id);

export function MainNav() {
  const { activeSectionId, activateSection } = useActiveSection(sectionIds);

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
      <SocialLinks placement="navbar" />
    </nav>
  );
}
