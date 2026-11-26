export function Footer() {
  // oxlint-disable-next-line react/purity -- preserve the existing render-time year behavior
  return <footer>© {new Date().getFullYear()} Johannes Hernehult</footer>;
}
