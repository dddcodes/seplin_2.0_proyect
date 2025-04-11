import { LSM } from "./localStorageManager.js";
import * as u from "../utils.js";

export default () => {
  const localQuizzes = LSM.getLocalQuizzes();
  const localQuizzesKeys = Object.keys(localQuizzes);
  const localQuizzesLength = localQuizzesKeys.length - 1;

  const randomNumber = u.random(0, localQuizzesLength);
  const randomQuizID = localQuizzesKeys[randomNumber];

  return randomQuizID;
  //return localQuizzesKeys[4];
};
