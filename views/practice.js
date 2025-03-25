import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorageManager.js";

const actualView = CONFIG.routes.practice;
export default () => {
  u.setPageTitle(actualView.title);

  const localQuizzes = LSM.getLocalQuizzes();
  const localQuizzesLength = Object.keys(localQuizzes).length;
  const randomNumber = u.random(1, localQuizzesLength);
  const actualQuiz = localQuizzes[randomNumber];

  // Función para mezclar arrays (Fisher-Yates shuffle)
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Combinar opciones incorrectas con la respuesta correcta y mezclar
  const allOptions = shuffleArray([...actualQuiz.options, actualQuiz.answer]);

  console.log(actualQuiz);

  return `
    <div>
      <div class="quizBox">
        <p class="details">Deportes 401</p>
        <p class="question">${actualQuiz.question}</p>
        <div class="optionsBox">
          ${allOptions
            .map(
              (option, index) => `
            <button class="option" 
                    value="${
                      option === actualQuiz.answer ? "correct" : "incorrect"
                    }" 
                    onclick="">
              ${index + 1} - ${option}
            </button>`
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
};
