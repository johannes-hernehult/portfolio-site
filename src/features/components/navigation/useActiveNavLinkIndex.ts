import { useLocation } from "react-router";

export function useActiveNavLinkIndex() {
  const { hash } = useLocation();
  let activeIndex = -1;

  // NavLink matches the pathname, not the hash, so all of these links to "/" would be active together.
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
