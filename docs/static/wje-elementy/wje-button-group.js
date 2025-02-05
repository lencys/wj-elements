var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Button Group ]\n*/\n\n:host {\n    display: inline-block;\n    .native-button-group {\n        display: flex;\n        flex-wrap: nowrap;\n        line-height: 1;\n    }\n\n    slot {\n        display: contents;\n    }\n}\n\n::slotted(wje-button) {\n    margin: 0 !important;\n}\n";
class ButtonGroup extends WJElement {
  /**
   * ButtonGroup constructor method.
   * @class
   */
  constructor() {
    super();
    /**
     * Class name for the ButtonGroup element
     * @type {string}
     */
    __publicField(this, "className", "ButtonGroup");
  }
  /**
   * Get CSS stylesheet for the ButtonGroup element.
   * @static
   * @returns {object} styles - The CSS styles
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Get observed attributes for the ButtonGroup element.
   * @static
   * @returns {Array<string>} observedAttributes - The observed attributes array
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Setup attributes for the ButtonGroup element.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draw method for the ButtonGroup element.
   * @returns {object} fragment - The document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("div");
    element.classList.add("native-button-group");
    element.setAttribute("part", "native");
    this.slotElement = document.createElement("slot");
    element.appendChild(this.slotElement);
    fragment.appendChild(element);
    return fragment;
  }
  /**
   * After draw method for the ButtonGroup element.
   */
  afterDraw() {
    const slottedElements = [...this.slotElement.assignedElements({ flatten: true })];
    slottedElements.forEach((el) => {
      let index = slottedElements.indexOf(el);
      let button = this.findButton(el);
      if (button) {
        button.classList.add("wje-button-group-button");
        button.classList.toggle("wje-button-group-first", index === 0);
        button.classList.toggle("wje-button-group-inner", index > 0 && index < slottedElements.length - 1);
        button.classList.toggle("wje-button-group-last", index === slottedElements.length - 1);
      }
    });
  }
  /**
   * Find button method to find the button element.
   * @param {object} el The element
   * @returns {object} button - The button element
   */
  findButton(el) {
    const selector = "wje-button";
    return el.closest(selector) ?? el.querySelector(selector);
  }
}
WJElement.define("wje-button-group", ButtonGroup);
export {
  ButtonGroup as default
};
