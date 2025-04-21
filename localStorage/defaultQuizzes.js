import { LSM } from "../localStorage/localStorageManager.js";

export default () => {
  if (!localStorage.getItem("localQuizzes")) {
    LSM.createItem("localQuizzes");
    const defaultQuizzes = [
      // LITERATURA
      {
        question: "¿Qué es un poema?",
        answer: "Una composición literaria que expresa emociones",
        feedback: "Un poema transmite emociones y sentimientos, a menudo con ritmo y métrica.",
        options: [
          "Un libro de historia",
          "Una obra de teatro",
          "Una noticia periodística"
        ],
      },
      {
        question: "¿Cuál de estos autores es conocido por su obra 'Don Quijote'?",
        answer: "Miguel de Cervantes",
        feedback: "Cervantes es uno de los grandes referentes de la literatura en lengua española.",
        options: [
          "Gabriel García Márquez",
          "Pablo Neruda",
          "Federico García Lorca"
        ],
      },
      {
        question: "¿Qué es un género literario?",
        answer: "Una categoría que clasifica obras por su estilo o contenido",
        feedback: "Ejemplos de géneros: narrativo, lírico, dramático.",
        options: [
          "Un tipo de libro escolar",
          "Una parte del argumento",
          "Una editorial"
        ],
      },
    
      // BIOLOGÍA
      {
        question: "¿Cuál es la unidad básica de la vida?",
        answer: "La célula",
        feedback: "Todas las formas de vida están compuestas por células.",
        options: [
          "El átomo",
          "El tejido",
          "El órgano"
        ],
      },
      {
        question: "¿Qué función cumple el ADN?",
        answer: "Almacenar la información genética",
        feedback: "El ADN contiene las instrucciones necesarias para el desarrollo y funcionamiento de los seres vivos.",
        options: [
          "Regular la respiración",
          "Transportar oxígeno",
          "Formar proteínas directamente"
        ],
      },
      {
        question: "¿Qué tipo de nutrición tienen las plantas?",
        answer: "Autótrofa",
        feedback: "Las plantas producen su propio alimento a través de la fotosíntesis.",
        options: [
          "Heterótrofa",
          "Carnívora",
          "Saprófita"
        ],
      },
    
      // HISTORIA
      {
        question: "¿En qué año comenzó la Segunda Guerra Mundial?",
        answer: "1939",
        feedback: "La invasión de Polonia por parte de Alemania marcó su inicio.",
        options: [
          "1914",
          "1945",
          "1929"
        ],
      },
      {
        question: "¿Quién fue el libertador de varios países de América del Sur?",
        answer: "Simón Bolívar",
        feedback: "Simón Bolívar luchó por la independencia de Venezuela, Colombia, Ecuador, Perú y Bolivia.",
        options: [
          "José de San Martín",
          "Miguel Hidalgo",
          "Napoleón Bonaparte"
        ],
      },
      {
        question: "¿Qué civilización construyó las pirámides de Egipto?",
        answer: "Los egipcios",
        feedback: "Las pirámides eran tumbas para los faraones.",
        options: [
          "Los romanos",
          "Los griegos",
          "Los mayas"
        ],
      }
    ];
    
    defaultQuizzes.forEach((quiz) => {
      LSM.addQuiz(quiz.question, quiz.answer, quiz.feedback, quiz.options);
    });
  }
  console.log(LSM.getLocalQuizzes());
};
