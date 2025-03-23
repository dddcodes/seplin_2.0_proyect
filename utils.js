export function setPageTitle(newTitle) {
  document.title = newTitle || "TITLE NOT FOUND";
}

export function scrollToTop() {
  window.scrollTo(0, 0); // Mueve el scroll a la posición (0, 0)
}

export function updateSidebar(newSidebarContent) {
  const sidebar = document.querySelector("#sidebar"); // Selecciona el sidebar

  sidebar.innerHTML = newSidebarContent || "ERROR EN ./UTILS.JS O ./VIEW/ O ./COMPONENTS/LAYOUT.JS"; // Actualiza el contenido del sidebar
}
