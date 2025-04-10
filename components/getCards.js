import { CONFIG } from "../config.js";

function createCard(
  title,
  description,
  href = "/",
  type = "intern",
  atributes = ""
) {
  if (type === "intern") {
    return `
          <a href="${href}" data-link ${atributes}>
              ${title}
              <p>${description}</p>
          </a>`;
  } else if (type === "extern") {
    return `
          <a href="${href}" target="_blank" rel="noopener noreferrer" ${atributes}>
              ${title}
              <p>${description}</p>
          </a>`;
  }
}

export const getCard = {
  gitHubLink: function () {
    return createCard(
      "GITHUB",
      "Seplin es de codigo abierto, por lo que puedes acceder al codigo fuente en Github!",
      CONFIG.gitHub,
      "extern"
    );
  },
  practice: function () {
    return createCard(
      "PRUEBA QUIZZES!",
      CONFIG.routes.practice.description,
      CONFIG.routes.practice.path,
      "intern"
    );
  },
  catalog: function () {
    return createCard(
      "CATALOGO",
      CONFIG.routes.catalog.description,
      CONFIG.routes.catalog.path,
      "intern"
    );
  },
};
