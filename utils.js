export function setPageTitle(newTitle) {
  document.title = newTitle || "TITLE NOT FOUND";
}

export function scrollToTop() {
  window.scrollTo(0, 0); // Mueve el scroll a la posición (0, 0)
}

export function updateSidebar(newSidebarContent) {
  const sidebar = document.querySelector("#sidebar"); // Selecciona el sidebar

  sidebar.innerHTML =
    newSidebarContent ||
    "ERROR EN ./UTILS.JS O ./VIEW/ O ./COMPONENTS/LAYOUT.JS"; // Actualiza el contenido del sidebar
}

export function random(min, max) {
  // Validación de parámetros
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Ambos parámetros deben ser números");
  }

  // Asegurar que min sea menor que max
  [min, max] = [Math.min(min, max), Math.max(min, max)];

  // Fórmula para número aleatorio inclusivo

  const randomNumer = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNumer);

  return randomNumer;
}

// Función para mezclar arrays (Fisher-Yates shuffle)
export function shuffleArray(array) {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  
  return newArray;
}
