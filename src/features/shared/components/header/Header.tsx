import styles from "./styles.module.css";
import Navbar from "./navbar/Navbar";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.profile}>

      <img
        src="/images/johannes-hernehult.webp"
        alt="Profile photo of Johannes Hernehult"
        width={300}
        height={300}
        />
        <div className={styles.info}>
          <span className={styles.name}>Johannes Hernehult</span>
          <span className={styles.role}>Fullstack Engineer</span>
        </div>
      </div>
      <Navbar />
    </header>
  );
}
