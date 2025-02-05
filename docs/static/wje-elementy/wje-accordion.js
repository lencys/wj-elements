var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Accordion ]\n*/\n\n:host {\n    display: block;\n    width: 100%;\n}\n";
class Accordion extends WJElement {
  /**
   * Constructor for the Accordion class.
   */
  constructor() {
    super();
    /**
     * The class name for the Accordion element.
     * @type {string}
     */
    __publicField(this, "className", "Accordion");
  }
  /**
   * Sets the `multiple` attribute on the element.
   * If `true`, the `multiple` attribute is added.
   * If `false`, the `multiple` attribute is removed.
   * @param {boolean} value A boolean value indicating whether the element should support multiple selections.
   */
  set multiple(value) {
    if (value) {
      this.setAttribute("multiple", "");
    } else {
      this.removeAttribute("multiple");
    }
  }
  /**
   * Determines whether the element has the `multiple` attribute.
   * @returns {boolean} `true` if the `multiple` attribute is present, otherwise `false`.
   */
  get multiple() {
    return this.hasAttribute("multiple");
  }
  /**
   * Sets the value of the `index` attribute.
   * @param {number|string} value The value to set for the `index` attribute.
   */
  set index(value) {
    this.setAttribute("index", value);
  }
  /**
   * Retrieves the value of the `index` attribute as a number.
   * @returns {number} The numerical value of the `index` attribute, or `0` if the attribute is not set.
   */
  get index() {
    return +this.getAttribute("index") || 0;
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {object} The styles for the Accordion element.
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Getter for the observed attributes.
   * @returns {Array} An array containing the name of the observed attribute.
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Method to setup attributes for the Accordion element.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Method to run before the element is drawn.
   */
  beforeDraw() {
    this.getAccordions().forEach((accordion, index) => {
      if (this.index && +this.index === index) {
        accordion.classList.add("expanded");
      }
    });
  }
  /**
   * Method to draw the Accordion element.
   * @returns {object} The document fragment containing the drawn element.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let slot = document.createElement("slot");
    fragment.appendChild(slot);
    this.slotEl = slot;
    return fragment;
  }
  /**
   * Method to run after the element is drawn.
   */
  afterDraw() {
    this.addEventListener("wje-accordion-item:open", (e) => {
      if (!this.multiple) this.collapseAll(e.detail.context);
    });
  }
  /**
   * Method to run after the element is drawn.
   * @param exception
   */
  collapseAll(exception) {
    this.getAccordions().forEach((accordion) => {
      if (accordion !== exception) accordion.collapse();
    });
  }
  /**
   * Method to get the accordions.
   * @returns {Array} An array containing the accordions.
   */
  getAccordions() {
    return Array.from(this.querySelectorAll(":scope > wje-accordion-item"));
  }
}
Accordion.define("wje-accordion", Accordion);
export {
  Accordion as default
};
