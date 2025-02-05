var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Divider ]\n*/\n\n:host(:not([vertical])) {\n    display: block;\n    border-top: var(--wje-divider-border-width) var(--wje-divider-border-style) var(--wje-divider-border-color);\n    margin: var(--wje-divider-spacing) 0;\n}\n\n:host([vertical]) {\n    display: inline-block;\n    height: 100%;\n    border-left: var(--wje-divider-border-width) var(--wje-divider-border-style) var(--wje-divider-border-color);\n    margin: 0 var(--wje-divider-spacing);\n}\n";
class Divider extends WJElement {
  /**
   * Constructor for the Divider class.
   */
  constructor() {
    super();
    /**
     * The class name for the Divider class.
     * @type {string}
     */
    __publicField(this, "className", "Divider");
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {string} The CSS stylesheet.
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
   * Sets up the attributes for the Divider.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the Divider.
   * @returns {DocumentFragment} The created document fragment.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    let slot = document.createElement("slot");
    native.appendChild(slot);
    fragment.appendChild(native);
    return fragment;
  }
}
Divider.define("wje-divider", Divider);
export {
  Divider as default
};
