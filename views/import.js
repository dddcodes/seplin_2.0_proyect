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
  <h3>
    INSTRUCCIONES:
  </h3>

  <p class="weakText">
    1 - Copia el código del quiz (o quizzes).
  </p>
  <p class="weakText">
    2 - Entra a esta sección de 'Importar' y pega el código en el cuadro de texto grande.
  </p>
  <p class="weakText">
    3 - Está seguro y haz clic en el botón 'Importar'.
  </p>
</div>

<div>
  <h3>PEGAR:</h3>
  <textarea id="importTextarea" 
    placeholder="Pegar el código aquí ( Puedes pegar un solo quiz o varios quizzes a la vez. )" 
    style="height: 250px"></textarea>

  <button id="importButton" class="llamativeButton">Importar</button>


  ${u.createDropdown(
    "CÓMO EXPORTAR",
    `Ve a '${CONFIG.url}/catalog' >> Selecciona el quiz o quizzes que deseas exportar con los botones '◻' >> Haz clic en el botón 'Exportar' >> Copia el código que aparece en la ventana emergente.`
  )}
</div>
    `;
};
