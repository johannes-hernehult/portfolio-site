import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router";

export const PROJECT_RETURN_SCROLL_KEY = "project-return-scroll-y";

export function useScrollToRef() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (pathname === "/" && navigationType === "POP") {
      const savedScrollY = sessionStorage.getItem(PROJECT_RETURN_SCROLL_KEY);
      if (savedScrollY !== null) {
        sessionStorage.removeItem(PROJECT_RETURN_SCROLL_KEY);
        const scrollY = Number(savedScrollY);
        if (Number.isFinite(scrollY)) {
          window.scrollTo(0, scrollY);
          return;
        }
      }
    }

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
  }, [pathname, hash, key, navigationType]);
}
