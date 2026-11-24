import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollToRef() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.slice(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash, key]);
}
