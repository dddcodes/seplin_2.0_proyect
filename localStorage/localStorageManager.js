import * as u from "../utils.js";

/**
 * LocalStorage Manager
 * A collection of functions to handle basic CRUD operations with localStorage
 */
export const LSM = {
  setItem: function (key, value) {
    try {
      const stringValue = JSON.stringify(value);
      localStorage.setItem(key, stringValue);

      console.log(`[Success] Stored item with key: "${key}"`);
      return true;
    } catch (error) {
      console.error(`[Error] Failed to store item "${key}":`, error);
      u.notification("Error con LocalStorage", "error");
      return false;
    }
  },
  createItem: function (key, value = {}) {
    if (localStorage.getItem(key)) {
      console.warn(`[Warning] LocalStorage Key "${key}" already exists.`);
      return false;
    }
    return this.setItem(key, value);
  },
  updateItem: function (key, newValue) {
    if (!localStorage.getItem(key)) {
      console.warn(`[Warning] Key "${key}" doesn't exist in localStorage`);
      return false;
    }

    try {
      const stringValue = JSON.stringify(newValue);
      localStorage.setItem(key, stringValue);

      console.warn(`[Success] Updated item with key: "${key}"`);
      return true;
    } catch (error) {
      console.error(`[Error] Failed to update item "${key}":`, error);
      return false;
    }
  },
  removeItem: function (key) {
    if (!localStorage.getItem(key)) {
      console.warn(`[Warning] Key "${key}" doesn't exist in localStorage`);
      return false;
    }

    try {
      localStorage.removeItem(key);
      console.log(`[Success] Removed item with key: "${key}"`);
      return true;
    } catch (error) {
      console.error(`[Error] Failed to remove item "${key}":`, error);
      return false;
    }
  },
  getItem: function (key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`[Error] Failed to retrieve item "${key}":`, error);
      return null;
    }
  },
  updateLocalQuizzes: function (newValue) {
    LSM.updateItem("localQuizzes", newValue);
  },
  RESET: function () {
    LSM.removeItem("localQuizzes");
    LSM.removeItem("localGroups");
    console.warn("RESETEADO");
  },

  //QUIZZES FUNCTIONS ============================================
  addQuiz: function (question, answer, feedback, options, groupID = null) {
    try {
      // 1. Get existing parent item
      const localQuizzesKey = "localQuizzes";
      const localQuizzes = LSM.getItem(localQuizzesKey);

      const hitScore = [false, false, false, false, false];
      const newQuizID = uuidv4();
      const newQuizContent = {
        question,
        answer,
        feedback,
        options,
        hitScore,
        groupID,
      };

      // 2. Verify parent is an object
      if (typeof localQuizzes !== "object" || Array.isArray(localQuizzes)) {
        console.warn(
          `[Warning] Parent item "${localQuizzesKey}" is not an object`
        );
        return false;
      }

      // 3. Check if nested key already exists
      if (localQuizzes.hasOwnProperty(newQuizID)) {
        console.warn(
          `[Warning] NEW QUIZ ID "${newQuizID}" already exists in "${localQuizzesKey}"`
        );
        return false;
      }

      // 4. Add the new nested object
      localQuizzes[newQuizID] = newQuizContent;

      // 5. Save back to localStorage
      LSM.updateItem(localQuizzesKey, localQuizzes);
      console.log(
        `[Success] Added nested object "${newQuizID}" to "${localQuizzesKey}"`
      );
    } catch (error) {
      console.error(
        `[Error] Failed to add nested object "${newQuizID}" to "${localQuizzesKey}":`,
        error
      );
      return false;
    }
  },
  updateQuiz: function (quizID, question, answer, feedback, options, groupID) {
    //ahora todo el mismo proceso pero con try y catch, en caso de que el quizID no exista
    try {
      const localQuizzes = LSM.getItem("localQuizzes");
      localQuizzes[quizID].question = question;
      localQuizzes[quizID].answer = answer;
      localQuizzes[quizID].feedback = feedback;
      localQuizzes[quizID].options = options;
      localQuizzes[quizID].groupID = groupID;
      LSM.updateLocalQuizzes(localQuizzes);
      u.notification("Quiz actualizado con éxito", "success");
    } catch (error) {
      console.error(`[Error] Failed to update quiz "${quizID}":`, error);
      u.notification(
        `Error al actualizar el quiz "${quizID}". Quiz no encontrado.`,
        `error`
      );
      return;
    }
  },
  removeQuiz: function (quizID) {
    //ahora todo el mismo proceso pero con try y catch, en caso de que el quizID no exista
    try {
      if (!localStorage.getItem("localQuizzes").includes(quizID)) {
        console.warn(`[Warning] Key "${quizID}" doesn't exist in localStorage`);
        return false;
      } else {
        let localQuizzes = LSM.getItem("localQuizzes");
        delete localQuizzes[quizID];
        LSM.setItem("localQuizzes", localQuizzes);
      }
    } catch (error) {
      console.error(`[Error] Failed to remove quiz "${quizID}":`, error);
      return;
    }
  },
  getLocalQuizzes: function () {
    return LSM.getItem("localQuizzes");
  },

  //GROUPS FUNCTIONS ============================================
  addGroup: function (name, description, color) {
    try {
      const localGroups = LSM.getItem("localGroups");
      const newGroupID = uuidv4();
      const newGroupContent = {
        name,
        description,
        color
      };
      localGroups[newGroupID] = newGroupContent;
      LSM.updateItem("localGroups", localGroups);
    } catch (error) {
      console.error(`[Error] Failed to add group:`, error);
    }
  },
  getLocalGroups: function () {
    return LSM.getItem("localGroups");
  },
};

/*FALTA AGREGAR FUNCIONES PARA LOS GRUPOS DE QUIZZES: 
    -> removeGroup(ID, withQuizzes = false)
*/
