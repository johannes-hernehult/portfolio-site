import type { PropsWithChildren } from "react";
import styles from "./styles.module.css";

/** Wraps child content in the shared card presentation. */
export function Card({ children }: PropsWithChildren) {
  return <div className={styles.card}>{children}</div>;
}
