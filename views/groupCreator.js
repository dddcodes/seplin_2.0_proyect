import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";
import { navigateTo } from "../router.js";

const actualView = CONFIG.routes.groupCreator;

export default () => {
  u.setPageTitle(actualView.description);
  u.defaultMainAppWidth();

  //CREAR UNA PAGINA DONDE PONGAS EN INPUTS LOS DATOS DEL NUEVO GRUPO Y CON UN BOTON LO SUBAS Y SE GUARDE

  setTimeout(() => {
    const createGroupButton = document.getElementById("createGroupButton");
    createGroupButton.addEventListener("click", () => {
      const groupName = document.getElementById("groupNameInput").value;
      const groupDescription = document.getElementById(
        "groupDescriptionInput"
      ).value;
      const groupColor = document.getElementById("colorGroupInput").value;

      if (groupName && groupDescription) {
        LSM.addGroup(groupName, groupDescription, groupColor);
        navigateTo("/");
        u.notification("Grupo creado", "success");
      } else {
        u.notification("Nombre y descripcion son obligatorios", "error");
      }
    });

    u.printAvailableColorGroups();
  }, 300);
  return `
    <div class="titleBox">
      Crear grupo
    </div>
    <container class="inputsContainer">
      <div class="inputBox">
        <p>Nombre</p>
        <input type="text" id="groupNameInput" placeholder="Nombre del grupo">
      </div>
      <div class="inputBox">
        <p>Descripcion</p>
        <input type="text" id="groupDescriptionInput" placeholder="Descripcion del grupo">
      </div>
    </container>
    <div class="inputBox">
      <p>Color</p>
      <select id="colorGroupInput">
            
      </select>
    </div>

    <button id="createGroupButton" class="llamativeButton">Crear grupo</button>
  `;
};
