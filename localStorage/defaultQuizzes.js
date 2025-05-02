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

      {
        question: "¿Cuál es la definición de salud pública según Winslow?",
        answer:
          "Es la ciencia y el arte de prevenir las enfermedades, prolongar la vida y promover la salud mediante los esfuerzos organizados de la sociedad.",
        feedback:
          "Esta definición subraya la prevención de enfermedades y la promoción de la salud mediante la acción colectiva organizada.",
        options: [
          "Es la ciencia aplicada que solo se encarga de prevenir enfermedades en una comunidad específica para mejorar la salud pública general.",
          "Es la disciplina que busca solo ofrecer atención médica a las personas de una sociedad, sin tomar en cuenta los esfuerzos organizados ni la prevención de enfermedades.",
          "Es la técnica utilizada para proporcionar recursos médicos a los individuos, con el único propósito de mejorar su salud física a través de tratamientos médicos especializados.",
        ],
      },
      {
        question:
          "¿Cuál es la definición de salud pública según la visión actual?",
        answer:
          "Es la ciencia social que organiza esfuerzos para prevenir enfermedades, promover la salud y prolongar la vida en las poblaciones.",
        feedback:
          "La salud pública hoy en día se considera un esfuerzo colectivo, interdisciplinario y preventivo en el ámbito social.",
        options: [
          "Es el campo relacionado solo con la atención médica de los individuos dentro de una comunidad, sin enfocarse en su bienestar colectivo.",
          "Es la disciplina encargada de desarrollar tratamientos médicos específicos para tratar enfermedades crónicas en la población, sin tomar en cuenta la prevención.",
          "Es el esfuerzo organizado que permite mejorar la salud pública a nivel poblacional a través de medidas preventivas y actividades sociales relacionadas.",
        ],
      },
      {
        question: "¿Qué dice la Triada Ecológica?",
        answer:
          "Es un modelo que considera tres factores principales en la salud: el huésped, el agente y el ambiente.",
        feedback:
          "La Triada Ecológica explica la interacción entre estos tres elementos para entender el proceso de salud-enfermedad.",
        options: [
          "Es una representación visual que agrupa los principales factores que afectan la salud humana, con un enfoque en los aspectos psicológicos, sociales y físicos.",
          "Es un enfoque que se centra en los elementos genéticos y biológicos que afectan al ser humano y su interacción con el medio ambiente.",
          "Es un modelo que relaciona los factores sociales, ambientales y físicos en el bienestar de una persona, sin enfocarse exclusivamente en los agentes biológicos.",
        ],
      },
      {
        question:
          "¿Cuál es el objetivo principal de las Funciones Esenciales de la Salud Pública (FESP)?",
        answer:
          "Mejorar la salud de las poblaciones a través de un enfoque integral que involucra monitoreo, promoción, prevención y políticas públicas.",
        feedback:
          "Las FESP buscan mejorar la salud colectiva a través de acciones como monitoreo, promoción y prevención, en lugar de centrarse solo en el acceso a servicios médicos.",
        options: [
          "Fomentar solo el acceso a servicios médicos y tratamientos para las enfermedades crónicas de los individuos en la comunidad.",
          "Brindar atención médica especializada a todos los ciudadanos con enfermedades preexistentes, sin involucrar políticas preventivas ni enfoques poblacionales.",
          "Reducir costos en servicios médicos y promover el tratamiento individualizado de enfermedades sin tener en cuenta la salud pública general.",
        ],
      },
      {
        question: "¿Cuáles son las disciplinas que integran la salud pública?",
        answer:
          "Epidemiología, promoción de la salud, administración de la salud, bioestadística, y salud ambiental.",
        feedback:
          "Estas disciplinas son esenciales para abordar de manera integral los problemas de salud a nivel poblacional.",
        options: [
          "Solo las ciencias sociales y la medicina preventiva se integran en la salud pública, sin considerar otras áreas de la salud.",
          "Las disciplinas básicas en salud pública se enfocan únicamente en el diagnóstico de enfermedades y la administración pública sanitaria.",
          "Ciencias sociales, bioestadística, promoción de la salud y otros elementos relacionados con la atención personalizada en el ámbito médico.",
        ],
      },
      {
        question:
          "¿Qué significa el concepto de salud según la concepción somática?",
        answer:
          "La salud es la ausencia de enfermedades y disfunciones en el cuerpo humano.",
        feedback:
          "Esta concepción se enfoca principalmente en el bienestar físico, sin considerar otros factores como la salud mental.",
        options: [
          "La salud es un estado completo de bienestar físico y emocional, sin que importe la presencia o ausencia de enfermedades.",
          "La salud se refiere a la capacidad del cuerpo humano para adaptarse al entorno social, más allá de la ausencia de enfermedades.",
          "La salud es la capacidad de mantener un estado físico estable sin importar los factores sociales o emocionales que puedan afectar a la persona.",
        ],
      },
      {
        question: "¿Qué es la concepción psíquica de la salud?",
        answer:
          "La salud es la capacidad del individuo para manejar sus emociones y pensamientos de manera equilibrada.",
        feedback:
          "Este enfoque subraya la importancia de la salud mental y emocional para el bienestar general.",
        options: [
          "La salud psíquica está vinculada a la capacidad de manejar solo las enfermedades físicas del cuerpo humano.",
          "La salud mental se refiere únicamente a la estabilidad emocional, sin incluir los procesos cognitivos y psíquicos de la persona.",
          "La salud psíquica se enfoca en el equilibrio de emociones, pensamientos y la capacidad de enfrentar las adversidades en la vida diaria.",
        ],
      },
      {
        question: "¿Qué es la concepción sanitaria de la salud?",
        answer:
          "Es el enfoque que se centra en la prevención de enfermedades y la promoción de hábitos saludables en la población.",
        feedback:
          "Esta concepción integra la medicina preventiva y la educación sanitaria para evitar enfermedades.",
        options: [
          "La salud sanitaria se refiere a la atención médica curativa exclusiva, sin priorizar la prevención de enfermedades y la educación a la población.",
          "La salud es el resultado de una intervención médica intensiva para controlar enfermedades crónicas, sin importar los hábitos sociales.",
          "La salud sanitaria se enfoca solo en el bienestar físico, ignorando la educación de hábitos saludables y la prevención de enfermedades.",
        ],
      },
      {
        question: "¿Qué es la concepción económica de la salud?",
        answer:
          "La salud es un recurso que contribuye al desarrollo económico y se mide en términos de costos y beneficios sociales.",
        feedback:
          "La concepción económica de la salud ve la salud como un factor clave para el bienestar social y la productividad económica.",
        options: [
          "La salud se mide únicamente en términos de gastos médicos y cómo estos afectan a las finanzas de una nación.",
          "La salud es un concepto relacionado con el bienestar individual, sin tomar en cuenta las implicaciones económicas en el contexto social y colectivo.",
          "La salud económica se enfoca solo en la reducción de costos médicos, sin considerar el impacto en la calidad de vida de los individuos.",
        ],
      },
      {
        question: "¿Qué es la concepción cultural de la salud?",
        answer:
          "La salud se define en función de las creencias, valores y tradiciones de una sociedad determinada.",
        feedback:
          "Este enfoque toma en cuenta el contexto cultural de cada comunidad y cómo influyen en su percepción y manejo de la salud.",
        options: [
          "La salud es un concepto universal que se define solo por las pautas médicas occidentales, sin tener en cuenta la diversidad cultural.",
          "La salud es un proceso individual que no depende de la cultura ni de las creencias, solo de los recursos médicos disponibles.",
          "La salud se mide en términos de diagnóstico médico preciso y de tratamientos universalmente aceptados, sin considerar las tradiciones culturales.",
        ],
      },
      {
        question: "¿Qué incluye el concepto de salud en su definición actual?",
        answer:
          "La salud incluye el bienestar físico, mental y social, y no solo la ausencia de enfermedades.",
        feedback:
          "Hoy en día, la salud es un concepto integral que abarca aspectos emocionales, sociales y físicos.",
        options: [
          "La salud es la capacidad de un individuo para mantener su bienestar físico sin importar su entorno social o emocional.",
          "La salud es el equilibrio de la mente y el cuerpo que se logra solo a través de la atención médica especializada.",
          "La salud solo se refiere a la ausencia de enfermedades físicas, sin tomar en cuenta el bienestar emocional o social de una persona.",
        ],
      },
      {
        question: "¿Qué es la Historia Natural de la Enfermedad?",
        answer:
          "Es el proceso de desarrollo de una enfermedad en un individuo desde su inicio hasta su resolución, ya sea curación, cronicidad o muerte.",
        feedback:
          "Este concepto ayuda a entender el curso de una enfermedad y las oportunidades para intervenir en diferentes etapas.",
        options: [
          "Es el análisis del impacto ambiental sobre la salud pública y la evolución de las enfermedades a nivel comunitario.",
          "Es el proceso por el cual las enfermedades se identifican en la población general a través de diagnósticos médicos completos.",
          "Es el conjunto de métodos utilizados para tratar enfermedades en la fase crónica, sin tener en cuenta los aspectos preventivos.",
        ],
      },
    ];

    defaultQuizzes.forEach((quiz) => {
      LSM.addQuiz(quiz.question, quiz.answer, quiz.feedback, quiz.options);
    });
  }
  console.log(LSM.getLocalQuizzes());
};
