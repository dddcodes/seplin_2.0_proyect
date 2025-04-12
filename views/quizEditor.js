import * as u from "../utils.js";
import { CONFIG } from "../config.js";

const actualView = CONFIG.routes.quizEditor;

export default () => {
  u.setPageTitle(actualView.description);

  return `
        <div class="titleBox">
          ${actualView.title}
        </div>
        <p class="basicBox llamative">Muy pronto podras estudiar de manera mucho mas eficiente y elegante que SEPLIN ALPHA 1 y los metodos tradicionales!</p>
        <p class="basicBox">Objetivo: Desarrollar una WebApp elegante y basada en la neurociencia para un aprendizaje eficiente y ordenado</p>
        <p class="basicBox OnlyBorder">PROYECTO IDEADO DESDE 2021, Y ESTA SEGUNDA VERSION ALPHA INICIO DESARROLLO A MEDIADOS DE MARZO! </p>
        <p>Detalles tecnicos: S.P.A, Open Source, JS y CSS vanilla, no frameworks, Uso de Google Icons y uso constante de LocalStorage</p>
        
    `;
};
