import * as u from "../utils.js";
import { CONFIG } from "../config.js";

const actualView = CONFIG.routes.home;

export default () => {
  u.setPageTitle(actualView.description);

  return `
        <div class="titleBox">
          CREAR QUIZ
        </div>

        <div class="inputBox">
          <p>Pregunta</p>
          <input type="text" id="questionInput" placeholder="Como si fuera un examen" required>
        </div>

        <div class="inputBox">
          <p>Respuesta</p>
          <input type="text" id="answerInput" placeholder="Solo puede haber una respuesta correcta" required>
        </div>
        
        <div class="inputBox optionsBox">
          <p>Opciones alternativas (incorrectas)</p>
          <input type="text" id="option1" placeholder="Opción 1 (OBLIGATORIA)" required>
          <input type="text" id="option2" placeholder="Opción 2">
          <input type="text" id="option3" placeholder="Opción 3">
          <input type="text" id="option3" placeholder="Opción 3">
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

  
        
    `;
};