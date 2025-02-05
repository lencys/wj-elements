var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Card - Header ]\n*/\n\n:host {\n    background: transparent;\n    border-radius: 0;\n    border-bottom: 0;\n    padding: var(--wje-card-header-padding);\n    position: relative;\n    display: flex;\n    flex-direction: column;\n}\n\n:host(.wje-separator):after {\n    content: '';\n    height: 1px;\n    background: rgba(0, 0, 0, 0.08);\n    margin-top: 0.5rem;\n}\n";
class CardHeader extends WJElement {
  /**
   * CardHeader constructor method.
   */
  constructor() {
    super();
    /**
     * Class name for the CardHeader.
     * @type {string}
     */
    __publicField(this, "className", "CardHeader");
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
   * Sets up the attributes for the CardHeader.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the CardHeader.
   * @returns {DocumentFragment} The created document fragment.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    if (this.hasAttribute("separator")) this.classList.add("wje-separator");
    fragment.appendChild(element);
    return fragment;
  }
}
WJElement.define("wje-card-header", CardHeader);
export {
  CardHeader as default
};
