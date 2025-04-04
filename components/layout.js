import { CONFIG } from "../config.js";

export default () => {
  document.querySelector("body").innerHTML = `
    
        <nav id="navigationBar">
            <div class="iconAndText">${CONFIG.proyectName}</div>
            <a href="/" data-link>
                <span class="material-symbols-rounded">home</span>

               <p> ${CONFIG.routes.home.title}</p>

            </a>
            
            <a href="/practice" data-link class="centerNavbarButton">
                <span class="material-symbols-rounded">exercise</span>
            
                <p>${CONFIG.routes.practice.title}</p>
            
            </a>

            <a href="/catalog" data-link>
                <span class="material-symbols-rounded">event_list</span>
            
                <p>${CONFIG.routes.catalog.title}</p>
            
            </a>

            <a href="/create-quizzes" data-link>
                <span class="material-symbols-rounded">add_circle</span>
            
                <p>${CONFIG.routes.createQuizzes.title}</p>
            
            </a>
        </nav>
        
    
        <div id="main" class="animated">
            <div id="app" ></div>
        </div>
        
        <div id="sidebar">
        </div>

        
        
        
    `; // Crea la barra de navegación y el contenedor de la aplicación...
};
