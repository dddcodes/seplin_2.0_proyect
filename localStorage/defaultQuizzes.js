import { LSM } from "../localStorage/localStorageManager.js";

export default () => {
  //LSM.RESET(); //RESETEA EL LOCALSTORAGE

  if (!localStorage.getItem("localQuizzes")) {
    LSM.createItem("localQuizzes");
    const defaultQuizzes = [
      {
        question: "¿Cuál es la capital de Francia?",
        answer: "París",
        feedback: "",
        options: ["Londres", "Berlín", "Madrid"],
      },
      {
        question: "¿Cuál es el océano más grande del mundo?",
        answer: "Océano Pacífico",
        feedback: "",
        options: [
          "Océano Atlántico",
          "Océano Índico",
          "Océano Ártico",
        ],
      },
    ];
    defaultQuizzes.forEach((quiz) => {
      LSM.addQuiz(quiz.question, quiz.answer, quiz.feedback, quiz.options);
    });

    console.log(LSM.getLocalQuizzes());
  }
};