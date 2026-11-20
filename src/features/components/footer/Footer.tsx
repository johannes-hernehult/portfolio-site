/** Renders the site footer with the current year and owner attribution. */
export function Footer() {
  return <footer>© {new Date().getFullYear()} Johannes Hernehult</footer>
}
