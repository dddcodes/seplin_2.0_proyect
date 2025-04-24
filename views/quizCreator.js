import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";

import { navigateTo } from "../router.js";

const actualView = CONFIG.routes.quizCreator; // Obtiene la vista actual desde el archivo de configuración

export default () => {
  u.setPageTitle(actualView.description);

  setTimeout(() => {
    u.printGroups()

    let cooldown = false;
    const createQuizButton = document.getElementById("createQuizButton");
    createQuizButton.addEventListener("click", async () => {
      u.applyCooldown(cooldown);

      const values = {
        question: document.getElementById("questionInput").value,
        answer: document.getElementById("answerInput").value,
        options: [
          document.getElementById("option1").value,
          document.getElementById("option2").value || null,
          document.getElementById("option3").value || null,
          document.getElementById("option4").value || null,
        ],
        feedback: document.getElementById("feedbackInput").value || null,
        group: document.getElementById("groupInput").value || null,
      };

      if (values.question && values.answer && values.options[0]) {
        console.log(values);
        LSM.addQuiz(
          values.question,
          values.answer,
          values.feedback,
          [...values.options],
          values.group
        );
        console.log(values.group);
        console.log(LSM.getLocalQuizzes());

        if (!CONFIG.developerMode) {
          navigateTo("/catalog");

          setTimeout(() => {
            const moreDataDivs = document.querySelectorAll(
              ".quizDataCard > .moreDataDiv"
            );
            const last = moreDataDivs[moreDataDivs.length - 1];
            last.classList.remove("hidden");

            u.scrollToBottom();
          }, 600);
        }
        u.notification("Quiz creado con éxito", "success");
      } else {
        u.notification(
          "Por favor completa todos los campos obligatorios",
          "warning"
        );
      }
    });

    const createGroupPageButton = document.getElementById("createGroupPageButton");
    createGroupPageButton.addEventListener("click", () => {
      navigateTo(CONFIG.routes.groupCreator.path);
    });

    const importQuizPageButton = document.getElementById("importQuizPageButton");
    importQuizPageButton.addEventListener("click", () => {
      navigateTo(CONFIG.routes.import.path);
    });
  }, 500);

  return `
        <div class="titleBox">
          Crear un quiz
        </div>

        <div>
          <button id="createGroupPageButton" class="staticButton">Crear un grupo</button>
          <button id="importQuizPageButton" class="staticButton">Importar quizzes</button>
        </div>

        <p class="weakText">Espacios con * son obligatorios</p>

        <div class="inputBox">
          <p>Pregunta *</p>
          <input type="text" id="questionInput" placeholder="Como si fuera un examen" required>
        </div>

        <div class="inputBox">
          <p>Respuesta *</p>
          <input type="text" id="answerInput" placeholder="Solo puede haber una respuesta correcta" required>
        </div>
        
        <div class="inputBox optionsBox">
          <p>Opciones alternativas (incorrectas)</p>
          <input type="text" id="option1" placeholder="Opción 1 *" required>
          <input type="text" id="option2" placeholder="Opción 2">
          <input type="text" id="option3" placeholder="Opción 3">
          <input type="text" id="option4" placeholder="Opción 4">
        </div>

        <div class="inputBox">
          <p>Explicación</p>
          <textarea type="text" id="feedbackInput" placeholder="Mejora tu retencion un ~50%"></textarea>
        </div>

        <div class="inputBox">
          <p>Grupo</p>
          <select id="groupInput" required>
            
          </select>
        </div>

        <button id="createQuizButton" class="llamativeButton" style="margin-bottom: 100px;">Crear Quiz</button>
        
    `;
};
