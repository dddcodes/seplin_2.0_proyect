import { LSM } from "../localStorage/localStorageManager.js";

export default () => {
  LSM.RESET(); //RESETEA EL LOCALSTORAGE

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
/*
FORMATO DE QUIZZES:

[
  {
    "question": "Here goes the question",
    "answer": "Here goes the CORRECT answer",
    "feedback": "Here goes an explanation to find out what is the answer and why (very short)",
    "options": ["incorrect option 1", "incorrect option 2", "incorrect option 3"]
  },
  {
    "question": "Here goes the question",
    "answer": "Here goes the CORRECT answer",
    "feedback": "Here goes an explanation to find out what is the answer and why (very short)",
    "options": ["incorrect option 1", "incorrect option 2", "incorrect option 3"]
  },
]

[
  {
    "question": "¿Cuál es la capital de Francia?",
    "answer": "París",
    "feedback": "Correcto!",
    "options": ["Londres", "Berlín", "Madrid", "París"]
  }
]

*/
