import { router, navigateTo } from "./router.js";
import { CONFIG } from "./config.js";
import getLayout from "../components/layout.js";

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

// ==> Detecta cuando el usuario usa el botón de "atrás" del navegador
window.addEventListener("popstate", router);

// ==> Detecta si el dispositivo es un smartphone ==============================================
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// ==> Si es smartphone: el width del main es 100% al no estar estorbando el scrollbar ==============
if (isMobileDevice()) {
  document.querySelector("#main").styles.width = "100%";
} else {
  console.log("DISOPOSITIVO ES PC");
}

// ==> COSAS INFORMATIVAS / INUTILES =========================================================

console.log(CONFIG);

// ========================================================
