import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorage/localStorageManager.js";
import { navigateTo } from "../router.js";

const actualView = CONFIG.routes.groupCatalog;

export default () => {
  u.defaultMainAppWidth();

  const localGroups = LSM.getLocalGroups();
  const params = new URLSearchParams(window.location.search);
  const groupPageID = params.get("id");
  let groupName;
  if (groupPageID === "no-group") groupName = "Sin grupo";
  else if (groupPageID === "all-groups") localGroups[groupPageID].name;
  u.setPageTitle(groupName);

  const navbar = document.querySelector("#navigationBar");
  u.disappear(navbar);

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
              ${i + 1} - ${option || "<i>Sin opción</i>"}
            </p>
        `;
    }
    return optionsHTML;
  };
  const convertQuizDataToHTML = (quizData, index) => {
    const quizID = LQ.keys[index];

    const groupData = LSM.getLocalGroups()[quizData.groupID];
    const groupName = quizData.groupID ? groupData.name : "<i>Sin grupo</i>";
    const groupColor = quizData.groupID ? groupData.color : null;

    setTimeout(() => {
      const editButton = document.querySelector(
        `#quizDataCard${index} .editButton`
      );
      editButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que el evento se propague al contenedor padre
        navigateTo(`/quiz-editor?id=${quizID}`); //lleva al editor de quizzes
      });
    }, 100);

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
            <p class="group" ${
              quizData.groupID
                ? `style="color: var(--${groupColor}-color);"`
                : ""
            }
            id="group${quizData.groupID}">
            ${groupName}
          </p>  
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
                ${quizData.feedback || "<i>Sin feedback</i>"}
              </p>
            </div>
  
            <div class="optionsBox">
              <p class="title">OPCIONES INCORRECTAS</p>
              <div class="content">
                ${printAllOptions(quizData)}
              </div>
            </div>
  
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
    const hasSelectedQuizzes = () => {
      const selectedCards = document.querySelectorAll(".selected");
      if (selectedCards.length === 0) {
        u.addFinalAnimationToElement(
          "#catalogBar",
          "exitBottomFloatAnimation",
          "disappear"
        );
        console.log("Nada seleccionado");
      }
    };
    const loadAllQuizzesHTML = () => {
      quizzesDataContainer.innerHTML = ``;
      for (let i = 0; i < LQ.length; i++) {
        /*ID*/ const actualID = LQ.keys[i];
        /*DATA*/ const actualQuizData = LQ.content[actualID];

        if (
          groupPageID === actualQuizData.groupID ||
          (groupPageID === "no-group" && !actualQuizData.groupID)
        ) {
          /*from DATA to HTML*/
          const quizHTML = convertQuizDataToHTML(actualQuizData, i);

          /*HTML added to CATALOG HTML LOL*/
          quizzesDataContainer.innerHTML += quizHTML;
        }

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
            hasSelectedQuizzes();
          });
        });
      }
    };
    const loadHeadContainerHTML = () => {
      const groupData =
        groupPageID === "no-group"
          ? {
              name: "Quizzes sin grupo",
              description:
                "Estos quizzes estan solitos, agrupalos para organizarlos y hacer examenes por tema!",
              color: "",
            }
          : LSM.getLocalGroups()[groupPageID];
      const headContainer = document.getElementById("headContainer");
      headContainer.innerHTML = `
        <div id="headBox" ${
          groupData.color && groupData.color !== ""
            ? `style="border-color: var(--${groupData.color}-color);"`
            : ""
        }>

          <p id="groupCatalogTitle">${groupData.name}</p>

          ${
            groupPageID === "no-group"
              ? ``
              : `
            <button id="editGroupDataButton">
              <span class="material-symbols-rounded">
                edit
              </span>
            </button>
            <button id="removeGroupButton">
              <span class="material-symbols-rounded">
                delete
              </span>
            </button>
            `
          }

        </div>

        <p>${groupData.description}</p>
      `;
      u.setPageTitle(groupData.name);
      setTimeout(() => {
        const editGroupDataButton = document.querySelector(
          "#editGroupDataButton"
        );
        editGroupDataButton.addEventListener("click", () => {
          u.createPopup(
            "Editar Grupo",
            `
            <div>
              <label for="groupName">Nombre del Grupo:</label>
              <input id="groupName" type="text" value="${groupData.name}">
            </div>

            <div>
              <label for="groupDescription">Descripcion del Grupo:</label>
              <input id="groupDescription" type="text" value="${groupData.description}">
            </div>

            <div>
              <label for="colorGroupInput">Color del Grupo:</label>
              <select id="colorGroupInput"></select>
            </div>
            
            <button id="readyButton" class="llamativeButton">Confirmar</button>
        `,
            "readyButton",
            () => {
              const newGroupName = document.querySelector("#groupName").value;
              const newGroupDescription =
                document.querySelector("#groupDescription").value;
              const newGroupColor =
                document.querySelector("#colorGroupInput").value;

              LSM.updateGroup(groupPageID, {
                name: newGroupName,
                description: newGroupDescription,
                color: newGroupColor,
              });

              u.notification("Accion realizada con exito", "info");
              setTimeout(() => {
                reloadCatalog();
              }, 1500);
            },
            true
          );
          //Traducir el
          u.printAvailableColorGroups(groupData.color);
        });
        const removeButton = document.querySelector("#removeGroupButton");
        removeButton.addEventListener("click", () => {
          if (confirm("¿Seguro que quieres eliminar el grupo?")) {
            LSM.removeGroup(groupPageID);

            //Hacer una constante array que contenga todos los quizzes de ese grupo (buscando en su groupID)
            const quizzesToMove = Object.entries(LSM.getLocalQuizzes()).filter(
              (quiz) => quiz[1].groupID === groupPageID
            );
            console.log(quizzesToMove);
            //todos los groupID de quizzesToMove re asigna su valor a null
            quizzesToMove.forEach((quiz) => {
              LSM.updateQuiz(
                quiz[0],
                quiz[1].question,
                quiz[1].answer,
                quiz[1].feedback,
                quiz[1].options,
                null
              );
            });

            u.notification("Accion realizada con exito", "info");

            navigateTo("/");
          } else {
            u.notification("Accion cancelada", "info");
          }
        });
      }, 300);
    };
    const reloadCatalog = () => {
      reloadLQ();
      loadHeadContainerHTML(); //\\
      loadAllQuizzesHTML();
      hasSelectedQuizzes();
    };

    loadHeadContainerHTML(); //\\
    loadAllQuizzesHTML();

    const createButton = document.querySelector("#createButton");
    createButton.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("/quiz-creator");
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
            ? "Quiz eliminado"
            : "Quizzes Eliminados";
        u.notification(notifMessage, "error");
      } else {
        u.notification("Operación cancelada :)");
      }
    });

    const exportButton = document.querySelector("#exportButton");
    exportButton.addEventListener("click", () => {
      const selectedIndexes = getSelectedIndexes();
      let selectedQuizzes = [];
      selectedIndexes.forEach((index) => {
        //quiero que el quizID no se guarde
        const quizID = LQ.keys[index];
        const quizData = LQ.content[quizID];
        selectedQuizzes.push({
          question: quizData.question,
          answer: quizData.answer,
          group: quizData.group,
          feedback: quizData.feedback,
          options: quizData.options,
        });
      });
      //Transformo el objeto a JSON
      const jsonQuizzes = JSON.stringify(selectedQuizzes, null, 2);
      console.log(jsonQuizzes);

      //Ahora aparece un popup con el JSON
      u.createPopup(
        "Exportar Quizzes",
        `<p class="weakText">Este es formato JSON: un formato sencillo de entender para el algoritmo que importa quizzes en Seplin. Una IA puede entender esta informacion ( Como ChatGPT, puedes pasarle esta informacion para que mejore tus quizzes! ).</p>
          <textarea id="jsonQuizzes" readonly>${jsonQuizzes}</textarea>
          <button id="copyButton" class="llamativeButton">Copiar</button>`,
        "copyButton",
        () => {
          const textArea = document.querySelector("#jsonQuizzes");
          textArea.select();
          document.execCommand("copy");
          u.notification("Copiado al portapapeles", "info");
        }
      );
    });

    const groupButton = document.querySelector("#groupButton");
    groupButton.addEventListener("click", () => {
      u.createPopup(
        "Agrupar Quizzes",
        `
              <label for="group">Agregar quizzes seleccionados a:</label>
              <select id="groupInput" name="group">
              </select>
              <button id="readyButton" class="llamativeButton">Confirmar</button>
              `,
        "readyButton",
        () => {
          const selectedIndexes = getSelectedIndexes();
          const groupID = document.querySelector("#groupInput").value;
          console.log(selectedIndexes);
          selectedIndexes.forEach((index) => {
            const quizID = LQ.keys[index];
            const content = LQ.content[quizID];
            LSM.updateQuiz(
              quizID,
              content.question,
              content.answer,
              content.feedback,
              content.options,
              groupID
            );
          });

          u.notification("Accion realizada con exito", "info");
          setTimeout(() => {
            reloadCatalog();
          }, 1500);
        },
        true
      );
      u.printGroups();
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

    <div id="headContainer">
      
    </div>
  
  
    <div id="quizzesDataContainer">
    </div>
  
    <div id="catalogBar">

      <button id="removeButton">
        <span class="material-symbols-rounded">
          delete
        </span>
      </button>

      <button id="exportButton">
        <span class="material-symbols-rounded">
          upload
        </span>
        <p>Exportar</p>
      </button>

      <button id="groupButton">Cambiar de grupo</button>
    </div>
    
    `;
};
