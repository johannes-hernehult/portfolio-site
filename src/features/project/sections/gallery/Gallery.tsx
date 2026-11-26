import { useEffect } from "react";
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery";
import type { Project } from "../../../shared/types";
import { useGalleryLightbox } from "./useGalleryLightbox";
import styles from "./styles.module.css";

// Must match the 600px breakpoint in styles.module.css.
const MOBILE_VIEW_QUERY = "(max-width: 600px)";

type GalleryProps = {
  project: Project;
};

export function Gallery({ project }: GalleryProps) {
  const images = [...project.images].sort((a, b) => a.order - b.order);
  const isMobile = useMediaQuery(MOBILE_VIEW_QUERY);
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
    if (isMobile && dialogRef.current?.open) {
      dialogRef.current.close();
    }
  }, [isMobile, dialogRef]);

  const galleryItems = images.map((image, index) => (
    <li key={image.url} className="surface-card">
      {isMobile ? (
        <>
          <img
            src={image.url}
            alt={image.altText}
            loading="lazy"
            decoding="async"
          />
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
          <img
            src={image.url}
            alt={image.altText}
            loading="lazy"
            decoding="async"
          />
        </button>
      )}
    </li>
  ));

  return (
    <section className="content-section">
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
          <div className={styles.lightboxContent}>
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
          </div>
        </dialog>
      )}
    </section>
  );
}
