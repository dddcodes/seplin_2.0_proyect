import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";
import { navigateTo } from "../router.js";

const actualView = CONFIG.routes.groupCreator;

export default () => {
  u.setPageTitle(actualView.description);
  u.defaultMainAppWidth();

  //CREAR UNA PAGINA DONDE PONGAS EN INPUTS LOS DATOS DEL NUEVO GRUPO Y CON UN BOTON LO SUBAS Y SE GUARDE

  return `
        <div class="titleBox">
          Crear grupo
        </div>
    `;
};
