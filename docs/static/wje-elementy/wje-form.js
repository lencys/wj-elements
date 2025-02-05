var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ Wj Form ]\n*/\n:host {\n  width: 100%;\n}";
class Form extends WJElement {
  /**
   * Constructor for the Form class.
   */
  constructor() {
    super();
    /**
     * The class name for the Form class.
     * @type {string}
     */
    __publicField(this, "className", "Form");
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {*}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Getter for the observed attributes.
   * @returns {*[]}
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the Form.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the Form.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
Form.define("wje-form", Form);
export {
  Form as default
};
