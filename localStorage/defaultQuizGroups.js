import { LSM } from "../localStorage/localStorageManager.js";

export default () => {
  if (!localStorage.getItem("localGroups")) {
    LSM.createItem("localGroups");
    const defaultGroups = [
      {
        name: "Literatura II",
        description: "Tipos de literatura, y generos literarios",
        color: "blue"
      },
      {
        name: "English",
        description: "Group 2 description",
        color: "green"
      },
      {
        name: "Spanish",
        description: "Group 3 description",
        color: "red"
      },
      {
        name: "Math",
        description: "Group 4 description",
        color: "yellow"
      }
    ]
    defaultGroups.forEach((group) => {
      LSM.addGroup(group.name, group.description, group.color);
    });
  }
  console.log(LSM.getLocalGroups());
};
