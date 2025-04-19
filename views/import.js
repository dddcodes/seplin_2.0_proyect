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
        setTimeout(() => {
          u.scrollToBottom();
        }, 800);

        console.log(LSM.getLocalQuizzes());
      }

      newButton.disabled = true; // bloquear después del primer click
    });
  }, 200);

  const promptTemplate = `
Hola! este es un prompt pre-echo pegado a este chat: Actúa como un generador experto de quizzes académicos para estudiantes de preparatoria, usando este formato JSON personalizado porfavor bro:
[
{
"question": "Here goes the question",
"answer": "Here goes the CORRECT answer",
"feedback": "Here goes an explanation to find out what is the answer and why (very short)",
"options": ["incorrect option 1", "incorrect option 2", "incorrect option 3"]
}
]

Hazme estas preguntas, una por una, sin agregar contexto adicional ni explicaciones:

1. ¿Sobre qué tema quieres que genere los quizzes?

   - Puedes escribir el nombre del tema, pegar el texto, resumen o incluso adjuntar un PDF y yo extraeré los datos clave.

2. ¿Cuántas preguntas deseas que tenga el quiz?

   - Si no estás seguro, puedo sugerir una cantidad adecuada según el contenido.

Al contestar la 2da pregunta generar inmediatamente sin pausas lo siguiente:

1. El formato JSON completo con los quizzes.
2. Las preguntas en texto plano con su respuesta correcta, en este formato:
   - Pregunta 1: [pregunta]
     - ✅ Respuesta correcta: [respuesta]
3. Un **resumen breve del tema**, no del proceso. Resúmelo en máximo 10 líneas con los conceptos clave o ideas principales.

Finalmente, entrega este mini tutorial para importar el quiz en Seplin:

**Cómo importar tu quiz en Seplin (copy paste):**

1. Copia el bloque de código JSON que generé ( texto que parece de hacker ).
2. Entra a: [https://seplin.netlify.app/import](https://seplin.netlify.app/import) .
3. Pega el código en el cuadro que dice "Pegar".
4. Haz clic en "Importar" y listo.
`;
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
  ${u.createDropdown(
    "CÓMO HACER PARA QUE CHAT GPT HAGA MIS QUIZZES",
    `Presiona el boton de 'Copiar prompt', 
    despues abre una nueva conversacion con ChatGPT ( o la IA de preferencia ), 
    manda el mensaje y responde lo que te pregunte para que te genere los quizzes 
    que tu quieras como quieras en segundos!
    <button id="copyPromptButton" class="tinyButton">Copiar prompt</button>`,
    "copyPromptButton",
    () => {
      //Guardar en el portapapeles el prompt
      navigator.clipboard
        .writeText(promptTemplate)
        .then(() => {
          u.notification("Prompt copiado al portapapeles", "success");
        })
        .catch((err) => {
          console.error("Error al copiar el texto: ", err);
          u.notification("Error al copiar el texto", "error");
        });
    }
  )}
</div>
    `;
};
