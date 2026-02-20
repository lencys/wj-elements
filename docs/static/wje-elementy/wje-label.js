var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Label ]\n*/\n\n:host(.wje-color-primary) {\n    --wje-color: var(--wje-color-primary) !important;\n}\n\n:host(.wje-color-complete) {\n    --wje-color: var(--wje-color-complete) !important;\n}\n\n:host(.wje-color-success) {\n    --wje-color-base: var(--wje-color-success) !important;\n    --wje-color-contrast: var(--wje-color-contrast-0) !important;\n}\n\n:host(.wje-color-warning) {\n    --wje-color-base: var(--wje-color-warning) !important;\n    --wje-color-contrast: var(--wje-color-contrast-11) !important;\n}\n\n:host(.wje-color-danger) {\n    --wje-color-base: var(--wje-color-danger) !important;\n    --wje-color-contrast: var(--wje-color-contrast-0) !important;\n}\n\n:host(.wje-color-info) {\n    --wje-color-base: var(--wje-color-info) !important;\n    --wje-color-contrast: var(--wje-color-contrast-0) !important;\n}\n\n:host(.wje-color-menu) {\n    --wje-color-base: var(--wje-color-menu) !important;\n    --wje-color-contrast: var(--wje-color-contrast-0) !important;\n}\n\n:host {\n    --wje-color: initial;\n    display: block;\n    font-size: inherit;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    box-sizing: border-box;\n}\n\n:host(.wje-color) {\n    color: current-color(base);\n}\n\n:host(.wje-text-wrap),\n:host([text-wrap]) {\n    white-space: normal !important;\n}\n\n/*Fixed Inputs*/\n\n:host(.label-fixed) {\n    flex: 0 0 100px;\n    width: 100px;\n    min-width: 100px;\n    max-width: 200px;\n}\n\n/*Stacked & Floating Inputs*/\n\n:host(.label-stacked),\n:host(.label-floating) {\n    margin-bottom: 0;\n    align-self: stretch;\n    width: auto;\n    max-width: 100%;\n}\n\n:host(.label-no-animate.label-floating) {\n    transition: none;\n}\n\n/*Headings*/\n\n::slotted(*) h1,\n::slotted(*) h2,\n::slotted(*) h3,\n::slotted(*) h4,\n::slotted(*) h5,\n::slotted(*) h6 {\n    text-overflow: inherit;\n    overflow: inherit;\n}\n\n:host(.wje-color) {\n    color: var(--wje-color);\n}\n\n::slotted(*:first-child) {\n    margin-top: 0 !important;\n}\n\n::slotted(*:last-child) {\n    margin-bottom: 0 !important;\n}\n";
class Label extends WJElement {
  /**
   * Creates an instance of Label.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "Label");
  }
  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Returns the list of attributes to observe for changes.
   * @static
   * @returns {Array<string>}
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
   * Draws the component.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    if (this.color) this.classList.add("wje-color-" + params.color, "wje-color");
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
Label.define("wje-label", Label);
export {
  Label as default
};
//# sourceMappingURL=wje-label.js.map
