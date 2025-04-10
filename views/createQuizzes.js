import * as u from "../utils.js";
import { CONFIG } from "../config.js";

const actualView = CONFIG.routes.home;

export default () => {
  u.setPageTitle(actualView.description);

  return `
        <div class="titleBox">
          Uhh! creamos un quiz?!
        </div>
        <p class="basicBox llamative">Hola people!!</p>
        
    `;
};