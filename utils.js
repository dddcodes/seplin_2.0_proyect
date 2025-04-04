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

export function disappear(element) {
  element.style.display = "none";
}

export function appear(element, display = "block") {
  element.style.display = display;
}

export function confirmLayoutVisibility() {
  const sidebar = document.querySelector("#sidebar");
  const navbar = document.querySelector("#navigationBar");
  const mainApp = document.querySelector("#main");
  if (sidebar.style.display !== "flex") {
    appear(sidebar, "flex");
  }
  if (navbar.style.display !== "flex") {
    appear(navbar, "flex");
  }
  if (mainApp.style.display !== "flex") {
    appear(mainApp, "flex");
  }
}

export function back() {
  defaultMainAppWidth();
  window.history.back();
}

export function goBackWithConfirm(
  message = "¿Seguro que quieres ir devuelta bro?"
) {
  if (confirm(message)) {
    back();
  }
}

export function shiftAndPush(arr, newElement) {
  arr.shift(); // Elimina el primer elemento
  arr.push(newElement); // Agrega el nuevo al final
  return arr;
}

export function removeClassFromElement(element, className) {
  element.classList.remove(className);
}

export function addClassToElement(element, className) {
  element.classList.add(className);
}

export function extendedMainAppWidth() {
  const mainApp = document.querySelector("#main");
  addClassToElement(mainApp, "extended");
}

export function defaultMainAppWidth() {
  const mainApp = document.querySelector("#main");
  removeClassFromElement(mainApp, "extended");
}