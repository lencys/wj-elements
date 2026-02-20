var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Card - Content ]\n*/\n\n:host {\n    display: block;\n    padding: var(--wje-card-content-padding);\n    &.no-padding {\n        .row {\n            margin-left: 0;\n            margin-right: 0;\n        }\n    }\n    &.no-bottom-padding {\n        padding-bottom: 0;\n    }\n    &.no-top-padding {\n        padding-top: 0;\n    }\n    .title {\n        margin-top: 0;\n    }\n    &.scrollable {\n        margin-bottom: 20px;\n    }\n    h3 {\n        line-height: 34px;\n        font-size: 26px;\n    }\n}\n";
class CardContent extends WJElement {
  /**
   * CardContent constructor method.
   * @class
   */
  constructor() {
    super();
    /**
     * Class name for the CardContent element.
     * @type {string}
     */
    __publicField(this, "className", "CardContent");
  }
  /**
   * Get CSS stylesheet for the CardContent element.
   * @static
   * @returns {object} styles - The CSS styles for the CardContent element.
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Setup attributes for the CardContent element.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draw method for the CardContent element.
   * @returns {object} fragment - The document fragment containing the drawn element.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
WJElement.define("wje-card-content", CardContent);
export {
  CardContent as default
};
//# sourceMappingURL=wje-card-content.js.map
