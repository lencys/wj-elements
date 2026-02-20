var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = ".dropzone {\n    border: 1px dashed lightgrey;\n    border-radius: var(--wje-border-radius-small);\n    margin: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow: hidden;\n    justify-content: center;\n    min-height: 250px;\n    width: 200px;\n}\n";
class ReorderDropzone extends WJElement {
  /**
   * Creates an instance of ReorderDropzone.
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     * @type {string}
     */
    __publicField(this, "className", "ReorderDropzone");
  }
  /**
   * Returns the CSS stylesheet for the component.
   * @returns {CSSStyleSheet} The CSS stylesheet.
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Returns the list of observed attributes.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let dropzone = document.createElement("div");
    dropzone.classList.add("dropzone");
    let slot = document.createElement("slot");
    dropzone.appendChild(slot);
    fragment.appendChild(dropzone);
    return fragment;
  }
}
ReorderDropzone.define("wje-reorder-dropzone", ReorderDropzone);
export {
  ReorderDropzone as default
};
//# sourceMappingURL=wje-reorder-dropzone.js.map
