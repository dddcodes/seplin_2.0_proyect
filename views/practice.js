import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorageManager.js";

const actualView = CONFIG.routes.practice;

export default () => {
  u.setPageTitle(actualView.title); //titulo de la pestana

  const localQuizzes = LSM.getLocalQuizzes(); //LOCAL QUIZZES
  const localQuizzesLength = Object.keys(localQuizzes).length; //TAMANO
  const randomQuizIndex = u.random(1, localQuizzesLength); //RANDOM
  const actualQuiz = localQuizzes[randomQuizIndex];

  // Combinar opciones incorrectas con la respuesta correcta y mezclar
  const allQuizOptions = u.shuffleArray([
    ...actualQuiz.options,
    actualQuiz.answer,
  ]);

  console.log(actualQuiz);

  return `
    <div>
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

        <button value="hola">

      </div>
    </div>
  `;
};
