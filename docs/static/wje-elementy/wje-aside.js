var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Aside ]\n*/\n\n:host {\n    --wje-aside-width: '100px';\n    --wje-aside-top: 0;\n    --wje-aside-border-color: var(--wje-border-color);\n    --wje-aside-border-width: 0 1px 0 0;\n    --wje-aside-border-style: solid;\n    box-sizing: border-box;\n    flex-shrink: 0;\n    overflow: auto;\n    border-color: var(--wje-aside-border-color);\n    border-width: var(--wje-aside-border-width);\n    border-style: var(--wje-aside-border-style);\n}\n\n:host(.open) {\n    display: block !important;\n}\n\n@media (min-width: 768px) {\n    :host([fixed]) {\n        position: fixed;\n        width: var(--wje-aside-width);\n        top: var(--wje-aside-top);\n        height: calc(100% - var(--wje-aside-top));\n    }\n}\n\n@media (max-width: 768px) {\n    :host {\n        display: none;\n    }\n\n    :host([variant='top-start']) {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 80%;\n        height: 100%;\n        z-index: 9999;\n        background-color: #fff;\n    }\n}\n";
class Aside extends WJElement {
  /**
   * Constructor for the Aside class.
   */
  constructor() {
    super();
    /**
     * The class name for the Aside element ddddd.
     * @type {string}
     */
    __publicField(this, "className", "Aside");
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {object} The styles for the Aside element.
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Getter for the observed attributes.
   * @returns {Array} An empty array as there are no observed attributes.
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Method to setup attributes for the Aside element.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Method to draw the Aside element.
   * @returns {object} The document fragment containing the drawn element.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    if (this.width) this.style.setProperty("--wje-aside-width", this.width);
    if (this.top && this.hasAttribute("fixed")) this.style.setProperty("--wje-aside-top", this.top);
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
Aside.define("wje-aside", Aside);
export {
  Aside as default
};
