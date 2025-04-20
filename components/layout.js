import { CONFIG } from "../config.js";

export default () => {
  document.querySelector("body").innerHTML = `
        <nav id="navigationBar">
            <div class="iconAndText">${CONFIG.proyectName}</div>
            <a href="/" data-link>
                <span class="material-symbols-rounded">home</span>

               <p> ${CONFIG.routes.home.title}</p>

            </a>
            
            <a href="/catalog" data-link>
            <span class="material-symbols-rounded">event_list</span>
            
            <p>${CONFIG.routes.catalog.title}</p>
            
            </a>
            
            <a href="/practice" data-link class="centerNavbarButton">
                <span class="material-symbols-rounded">exercise</span>
            
                <p>${CONFIG.routes.practice.title}</p>
            
            </a>

            <a href="/quiz-creator" data-link>
                <span class="material-symbols-rounded">add_circle</span>
            
                <p>${CONFIG.routes.quizCreator.title}</p>
            
            </a>

            <a href="/import" data-link>
                <span class="material-symbols-rounded">download</span>
            
                <p>${CONFIG.routes.import.title}</p>
            
            </a>

        </nav>
    
        <div id="main" class="animated">
            <div id="app" ></div>
        </div>
        
        <div id="sidebar">
        </div>    
    `;
};
