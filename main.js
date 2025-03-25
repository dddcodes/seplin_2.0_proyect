import { CONFIG } from "./config.js";
import { router, navigateTo } from "./router.js";
import getLayout from "../components/layout.js";

import { LSM, RESET } from "./localStorageManager.js"; //lol

RESET();
LSM.createItem("localQuizzes", {
  "001": {
    question: "¿Cuál es la capital de Francia?",
    answer: "París",
    explanation: "París ha sido la capital de Francia desde el año 508.",
    options: ["Lyon", "Marsella", "Toulouse"],
  },
  "002": {
    question: "¿En qué año llegó el hombre a la Luna?",
    answer: "1969",
    explanation: "El Apolo 11 aterrizó en la Luna el 20 de julio de 1969.",
    options: ["1955", "1975", "1989"],
  },
  "003": {
    question: "¿Qué elemento químico tiene el símbolo 'O'?",
    answer: "Oxígeno",
    explanation: "El oxígeno es esencial para la respiración y la combustión.",
    options: ["Oro", "Osmio", "Oganesón"],
  },
});
console.log(LSM.getLocalQuizzes())

getLayout(); // Carga el navbar, sidebar y main-app (HTML)

// ==> Carga la vista =====================================================
document.addEventListener("DOMContentLoaded", () => {
  router(); // Cargar la vista según la URL actual (no funciona parece ser)

  // Captura los clics en los enlaces internos para evitar recargar la página
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault(); // Evita la recarga de la página
      navigateTo(e.target.href); // Usa navigateTo() para cambiar la vista
    }
  });

  // Captura los clics en los ION-ICONS de la barra de navegación
  document.querySelectorAll("ion-icon").forEach((icon) => {
    icon.addEventListener("click", (e) => {
      const link = icon.closest("a"); // Encuentra el <a> padre
      if (link) {
        e.preventDefault(); // Evita la recarga de la página
        navigateTo(link.href); // Usa navigateTo() para cambiar la vista
      }
    });
  });
});

// ==> COSAS INFORMATIVAS / INUTILES =========================================================

console.log(CONFIG);

// ========================================================
