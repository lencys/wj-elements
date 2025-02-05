var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { event } from "./wje-element.js";
const styles = "/*\n[ WJ Menu Label ]\n*/\n\n:host {\n    display: inline-flex;\n}\n@media (min-width: 768px) {\n    :host {\n        display: none;\n    }\n}\n";
class MenuButton extends WJElement {
  /**
   * Creates an instance of MenuButton.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "MenuButton");
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
   * Draws the component for the menu button.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let slot = document.createElement("slot");
    fragment.appendChild(slot);
    return fragment;
  }
  /**
   * Refreshes the component after drawing. Adds a click event listener that toggles the "open" class on the content element.
   */
  afterDraw() {
    event.addListener(this, "click", null, (e) => {
      document.querySelector(`#${this.contentId}`).classList.toggle("open");
    });
  }
}
MenuButton.define("wje-menu-button", MenuButton);
export {
  MenuButton as default
};
