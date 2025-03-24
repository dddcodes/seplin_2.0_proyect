console.log("SCRIPT LOADED");

/**
 * LocalStorage Manager
 * A collection of functions to handle basic CRUD operations with localStorage
 */

const localStorageManager = {
  /**
   * Creates or stores an item in localStorage
   */
  setItem: function (key, value) {
    try {
      const stringValue = JSON.stringify(value);
      localStorage.setItem(key, stringValue);
      console.log(`[Success] Stored item with key: "${key}"`);
      return true;
    } catch (error) {
      console.error(`[Error] Failed to store item "${key}":`, error);
      return false;
    }
  },
  /*Creates a new item in localStorage (fails if key exists) */
  createItem: function (key, value) {
    if (localStorage.getItem(key)) {
      console.warn(`[Warning] LocalStorage Key "${key}" already exists.`);
      return false;
    }
    return this.setItem(key, value);
  },

  /**
   * Updates an existing item in localStorage
   */
  updateItem: function (key, newValue) {
    if (!localStorage.getItem(key)) {
      console.warn(`[Warning] Key "${key}" doesn't exist in localStorage`);
      return false;
    }

    try {
      const stringValue = JSON.stringify(newValue);
      localStorage.setItem(key, stringValue);
      console.log(`[Success] Updated item with key: "${key}"`);
      return true;
    } catch (error) {
      console.error(`[Error] Failed to update item "${key}":`, error);
      return false;
    }
  },

  /**
   * Removes an item from localStorage
   */
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

  /**
   * Bonus: Retrieves an item from localStorage
   */
  getItem: function (key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`[Error] Failed to retrieve item "${key}":`, error);
      return null;
    }
  },

  addQuiz: function (newQuizID, newQuizContent) {
    try {
      // 1. Get existing parent item
      const localQuizzesKey = "localQuizzes";
      const localQuizzes = localStorageManager.getItem(localQuizzesKey);

      if (localQuizzes === null) {
        console.warn(`[Warning] Parent key "${localQuizzesKey}" doesn't exist`);
        return false;
      }

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
      localStorageManager.updateItem(localQuizzesKey, localQuizzes);
      console.log(
        `[Success] Added nested object "${newQuizID}" to "${localQuizzesKey}"`
      );
      console.log(localQuizzes)
    } catch (error) {
      console.error(
        `[Error] Failed to add nested object "${newQuizID}" to "${localQuizzesKey}":`,
        error
      );
      return false;
    }
  },

  removeQuiz: function (quizID) {
    //ahora todo el mismo proceso pero con try y catch, en caso de que el quizID no exista
    try {
      if (!localStorage.getItem("localQuizzes").includes(quizID )) {
        console.warn(`[Warning] Key "${quizID}" doesn't exist in localStorage`);
        return false;
      } else {
        let localQuizzes = localStorageManager.getItem("localQuizzes");
        delete localQuizzes[quizID];
        localStorageManager.setItem("localQuizzes", localQuizzes);
      }
    } catch (error) {
      console.error(`[Error] Failed to remove quiz "${quizID}":`, error);
      return;
    }
  },

  getLocalQuizzes: function () {
    return localStorageManager.getItem("localQuizzes");
  },
};

// Usage Examples:
// Store data
localStorageManager.createItem("localQuizzes", {
  "001": {
    question: "What is the capital of Spain?",
    correctAnswer: "Madrid",
    incorrectAnswers: ["Barcelona", "Lisbon", "Paris"],
  },
});

// Update data
/*
localStorageManager.updateItem("localQuizzes", {
  question: "What is the capital of France?",
});*/

// Retrieve data
let localQuizzes = localStorageManager.getItem("localQuizzes");
console.log(localQuizzes);

//add a new quiz
localStorageManager.addQuiz("002", {
  question: "What is the capital of France?",
  correctAnswer: "Paris",
  incorrectAnswers: ["Madrid", "Lisbon", "Barcelona"],
});

localQuizzes = localStorageManager.getItem("localQuizzes");
console.log(localQuizzes);

// Remove data
//localStorageManager.removeItem("localQuizzes");

function RESET() {
  localStorageManager.removeItem("localQuizzes");
  console.log("RESETEADO");
}

const LSM = localStorageManager;
