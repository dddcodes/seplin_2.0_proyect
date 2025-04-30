import { LSM } from "../localStorage/localStorageManager.js";

export default () => {
  if (!localStorage.getItem("localGroups")) {
    LSM.createItem("localGroups");
    const defaultGroups = [
      {
        name: "Conciencia histórica",
        description:
          "Prueba tus conocimientos para no fallar en el examen we :)",
        color: "aqua",
      },
    ];
    defaultGroups.forEach((group) => {
      LSM.addGroup(group.name, group.description, group.color);
    });
    //agregar todos los quizzes existentes a este grupo
    setTimeout(() => {
      //un forEach donde cada cada quiz de localQuizzes se le asigne el grupID del unico grupo existente
      const localGroups = LSM.getLocalGroups();
      const groupsKeys = Object.entries(localGroups);
      const localQuizzes = LSM.getLocalQuizzes();
      const quizzesKeys = Object.entries(localQuizzes);
      quizzesKeys.forEach((quiz) => {
        quiz[1].groupID = groupsKeys[0][0];
        console.log(groupsKeys[0][0]);
      });
      LSM.updateLocalQuizzes(localQuizzes);
    }, 200);
    /*
    setTimeout(() => {
      const localGroups = LSM.getLocalGroups();
      const groupsKeys = Object.entries(localGroups);
      console.log(groupsKeys[0][0]); //GROUP ID

      const localQuizzes = LSM.getLocalQuizzes();
      const quizzesKeys = Object.entries(localQuizzes);

      quizzesKeys.forEach((quiz, index) => {
        const groupIndex = Math.floor(index / 3); //Cada grupo tiene 3 quizzes
        quiz[1].groupID = groupsKeys[groupIndex][0];
      });
      LSM.updateLocalQuizzes(localQuizzes);
    }, 200);*/
  }
  console.log(LSM.getLocalGroups());
};
