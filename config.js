export const CONFIG = {
  proyectName: "SEPLIN",
  version: "2.0.0",
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
      title: "Todos tus Quizzes",
      description: "Admirad vuestro ser y mejorad cada dia!",
    },
    practice: {
      component: "practice.js",
      path: "/practice",
      title: "Practicar",
      description: "Practica tus quizzes y mejora tus habilidades!",
    },
    archived: {
      component: "archived.js",
      path: "/archived",
      title: "Archivados",
      description: "Aqui encontraras tus quizzes archivados! puedes volver a ellos cuando quieras manualmente!",
    }
  }
};
