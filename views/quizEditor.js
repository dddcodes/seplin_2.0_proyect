import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";

const actualView = CONFIG.routes.quizEditor;

export default () => {
  u.setPageTitle(actualView.title);

  const params = new URLSearchParams(window.location.search);
  const localQuizzes = LSM.getLocalQuizzes();
  const quizID = params.get("id");
  const quizData = localQuizzes[quizID];

  if (/*Si hay parametros*/ quizID) {
    console.log("ID del quiz:", quizID);

    setTimeout(() => {
      u.printGroups();

      const saveChangesButton = document.getElementById("saveChangesButton");
      let cooldown = false;
      saveChangesButton.addEventListener("click", () => {
        u.applyCooldown(cooldown);

        const getInputValue = (id) => {
          const input = document.getElementById(id);
          return input.value || null;
        };
        const inputsValue = {
          question: getInputValue("questionInput"),
          answer: getInputValue("answerInput"),
          feedback: getInputValue("feedbackInput"),
          options: [
            getInputValue("option1"),
            getInputValue("option2"),
            getInputValue("option3"),
            getInputValue("option4"),
          ],
          group: getInputValue("groupInput"),
        };

        if (
          inputsValue.question &&
          inputsValue.answer &&
          inputsValue.options[0]
        ) {
          LSM.updateQuiz(
            quizID,
            inputsValue.question,
            inputsValue.answer,
            inputsValue.feedback,
            [...inputsValue.options],
            inputsValue.group
          );
          console.log(LSM.getLocalQuizzes()[quizID]);
        } else {
          alert("Por favor completa todos los campos obligatorios");
          u.notification(
            "Por favor completa todos los campos obligatorios",
            "warning"
          );
        }
      });
    }, 500);

    return `
        <div class="titleBox">
          ${actualView.title}
        </div>

        <p class="weakText">ID: ${quizID}</p>

        <div class="inputBox">
          <p>Pregunta</p>
          <input type="text" id="questionInput" value="${
            quizData.question
          }" placeholder="CAMPO OBLIGATORIO" required>
        </div>

        <div class="inputBox">
          <p>Respuesta</p>
          <input type="text" id="answerInput" value="${
            quizData.answer
          }" placeholder="CAMPO OBLIGATORIO" required>
        </div>
        
        <div class="inputBox optionsBox">
          <p>Opciones alternativas (incorrectas)</p>
          <input type="text" id="option1" value="${
            quizData.options[0] || ""
          }" placeholder="CAMPO OBLIGATORIO" required>
          <input type="text" id="option2" value="${quizData.options[1] || ""}">
          <input type="text" id="option3" value="${quizData.options[2] || ""} ">
          <input type="text" id="option4" value="${quizData.options[3] || ""}">
        </div>

        <div class="inputBox">
          <p>Explicación</p>
          <textarea type="text" id="feedbackInput">${
            quizData.feedback || ""
          }</textarea>
        </div>

        <div class="inputBox">
          <p>Grupo</p>
          <select id="groupInput" required>
            <option value="">Sin grupo</option>
          </select>
        </div>

        <button id="saveChangesButton" class="llamativeButton">Guardar cambios</button>
    `;
  } else {
    console.error("No se ha encontrado el ID del quiz en la URL.");
    u.notification("Error: No se ha encontrado el ID del quiz", "error");
    u.activeBackButton();
    return `
      <button id="backButton">
        Volver
      </button>
      <p class="titleBox">
        Error: No se ha logrado extraer la ID del quiz
      </p>
      `;
  }
};
