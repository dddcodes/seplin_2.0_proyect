export const CONFIG = {
  proyectName: "SEPLIN",
  version: "ALPHA 2024.4.2",
  url: "https://seplin.netlify.app",
  gitHub: "https://github.com/dddcodes/seplin_2.0_proyect",
  developerMode: false, //DEBES de crear un item en el LS para guardar los IDS de los grupos
  dataSaving: true,
  routes: {
    home: {
      component: "home.js",
      path: "/",
      title: "Inicio",
      description: "Seplin es tu 2do cerebro!",
    },
    catalog: {
      component: "catalog.js",
      path: "/catalog",
      title: "Tus quizzes",
      description: "Admirad vuestro ser y mejorad cada dia!",
    },
    practice: {
      component: "practice.js",
      path: "/practice",
      title: "Practicar",
      description:
        "Practica tus quizzes y mejora tus habilidades de manera efectiva, basado en ciencia!",
    },
    quizCreator: {
      component: "quizCreator.js",
      path: "/quiz-creator",
      title: "Crear",
      description:
        "Crea quizzes personalizados para estudiar de manera inteligente!",
    },
    quizEditor: {
      component: "quizEditor.js",
      path: "/quiz-editor",
      title: "Editor de quizzes",
      description: "Edita tus quizzes de manera sencilla y eficiente!",
    },
    import: {
      component: "import.js",
      path: "/import",
      title: "Importar",
      description: "Pega el codigo de un quiz y sera todo tuyo!",
    },
  },
};
