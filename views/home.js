import * as u from "../utils.js";
import { CONFIG } from "../config.js";


const actualView = CONFIG.routes.home;

export default () => {
  u.updatePageTitle(actualView.description);

  return `
        <div class="titleBox">
          ${actualView.title}
        </div>
        <p class="basicBox llamative">ESTO ES UNA PLANTILLA DE OLIVARES EN DESARROLLO...</p>
        <p class="basicBox">Estas cajas son de demostracion de los estilos responsive-Design de esta plantilla...</p>
        <p class="basicBox OnlyBorder">Esto es un mini proyecto del tipo Single-Page Application (S.P.A) Open Source en latino</p>
        <p>Esta plantilla tambien incluye estilos web CSS vanilla responsive-Design y extras como tarjetas de video y </p>

        <button class="button">Boton por defecto</button>
        <button class="button alt">Boton alternativo</button>
        <button class="button onlyBorder">Boton de solo borde</button>

        <input type="text" class="input" placeholder="Input por defecto">
        <input type="password" class="input" placeholder="Password por defecto">

        <input type="text" class="input" placeholder="Input por defecto">
        <input type="password" class="input" placeholder="Password por defecto">

        <input type="text" class="input" placeholder="Input por defecto">
        <input type="password" class="input" placeholder="Password por defecto">

        <input type="text" class="input" placeholder="Input por defecto">
        <input type="password" class="input" placeholder="Password por defecto">

        <div class="basicBox OnlyBorder">
          <h1>Sugerencias:</h1>    
           <h1>Sugerencias:</h1> 
            <h1>Sugerencias:</h1> 
             <h1>Sugerencias:</h1> 
             <h1>Sugerencias:</h1> 
             <h1>Sugerencias:</h1> 

              
        </div>

        <a href="https://github.com/dddcodes/SPA_template_vanilla">
          Github del proyecto
        </a>
        
    `;
};
