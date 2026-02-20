var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Status ]\n*/\n\n.native-status {\n    display: flex;\n    align-items: center;\n}\n\n.bullet {\n    width: var(--wje-status-size);\n    height: var(--wje-status-size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-width: 1px;\n    border-style: solid;\n    border-color: transparent;\n    border-radius: var(--wje-border-radius-circle);\n}\n\n:host ::slotted([slot='start']) {\n    margin-right: var(--wje-spacing-x-small);\n}\n\n:host ::slotted([slot='end']) {\n    margin-left: var(--wje-spacing-x-small);\n}\n\n/* Size */\n:host([size='small']) {\n    --wje-status-size: var(--wje-size-small);\n}\n\n:host([size='medium']) {\n    --wje-status-size: var(--wje-size);\n}\n\n:host([size='large']) {\n    --wje-status-size: var(--wje-size-large);\n}\n\n/* Color */\n:host([color='primary']) .bullet {\n    background-color: var(--wje-color-primary-9);\n    color: var(--wje-color-contrast-0);\n}\n\n:host([color='complete']) .bullet {\n    background-color: var(--wje-color-complete-9);\n    color: var(--wje-color-contrast-0);\n}\n\n:host([color='success']) .bullet {\n    background-color: var(--wje-color-success-9);\n    color: var(--wje-color-contrast-0);\n}\n\n:host([color='warning']) .bullet {\n    background-color: var(--wje-color-warning-9);\n    color: var(--wje-color-contrast-11);\n}\n\n:host([color='danger']) .bullet {\n    background-color: var(--wje-color-danger-9);\n    color: var(--wje-color-contrast-0);\n}\n\n:host([color='contrast']) .bullet {\n    background-color: var(--wje-color-contrast-2);\n    color: var(--wje-color-contrast-11);\n}\n\n:host([color='contrast-reverse']) .bullet {\n    background-color: var(--wje-color-contrast-11);\n    color: var(--wje-color-contrast-0);\n}\n\n/* Border */\n:host([border='primary']) .bullet {\n    border-color: var(--wje-color-primary-9);\n}\n\n:host([border='complete']) .bullet {\n    border-color: var(--wje-color-complete-9);\n}\n\n:host([border='success']) .bullet {\n    border-color: var(--wje-color-success-9);\n}\n\n:host([border='warning']) .bullet {\n    border-color: var(--wje-color-warning-9);\n}\n\n:host([border='danger']) .bullet {\n    border-color: var(--wje-color-danger-9);\n}\n\n:host([border='contrast']) .bullet {\n    border-color: var(--wje-color-contrast-2);\n}\n\n:host([border='contrast-reverse']) .bullet {\n    border-color: var(--wje-color-contrast-11);\n}\n";
class Status extends WJElement {
  /**
   * Creates an instance of Status.
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     * @type {string}
     */
    __publicField(this, "className", "Status");
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
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.setAriaState({ role: "status" });
  }
  /**
   * Draws the component for the status.
   * @returns {object} fragment - The document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-status");
    let bullet = document.createElement("div");
    bullet.setAttribute("part", "bullet");
    bullet.classList.add("bullet");
    let slot = document.createElement("slot");
    let start = document.createElement("slot");
    start.setAttribute("name", "start");
    let end = document.createElement("slot");
    end.setAttribute("name", "end");
    bullet.appendChild(slot);
    native.appendChild(start);
    native.appendChild(bullet);
    native.appendChild(end);
    fragment.appendChild(native);
    return fragment;
  }
}
Status.define("wje-status", Status);
export {
  Status as default
};
//# sourceMappingURL=wje-status.js.map
