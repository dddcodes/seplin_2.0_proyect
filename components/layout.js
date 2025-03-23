import { CONFIG } from "../config.js";

export default () => {
  document.querySelector("body").innerHTML = `
    
        <nav id="navigationBar">
            <div class="iconAndText">${CONFIG.proyectName}</div>
            <a href="/" data-link>
                <ion-icon name="home"></ion-icon>

                ${CONFIG.routes.home.title}

            </a>
            
            <a href="/practice" data-link class="centerNavbarButton">
                <ion-icon name="barbell"></ion-icon>
            
                ${CONFIG.routes.practice.title}
            
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
            <card></card>
        </div>
        
        
    `; // Crea la barra de navegación y el contenedor de la aplicación...
};
