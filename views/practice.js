import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorageManager.js";
import { navigateTo } from "../router.js";

const actualView = CONFIG.routes.practice;

export default () => {
  u.setPageTitle(actualView.title); //titulo

  //LOCAL QUIZZES
  const localQuizzes = LSM.getLocalQuizzes();
  const localQuizzesLength = Object.keys(localQuizzes).length;

  const randomQuizIndex = u.random(1, localQuizzesLength); //RANDOM
  const actualQuiz = localQuizzes[randomQuizIndex];

  // Combinar opciones incorrectas con la respuesta correcta y mezclar
  const allQuizOptions = u.shuffleArray([
    ...actualQuiz.options,
    actualQuiz.answer,
  ]);

  console.log(actualQuiz);

  const sidebar = document.querySelector("#sidebar");
  const navbar = document.querySelector("#navigationBar");
  
  sidebar.style.display = "none";
  navbar.style.display = "none";
  

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
    

      <div class="quizBox">

      
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

      </div>
        
      <div id="practiceBar">
        <button id="feedbackButton">EXPLICAR</button>
        <button id="submitAnswerButton">CONTESTAR</button>
      </div>

    </div>
  `;
};
