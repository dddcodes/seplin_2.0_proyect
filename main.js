import { CONFIG } from "./config.js";
import { router, navigateTo } from "./router.js";
import getLayout from "../components/layout.js";

import defaultQuizzes from "./localStorage/defaultQuizzes.js";

defaultQuizzes();

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
  document.querySelectorAll(".material-symbols-rounded ").forEach((icon) => {
    icon.addEventListener("click", (e) => {
      const link = icon.closest("a"); // Encuentra el <a> padre
      if (link) {
        e.preventDefault(); // Evita la recarga de la página
        navigateTo(link.href); // Usa navigateTo() para cambiar la vista
      }
    });
  });

  document.querySelectorAll("p").forEach((p) => {
    p.addEventListener("click", (e) => {
      const link = p.closest("a"); // Encuentra el <a> padre
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
