import { useCallback, useEffect, useRef, useState } from "react";
import { getActiveSectionId } from "./getActiveSectionId";

type ListenerRegistration = [
  target: EventTarget,
  event: string,
  handler: EventListener,
  options?: AddEventListenerOptions,
];

const NAVIGATION_KEYS: readonly string[] = [
  "ArrowDown",
  "ArrowUp",
  "PageDown",
  "PageUp",
  "Home",
  "End",
  " ",
];

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const pendingTargetId = useRef<string | null>(null);

  const activateSection = useCallback((id: string) => {
    pendingTargetId.current = id;
    setActiveSectionId(id);
  }, []);

  useEffect(() => {
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

        const sectionPositions = sections.map(({ id, element }) => ({
          id,
          top: element.getBoundingClientRect().top,
        }));
        const documentHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight,
        );
        const isScrolledToBottom =
          window.scrollY + window.innerHeight >= documentHeight - 1;
        const currentId = getActiveSectionId(
          sectionPositions,
          activationPoint,
          isScrolledToBottom,
        );

        setActiveSectionId(currentId);
      });
    };

    const cancelPendingTarget = () => {
      if (pendingTargetId.current) {
        pendingTargetId.current = null;
        updateActiveSection();
      }
    };

    const cancelPendingOnKeyDown: EventListener = (event) => {
      if (
        "key" in event &&
        typeof event.key === "string" &&
        NAVIGATION_KEYS.includes(event.key)
      ) {
        cancelPendingTarget();
      }
    };

    const listeners: ListenerRegistration[] = [
      [window, "scroll", updateActiveSection, { passive: true }],
      [window, "resize", updateActiveSection],
      [window, "wheel", cancelPendingTarget, { passive: true }],
      [window, "touchstart", cancelPendingTarget, { passive: true }],
      [window, "pointerdown", cancelPendingTarget],
      [window, "keydown", cancelPendingOnKeyDown],
    ];

    for (const [target, event, handler, options] of listeners) {
      target.addEventListener(event, handler, options);
    }
    updateActiveSection();

    return () => {
      cancelAnimationFrame(animationFrame);
      for (const [target, event, handler, options] of listeners) {
        target.removeEventListener(event, handler, options);
      }
    };
  }, [sectionIds]);

  return { activeSectionId, activateSection };
}
