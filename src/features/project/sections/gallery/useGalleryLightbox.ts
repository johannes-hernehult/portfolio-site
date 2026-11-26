import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import { useScrollLock } from "./useScrollLock";

export function useGalleryLightbox<T>(images: readonly T[]) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage =
    selectedIndex === null ? null : (images[selectedIndex] ?? null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selectedIndex !== null && selectedImage && !dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, [selectedIndex, selectedImage]);

  useScrollLock(selectedImage !== null);

  const openImage = (index: number) => setSelectedIndex(index);

  const closeDialog = () => dialogRef.current?.close();

  const handleDialogClose = () => setSelectedIndex(null);

  const navigateImage = (direction: -1 | 1) => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null || images.length === 0) {
        return currentIndex;
      }

      return (currentIndex + direction + images.length) % images.length;
    });
  };

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      navigateImage(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      navigateImage(1);
    }
  };

  const handleDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeDialog();
    }
  };

  return {
    closeDialog,
    dialogRef,
    handleDialogClick,
    handleDialogClose,
    handleDialogKeyDown,
    navigateImage,
    openImage,
    selectedImage,
    selectedIndex,
  };
}
