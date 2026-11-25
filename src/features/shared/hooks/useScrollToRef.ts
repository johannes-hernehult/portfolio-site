import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollToRef() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.slice(1));
      if (targetElement) {
        const scrollMarginTop =
          Number.parseFloat(
            window.getComputedStyle(targetElement).scrollMarginTop,
          ) || 0;
        const destination = Math.max(
          0,
          targetElement.getBoundingClientRect().top +
            window.scrollY -
            scrollMarginTop,
        );

        window.scrollTo({ top: destination, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash, key]);
}
