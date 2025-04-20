import { LSM } from "../localStorage/localStorageManager.js";

export default () => {
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
        options: ["Océano Atlántico", "Océano Índico", "Océano Ártico"],
      },
      {
        question: "¿Cuál es el rio mas largo del mundo?",
        answer: "Nilo",
        feedback: "",
        options: ["amazona", "Misisipi"],
      },
      {
        question: "Cual es la capital de francia?",
        answer: "París",
        feedback: "",
        options: ["Londres", "Berlín", "Madrid"],
      }
    ];
    defaultQuizzes.forEach((quiz) => {
      LSM.addQuiz(quiz.question, quiz.answer, quiz.feedback, quiz.options);
    });
  }
  console.log(LSM.getLocalQuizzes());
};
