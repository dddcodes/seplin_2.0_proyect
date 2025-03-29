import { LSM } from "../localStorage/localStorageManager.js";

export default () => {
 LSM.createItem("localQuizzes", {
   [uuidv4()]: {
     question: "¿Cuál es la capital de Francia?",
     answer: "París",
     explanation: "París ha sido la capital de Francia desde el año 508.",
     options: ["Lyon", "Marsella", "Toulouse"],
   },
   [uuidv4()]: {
     question: "¿En qué año llegó el hombre a la Luna?",
     answer: "1969",
     explanation: "El Apolo 11 aterrizó en la Luna el 20 de julio de 1969.",
     options: ["1955", "1975", "1989"],
   },
   [uuidv4()]: {
     question: "¿Qué elemento químico tiene el símbolo 'O'?",
     answer: "Oxígeno",
     explanation: "El oxígeno es esencial para la respiración y la combustión.",
     options: ["Oro", "Osmio", "Oganesón"],
   },
 });
 console.log(LSM.getLocalQuizzes());
}