import { LSM } from "./localStorageManager.js";
import * as u from "../utils.js";

export default () => {
  const localQuizzes = LSM.getLocalQuizzes();
  const localQuizzesKeys = Object.keys(localQuizzes);
  const localQuizzesLength = localQuizzesKeys.length - 1;

  return localQuizzes[localQuizzesKeys[u.random(0, localQuizzesLength)]];
};
