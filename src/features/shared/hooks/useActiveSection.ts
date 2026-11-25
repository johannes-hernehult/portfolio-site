import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

type ActiveSection = {
  pathname: string;
  id: string | null;
};

export function useActiveSection(sectionIds: readonly string[]) {
  const { pathname } = useLocation();
  const [activeSection, setActiveSection] = useState<ActiveSection>({
    pathname: "",
    id: null,
  });
  const pendingTargetId = useRef<string | null>(null);

  const activateSection = useCallback((id: string) => {
    pendingTargetId.current = id;
    setActiveSection({ pathname: "/", id });
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      pendingTargetId.current = null;
      return;
    }

    const sections = sectionIds.flatMap((id) => {
      const element = document.getElementById(id);
      return element ? [{ id, element }] : [];
    });

    if (sections.length === 0) {
      return;
    }

    let animationFrame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const activationPoint = window.innerHeight * 0.25;
        const pendingId = pendingTargetId.current;
        if (pendingId) {
          const pendingSection = sections.find(({ id }) => id === pendingId);
          if (
            pendingSection &&
            pendingSection.element.getBoundingClientRect().top > activationPoint
          ) {
            return;
          }
          pendingTargetId.current = null;
        }

        let currentId: string | null = null;
        for (const { id, element } of sections) {
          if (element.getBoundingClientRect().top <= activationPoint) {
            currentId = id;
          }
        }

        const documentHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight,
        );
        if (window.scrollY + window.innerHeight >= documentHeight - 1) {
          currentId = sections.at(-1)?.id ?? currentId;
        }

        setActiveSection((current) =>
          current.pathname === pathname && current.id === currentId
            ? current
            : { pathname, id: currentId },
        );
      });
    };

    const cancelPendingTarget = () => {
      if (pendingTargetId.current) {
        pendingTargetId.current = null;
        updateActiveSection();
      }
    };

    const cancelPendingOnKeyDown = (event: KeyboardEvent) => {
      if (
        [
          "ArrowDown",
          "ArrowUp",
          "PageDown",
          "PageUp",
          "Home",
          "End",
          " ",
        ].includes(event.key)
      ) {
        cancelPendingTarget();
      }
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("wheel", cancelPendingTarget, { passive: true });
    window.addEventListener("touchstart", cancelPendingTarget, {
      passive: true,
    });
    window.addEventListener("pointerdown", cancelPendingTarget);
    window.addEventListener("keydown", cancelPendingOnKeyDown);
    updateActiveSection();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("wheel", cancelPendingTarget);
      window.removeEventListener("touchstart", cancelPendingTarget);
      window.removeEventListener("pointerdown", cancelPendingTarget);
      window.removeEventListener("keydown", cancelPendingOnKeyDown);
    };
  }, [pathname, sectionIds]);

  return {
    activeSectionId:
      pathname === "/" && activeSection.pathname === pathname
        ? activeSection.id
        : null,
    activateSection,
  };
}
