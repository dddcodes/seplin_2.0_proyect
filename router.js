import { CONFIG } from "./config.js";
import * as u from "../utils.js";

const ROUTE = CONFIG.routes; // Obtiene las rutas desde el archivo de configuración

export const router = async () => {
  const app = document.querySelector("#app"); //document.querySelector("#app").style.visibility = "hidden";

  // Truco para reiniciar la animación de #app
  app.classList.remove("animated");
  void app.offsetWidth; // Reinicia la animación
  app.classList.add("animated");

  u.scrollToTop(); // Mueve la página al inicio
  u.updateSidebar(`
    <a 
      href="https://github.com/dddcodes/seplin_2.0_proyect" 
      target="_blank" rel="noopener noreferrer"
      class="card onlyBorder">

        Github del proyecto

        <p>Seplin es de codigo abierto, por lo que puedes acceder al codigo fuente en Github! </p>
        
    </a>`); // Actualiza la barra lateral


  const routes = {
    "/index.html": () => import(`./views/${ROUTE.home.component}`), //inicio
    "/": () => import(`./views/${ROUTE.home.component}`), //inicio
    "/catalog": () => import(`./views/${ROUTE.catalog.component}`), //catalogo
    "/practice": () => import(`./views/${ROUTE.practice.component}`),
    "/archived": () => import(`./views/${ROUTE.archived.component}`) //quizes archivados
  };

  const view =
    routes[window.location.pathname] ||
    (() => `<h1>404 - Página no encontrada</h1>`);
    //PARECE NO FUNCIONAR NUNCA

  app.innerHTML = await (await view()).default();
};

export const navigateTo = (url) => {
  history.pushState(null, null, url); // Cambia la URL sin recargar la página
  router(); // Llama al router para actualizar la vista
};

// Detecta cuando el botón "atrás" del navegador es activado
window.addEventListener("popstate", router);
