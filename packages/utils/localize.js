import { LocalizerDefault, registerTranslation } from "../localize/localize.js";

export class Localizer extends LocalizerDefault {
  constructor(element) {
    super(element);
  }
  static registerTranslation(...translation) {
    registerTranslation(...translation);
  }
}

