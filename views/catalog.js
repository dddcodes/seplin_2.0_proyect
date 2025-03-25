import * as u from "../utils.js";
import { CONFIG } from "../config.js";
import { LSM } from "../localStorageManager.js";

const actualView = CONFIG.routes.catalog;

export default () => {
  u.setPageTitle(actualView.title);

  return `
        <div class="titleBox">
            ${actualView.title}
        </div>
        <p>${actualView.description}</p>
        
        <div class="basicBox OnlyBorder">
            <div class="catalog-container">
                ${LSM.getLocalQuizzes()["001"].question}
            </div>
        </div>
    `;
};
