import { getCard } from "../components/getCards.js";

export function setPageTitle(newTitle) {
  document.title = newTitle || "TITLE NOT FOUND";
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

export function updateSidebar(newSidebarContent) {
  const sidebar = document.querySelector("#sidebar"); // Selecciona el sidebar
  if (!newSidebarContent) {
    disappear(sidebar);
  } else {
    sidebar.innerHTML = newSidebarContent || "SIDEBAR CONTENT NOT FOUND";
  }
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
  //console.log(randomNumer);

  return randomNumer;
}

// Función para mezclar arrays
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

  if (backButton) {
    const backButton = document.querySelector("#backButton");
    backButton.addEventListener("click", () => {
      if (confirm("¿Seguro que quieres ir devuelta bro?")) {
        back();
      }
    });
  }
}

export function defaultMainAppWidth() {
  const mainApp = document.querySelector("#main");
  removeClassFromElement(mainApp, "extended");
}

export function resetAnimation(element) {
  element.classList.remove("animated");
  void element.offsetWidth; // Forzar el reflow
  element.classList.add("animated");
}

export function notification(msg, type = "info") {
  const noti = document.createElement("div");
  noti.className = "notification";
  noti.textContent = msg;

  switch (type) {
    case "success":
      noti.classList.add("success");
      break;
    case "error":
      noti.classList.add("error");
      break;
    case "warning":
      noti.classList.add("warning");
      break;
    case "info":
      noti.classList.add("info");
      break;

    default:
      break;
  }

  setTimeout(() => {
    document.body.appendChild(noti);
  }, 300);

  // Animar con clase <<.show>>
  requestAnimationFrame(() => {
    noti.classList.add("show");
  });

  // Eliminar después <<duration>>
  setTimeout(() => {
    noti.classList.remove("show");
    setTimeout(() => noti.remove(), 3000);
  }, 5000);
}

export function applyCooldown(cooldownVariable) {
  if (cooldownVariable) return;

  cooldownVariable = true;

  setTimeout(() => {
    cooldownVariable = false;
  }, 3000);
}

export function activeBackButton() {
  setTimeout(() => {
    const backButton = document.getElementById("backButton");
    backButton.addEventListener("click", () => {
      u.goBackWithConfirm(); // Volver a la página anterior
    });
  }, 200);
}
