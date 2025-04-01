import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { getCard } from "../components/gerCards.js";

const actualView = CONFIG.routes.home;

export default () => {
  u.setPageTitle(actualView.description);
  u.updateSidebar(getCard.practice() + getCard.gitHubLink());

  return `
        <div class="titleBox">
          ${actualView.title}
        </div>
        <p class="basicBox llamative">ESTO ES UNA PLANTILLA DE OLIVARES EN DESARROLLO...</p>
        <p class="basicBox">Estas cajas son de demostracion de los estilos responsive-Design de esta plantilla...</p>
        <p class="basicBox OnlyBorder">Esto es un mini proyecto del tipo Single-Page Application (S.P.A) Open Source en latino</p>
        <p>Esta plantilla tambien incluye estilos web CSS vanilla responsive-Design y extras como tarjetas de video y </p>

        <button >Boton por defecto</button>

        <a 
          href="https://github.com/dddcodes/seplin_2.0_proyect" 
          target="_blank" rel="noopener noreferrer"
          class="card onlyBorder">
            Github del proyecto
        </a>
        
    `;
};
