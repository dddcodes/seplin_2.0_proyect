import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";

const actualView = CONFIG.routes.home;

export default () => {
  u.setPageTitle(actualView.description);

  setTimeout(() => {
    const groupsContainer = document.getElementById("groupsContainer");

    const groups = Object.entries(LSM.getLocalGroups());

    groups.forEach((group) => {
      const groupValues = group[1];
      groupsContainer.innerHTML += `
            <div class="groupCard">
                <p class="groupName">${groupValues.name}</p>
                <p class="groupDescription">${groupValues.description}</p>
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
