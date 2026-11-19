import type { Project } from "../types";
import styles from "./styles.module.css";

interface GalleryProps {
  project: Project;
}

export function Gallery({ project }: GalleryProps) {
  const { images } = project;
  const galleryImages = images
    .filter((image) => image.order !== 0)
    .sort((a, b) => a.order - b.order);

  if (galleryImages.length === 0) return null;

  return (
    <section className={styles.gallery}>
      {galleryImages.map((image) => (
        <figure key={image.src} className={styles.figure}>
          <img src={image.src} alt={image.alt} loading="lazy" />
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>
      ))}
    </section>
  );
}
