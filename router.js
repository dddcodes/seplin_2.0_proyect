import { CONFIG } from "./config.js";
import * as u from "../utils.js";

import { getCard } from "./components/getCards.js";

const ROUTE = CONFIG.routes; // Obtiene las rutas desde el archivo de configuración

export const router = async () => {
  const app = document.querySelector("#app");

  u.removePopups();
  u.resetAnimation(app);
  u.scrollToTop(); // Mueve la página al inicio

  const routes = {
    "/index.html": () => import(`./views/${ROUTE.home.component}`), //inicio
    "/": () => import(`./views/${ROUTE.home.component}`), //inicio
    "/catalog": () => import(`./views/${ROUTE.catalog.component}`), //catalogo
    "/practice": () => import(`./views/${ROUTE.practice.component}`),
    "/quiz-creator": () => import(`./views/${ROUTE.quizCreator.component}`),
    "/quiz-editor": () => import(`./views/${ROUTE.quizEditor.component}`),
    "/import": () => import(`./views/${ROUTE.import.component}`),
    "/group-catalog": () => import(`./views/${ROUTE.groupCatalog.component}`),
    "/group-creator": () => import(`./views/${ROUTE.groupCreator.component}`),
  };

  const view =
    routes[window.location.pathname] ||
    (() => `<h1>404 - Página no encontrada</h1>`); //PARECE NO FUNCIONAR NUNCA

  import(`./localStorage/localStorageManager.js`);
  u.confirmLayoutVisibility();
  u.defaultMainAppWidth(); // Restablece el ancho del main-app
  app.innerHTML = await (await view()).default();
};

export const navigateTo = (url) => {
  history.pushState(null, null, url); // Cambia la URL sin recargar la página
  router(); // Llama al router para actualizar la vista
};

// Detecta cuando el botón "atrás" del navegador es activado
window.addEventListener("popstate", router);
