var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { event } from "./wje-element.js";
import Icon from "./wje-icon.js";
const styles = "/*\n[ WJ Option ]\n*/\n\n:host {\n    display: block;\n    wje-icon {\n        visibility: hidden;\n        margin-inline: 0.5rem;\n    }\n}\n\n:host([selected]) {\n    wje-icon {\n        visibility: visible;\n    }\n}\n\n:host([disabled]) {\n    background-color: lightgray;\n    opacity: 0.3;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.native-option {\n    display: flex;\n    align-items: center;\n    padding-top: var(--wje-option-padding-top);\n    padding-bottom: var(--wje-option-padding-bottom);\n}\n\n.native-option:hover {\n    background-color: var(--wje-option-highlighted);\n}\n\n::slotted([slot='start']) {\n    flex: 0 0 auto;\n    display: flex;\n    align-items: center;\n    margin-inline-end: 0.5rem;\n}\n\n::slotted([slot='end']) {\n    flex: 0 0 auto;\n    display: flex;\n    align-items: center;\n    margin-inline: auto 0.5rem;\n}\n";
class Option extends WJElement {
  /**
   * Creates an instance of Option.
   * @class
   */
  constructor() {
    super();
    /**
     * Dependencies of the Option component.
     */
    __publicField(this, "dependencies", {
      "wje-icon": Icon
    });
    __publicField(this, "className", "Option");
  }
  /**
   * Sets the selected attribute of the option.
   * @param {boolean} value The value to set.
   */
  set selected(value) {
    if (value) this.setAttribute("selected", "");
    else this.removeAttribute("selected");
  }
  /**
   * Sets the value attribute of the option.
   * @param {string} value The value to set.
   */
  set value(value) {
    this.setAttribute("value", value);
  }
  /**
   * Sets the text content of the option.
   * @param {string} value The text to set.
   */
  set text(value) {
    this.innerText = value;
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
   * Draws the component for the option.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("div");
    element.classList.add("native-option");
    element.setAttribute("part", "native");
    let icon = document.createElement("wje-icon");
    icon.setAttribute("name", "check");
    let start = document.createElement("slot");
    start.setAttribute("name", "start");
    let slot = document.createElement("slot");
    let end = document.createElement("slot");
    end.setAttribute("name", "end");
    element.appendChild(icon);
    element.appendChild(start);
    element.appendChild(slot);
    element.appendChild(end);
    fragment.appendChild(element);
    return fragment;
  }
  /**
   * Adds event listeners after the component is drawn.
   */
  afterDraw() {
    event.addListener(this, "click", null, (e, b, c) => {
      if (this.hasAttribute("disabled")) return;
      this.dispatchEvent(
        new CustomEvent("wje-option:change", {
          bubbles: true,
          composed: true,
          detail: {
            value: this.value,
            text: this.text
          }
        })
      );
    });
  }
}
Option.define("wje-option", Option);
export {
  Option as default
};
