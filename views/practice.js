import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import getRandomQuizID from "../localStorage/getRandomQuizID.js";

import { LSM } from "../localStorage/localStorageManager.js";

export default () => {
  const actualView = CONFIG.routes.practice;
  u.setPageTitle(actualView.title); //titulo

  const sidebar = document.querySelector("#sidebar");
  const navbar = document.querySelector("#navigationBar");

  u.disappear(sidebar);
  u.disappear(navbar);

  const localQuizzes = LSM.getLocalQuizzes();
  let actualQuizID;
  let actualQuiz;
  let allQuizOptions;
  let selectedOptionValue;

  const suffleQuizOptions = () => {
    return u.shuffleArray([...actualQuiz.options, actualQuiz.answer]);
  };
  const addEventListenersToOptions = () => {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
      option.addEventListener("click", function () {
        options.forEach((option) => {
          u.removeClassFromElement(option, "selectedOption");
        });

        selectedOptionValue = option.value;
        console.log(selectedOptionValue);
        u.addClassToElement(option, "selectedOption");

        if (selectedOptionValue) {
          const submitAnswerButton = document.querySelector(
            "#submitAnswerButton"
          );
          submitAnswerButton.disabled = false;
        }
      });
    });
  };
  const getQuizLayout = () => {
    const quizBox = document.querySelector(".quizBox");

    u.resetAnimation(quizBox);

    quizBox.innerHTML = `
      <p class="details">Deportes 401</p>
      <p class="question">${actualQuiz.question}</p>

      <div class="optionsBox">
      ${allQuizOptions
        .filter((option) => option) // ❌ filtra null, undefined, "", 0, false
        .map(
          (option, index) => `
          <button class="option" value="${
            option === actualQuiz.answer ? "correct" : "incorrect"
          }">
            ${index + 1} - ${option}
          </button>`
        )
        .join("")}
      </div>
      <div id="feedbackBox">
          <p class="title">Ayuda:</p>
          <p class="content">Lorem ipsum</p>
      </div>
      `;
    const submitAnswerButton = document.querySelector("#submitAnswerButton");
    submitAnswerButton.disabled = true;
    const feedbackBox = document.querySelector("#feedbackBox");
    u.disappear(feedbackBox);
  };

  const getQuiz = () => {
    actualQuizID = getRandomQuizID();
    actualQuiz = localQuizzes[actualQuizID];
    allQuizOptions = suffleQuizOptions();

    u.disappear(nextQuizButton);
    u.appear(submitAnswerButton);

    selectedOptionValue = undefined;
    getQuizLayout();
    addEventListenersToOptions();

    document.querySelectorAll(".option").forEach((button) => {
      button.disabled = false;
    });
  };
  const verifyQuiz = () => {
    u.appear(nextQuizButton);
    u.disappear(submitAnswerButton);

    switch (selectedOptionValue) {
      case "correct":
        u.shiftAndPush(actualQuiz.hitScore, true);

        localQuizzes[actualQuizID] = actualQuiz;
        LSM.updateItem("localQuizzes", localQuizzes);

        u.notification(`OMG YES!!!`, "success");
        break;

      case "incorrect":
        u.shiftAndPush(actualQuiz.hitScore, false);
        u.notification("Nah...Esta mal", "error");
        break;

      default:
        console.log("NO SE SELECCIONO RESPUESTA");
        break;
    }

    console.log(actualQuiz.hitScore);

    document.querySelectorAll(".option").forEach((button) => {
      button.disabled = true;
    });
  };
  const getFeedback = () => {
    const feedbackBox = document.querySelector("#feedbackBox");
    u.appear(feedbackBox);
    feedbackBox.innerHTML = `
      <p class="title">Ayuda:</p>
      <p class="content">${actualQuiz.feedback}</p>
    `;
  };

  const addEventListenersToButtons = () => {
    const submitAnswerButton = document.querySelector("#submitAnswerButton");
    const nextQuizButton = document.querySelector("#nextQuizButton");
    const feedbackButton = document.querySelector("#feedbackButton");

    submitAnswerButton.addEventListener("click", () => {
      verifyQuiz();
      getFeedback();
    });
    feedbackButton.addEventListener("click", () => {
      getFeedback();
    });
    nextQuizButton.addEventListener("click", () => {
      getQuiz();
    });
  };

  setTimeout(() => {
    getQuiz();
    addEventListenersToButtons();
    u.extendedMainAppWidth();
  }, 200);

  return `
    <div id="practiceLayout">
      <button id="backButton">
        <span class="material-symbols-rounded">
          close
        </span>
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
