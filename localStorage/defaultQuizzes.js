import { LSM } from "../localStorage/localStorageManager.js";

export default () => {
  if (!localStorage.getItem("localQuizzes")) {
    LSM.createItem("localQuizzes");
    const defaultQuizzes = [
      {
        question:
          "¿Qué caracteriza principalmente a la historiografía antigua?",
        answer: "Narraciones míticas, genealogías y eventos bélicos",
        feedback:
          "La historiografía antigua se centra en mitos y hazañas de élites para legitimar el poder.",
        options: [
          "Críticas a instituciones tradicionales",
          "Análisis económico de clases sociales",
          "Uso de herramientas digitales",
        ],
      },
      {
        question: "¿Cuál es el enfoque central de la historiografía medieval?",
        answer: "Interpretar la historia como parte de un plan divino",
        feedback:
          "Durante la Edad Media, la historia era vista como un reflejo del plan de Dios.",
        options: [
          "Buscar leyes generales del desarrollo histórico",
          "Estudiar ciudades como espacios sociales",
          "Incorporar minorías y vida cotidiana",
        ],
      },
      {
        question: "¿Qué recupera la historiografía humanista del Renacimiento?",
        answer: "Modelos grecorromanos y enfoque en logros humanos",
        feedback:
          "El humanismo rescata el pensamiento clásico y da importancia al individuo.",
        options: [
          "Documentos primarios con objetividad",
          "Crónicas religiosas",
          "Herramientas digitales para narración",
        ],
      },
      {
        question: "¿Qué valor fundamental guía a la historiografía ilustrada?",
        answer: "La razón y el progreso",
        feedback:
          "La Ilustración promueve la razón y la crítica a lo tradicional.",
        options: [
          "Providencia divina",
          "Lucha de clases",
          "Vida cotidiana de mujeres y minorías",
        ],
      },
      {
        question:
          "¿Qué objetivo tenía la historiografía positivista del siglo XIX?",
        answer: "Establecer la historia como una ciencia objetiva",
        feedback:
          "El positivismo prioriza hechos y documentos, buscando objetividad total.",
        options: [
          "Interpretar el mundo desde la fe",
          "Centrarse en estructuras de larga duración",
          "Incorporar representaciones culturales",
        ],
      },
      {
        question: "¿Qué enfoque define a la historiografía marxista?",
        answer: "Análisis de la lucha de clases y estructuras económicas",
        feedback:
          "Marx analiza la historia como conflicto entre clases por el control económico.",
        options: [
          "Razón y crítica ilustrada",
          "Narrativas mitológicas",
          "Estudio de santos y mártires",
        ],
      },
      {
        question: "¿Qué propone la historiografía de los Annales?",
        answer:
          "Estudiar estructuras de larga duración con enfoque interdisciplinario",
        feedback:
          "Annales rompe con el positivismo y amplía el campo de estudio histórico.",
        options: [
          "Fijarse en logros humanos individuales",
          "Uso exclusivo de fuentes digitales",
          "Interpretación divina de la historia",
        ],
      },
      {
        question: "¿Qué nuevo enfoque aporta la Nueva Historia?",
        answer: "Estudiar la vida cotidiana, mujeres y minorías",
        feedback:
          "La Nueva Historia amplía los temas tradicionales, incluyendo nuevos actores históricos.",
        options: [
          "Narración de batallas épicas",
          "Crónicas eclesiásticas",
          "Clases sociales y modos de producción",
        ],
      },
      {
        question: "¿Qué estudia la historiografía urbana?",
        answer: "Las ciudades como espacios sociales y culturales",
        feedback:
          "Esta corriente analiza la evolución y dinámica de las ciudades.",
        options: [
          "Relaciones entre infraestructura y superestructura",
          "Planes divinos en la historia",
          "Narrativas históricas digitales",
        ],
      },
      {
        question:
          "¿Qué aspectos aborda la historiografía de la Revolución Mexicana?",
        answer:
          "Causas, actores, ideologías y consecuencias desde diversas perspectivas",
        feedback:
          "Esta historiografía busca comprender el conflicto desde enfoques sociales y culturales.",
        options: [
          "Exclusivamente la historia oficial",
          "Solo las batallas militares",
          "Interpretación desde un solo punto de vista",
        ],
      },
      {
        question: "¿Qué estudia la historiografía del tiempo presente?",
        answer: "Eventos recientes con impacto actual",
        feedback:
          "Analiza hechos contemporáneos y su resonancia social y política.",
        options: [
          "Historia de santos y mártires",
          "Eventos mitológicos",
          "Hechos únicamente antiguos",
        ],
      },
      {
        question: "¿Qué distingue a la historiografía digital?",
        answer:
          "Uso de tecnologías digitales para investigar y difundir historia",
        feedback:
          "La historiografía digital permite nuevas formas de análisis histórico.",
        options: [
          "Centrarse solo en documentos físicos",
          "Análisis divino de la historia",
          "Rechazo al uso de tecnologías",
        ],
      },
      {
        "question": "¿Cuál de las siguientes afirmaciones describe mejor el concepto de historiografía?",
        "answer": "La disciplina que analiza cómo se escribe la historia, incluyendo los métodos, las fuentes, las interpretaciones y los contextos de los historiadores.",
        "feedback": "La historiografía estudia cómo se escribe la historia, no solo los hechos, sino las formas y motivos detrás de las narraciones históricas.",
        "options": [
          "El estudio de los eventos pasados de forma objetiva y sin interpretación.",
          "La simple recopilación cronológica de fechas y personajes importantes de la historia.",
          "La narración oral de tradiciones populares."
        ]
      },
      {
        "question": "Según la perspectiva positivista aplicada al oficio de la historia, ¿cuál de las siguientes afirmaciones describe mejor su enfoque?",
        "answer": "El estudio histórico debe fundamentarse rigurosamente en el análisis crítico de documentos primarios y fuentes empíricas, buscando establecer leyes generales del progreso social a través de la aplicación de la razón y la observación, reflejando una evolución lineal a través de los tres estadios teológico, metafísico y positivo.",
        "feedback": "El positivismo busca hacer de la historia una ciencia basada en hechos verificables, evitando interpretaciones subjetivas.",
        "options": [
          "La historia debe basarse principalmente en la interpretación subjetiva de los grandes relatos y mitos fundacionales.",
          "La labor del historiador consiste en narrar de forma literaria y evocadora los acontecimientos del pasado.",
          "La historia debe centrarse en emociones y valores culturales para entender mejor a las sociedades."
        ]
      },
      {
        "question": "¿Cuál de las siguientes afirmaciones describe y define de manera más precisa el marxismo como teoría social y económica?",
        "answer": "El marxismo es una teoría que analiza la historia a través de la lente de la lucha de clases, donde el desarrollo social está determinado fundamentalmente por las tensiones y conflictos derivados de las relaciones económicas y la propiedad de los medios de producción. El factor económico se considera la base (infraestructura) que moldea la superestructura social, política e ideológica.",
        "feedback": "El marxismo interpreta la historia como un conflicto constante entre clases sociales generado por relaciones económicas desiguales.",
        "options": [
          "El marxismo enfatiza la importancia de las ideas y los valores culturales como motor de la historia.",
          "El marxismo aboga por una sociedad individualista basada en la competencia libre.",
          "El marxismo propone una colaboración armónica entre clases sociales."
        ]
      }
    ];
    defaultQuizzes.forEach((quiz) => {
      LSM.addQuiz(quiz.question, quiz.answer, quiz.feedback, quiz.options);
    });
  }
  console.log(LSM.getLocalQuizzes());
};
