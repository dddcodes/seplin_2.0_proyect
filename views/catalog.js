import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";

import getRandomQuizID from "../localStorage/getRandomQuizID.js";

const actualView = CONFIG.routes.catalog;

export default () => {
  u.setPageTitle(actualView.title);

  const LQ = {
    content: LSM.getLocalQuizzes(),
    keys: Object.keys(LSM.getLocalQuizzes()),
    length: Object.keys(LSM.getLocalQuizzes()).length,
  };
  const printAllOptions = (quizData) => {
    const options = quizData.options;
    let optionsHTML = ``;
    for (let i = 0; i < options.length; i++) {
      const option = options[i];

      optionsHTML += `
          <p class="option">
            ${i + 1} - ${option}
          </p>
      `;
    }
    return optionsHTML;
  };
  const convertQuizDataToHTML = (quizData, index) => {
    return `
      <div class="quizDataCard" id="quizDataCard${index}">

        <div class="headDiv">
          <p class="index">${index + 1}</p>
          <button class="editButton">
            <span class="material-symbols-rounded">
              edit
            </span>
          </button>
          <button class="seeMoreButton">
            <span class="material-symbols-rounded">
              visibility
            </span>
          </button>
          <button class="selectButton">
            <span class="material-symbols-rounded">
              check_box_outline_blank
            </span>
          </button>
        </div>

        <div class="dataDiv">
          <p class="group">Grupo default 4to semestre</p>
          <p class="question">${quizData.question}</p>
        </div>

        <div class="moreDataDiv">
          <div class="answer">
            <p class="title">RESPUESTA</p>
            <p class="content">
              ${quizData.answer}
            </p>
          </div>
          <div class="feedback">
            <p class="title">EXPLICACIÓN</p>
            <p class="content">
              ${quizData.feedback}
            </p>
          </div>

          <div class="optionsBox">
            <p class="title">OPCIONES INCORRECTAS</p>
            <div class="content">
              ${printAllOptions(quizData)}
            </div>
          </div>
        </div>

      </div>
    `;
  };

  setTimeout(() => {
    const quizzesDataContainer = document.getElementById(
      "quizzesDataContainer"
    );

    for (let i = 0; i < LQ.length; i++) {
      /*ID*/ const actualID = LQ.keys[i];
      console.log(actualID);

      /*DATA*/ const actualQuizData = LQ.content[actualID];

      /*from DATA to HTML*/
      const quizHTML = convertQuizDataToHTML(actualQuizData, i);

      /*HTML added to CATALOG HTML*/
      quizzesDataContainer.innerHTML += quizHTML;
      /*const editButton = document.querySelector(`#quizDataCard${i} > .headDiv >  > .editButton`);
      editButton.addEventListener("click", ()=>{
        console.log("editButton clicked");
      })*/

      //USA ONCLICK EN EL HTML PENDEJO!!!!
    }
  }, 200);
  return `
  <div class="titleBox">
      TUS QUIZZES!
      <div id="quizzesDataContainer">
      </div>
  </div>
  `;
};
