import * as u from "../utils.js";
import { CONFIG } from "../config.js";

const actualView = CONFIG.routes.quizEditor;

export default () => {
  u.setPageTitle(actualView.title);

  return `
        <div class="titleBox">
          ${actualView.title}
        </div>
    `;
};
