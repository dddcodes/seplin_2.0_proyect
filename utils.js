import { LSM } from "./localStorage/localStorageManager.js";

export function setPageTitle(newTitle) {
  document.title = newTitle || "TITLE NOT FOUND";
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

export function random(min, max) {
  // Validación de parámetros
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Ambos parámetros deben ser números");
  }

  // Asegurar que min sea menor que max
  [min, max] = [Math.min(min, max), Math.max(min, max)];

  // Fórmula para número aleatorio inclusivo

  const randomNumer = Math.floor(Math.random() * (max - min + 1)) + min;
  //console.log(randomNumer);

  return randomNumer;
}

export function shuffleArray(array) {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

export function disappear(element) {
  element.style.display = "none";
}

export function appear(element, display = "block") {
  element.style.display = display;
}

export function confirmLayoutVisibility() {
  const navbar = document.querySelector("#navigationBar");
  const mainApp = document.querySelector("#main");
  if (navbar.style.display !== "flex") {
    appear(navbar, "flex");
  }
  if (mainApp.style.display !== "flex") {
    appear(mainApp, "flex");
  }
}

export function back() {
  defaultMainAppWidth();
  window.history.back();
}

export function goBackWithConfirm(
  message = "¿Seguro que quieres ir devuelta bro?"
) {
  if (confirm(message)) {
    back();
  }
}

export function shiftAndPush(arr, newElement) {
  arr.shift(); // Elimina el primer elemento
  arr.push(newElement); // Agrega el nuevo al final
  return arr;
}

export function removeClassFromElement(element, className) {
  element.classList.remove(className);
}

export function addClassToElement(element, className) {
  element.classList.add(className);
}

export function extendedMainAppWidth() {
  const mainApp = document.querySelector("#main");
  addClassToElement(mainApp, "extended");

  if (backButton) {
    const backButton = document.querySelector("#backButton");
    backButton.addEventListener("click", () => {
      back();
    });
  }
}

export function defaultMainAppWidth() {
  const mainApp = document.querySelector("#main");
  if (mainApp.classList.contains("extended")) {
    removeClassFromElement(mainApp, "extended");
  }
}

export function resetAnimation(element) {
  element.classList.remove("animated");
  void element.offsetWidth; // Forzar el reflow
  element.classList.add("animated");
}

export function addFinalAnimationToElement(
  elementID,
  animationClassName,
  removeOrDisappear
) {
  const element = document.querySelector(elementID);
  element.classList.add(animationClassName);
  setTimeout(() => {
    element.classList.remove(animationClassName);
    if (removeOrDisappear === "disappear") disappear(element);
    if (removeOrDisappear === "remove") element.remove();
    if (removeOrDisappear === "removeFather") element.parentNode.remove();
  }, 600);
}

export function notification(msg, type) {
  const noti = document.createElement("div");
  noti.className = "notification";
  noti.textContent = msg;

  switch (type) {
    case "success":
      noti.classList.add("success");
      break;
    case "error":
      noti.classList.add("error");
      break;
    case "warning":
      noti.classList.add("warning");
      break;
    case "info":
      noti.classList.add("info");
      break;
  }

  setTimeout(() => {
    document.body.appendChild(noti);
  }, 300);

  // Animar con clase <<.show>>
  requestAnimationFrame(() => {
    noti.classList.add("show");
  });

  // Eliminar después <<duration>>
  setTimeout(() => {
    noti.classList.remove("show");
    setTimeout(() => noti.remove(), 2000);
  }, 2000);
}

export function applyCooldown(cooldownVariable) {
  if (cooldownVariable) return;

  cooldownVariable = true;

  setTimeout(() => {
    cooldownVariable = false;
  }, 3000);
}

export function activeBackButton() {
  setTimeout(() => {
    const backButton = document.getElementById("backButton");
    backButton.addEventListener("click", () => {
      u.goBackWithConfirm(); // Volver a la página anterior
    });
  }, 200);
}

export function createDropdown(
  title,
  content,
  callbackButtonID,
  callback,
  openingCallbackFunction
) {
  const dropdownID = uuidv4(); // Genera un ID único para el dropdown
  setTimeout(() => {
    if (callbackButtonID && callback) {
      document
        .querySelector(`#${callbackButtonID}`)
        .addEventListener("click", () => {
          callback();
        });
    }
  }, 300);

  setTimeout(() => {
    if (openingCallbackFunction) {
      const checkbox = document.querySelector(`#toggle${dropdownID}`);
      checkbox.addEventListener("click", () => {
        openingCallbackFunction();
      });
    }
  }, 500);

  return `
  <div class="dropdown">

      <input type="checkbox" id="toggle${dropdownID}">

      <label for="toggle${dropdownID}" class="dropdown-label">
        <span class="title">${title}</span>
        <span class="material-symbols-rounded">
          keyboard_arrow_down
        </span>
      </label>

      <div class="dropdown-content">
        <p>
          ${content}
        </p>
      </div>

    </div>`;
}

export function createPopup(
  title,
  content,
  callbackButtonID,
  callback,
  closePopupWhenCallback = false
) {
  const popup = document.createElement("div");
  const popupID = uuidv4(); // Genera un ID único para el popup
  popup.classList.add("popup");
  popup.id = `popup${popupID}`;
  popup.innerHTML = `
        <div class="popupContent" id="popupContent${popupID}">

          <div class="headContainer">
            <p class="popupTitle">${title}</p>
            <span class="material-symbols-rounded closePopup" id="closePopup${popupID}">
              close
            </span>
          </div>

          <div class="contentContainer">
            ${content}
          </div>

        </div>
  `;

  document.body.appendChild(popup);

  const closePopup = () => {
    addFinalAnimationToElement(
      "#popupContent" + popupID,
      "closePopupAnimation",
      "removeFather"
    );
  };
  const closePopupButton = document.querySelector(`#closePopup${popupID}`);
  closePopupButton.addEventListener("click", () => {
    closePopup();
  });

  const callbackButton = document.querySelector(`#${callbackButtonID}`);
  callbackButton.addEventListener("click", () => {
    if (closePopupWhenCallback === true) closePopup();
    callback();
  });
}

export function removePopups() {
  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    popup.remove();
  });
}

export function printGroups(specificFirstGroup) {
  const groupInput = document.getElementById("groupInput");
  const localGroups = Object.entries(LSM.getLocalGroups());
  localGroups.forEach((group) => {
    if (group[0] === specificFirstGroup) {
      groupInput.innerHTML += `<option value="${group[0]}" selected>${group[1].name}</option>`;
    }
  });
  groupInput.innerHTML += "<option value=''>Sin grupo</option>";
  console.log(localGroups);
  localGroups.forEach((group) => {
    groupInput.innerHTML += `<option value="${group[0]}" >${group[1].name}</option>`;
  });
}

export function getAvailableColorGroups() {
  return ["azul", "aqua", "verde", "rojo", "amarillo", "naranja", "morado", "menta"];
}
export function printAvailableColorGroups(specificDefaultColor) {
  const colorGroupInput = document.getElementById("colorGroupInput");
  const availableColors = getAvailableColorGroups();

  availableColors.forEach((color) => {
    if (color === specificDefaultColor) {
      colorGroupInput.innerHTML = `<option value="${color}" selected>${color}</option>`;
    }
  });
  colorGroupInput.innerHTML += "<option value=''>Sin color</option>";
  availableColors.forEach((color) => {
    colorGroupInput.innerHTML += `<option value="${color}">${color}</option>`;
  });
}

export function getGroupName(ID) {
  const localGroups = Object.entries(LSM.getLocalGroups());
  for (let i = 0; i < localGroups.length; i++) {
    const group = localGroups[i];
    if (group[0] === ID) {
      return group[1].name;
    }
  }
  return "<i>Sin grupo</i>";
}
