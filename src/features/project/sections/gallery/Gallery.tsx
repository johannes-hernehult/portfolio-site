import { useEffect, useState } from "react";
import { useGalleryLightbox } from "./useGalleryLightbox";
import styles from "./styles.module.css";

const MOBILE_VIEW_QUERY = "(max-width: 600px)";

type GalleryProps = {
  project: {
    images: { order: number; url: string; altText: string }[];
  };
};

export function Gallery({ project }: GalleryProps) {
  const images = [...project.images].sort((a, b) => a.order - b.order);
  const [isMobile, setIsMobile] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia(MOBILE_VIEW_QUERY).matches,
  );
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

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_VIEW_QUERY);
    const handleChange = (event: MediaQueryListEvent) =>
      setIsMobile(event.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isMobile && dialogRef.current?.open) {
      dialogRef.current.close();
    }
  }, [isMobile, dialogRef]);

  const galleryItems = images.map((image, index) => (
    <li key={image.altText.slice(0, 20)}>
      {isMobile ? (
        <>
          <img src={image.url} alt={image.altText} />
          <p className={styles.galleryCaption} aria-hidden="true">
            {image.altText}
          </p>
        </>
      ) : (
        <button
          className={styles.imageButton}
          type="button"
          onClick={() => openImage(index)}
          aria-label={`View full-size image: ${image.altText}`}
        >
          <img src={image.url} alt={image.altText} />
        </button>
      )}
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
          <p className={styles.caption}>{selectedImage.altText}</p>
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
