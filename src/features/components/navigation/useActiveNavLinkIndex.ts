import { useLocation } from "react-router";

/** Returns the navigation link index associated with the current URL hash. */
export function useActiveNavLinkIndex() {
  const { hash } = useLocation();
  let activeIndex = -1;

  switch (hash) {
    case "#about-me":
      activeIndex = 0;
      break;
    case "#projects":
      activeIndex = 1;
      break;
    case "#experiences":
      activeIndex = 2;
      break;
    case "#contact":
      activeIndex = 3;
      break;
  }

  return activeIndex;
}
