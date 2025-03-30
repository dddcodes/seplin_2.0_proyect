import * as u from "../utils.js";
import { CONFIG } from "../config.js";

import getQuizInfo from "../localStorage/getQuizInfo.js";

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
                ${getQuizInfo().question}
            </div>
        </div>
    `;
};
