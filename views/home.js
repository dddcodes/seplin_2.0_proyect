import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";

const actualView = CONFIG.routes.home;

export default () => {
  u.setPageTitle(actualView.description);

  setTimeout(() => {
    const groupsContainer = document.getElementById("groupsContainer");

    const groups = Object.entries(LSM.getLocalGroups());
    console.log(groups);
    groups.forEach((group) => {
      groupsContainer.innerHTML += `
            <div class="groupCard">
                <p class="groupName">${group[1].name}</p>
                <p class="groupDescription">${group[1].description}</p>
            </div>
        `;
    });
  }, 300);

  return `
        <div class="titleBox">
          Tus grupos de quizzes!
        </div>
        <div id="groupsContainer"></div>
    `;
};
