import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";

const actualView = CONFIG.routes.quizEditor;

export default () => {
  u.setPageTitle(actualView.title);

  console.warn("Sí hay parámetros en la URL.");

  const params = new URLSearchParams(window.location.search);
  const quizID = params.get("id");
  const localQuizzes = LSM.getLocalQuizzes();
  //SEGUIR AQUI
  console.log("ID del quiz:", quizID);

  return `
        <div class="titleBox">
          ${actualView.title}
        </div>

        <p class="weakText">ID: ${quizID}</p>

        <div class="inputBox">
          <p>Pregunta</p>
          <input type="text" id="questionInput" value="" required>
        </div>

        <div class="inputBox">
          <p>Respuesta</p>
          <input type="text" id="answerInput" required>
        </div>
        
        <div class="inputBox optionsBox">
          <p>Opciones alternativas (incorrectas)</p>
          <input type="text" id="option1" value="Opción 1" required>
          <input type="text" id="option2">
          <input type="text" id="option3">
          <input type="text" id="option4">
        </div>

        <div class="inputBox">
          <p>Explicación</p>
          <textarea type="text" id="feedbackInput"></textarea>
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

        <button id="createQuizButton">Crear Quiz</button>
    `;
};
