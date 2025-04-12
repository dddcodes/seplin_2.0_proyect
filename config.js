export const CONFIG = {
  proyectName: "SEPLIN",
  version: "ALPHA 2024.4.2",
  url: "https://seplin.netlify.app",
  gitHub: "https://github.com/dddcodes/seplin_2.0_proyect",
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
      title: "Quizzes",
      description: "Admirad vuestro ser y mejorad cada dia!",
    },
    practice: {
      component: "practice.js",
      path: "/practice",
      title: "Practicar",
      description:
        "Practica tus quizzes y mejora tus habilidades de manera efectiva, basado en ciencia!",
    },
    createQuizzes: {
      component: "createQuizzes.js",
      path: "/create-quizzes",
      title: "Crear",
      description:
        "Crea quizzes personalizados para estudiar de manera inteligente!",
    },
    quizEditor: {
      component: "quizEditor.js",
      path: "/quiz-editor",
      title: "Editar Quiz",
      description:
        "Edita tus quizzes de manera sencilla y eficiente!",
    },
  },
};
