import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorageManager.js";

const actualView = CONFIG.routes.practice;
const localQuizzes = LSM.getLocalQuizzes();

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

const TEST = LSM.getLocalQuizzes()["001"];

export default () => {
  u.setPageTitle(actualView.title);

  return `
        <div>
            <div class="quizBox">

                <p class="details">Deportes 401</p>

                <p class="question">${TEST.question}</p>
                <div class="optionsBox">
                    <button class="option" value="VALUE" onclick="">1 - ${TEST.options[0]}</button>
                    <button class="option" value="VALUE" onclick="">2 - ${TEST.options[1]}</button>
                    <button class="option" value="VALUE" onclick="">3 - ${TEST.options[2]}</button>
                    <button class="option" value="VALUE" onclick="">4 - ${TEST.answer}</button>
                </div>

            </div>
        </div>
    `;
};
