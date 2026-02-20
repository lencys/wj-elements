var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Container ]\n*/\n\n:host {\n    display: flex;\n    flex-direction: row;\n    flex: 1;\n    flex-basis: auto;\n    box-sizing: border-box;\n    min-width: 0;\n}\n\n:host([vertical]) {\n    flex-direction: column;\n}\n\n@media (min-width: 768px) {\n    :host([indent]) {\n        margin-left: var(--wje-container-indent);\n    }\n}\n";
class Container extends WJElement {
  /**
   * Container constructor method.
   */
  constructor() {
    super();
    /**
     * Class name for the Container.
     * @type {string}
     */
    __publicField(this, "className", "Container");
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
   * Sets up the attributes for the Container.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the Container element.
   * @returns {DocumentFragment} The created document fragment.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    if (this.indent) this.style.setProperty("--wje-container-indent", this.indent);
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
WJElement.define("wje-container", Container);
export {
  Container as default
};
//# sourceMappingURL=wje-container.js.map
