import { CONFIG } from "../config.js";
import createQuizzes from "../views/createQuizzes.js";

function createCard(
  title,
  description,
  href = "/",
  type = "intern",
  atributes = "",
  backgroundColor = "auto",
  color = ""
) {
  if (type === "intern") {
    return `
          <a href="${href}" data-link style="background-color: ${backgroundColor}; color: ${color};"${atributes}>
              ${title}
              <p style="color: ${color};">${description}</p>
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
      "Codigo del proyecto a tus manos!",
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
      "intern",
      null,
      "var(--default-color-2)"
    );
  },
  createQuizzes: function () {
    return createCard(
      "CREAR",
      CONFIG.routes.createQuizzes.description,
      CONFIG.routes.createQuizzes.path,
      "intern",
      null,
      "var(--info-color)",
      "var(--default-color)"
    );
  },
};
