import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";

export default () => {
  const actualView = CONFIG.routes.practice;
  u.setPageTitle(actualView.title); //titulo

  const sidebar = document.querySelector("#sidebar");
  const navbar = document.querySelector("#navigationBar");

  sidebar.style.display = "none";
  navbar.style.display = "none";

  //LOCAL QUIZZES
  const localQuizzes = LSM.getLocalQuizzes();
  const localQuizzesLength = Object.keys(localQuizzes).length;

  const getRandomQuizInfo = () => {
    return localQuizzes[
      Object.keys(localQuizzes)[u.random(0, localQuizzesLength - 1)]
    ];
  };
  const suffleQuizOptions = () => {
    return u.shuffleArray([...actualQuiz.options, actualQuiz.answer]);
  };
  const getQuiz = () => {
    const quizBox = document.querySelector(".quizBox");

    actualQuiz = getRandomQuizInfo();
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

  let actualQuiz = getRandomQuizInfo();
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
    const nextQuizButton = document.querySelector("#nextQuizButton");
    u.disappear(nextQuizButton);

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
      <button id="backButton" onClick='

        window.history.back();

        const sidebar = document.querySelector("#sidebar");
        const navbar = document.querySelector("#navigationBar");
        sidebar.style.display = "flex";
        navbar.style.display = "flex";

        window.scrollTo(0, 0);

      '>X
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
