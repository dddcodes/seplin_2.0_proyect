import { CONFIG } from "../config.js";

export default () => {
  document.querySelector("body").innerHTML = `
    
        <nav id="navigationBar">
            <div class="iconAndText">${CONFIG.proyectName}</div>
            <a href="/" data-link>
                <ion-icon name="home"></ion-icon>
                <span>
                    ${CONFIG.routes.home.title}
                </span>
            </a>
            <a href="/about" data-link>
                <ion-icon name="information-circle"></ion-icon>
                <span>
                    ${CONFIG.routes.about.title}
                </span>
            </a>
            <a href="/catalog" data-link>
                <ion-icon name="albums"></ion-icon>
                <span>
                    ${CONFIG.routes.catalog.title}
                </span>
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
