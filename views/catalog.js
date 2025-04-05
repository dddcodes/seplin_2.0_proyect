import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";

import getRandomQuizID from "../localStorage/getRandomQuizID.js";

const actualView = CONFIG.routes.catalog;

export default () => {
  u.setPageTitle(actualView.title);

  const localQuizzes = LSM.getLocalQuizzes();
  const localQuizzesKeys = Object.keys(localQuizzes);
  const localQuizzesLength = localQuizzesKeys.length - 1;


  return `
<div class="titleBox">
    TUS QUIZZES!
    
</div>`;
};
