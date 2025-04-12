import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";
import { navigateTo } from "../router.js";

const actualView = CONFIG.routes.catalog;

export default () => {
  u.setPageTitle(actualView.title);

  const sidebar = document.querySelector("#sidebar");
  const navbar = document.querySelector("#navigationBar");

  u.disappear(navbar);
  u.disappear(sidebar);

  const LQ = {
    content: LSM.getLocalQuizzes(),
    keys: Object.keys(LSM.getLocalQuizzes()),
    length: Object.keys(LSM.getLocalQuizzes()).length,
  };
  const reloadLQ = () => {
    LQ.content = LSM.getLocalQuizzes();
    LQ.keys = Object.keys(LSM.getLocalQuizzes());
    LQ.length = Object.keys(LSM.getLocalQuizzes()).length;
  };
  const printAllOptions = (quizData) => {
    const options = quizData.options;
    let optionsHTML = ``;
    for (let i = 0; i < options.length; i++) {
      const option = options[i];

      optionsHTML += `
          <p class="option">
            ${i + 1} - ${option}
          </p>
      `;
    }
    return optionsHTML;
  };
  const convertQuizDataToHTML = (quizData, index) => {
    const quizID = LQ.keys[index];

    setTimeout(() => {
      const editButton = document.querySelector(
        `#quizDataCard${index} .editButton`
      );

      editButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que el evento se propague al contenedor padre
        navigateTo(`/quiz-editor?=${quizID}`); //lleva al editor de quizzes
      });
    }, 500);

    return `
      <div class="quizDataCard" id="quizDataCard${index}" index="${index}">

        <div class="headDiv">

          <p class="index">${index + 1}</p>

          <button class="editButton">
            <span class="material-symbols-rounded">
              edit
            </span>
          </button>

          <button class="seeMoreButton" onClick="
            document.querySelector(
              '#quizDataCard${index} > .moreDataDiv'
            ).classList.toggle('hidden');
          ">
            <span class="material-symbols-rounded">
              visibility
            </span>
            
          </button>

          <button class="selectButton" onClick="
            document.querySelector(
              '#quizDataCard${index}'
            ).classList.toggle('selected');
            ">
            <span class="material-symbols-rounded">
              check_box_outline_blank
            </span> 
          </button>

        </div>

        <div class="dataDiv">
          <p class="group">Sin grupo</p>
          <p class="question">${quizData.question}</p>
        </div>

        <div class="moreDataDiv hidden  ">
          <div class="answer">
            <p class="title">RESPUESTA</p>
            <p class="content">
              ${quizData.answer}
            </p>
          </div>
          <div class="feedback">
            <p class="title">EXPLICACIÓN</p>
            <p class="content">
              ${quizData.feedback}
            </p>
          </div>

          <div class="optionsBox">
            <p class="title">OPCIONES INCORRECTAS</p>
            <div class="content">
              ${printAllOptions(quizData)}
            </div>
          </div>

          <p class="weakText">Unique ID: ${quizID}</p>

        </div>        

      </div>
    `;
  };

  const getSelectedIndexes = () => {
    // 1. Selecciona todos los elementos con la clase "selected"
    const elements = document.querySelectorAll(".selected");

    // 2. Crea un arreglo para guardar los índices
    const indexes = [];

    // 3. Recorre cada elemento encontrado
    elements.forEach((element) => {
      // 4. Obtiene el atributo "index" como texto
      const indexString = element.getAttribute("index");

      // 5. Convierte el texto a número
      const indexNumber = Number(indexString);

      // 6. Agrega el número al arreglo si es válido
      if (!isNaN(indexNumber)) {
        indexes.push(indexNumber);
      }
    });

    // 7. Devuelve el arreglo final
    return indexes;
  };

  setTimeout(() => {
    u.extendedMainAppWidth();

    const catalogBar = document.querySelector("#catalogBar");
    u.disappear(catalogBar);

    const quizzesDataContainer = document.getElementById(
      "quizzesDataContainer"
    );
    const loadAllQuizzesHTML = () => {
      quizzesDataContainer.innerHTML = ``;
      for (let i = 0; i < LQ.length; i++) {
        /*ID*/ const actualID = LQ.keys[i];
        console.log(actualID);

        /*DATA*/ const actualQuizData = LQ.content[actualID];

        /*from DATA to HTML*/
        const quizHTML = convertQuizDataToHTML(actualQuizData, i);

        /*HTML added to CATALOG HTML LOL*/
        quizzesDataContainer.innerHTML += quizHTML;

        //Algo seleccionado: catalogBar aparece
        const selectButtons = document.querySelectorAll(".selectButton");
        selectButtons.forEach((button) => {
          button.addEventListener("click", () => {
            u.appear(catalogBar, "flex");
            console.log("Algo seleccionado");
          });
        });

        //Nada seleccionado: catalogBar desaparece
        const quizDataCards = document.querySelectorAll(".quizDataCard");
        quizDataCards.forEach((card) => {
          card.addEventListener("click", () => {
            const selectedCards = document.querySelectorAll(".selected");
            if (selectedCards.length === 0) {
              u.disappear(catalogBar);
              console.log("Nada seleccionado");
            }
          });
        });
      }
    };

    loadAllQuizzesHTML();

    //BAR BUTTONS ==============

    const createButton = document.querySelector("#createButton");
    createButton.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("/create-quizzes");
    });

    const removeButton = document.querySelector("#removeButton");
    removeButton.addEventListener("click", () => {
      const selectedIndexes = getSelectedIndexes();
      if (confirm("¿Seguro que quieres eliminar los seleccionados?")) {
        selectedIndexes.forEach((index) => {
          const quizID = LQ.keys[index];
          console.log(`[CATALOG] => ${quizID} Removed`);
          LSM.removeQuiz(quizID); //Actualiza el LocalStorage
        });

        reloadLQ(); //Actualiza el LocalQuizzes
        loadAllQuizzesHTML(); //Se carga el HTML de nuevo

        u.disappear(catalogBar); //Se desaparece el CatalogBar
        let notifMessage =
          selectedIndexes.length === 1
            ? "Quiz eliminado :)"
            : "Quizzes Eliminados :)";
        u.notification(notifMessage);
      } else {
        u.notification("Operación cancelada :)");
      }
    });
  }, 200);

  return `
  <button id="backButton">
    <span class="material-symbols-rounded">
      close
    </span>
  </button>
  
  <button id="createButton" data-link>
    <span class="material-symbols-rounded">
      note_stack_add
    </span>
  </button>

  <p class="titleBox">TUS QUIZZES!</p>

  <div id="quizzesDataContainer">
  </div>

  <div id="catalogBar">
    <button id="removeButton">Eliminar</button>
    <button id="exportButton">Exportar</button>
  </div>
  
  `;
};
