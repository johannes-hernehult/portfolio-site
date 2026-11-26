import { useEffect, useRef, type MouseEvent } from "react";
import { useLocation, useNavigationType } from "react-router";

export type ProjectLinkState = {
  fromHome: true;
};

export const PROJECT_LINK_STATE: ProjectLinkState = { fromHome: true };

export function cameFromHome(state: unknown): boolean {
  return (
    typeof state === "object" &&
    state !== null &&
    "fromHome" in state &&
    Boolean(state.fromHome)
  );
}

function saveProjectReturnScroll(locationKey: string, scrollY: number) {
  try {
    window.sessionStorage.setItem(
      `project-return-scroll:${locationKey}`,
      String(scrollY),
    );
  } catch {
    // Storage can be unavailable; navigation should still work.
  }
}

function readProjectReturnScroll(locationKey: string) {
  try {
    return window.sessionStorage.getItem(`project-return-scroll:${locationKey}`);
  } catch {
    return null;
  }
}

export function useRememberHomeScroll() {
  const location = useLocation();

  return (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey
    ) {
      saveProjectReturnScroll(location.key, window.scrollY);
    }
  };
}

export function useScrollOnNavigate() {
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
        targetElement.scrollIntoView({
          behavior: pathnameChanged ? "instant" : "smooth",
          block: "start",
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
