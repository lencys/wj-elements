var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Toolbar ]\n*/\n\n:host {\n    --wje-toolbar-background: var(--wje-background);\n    --wje-toolbar-height: auto;\n    --wje-toolbar-min-height: 70px;\n    --wje-toolbar-padding-top: 1rem;\n    --wje-toolbar-padding-bottom: 1rem;\n    --wje-toolbar-padding-inline: 1.5rem;\n    --wje-toolbar-border-color: var(--wje-border-color);\n    --wje-toolbar-top: 0;\n    width: 100%;\n    height: var(--wje-toolbar-height);\n}\n\n.native-toolbar {\n    background-color: var(--wje-toolbar-background);\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    border-bottom: 1px solid var(--wje-toolbar-border-color);\n    padding-inline: var(--wje-toolbar-padding-inline);\n    padding-top: var(--wje-toolbar-padding-top);\n    padding-bottom: var(--wje-toolbar-padding-bottom);\n    box-shadow: 0 10px 30px 0 rgba(82, 63, 105, 0.05);\n}\n\n::slotted {\n    grid-column: span 4;\n}\n\n::slotted([slot='start']) {\n    margin-right: auto;\n}\n\n:host([sticky]) {\n    position: sticky;\n    top: var(--wje-toolbar-top);\n    z-index: 99;\n}\n";
class Toolbar extends WJElement {
  /**
   * Creates an instance of Toolbar.
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     * @type {string}
     */
    __publicField(this, "className", "Toolbar");
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
   * Draws the component for the toolbar.
   * @returns {object} Document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-toolbar");
    let start = document.createElement("slot");
    start.setAttribute("name", "start");
    let end = document.createElement("slot");
    end.setAttribute("name", "end");
    native.appendChild(start);
    native.appendChild(end);
    fragment.appendChild(native);
    return fragment;
  }
}
Toolbar.define("wje-toolbar", Toolbar);
export {
  Toolbar as default
};
