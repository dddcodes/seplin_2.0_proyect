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
    let optionsHTML; //string
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      optionsHTML += `
          <p class="option">${option}</p>
      `;
    }
    return optionsHTML;
  };
  const convertQuizDataToHTML = (quizData, index) => {
    return `
      <div class="quizDataCard" id="quizDataCard${index}">

        <div class="headDiv">
          <p class="index">${index++}</p>
          <button class="editButton">/</button>
          <button class="seeMoreButton">o</button>
          <button class="selectButton">||</button>
        </div>

        <div class="dataDiv">
          <p class="question">${quizData.question}</p>
        </div>

        <div class="moreDataDiv">
          <p class="answer">${quizData.answer}</p>
          <p class="feedback">${quizData.feedback}</p>

          <div class="optionsBox">
            ${printAllOptions(quizData)}
          </div>
        </div>

      </div>
    `;
  };
  let catalogContent; //string

  for (let i = 0; i < LQ.length; i++) {
    /*ID*/ const actualID = LQ.keys[i];
    /*DATA*/ const actualQuizData = LQ.content[actualID];

    /*from DATA to HTML*/
    const quizHTML = convertQuizDataToHTML(actualQuizData, i);
    /*HTML added to CATALOG HTML*/
    catalogContent += quizHTML;
  }
  //console.log(catalogContent);
  return `
<div class="titleBox">
    TUS QUIZZES!
    <div class="quizzesDataContainer">
      ${catalogContent}
    </div>
</div>`;
};
