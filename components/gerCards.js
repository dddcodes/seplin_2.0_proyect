import { CONFIG } from "../config.js";

function createCard(title, description, href = "/", type = "intern", atributes = "") {

    if (type === "intern") {
        return `
          <a href="${href}" data-link ${atributes}>
              ${title}
              <p>${description}</p>
          </a>`;
        
    } else if(type === "extern"){
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
      "https://github.com/dddcodes/seplin_2.0_proyect",
      "extern"
    );
  },
  practice: function () {
    return createCard(
        "PRUEBA QUIZZES!",
        "En lo que contruyo el proyecto puedes contestar unos quizzes de prueba!",
        "/practice",
        "intern"
    );
  },
};
