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

    const localGroups = Object.entries(LSM.getLocalGroups());
    const localQuizzes = Object.entries(LSM.getLocalQuizzes());

    localGroups.forEach((group) => {
      let groupQuizzes = [];
      const groupID = group[0];
      const groupValues = group[1];

      localQuizzes.forEach((quiz) => {
        if (quiz[1].groupID === groupID) {
          groupQuizzes.push(quiz);
        }
      });
      //Cards: "GRUPOS"
      groupsContainer.innerHTML += `
        <div class="groupCard" id="groupCard${groupID}" ${
        groupValues.color
          ? `style="border-color: var(--${groupValues.color}-color);"`
          : ""
      }>
            <p class="groupName" style="color: var(--${
              groupValues.color
            }-color);">${groupValues.name}</p>
            <p class="groupDescription">${groupValues.description}</p>
            <p class="groupLength">${
              groupQuizzes.length > 0
                ? groupQuizzes.length + " quizzes"
                : "No hay ningun quiz"
            }</p>
        </div>
      `;
      setTimeout(() => {
        const groupCard = document.getElementById(`groupCard${groupID}`);
        groupCard.addEventListener("click", () => {
          navigateTo("/group-catalog?id=" + groupID);
        });
      }, 300);
    });

    let quizzesWithoutGroup = 0;

    localQuizzes.forEach((quiz) => {
      const quizData = quiz[1];
      if (!quizData.groupID || quizData.groupID === "") {
        quizzesWithoutGroup++;
      }
    });
    //Card: "QUIZZES SIN GRUPO"
    groupsContainer.innerHTML += `
      <div class="groupCard" id="withoutGroupCard" style="border-color: var(--default-color-4);">
          <p class="groupName">Quizzes sin grupo</p>
          <p class="groupDescription">Aqui estan tus quizzes sin grupo</p>
          <p class="groupLength">${
            quizzesWithoutGroup > 0
              ? quizzesWithoutGroup + " quizzes"
              : "No hay ningun quiz"
          }</p>
      </div>`;

    //Card: "CREAR GRUPO"
    groupsContainer.innerHTML += `
      <div class="groupCard" id="createGroupCard" style="border-color: var(--default-color-4);">
          <span class="material-symbols-rounded">
            add
          </span>          
      </div>
    `;
    setTimeout(() => {
      const createGroupCard = document.getElementById("createGroupCard");
      createGroupCard.addEventListener("click", () => {
        navigateTo("/group-creator");
      });
    }, 300);

    setTimeout(() => {
      const withoutGroupCard = document.getElementById("withoutGroupCard");
      withoutGroupCard.addEventListener("click", () => {
        navigateTo("/group-catalog?id=no-group");
      });

      const resetButton = document.getElementById("resetButton");
      resetButton.addEventListener("click", () => {
        if (confirm("¿Seguro que quieres resetear Seplin?")) {
          LSM.RESET();
          navigateTo("/");
          location.reload();
        }
      });

      const instagramButton = document.getElementById("instagramButton");
      instagramButton.addEventListener("click", () => {
        window.open("https://www.instagram.com/rl___dnx/", "_blank");
      });
    }, 300);
  }, 300);

  return `
  
  <div class="titleBox" style="padding-top: 0 !important;">
  Tus grupos de quizzes!
  </div>

  <p class="weakText" style="padding-top: 0;">Ya no hay actualizaciones significativas. Este es un proyecto experimental de hobby, no comercial</p>
  <div id="groupsContainer"></div>

  <button id="instagramButton" class="staticButton tinyButton" ">
    @rl___dnx 
  </button>
  
  <button id="resetButton" class="tinyButton" style="margin-top: 20px;">
    Resetear Seplin
  </button>
  <p class="weakText">Este proyecto no es comercial, solo es un proyecto de varios que he creado para experimentar y probar habilidades personales. Hay errores y limitaciones.</p>
    `;
};
