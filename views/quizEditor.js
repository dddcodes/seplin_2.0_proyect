import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";

const actualView = CONFIG.routes.quizEditor;

export default () => {
  u.setPageTitle(actualView.title);

  console.warn("Sí hay parámetros en la URL.");

  const localQuizzes = LSM.getLocalQuizzes();
  const params = new URLSearchParams(window.location.search);
  const quizID = params.get("id");
  const quizData = localQuizzes[quizID];

  console.log("ID del quiz:", quizID);

  setTimeout(() => {
    const saveChangesButton = document.getElementById("saveChangesButton");
    saveChangesButton.addEventListener("click", () => {
      const getInputValue = (id) => {
        const input = document.getElementById(id);
        return input.value || input.placeholder || null;
      };
      const inputsValue = {
        question: getInputValue("questionInput"),
        answer: getInputValue("answerInput"),
        options: [
          getInputValue("option1"),
          getInputValue("option2"),
          getInputValue("option3"),
          getInputValue("option4"),
        ],
        feedback: getInputValue("feedbackInput"),
      };

      LSM.updateQuiz(
        quizID,
        inputsValue.question,
        inputsValue.answer,
        inputsValue.feedback,
        [...inputsValue.options]
      );
      console.log(inputsValue);
    });
  }, 500);

  return `
        <div class="titleBox">
          ${actualView.title}
        </div>

        <p class="weakText">ID: ${quizID}</p>

        <div class="inputBox">
          <p>Pregunta</p>
          <input type="text" id="questionInput" placeholder="${
            quizData.question
          }">
        </div>

        <div class="inputBox">
          <p>Respuesta</p>
          <input type="text" id="answerInput" placeholder="${quizData.answer}">
        </div>
        
        <div class="inputBox optionsBox">
          <p>Opciones alternativas (incorrectas)</p>
          <input type="text" id="option1" placeholder="${quizData.options[0]}">
          <input type="text" id="option2" placeholder="${
            quizData.options[1] || ""
          }">
          <input type="text" id="option3" placeholder="${
            quizData.options[2] || ""
          } ">
          <input type="text" id="option4" placeholder="${
            quizData.options[3] || ""
          }">
        </div>

        <div class="inputBox">
          <p>Explicación</p>
          <textarea type="text" id="feedbackInput" placeholder="${
            quizData.feedback || ""
          }"></textarea>
        </div>

        <div class="inputBox">
          <p>Grupo (BETA)</p>
          <select id="groupInput" required>
            <option value="default">Grupo 1</option>
            <option value="default">Grupo 2</option>
            <option value="default">Grupo 3</option>
            <option value="default">Grupo 4</option>
          </select>
        </div>

        <button id="saveChangesButton">Guardar cambios</button>
    `;
};
