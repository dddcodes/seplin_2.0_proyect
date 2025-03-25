import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorageManager.js";

const actualView = CONFIG.routes.practice;

export default () => {
  const localQuizzes = LSM.getLocalQuizzes();

  u.setPageTitle(actualView.title);

  let localQuizzesLength = Object.keys(localQuizzes).length;
  let randomNumber = u.random(1, localQuizzesLength);
  let actualQuiz = localQuizzes[randomNumber];
  console.log(actualQuiz);
  return `
        <div>
            <div class="quizBox">

                <p class="details">Deportes 401</p>

                <p class="question">${actualQuiz.question}</p>
                <div class="optionsBox">
                ${actualQuiz.options
                  .map(
                    (option, index) => `
                    <button class="option" value="${index}" onclick="">
                      ${index + 1} - ${option}
                    </button>
                  `
                  )
                  .join("")}
                    <button class="option" value="VALUE" onclick="">4 - ${
                      actualQuiz.answer
                    }</button>
                </div>

            </div>
        </div>
    `;
};
