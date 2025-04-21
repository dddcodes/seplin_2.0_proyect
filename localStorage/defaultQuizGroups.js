import { LSM } from "../localStorage/localStorageManager.js";

export default () => {
  if (!localStorage.getItem("localGroups")) {
    LSM.createItem("localGroups");
    const defaultGroups = [
      {
        name: "Literatura",
        description: "Tipos de literatura, y generos literarios",
        color: "blue",
      },
      {
        name: "Biología",
        description: "Estudio de los seres vivos, genética y ecología",
        color: "green",
      },
      {
        name: "Historia",
        description: "Eventos y procesos históricos relevantes",
        color: "brown",
      },
    ];
    defaultGroups.forEach((group) => {
      LSM.addGroup(group.name, group.description, group.color);
    });

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
    }, 200);
  }
  console.log(LSM.getLocalGroups());
};
