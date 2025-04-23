import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";
import { navigateTo } from "../router.js";

const actualView = CONFIG.routes.home;

export default () => {
  u.setPageTitle(actualView.description);
  u.defaultMainAppWidth();

  setTimeout(() => {
    const groupsContainer = document.getElementById("groupsContainer");

    const groups = Object.entries(LSM.getLocalGroups());

    groups.forEach((group) => {
      let groupQuizzes = [];
      const groupID = group[0];
      const groupValues = group[1];

      const localQuizzes = Object.entries(LSM.getLocalQuizzes());
      localQuizzes.forEach((quiz) => {
        if (quiz[1].groupID === groupID) {
          groupQuizzes.push(quiz);
        }
      });

      groupsContainer.innerHTML += `
        <div class="groupCard" id="groupCard${groupID}">
            <p class="groupName">${groupValues.name}</p>
            <p class="groupDescription">${groupValues.description}</p>
            <p class="groupLength">${(groupQuizzes.length > 0)? groupQuizzes.length + " quizzes" : "No hay ningun quiz"}</p>
        </div>
      `;
      setTimeout(() => {
        const groupCard = document.getElementById(`groupCard${groupID}`);
        groupCard.addEventListener("click", () => {
          navigateTo("/group-catalog?id=" + groupID);
        });
      }, 300);
    });
  }, 300);

  return `
        <div class="titleBox">
          Tus grupos de quizzes!
        </div>
        <div id="groupsContainer"></div>
    `;
};
