import { CONFIG } from "../config.js";

export default () => {
  document.querySelector("body").innerHTML = `
    
        <nav id="navigationBar">
            <div class="iconAndText">${CONFIG.proyectName}</div>
            <a href="/" data-link>
                <ion-icon name="home"></ion-icon>
                ${CONFIG.routes.home.title}
            </a>
            <a href="/about" data-link>
                <ion-icon name="information-circle"></ion-icon>
                ${CONFIG.routes.about.title}
            </a>
            <a href="/catalog" data-link>
                <ion-icon name="albums"></ion-icon>
                ${CONFIG.routes.catalog.title}
            </a>
        </nav>
        
    
        <div id="main" class="animated">
            <div id="app" ></div>
        </div>
        <div id="sidebar">
            <div id="sidebarContent">
            </div>
        </div>
        
    `; // Crea la barra de navegación y el contenedor de la aplicación...
};
