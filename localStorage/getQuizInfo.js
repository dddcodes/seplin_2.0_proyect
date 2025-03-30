import {LSM} from "./localStorageManager.js"
import * as u from "../utils.js"

export default () => {
  const localQuizzes = LSM.getLocalQuizzes();
  const localQuizzesLength = Object.keys(localQuizzes).length;

  return localQuizzes[
    Object.keys(localQuizzes)[u.random(0, localQuizzesLength - 1)]
  ];
};
