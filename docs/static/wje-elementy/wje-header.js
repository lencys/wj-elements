var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Header ]\n*/\n\n:host {\n    display: block;\n    height: var(--wje-header-height);\n    width: 100%;\n    background: var(--wje-header-background);\n    border-width: var(--wje-header-border-width);\n    border-style: var(--wje-header-border-style);\n    border-color: var(--wje-header-border-color);\n    .native-header {\n        display: flex;\n        padding-inline: 1rem;\n    }\n}\n\n:host([sticky]) {\n    position: sticky;\n    top: var(--wje-header-top);\n    z-index: 999;\n}\n";
class Header extends WJElement {
  /**
   * Creates an instance of Header.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "Header");
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
    let element = document.createElement("header");
    element.classList.add("native-header");
    element.setAttribute("part", "native");
    let slot = document.createElement("slot");
    element.appendChild(slot);
    fragment.appendChild(element);
    return fragment;
  }
}
Header.define("wje-header", Header);
export {
  Header as default
};
//# sourceMappingURL=wje-header.js.map
