import type { PropsWithChildren } from "react";
import styles from "./styles.module.css";

/** Arranges child content using the shared grid presentation. */
export function Grid({ children }: PropsWithChildren) {
  return <div className={styles.grid}>{children}</div>;
}
