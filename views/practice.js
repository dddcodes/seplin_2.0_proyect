import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorageManager.js";

const actualView = CONFIG.routes.practice;

export default () => {
  const localQuizzes = LSM.getLocalQuizzes();

  const TEST = LSM.getLocalQuizzes()["1"];
  u.setPageTitle(actualView.title);

  let actualQuiz = localQuizzes[u.random(1, Object.keys(localQuizzes).length)];
  console.log(actualQuiz);
  return `
        <div>
            <div class="quizBox">

                <p class="details">Deportes 401</p>

                <p class="question">${actualQuiz.question}</p>
                <div class="optionsBox">
                ${TEST.options
                  .map(
                    (option, index) => `
                    <button class="option" value="${index}" onclick="">
                      ${index + 1} - ${option}
                    </button>
                  `
                  )
                  .join("")}
                    <button class="option" value="VALUE" onclick="">4 - ${
                      TEST.answer
                    }</button>
                </div>

            </div>
        </div>
    `;
};
