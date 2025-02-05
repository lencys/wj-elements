var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Visually Hidden ]\n*/\n\n:host(:not(:focus-within)) {\n    position: absolute !important;\n    width: 1px !important;\n    height: 1px !important;\n    clip: rect(0 0 0 0) !important;\n    clip-path: inset(50%) !important;\n    border: none !important;\n    overflow: hidden !important;\n    white-space: nowrap !important;\n    padding: 0 !important;\n}\n";
class VisuallyHidden extends WJElement {
  /**
   * Creates an instance of VisuallyHidden.
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     * @type {string}
     */
    __publicField(this, "className", "VisuallyHidden");
  }
  /**
   * Returns the CSS stylesheet for the component.
   * @static
   * @returns {CSSStyleSheet} The CSS stylesheet
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Returns the list of observed attributes.
   * @static
   * @returns {Array} An empty array
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the component for the visually hidden element.
   * @returns {object} Document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let slot = document.createElement("slot");
    fragment.appendChild(slot);
    return fragment;
  }
}
VisuallyHidden.define("wje-visually-hidden", VisuallyHidden);
export {
  VisuallyHidden as default
};
