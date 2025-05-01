import { LSM } from "../localStorage/localStorageManager.js";

export default () => {
  if (!localStorage.getItem("localQuizzes")) {
    LSM.createItem("localQuizzes");
    const defaultQuizzes = [
      {
        question: "¿Qué caracteriza a la historiografía antigua?",
        answer: "Relatos míticos y batallas de gobernantes",
        feedback:
          "Se centraba en héroes, guerras y mitos que legitimaban el poder.",
        options: [
          "Análisis racional de hechos económicos",
          "Estudios sociales desde el enfoque actual",
          "Registros detallados de conflictos legales",
        ],
      },
      {
        question: "¿Qué enfoque tiene la historiografía medieval?",
        answer: "Narrativas cristianas con sentido divino",
        feedback:
          "Presenta la historia como parte de un plan divino, muy ligada a la Iglesia.",
        options: [
          "Relatos seculares sobre comercio exterior",
          "Investigación técnica de la vida cotidiana",
          "Estudios filosóficos sobre la política",
        ],
      },
      {
        question: "¿Qué recupera la historiografía humanista del Renacimiento?",
        answer: "Modelo clásico centrado en el individuo",
        feedback:
          "Retoma ideales griegos y romanos, destacando la razón y el ser humano.",
        options: [
          "Crónicas reales con enfoque militar",
          "Estudios mágicos y cosmovisiones tribales",
          "Perspectivas jurídicas con visión teológica",
        ],
      },
      {
        question: "¿Qué resalta la historiografía ilustrada?",
        answer: "Uso de razón y análisis del progreso",
        feedback:
          "Promueve el pensamiento crítico, buscando patrones racionales en la historia.",
        options: [
          "Defensa de mitos y leyendas ancestrales",
          "Valoración religiosa del pasado humano",
          "Tradiciones épicas sin análisis objetivo",
        ],
      },
      {
        question: "¿Qué propone la historiografía positivista?",
        answer: "Análisis objetivo con documentos reales",
        feedback:
          "Busca una historia científica basada en hechos verificables.",
        options: [
          "Interpretaciones místicas de personajes antiguos",
          "Estudios emocionales con enfoque narrativo",
          "Historias basadas en la memoria popular",
        ],
      },
      {
        question: "¿Qué explica la historiografía marxista?",
        answer: "Historia como conflicto entre clases sociales",
        feedback:
          "Interpreta el desarrollo histórico desde la economía y la lucha de clases.",
        options: [
          "Estudios morales sobre decisiones éticas",
          "Crónicas poéticas sin marco económico",
          "Análisis religioso sobre el alma humana",
        ],
      },
      {
        question: "¿Qué busca la escuela de los Annales?",
        answer: "Analizar estructuras sociales y económicas",
        feedback:
          "Propone una historia integral con enfoque en estructuras a largo plazo.",
        options: [
          "Narraciones bélicas con tono heroico",
          "Biografías centradas en reyes importantes",
          "Interpretaciones individuales de batallas",
        ],
      },
      {
        question: "¿Qué temas aborda la Nueva Historia?",
        answer: "Vida diaria, cultura y minorías sociales",
        feedback:
          "Amplía la historia incluyendo mujeres, pueblos y prácticas culturales.",
        options: [
          "Hechos diplomáticos con impacto político",
          "Perspectivas jurídicas de tratados antiguos",
          "Tradiciones filosóficas del pensamiento clásico",
        ],
      },
      {
        question: "¿Qué analiza la historia del tiempo presente?",
        answer: "Hechos recientes con fuentes vivas",
        feedback: "Trabaja con testimonios orales, medios y actores vivos.",
        options: [
          "Visiones mitológicas del origen humano",
          "Estudios sobre conflictos del siglo XVI",
          "Crónicas medievales con sentido místico",
        ],
      },
      {
        question: "¿Qué caracteriza a la microhistoria?",
        answer: "Casos locales que revelan procesos amplios",
        feedback:
          "Estudia hechos pequeños que reflejan grandes estructuras sociales.",
        options: [
          "Perspectiva global sobre imperios antiguos",
          "Revisión de textos clásicos del Renacimiento",
          "Estudios políticos de grandes civilizaciones",
        ],
      },
      {
        question: "¿Qué perspectiva aporta la historia cultural?",
        answer: "Estudio de símbolos, rituales y lenguaje",
        feedback:
          "Enfoca cómo la cultura y los símbolos influyen en la vida y la historia.",
        options: [
          "Análisis económico de sistemas agrarios",
          "Evaluación militar de grandes conquistas",
          "Crónicas legales centradas en reyes",
        ],
      },
      {
        question: "¿Qué permite la historia digital?",
        answer: "Uso de tecnología para analizar el pasado",
        feedback:
          "Facilita el acceso y análisis de datos históricos con herramientas digitales.",
        options: [
          "Narrativas religiosas sin fuentes digitales",
          "Estudios intuitivos con base oral popular",
          "Relatos simbólicos sin respaldo técnico",
        ],
      },
      {
        question:
          "¿Cuál de las siguientes afirmaciones describe mejor el concepto de historiografía?",
        answer: "Disciplina que analiza cómo se escribe la historia",
        feedback:
          "La historiografía estudia los métodos, fuentes y contextos del trabajo histórico.",
        options: [
          "Serie cronológica de eventos antiguos",
          "Estudio místico del universo humano",
          "Descripciones subjetivas del pasado",
        ],
      },
      {
        question: "¿Cuál describe mejor el enfoque positivista en la historia?",
        answer: "Análisis empírico basado en documentos primarios",
        feedback:
          "Se basa en fuentes verificables y busca leyes generales del progreso.",
        options: [
          "Narración simbólica de eventos legendarios",
          "Estudio emocional de héroes antiguos",
          "Relato mágico con contenido poético",
        ],
      },
      {
        question: "¿Cuál define mejor el marxismo como teoría histórica?",
        answer: "Historia determinada por lucha de clases y economía",
        feedback:
          "El marxismo interpreta la historia desde los conflictos económicos y sociales.",
        options: [
          "Construcción divina del alma humana",
          "Relatos épicos sobre reinos celestiales",
          "Visión poética del destino humano",
        ],
      },
    ];
    
    defaultQuizzes.forEach((quiz) => {
      LSM.addQuiz(quiz.question, quiz.answer, quiz.feedback, quiz.options);
    });
  }
  console.log(LSM.getLocalQuizzes());
};
