import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";

import { navigateTo } from "../router.js";

const actualView = CONFIG.routes.home;

export default () => {
  u.setPageTitle(actualView.description);

  setTimeout(() => {
    const createQuizButton = document.getElementById("createQuizButton");

    createQuizButton.addEventListener(
      "click",
      async () => {
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
          //group: document.getElementById("groupInput").value || null,
        };

        if (values.question && values.answer && values.options[0]) {
          console.log(values);
          LSM.addQuiz(values.question, values.answer, values.feedback, [
            ...values.options,
          ]);
          console.log(LSM.getLocalQuizzes());

          navigateTo("/catalog");
        } else {
          alert("Por favor completa todos los campos obligatorios");
        }
      },
      { once: true }
    );
  }, 500);

  return `
        <div class="titleBox">
          CREAR QUIZ
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
          <input type="text" id="feedbackInput" placeholder="Mejora tu retencion un ~50%">
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
