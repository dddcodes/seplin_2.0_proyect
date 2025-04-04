import { LSM, RESET } from "../localStorage/localStorageManager.js";

export default () => {
  RESET(); //RESETEA EL LOCALSTORAGE
  LSM.createItem("localQuizzes", {
    [uuidv4()]: {
      question: "¿Cuál es la capital de Francia?",
      answer: "París",
      feedback: "París ha sido la capital de Francia desde el año 508.",
      options: ["Lyon", "Marsella", "Toulouse"],
      hitScore: [false, false, false, false, false],
    },
    [uuidv4()]: {
      question: "¿En qué año llegó el hombre a la Luna?",
      answer: "1969",
      feedback: "El Apolo 11 aterrizó en la Luna el 20 de julio de 1969.",
      options: ["1955", "1975", "1989"],
      hitScore: [false, false, false, false, false],
    },
    [uuidv4()]: {
      question: "¿Qué elemento químico tiene el símbolo 'O'?",
      answer: "Oxígeno",
      feedback:
        "El oxígeno es esencial para la respiración y la combustión.",
      options: ["Oro", "Osmio", "Oganesón"],
      hitScore: [false, false, false, false, false],
    },
  });
  console.log(LSM.getLocalQuizzes());
};
