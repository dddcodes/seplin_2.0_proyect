import * as u from "../utils.js";
import { CONFIG } from "../config.js";

import { LSM } from "../localStorage/localStorageManager.js";
import getQuizInfo from "../localStorage/getQuizInfo.js";

export default () => {
  const actualView = CONFIG.routes.practice;
  u.setPageTitle(actualView.title); //titulo

  const sidebar = document.querySelector("#sidebar");
  const navbar = document.querySelector("#navigationBar");

  u.disappear(sidebar);
  u.disappear(navbar);

  const suffleQuizOptions = () => {
    return u.shuffleArray([...actualQuiz.options, actualQuiz.answer]);
  };
  const getQuiz = () => {
    const quizBox = document.querySelector(".quizBox");

    actualQuiz = getQuizInfo();
    allQuizOptions = suffleQuizOptions();

    quizBox.classList.remove("animated");
    void quizBox.offsetWidth;
    quizBox.classList.add("animated");

    quizBox.innerHTML = `
      <p class="details">Deportes 401</p>
        <p class="question">${actualQuiz.question}</p>

        <div class="optionsBox">
          ${allQuizOptions
            .map(
              (option, index) => `
            <button class="option" value="${
              option === actualQuiz.answer ? "correct" : "incorrect"
            }" 
                    onclick="">
              ${index + 1} - ${option}
            </button>`
            )
            .join("")}
        </div>
      `;
  };

  let actualQuiz = getQuizInfo();
  let allQuizOptions = suffleQuizOptions();

  setTimeout(() => {
    const quizBox = document.querySelector(".quizBox");
    quizBox.innerHTML = `<p class="details">Deportes 401</p>
        <p class="question">${actualQuiz.question}</p>

        <div class="optionsBox">
          ${allQuizOptions
            .map(
              (option, index) => `
            <button class="option" value="${
              option === actualQuiz.answer ? "correct" : "incorrect"
            }" 
                    onclick="">
              ${index + 1} - ${option}
            </button>`
            )
            .join("")}
        </div>`;

    const submitAnswerButton = document.querySelector("#submitAnswerButton");
    const backButton = document.querySelector("#backButton");
    const nextQuizButton = document.querySelector("#nextQuizButton");
    u.disappear(nextQuizButton);

    backButton.addEventListener("click", () => {
      u.back();
    });
    nextQuizButton.addEventListener("click", () => {
      getQuiz();
      u.disappear(nextQuizButton);
      u.appear(submitAnswerButton);
    });
    submitAnswerButton.addEventListener("click", () => {
      u.appear(nextQuizButton);
      u.disappear(submitAnswerButton);
    });
  }, 200);

  return `
    <div id="practiceLayout">
      <button id="backButton">
        X
      </button>
    

      <div class="quizBox animated">
      </div>
        
      <div id="practiceBar">
        <button id="feedbackButton">EXPLICAR</button>
        <button id="submitAnswerButton">CONTESTAR</button>
        <button id="nextQuizButton">SIQUIENTE</button>
      </div>

    </div>
  `;
};
