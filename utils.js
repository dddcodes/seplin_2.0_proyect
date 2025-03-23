export function setPageTitle(newTitle) {
  document.title = newTitle || "TITLE NOT FOUND";
}

export function scrollToTop() {
  window.scrollTo(0, 0); // Mueve el scroll a la posición (0, 0)
}
