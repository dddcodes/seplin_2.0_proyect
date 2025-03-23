import * as u from "../utils.js";
import { CONFIG } from "../config.js";

const actualView = CONFIG.routes.archived;

export default () => {
  u.setPageTitle(actualView.title);

  return `
        <div class="titleBox">
            ${actualView.title}
        </div>
        <p>${actualView.description}</p>
    `;
};
