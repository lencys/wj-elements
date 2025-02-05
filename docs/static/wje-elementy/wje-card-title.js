var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Card - Title ]\n*/\n\n:host {\n    font-size: var(--wje-card-title-font-size);\n    font-weight: var(--wje-card-title-font-weight);\n    margin: var(--wje-card-title-margin);\n    padding: var(--wje-card-title-padding);\n    line-height: var(--wje-card-title-line-height);\n    display: block;\n    position: relative;\n}\n";
class CardTitle extends WJElement {
  /**
   * CardTitle constructor method.
   */
  constructor() {
    super();
    /**
     * Class name for the CardTitle.
     * @type {string}
     */
    __publicField(this, "className", "CardTitle");
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {object} The styles object.
   * @static
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Getter for the observed attributes.
   * @returns {Array} An empty array.
   * @static
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the CardTitle.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the CardTitle element.
   * @returns {DocumentFragment} The created document fragment.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
WJElement.define("wje-card-title", CardTitle);
export {
  CardTitle as default
};
