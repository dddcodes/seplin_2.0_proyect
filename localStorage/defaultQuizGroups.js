import { LSM } from "../localStorage/localStorageManager.js";

export default () => {
  if (!localStorage.getItem("localGroups")) {
    LSM.createItem("localGroups");
    const defaultGroups = [
      {
        name: "Conciencia histórica 4to semestre",
        description:
          "Prueba tus conocimientos para no fallar en el examen we :)",
        color: "amarillo",
      },
      {
        name: "Deportes 4to semestre",
        description:
          "Prueba tus conocimientos para no fallar en el examen we :)",
        color: "verde",
      },
    ];
    defaultGroups.forEach((group) => {
      LSM.addGroup(group.name, group.description, group.color);
    });

    //agregar todos los quizzes existentes a estos grupos
    setTimeout(() => {

      const localGroups = LSM.getLocalGroups();
      const groupsKeys = Object.entries(localGroups);
      const localQuizzes = LSM.getLocalQuizzes();
      const quizzesKeys = Object.entries(localQuizzes);
      quizzesKeys.forEach((quiz, index) => {
        if (index <= 14) {
          quiz[1].groupID = groupsKeys[0][0];
        } else if (index >= 15) {
          quiz[1].groupID = groupsKeys[1][0];
        }
      });
      LSM.updateLocalQuizzes(localQuizzes);
    }, 200);
  }
  console.log(LSM.getLocalGroups());
};
