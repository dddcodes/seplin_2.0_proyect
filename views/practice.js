import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import getRandomQuizID from "../localStorage/getRandomQuizID.js";

import { LSM } from "../localStorage/localStorageManager.js";
import { navigateTo } from "../router.js";

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

    const feedbackContent = () => {
      return actualQuiz.feedback && actualQuiz.feedback.trim() !== ""
        ? u.createDropdown("Ayuda", actualQuiz.feedback, null, null, () => {
            u.scrollToBottom();
          })
        : "";
    };
    const allQuizOptionsHTML = allQuizOptions
      .filter((option) => option) // ❌ filtra null, undefined, "", 0, false
      .map(
        (option, index) => `
      <button class="option" value="${
        option === actualQuiz.answer ? "correct" : "incorrect"
      }">
        ${index + 1} - ${option}
      </button>`
      )
      .join("");

    quizBox.innerHTML = `
      <p class="details">${u.getGroupName(actualQuiz.groupID)}</p>
      <p class="question">${actualQuiz.question}</p>

      <div class="optionsBox">
      ${allQuizOptionsHTML}
      </div>
      ${feedbackContent()}
      `;
    const submitAnswerButton = document.querySelector("#submitAnswerButton");
    submitAnswerButton.disabled = true;
  };

  const getQuiz = () => {
    actualQuizID = getRandomQuizID();
    if (actualQuizID) {
      actualQuiz = localQuizzes[actualQuizID];
      allQuizOptions = suffleQuizOptions();

      u.disappear(nextQuizButton);
      u.appear(submitAnswerButton);

      u.scrollToTop();

      selectedOptionValue = undefined;
      getQuizLayout();
      addEventListenersToOptions();

      document.querySelectorAll(".option").forEach((button) => {
        button.disabled = false;
      });
    } else {
      u.notification("No hay quizzes disponibles", "error");
      navigateTo("/");
    }
  };
  const verifyQuiz = () => {
    u.appear(nextQuizButton);
    u.disappear(submitAnswerButton);

    switch (selectedOptionValue) {
      case "correct":
        u.shiftAndPush(actualQuiz.hitScore, true);

        localQuizzes[actualQuizID] = actualQuiz;
        LSM.updateItem("localQuizzes", localQuizzes);
        u.notification("Correcto!", "success");
        break;
      case "incorrect":
        u.shiftAndPush(actualQuiz.hitScore, false);
        u.notification("Chavo tas mal", "error");
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
  const handleKeyPress = (event) => {
    const options = document.querySelectorAll(".option");
    const feedback = document.querySelector(".dropdown-label");
    switch (event.key) {
      case "1":
        options[0].click();
        break;
      case "2":
        options[1].click();
        break;
      case "3":
        options[2].click();
        break;
      case "4":
        options[3].click();
        break;
      case "a":
        feedback.click();
        break;
    }
  };

  const addEventListenersToButtons = () => {
    const submitAnswerButton = document.querySelector("#submitAnswerButton");
    const nextQuizButton = document.querySelector("#nextQuizButton");

    submitAnswerButton.addEventListener("click", () => {
      verifyQuiz();
    });
    nextQuizButton.addEventListener("click", () => {
      u.addFinalAnimationToElement(
        ".quizBox",
        "hideQuizBoxAnimation",
        "disappear"
      );
      setTimeout(() => {
        getQuiz();
        const quizBox = document.querySelector(".quizBox");
        u.appear(quizBox);

        u.resetAnimation(quizBox);
      }, 600);
    });

    document.addEventListener("keydown", (event) => {
      handleKeyPress(event);
    });
  };

  setTimeout(() => {
    getQuiz();
    addEventListenersToButtons();
    u.extendedMainAppWidth();
  }, 200);

  //LAYOUT
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
        <button id="submitAnswerButton">CONTESTAR</button>
        <button id="nextQuizButton">SIQUIENTE</button>
      </div>

    </div>
  `;
};
