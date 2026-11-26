import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router";

export function saveProjectReturnScroll(locationKey: string, scrollY: number) {
  try {
    window.sessionStorage.setItem(
      `project-return-scroll:${locationKey}`,
      String(scrollY),
    );
  } catch {
    // Storage can be unavailable; navigation should still work.
  }
}

export function readProjectReturnScroll(locationKey: string) {
  try {
    return window.sessionStorage.getItem(`project-return-scroll:${locationKey}`);
  } catch {
    return null;
  }
}

export function useScrollToRef() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();
  const previousPathname = useRef<string | null>(null);
  const lastHandledLocationKey = useRef<string | null>(null);

  useEffect(() => {
    if (lastHandledLocationKey.current === key) {
      return;
    }
    lastHandledLocationKey.current = key;

    const pathnameChanged = previousPathname.current !== pathname;
    previousPathname.current = pathname;

    if (pathname === "/" && navigationType === "POP") {
      const savedScrollY = readProjectReturnScroll(key);
      if (savedScrollY !== null) {
        const scrollY = Number(savedScrollY);
        if (Number.isFinite(scrollY)) {
          window.scrollTo({ top: scrollY, behavior: "instant" });
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

        window.scrollTo({
          top: destination,
          behavior: pathnameChanged ? "instant" : "smooth",
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: pathnameChanged ? "instant" : "smooth",
      });
    }
  }, [pathname, hash, key, navigationType]);
}
