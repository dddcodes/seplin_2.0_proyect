import { LSM } from "../localStorage/localStorageManager.js";

export default () => {
  LSM.RESET(); //RESETEA EL LOCALSTORAGE
  if (!localStorage.getItem("localQuizzes")) {
    LSM.createItem("localQuizzes");

    LSM.addQuiz(
      "Capital de Inglaterra",
      "Londres",
      "La capital de Inglaterra es Londres",
      ["Paris", "Berlin", "Madrid"]
    );
    LSM.addQuiz(
      "Capital de Francia",
      "Paris",
      "La capital de Francia es Paris",
      ["Londres", "Berlin", "Madrid"]
    );
    LSM.addQuiz(
      "Capital de Alemania",
      "Berlin",
      "La capital de Alemania es Berlin",
      ["Paris", "Londres", "Madrid"]
    );
    LSM.addQuiz(
      "Capital de España",
      "Madrid",
      "La capital de España es Madrid",
      ["Paris", "Berlin", "Londres"]
    );
  }

  console.log(LSM.getLocalQuizzes());
};
