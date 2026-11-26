import { useLocation, useNavigate } from "react-router";
import { cameFromHome } from "../../../hooks/useScrollOnNavigate";
import { SocialLinks } from "../../social-links/SocialLinks";
import styles from "./styles.module.css";

export function ProjectNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={styles.nav} aria-label="Project navigation">
      <button
        type="button"
        onClick={() =>
          cameFromHome(location.state)
            ? navigate(-1)
            : navigate("/#projects")
        }
      >
        &lt; Back
      </button>
      <SocialLinks placement="navbar" />
    </nav>
  );
}
