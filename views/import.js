import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";
import { navigateTo } from "../router.js";

const actualView = CONFIG.routes.import;

export default () => {
  u.setPageTitle(actualView.description);

  setTimeout(() => {
    const importButton = document.getElementById("importButton");

    // Clonamos el botón para remover TODOS los listeners previos
    const newButton = importButton.cloneNode(true);
    importButton.parentNode.replaceChild(newButton, importButton);

    newButton.addEventListener("click", () => {
      const importValue = document.getElementById("importTextarea").value;

      u.notification("Formato no correcto", "error");
      navigateTo(CONFIG.routes.home.path);

      const importValueObj = JSON.parse(importValue);
      if (Array.isArray(importValueObj) === true && importValueObj.length > 0) {
        importValueObj.forEach((quiz) => {
          LSM.addQuiz(quiz.question, quiz.answer, quiz.feedback, quiz.options);
        });

        u.notification("Importado exitosamente!!!", "success");
        navigateTo(CONFIG.routes.catalog.path);
        u.scrollToBottom();

        console.log(LSM.getLocalQuizzes());
      }

      newButton.disabled = true; // bloquear después del primer click
    });
  }, 200);

  return `
        <div class="titleBox">
          ${actualView.title} 
        </div>

        <div>
          <H5>
            INSTRUCCIONES:
          </H5>

          <p class="weakText">
            1 - Copia el codigo del quiz ( o quizzes ).
          </p>
          <p class="weakText">
            2 - Entrar a esta seccion de 'Importar' y pegar el codigo en el cuadro de texto grande.
          </p>
          <p class="weakText">
            3 - Estar seguro y hacer click en el boton 'Importar'.
          </p>

        </div>

        <div>
          <h5>PEGAR:</h5>
          <p class="weakText">
            Puedes pegar un solo quiz o varios quizzes a la vez.
          </p>
          <textarea id="importTextarea" 
            placeholder="Pegar el codigo aqui" 
            style="height: 250px"></textarea>

          <button id="importButton">Importar</button>

          <div class="basicBox">
            <H5>
              COMO EXPORTAR:
            </H5>

            <p class="weakText">
              Ve a la seccion de 'Catalogo' >> Selecciona el quiz o quizzes con los botones "◻" >> Click en el boton "Exportar" >> Copia el codigo que aparece en la ventana emergente.
            </p>
          
          </div>

        </div>

        
    `;
};
