import { useGalleryLightbox } from "./useGalleryLightbox";
import styles from "./styles.module.css";

type GalleryProps = {
  project: {
    images: { order: number; url: string; altText: string }[];
  };
};

export function Gallery({ project }: GalleryProps) {
  const images = [...project.images].sort((a, b) => a.order - b.order);
  const {
    closeDialog,
    dialogRef,
    handleDialogClick,
    handleDialogClose,
    handleDialogKeyDown,
    navigateImage,
    openImage,
    selectedImage,
    selectedIndex,
  } = useGalleryLightbox(images);

  const galleryItems = images.map((image, index) => (
    <li key={image.altText.slice(0, 20)}>
      <button
        className={styles.imageButton}
        type="button"
        onClick={() => openImage(index)}
        aria-label={`View full-size image: ${image.altText}`}
      >
        <img src={image.url} alt={image.altText} />
      </button>
    </li>
  ));

  return (
    <section className={styles.gallery}>
      <h2>Gallery</h2>
      <ul className={styles.grid}>{galleryItems}</ul>
      {selectedImage && (
        <dialog
          ref={dialogRef}
          className={styles.lightbox}
          aria-label={`Full-size image: ${selectedImage.altText}`}
          onKeyDown={handleDialogKeyDown}
          onClick={handleDialogClick}
          onClose={handleDialogClose}
        >
          <button
            className={styles.closeButton}
            type="button"
            onClick={closeDialog}
            aria-label="Close full-size image"
          >
            ×
          </button>
          <img src={selectedImage.url} alt={selectedImage.altText} />
          <div className={styles.navigation}>
            <button
              className={styles.navigationButton}
              type="button"
              onClick={() => navigateImage(-1)}
              aria-label="Previous image"
            >
              ← Previous
            </button>
            <span aria-live="polite">
              {(selectedIndex ?? 0) + 1} / {images.length}
            </span>
            <button
              className={styles.navigationButton}
              type="button"
              onClick={() => navigateImage(1)}
              aria-label="Next image"
            >
              Next →
            </button>
          </div>
        </dialog>
      )}
    </section>
  );
}
