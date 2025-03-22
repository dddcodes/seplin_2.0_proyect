import { router, navigateTo } from "./router.js";
import { CONFIG } from "./config.js";
import getLayout from "../components/layout.js";

getLayout(); // Carga la barra de navegación

document.addEventListener("DOMContentLoaded", () => {
  router(); // Cargar la vista según la URL actual

  // Captura los clics en los enlaces internos para evitar recargar la página
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault(); // Evita la recarga de la página
      navigateTo(e.target.href); // Usa navigateTo() para cambiar la vista
    }
  });
});

// Detecta cuando el botón "atrás" del navegador es activado
window.addEventListener("popstate", router);

// Redirigir al inicio si se carga una ruta manualmente
window.addEventListener('load', () => {
  if (window.location.pathname !== '/') {
    navigateTo('/');
  }
});

// ==> COSAS INFORMATIVAS / INUTILES =========================================================

console.log(CONFIG);

// ========================================================
