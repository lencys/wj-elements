var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { WjElementUtils } from "./wje-element.js";
const styles = "/*\n[ Menu Label ]\n*/\n\n:host {\n    --wje-letter-spacing: 0.025rem;\n    --wje-menu-label-color: var(--wje-color-contrast-6);\n    --wje-padding-top: 0;\n    --wje-padding-bottom: 0;\n    --wje-padding-start: 1.5rem;\n    --wje-padding-end: 1.5rem;\n}\n\n.native-menu-label {\n    font-size: var(--wje-menu-label-font-size);\n    display: inline-block;\n    font-weight: var(--wje-menu-label-weight);\n    letter-spacing: var(--wje-letter-spacing);\n    color: var(--wje-menu-label-color);\n    padding: var(--wje-padding-top) var(--wje-padding-start) var(--wje-padding-bottom) var(--wje-padding-end);\n}\n";
class MenuLabel extends WJElement {
  /**
   * Creates an instance of MenuLabel.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "MenuLabel");
    this.hasSubmenu = WjElementUtils.hasSlot(this, "submenu");
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
   * Draws the component for the menu label.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let slot = document.createElement("slot");
    slot.setAttribute("part", "native");
    slot.classList.add("native-menu-label");
    fragment.appendChild(slot);
    return fragment;
  }
}
MenuLabel.define("wje-menu-label", MenuLabel);
export {
  MenuLabel as default
};
