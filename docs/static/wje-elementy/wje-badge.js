var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Badge ]\n*/\n\n.native-badge {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-shadow: none;\n    font-family: var(--wje-font-family);\n    font-size: var(--wje-font-size-x-small);\n    line-height: var(--wje-badge-line-height);\n    padding: 0;\n    padding-block: var(--wje-badge-padding-block);\n    padding-inline: var(--wje-badge-padding-inline);\n    border-radius: var(--wje-badge-border-radius);\n    border-width: var(--wje-badge-border-width);\n    border-style: var(--wje-badge-border-style);\n    border-color: var(--wje-badge-border-color);\n    height: var(--wje-badge-height);\n}\n\n.wje-color-primary {\n    background-color: var(--wje-color-primary-2);\n    color: var(--wje-color-primary-9);\n}\n\n.wje-color-complete {\n    background-color: var(--wje-color-complete-2);\n    color: var(--wje-color-complete-9);\n}\n\n.wje-color-success {\n    background-color: var(--wje-color-success-2);\n    color: var(--wje-color-success-9);\n}\n\n.wje-color-warning {\n    background-color: var(--wje-color-warning-2);\n    color: var(--wje-color-warning-11);\n}\n\n.wje-color-danger {\n    background-color: var(--wje-color-danger-2);\n    color: var(--wje-color-danger-9);\n}\n\n.wje-color-info {\n    background-color: var(--wje-color-contrast-0);\n    color: var(--wje-color-info-11);\n    border-color: var(--wje-color-contrast-2);\n}\n\n.wje-color-default {\n    background-color: var(--wje-color-contrast-3);\n    color: var(--wje-color-contrast-11);\n}\n";
class Badge extends WJElement {
  /**
   * Creates an instance of Badge.
   * Represents a custom Badge element.
   * @class
   */
  constructor() {
    super();
    /**
     * The class name for the Badge element.
     * @type {string} The class name for the Badge element.
     */
    __publicField(this, "className", "Badge");
  }
  /**
   * Retrieves the CSS stylesheet for the Badge element.
   * @static
   * @returns {CSSStyleSheet} The CSS styles associated with the Badge.
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Specifies the attributes to observe for changes.
   * @static
   * @returns {Array<string>} An array containing the names of attributes to observe.
   * @example
   * static get observedAttributes() {
   *   return ['color'];
   * }
   */
  static get observedAttributes() {
    return ["color"];
  }
  /**
   * Configures initial attributes for the Badge element.
   * @returns {void} Nothing is returned.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.setAriaState({ role: "status" });
  }
  /**
   * Creates the DOM structure for the Badge element.
   * @returns {DocumentFragment} A document fragment containing the Badge's structure.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-badge");
    if (this.hasAttribute("color")) {
      native.classList.add(`wje-color-${this.color}`, "wje-color");
    } else {
      native.classList.add("wje-color-default", "wje-color");
    }
    let slot = document.createElement("slot");
    native.appendChild(slot);
    fragment.appendChild(native);
    return fragment;
  }
}
Badge.define("wje-badge", Badge);
export {
  Badge as default
};
//# sourceMappingURL=wje-badge.js.map
