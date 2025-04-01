import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import getQuizInfo from "../localStorage/getQuizInfo.js";

export default () => {
  const actualView = CONFIG.routes.practice;
  u.setPageTitle(actualView.title); //titulo

  const sidebar = document.querySelector("#sidebar");
  const navbar = document.querySelector("#navigationBar");
  const mainApp = document.querySelector("#main");
  mainApp.className = "complete";

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

    const options = document.querySelectorAll(".option");

    options.forEach((option) => {
      option.addEventListener("click", function () {
        selectedOptionValue = option.value;

        console.log(selectedOptionValue);
      });
    });

    document.querySelectorAll(".option").forEach((button) => {
      button.disabled = false;
    });
  };

  let actualQuiz = getQuizInfo();
  let allQuizOptions = suffleQuizOptions();
  let selectedOptionValue = null;

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

    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
      option.addEventListener("click", function () {
        selectedOptionValue = option.value;

        console.log(selectedOptionValue);
      });
    });

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

      if (selectedOptionValue === "correct") {
        console.log("RESPUESTA CORRECTA");
      } else if (selectedOptionValue === "incorrect") {
        console.log("RESPUESTA INCORRECTA");
      }

      document.querySelectorAll(".option").forEach((button) => {
        button.disabled = true;
      });
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
        <button id="feedbackButton" class="onlyBorder">EXPLICAR</button>
        <button id="submitAnswerButton">CONTESTAR</button>
        <button id="nextQuizButton">SIQUIENTE</button>
      </div>

    </div>
  `;
};
