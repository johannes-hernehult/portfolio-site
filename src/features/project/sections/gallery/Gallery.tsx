import styles from "./styles.module.css";

type GalleryProps = {
  project: {
    images: { order: number; url: string; altText: string }[];
  };
};

export function Gallery({ project }: GalleryProps) {
  const galleryItems = [...project.images]
    .sort((a, b) => a.order - b.order)
    .map(image => (
      <img src={image.url} alt={image.altText} key={image.altText.slice(0, 20)} />
    ));

  return (
    <section className={styles.gallery}>
      <h2>Gallery</h2>
      <ul className={styles.grid}>{galleryItems}</ul>
    </section>
  );
}
