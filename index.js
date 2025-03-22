import { router, navigateTo } from "./router.js";
import { CONFIG } from "./config.js";
import getLayout from "../components/layout.js";

getLayout(); // Carga la barra de navegación

// ==> cosas para lo del router
document.addEventListener("DOMContentLoaded", () => {
  router(); // Cargar la vista según la URL actual

  // Captura los clics en los enlaces internos para evitar recargar la página
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      // Si el clic es en un enlace interno
      e.preventDefault(); // Evita la recarga de la página
      navigateTo(e.target.href); // Usa navigateTo() para cambiar la vista
    }
  });
});

// ==> Detecta cuando el usuario usa el botón de "atrás" del navegador
window.addEventListener("popstate", router);

// ==> COSAS INFORMATIVAS / INUTILES =========================================================

console.log(CONFIG);

// ========================================================
