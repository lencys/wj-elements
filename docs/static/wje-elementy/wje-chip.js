var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { event } from "./wje-element.js";
const styles = "/*\n[ WJ Chip ]\n*/\n\n.native-chip {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 14px;\n    letter-spacing: -0.006em;\n    margin: 0;\n    padding: 0.5rem 0.75rem;\n    text-align: center;\n    cursor: pointer;\n    white-space: nowrap;\n    text-shadow: none;\n    box-shadow: none;\n    border: 0 none;\n    line-height: 14px;\n    min-height: 28px;\n    height: 28px;\n    width: 100%;\n    max-width: fit-content;\n    min-width: 28px;\n    position: relative;\n    transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n    border-radius: var(--wje-border-radius-pill);\n    overflow: hidden;\n    vertical-align: middle;\n    box-sizing: border-box;\n}\n\n:host(.focus) {\n    box-shadow: none;\n}\n\n:host(.wje-active) .native-chip {\n    border: 1px solid var(--wje-color-primary-11);\n    background-color: var(--wje-color-contrast-3);\n    color: var(--wje-color);\n}\n\n:host(:focus, :active:focus, .wje-active:focus) {\n    outline: none !important;\n}\n\n.check {\n    display: none;\n}\n\n:host([active]) {\n    .check {\n        display: block;\n        margin-inline: 4px 0;\n    }\n}\n\n:host([disabled]) {\n    opacity: 0.5;\n    border: 0;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n::slotted(wje-avatar) {\n    width: 22px;\n    height: 22px;\n}\n\n::slotted(wje-avatar:first-child) {\n    margin-inline: -8px 8px;\n    margin-top: -4px;\n    margin-bottom: -4px;\n}\n\n::slotted(wje-icon:first-child) {\n    margin: -4px 8px -4px -4px;\n}\n\n::slotted(wje-icon:last-child) {\n    margin: -4px -4px -4px 8px;\n}\n\nwje-button {\n    --wje-button-border-radius: 50%;\n    --wje-button-margin-inline: 0.25rem -0.5rem;\n    --wje-padding-top: 0.15rem;\n    --wje-padding-start: 0.15rem;\n    --wje-padding-end: 0.15rem;\n    --wje-padding-bottom: 0.15rem;\n}\n\n/*BG - TEXT*/\n.native-chip.wje-color-primary {\n    background-color: var(--wje-color-primary-1);\n    color: var(--wje-color-primary-9);\n}\n\n.native-chip.wje-color-complete {\n    background-color: var(--wje-color-complete-1);\n    color: var(--wje-color-complete-9);\n}\n\n.native-chip.wje-color-success {\n    background-color: var(--wje-color-success-1);\n    color: var(--wje-color-success-9);\n}\n\n.native-chip.wje-color-warning {\n    background-color: var(--wje-color-warning-2);\n    color: var(--wje-color-warning-11);\n}\n\n.native-chip.wje-color-danger {\n    background-color: var(--wje-color-danger-1);\n    color: var(--wje-color-danger-9);\n}\n\n.native-chip.wje-color-info {\n    background-color: var(--wje-color-info-1);\n    color: var(--wje-color-info-9);\n}\n\n.native-chip.wje-color-default {\n    background-color: var(--wje-color-contrast-3);\n    color: var(--wje-color-contrast-11);\n}\n\n/*HOVER*/\n@media (any-hover: hover) {\n    .native-chip.wje-color-primary:hover {\n        background-color: var(--wje-color-primary-4);\n        color: var(--wje-color-primary-10);\n    }\n\n    .native-chip.wje-color-complete:hover {\n        background-color: var(--wje-color-complete-4);\n        color: var(--wje-color-complete-10);\n    }\n\n    .native-chip.wje-color-success:hover {\n        background-color: var(--wje-color-success-4);\n        color: var(--wje-color-success-10);\n    }\n\n    .native-chip.wje-color-warning:hover {\n        background-color: var(--wje-color-warning-4);\n        color: var(--wje-color-warning-11);\n    }\n\n    .native-chip.wje-color-danger:hover {\n        background-color: var(--wje-color-danger-4);\n        color: var(--wje-color-danger-10);\n    }\n\n    .native-chip.wje-color-info:hover {\n        background-color: var(--wje-color-info-4);\n        color: var(--wje-color-info-10);\n    }\n\n    .native-chip.wje-color-default:hover {\n        background-color: var(--wje-color-contrast-4);\n        color: var(--wje-color-contrast-11);\n    }\n}\n";
class Chip extends WJElement {
  /**
   * Chip constructor method.
   */
  constructor() {
    super();
    /**
     * Class name for the Chip element.
     * @type {string}
     */
    __publicField(this, "className", "Chip");
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {*}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Getter for the observed attributes.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the Chip element.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-chip");
    let slot = document.createElement("slot");
    let remove = document.createElement("wje-button");
    remove.setAttribute("part", "remove");
    remove.setAttribute("fill", "link");
    remove.setAttribute("color", this.color || "default");
    remove.innerHTML = `<wje-icon name="x"></wje-icon>`;
    let active = document.createElement("wje-icon");
    active.setAttribute("name", "check");
    active.classList.add("check");
    if (this.hasAttribute("color")) native.classList.add("wje-color-" + this.color, "wje-color");
    else native.classList.add("wje-color-default", "wje-color");
    if (this.disabled) this.classList.add("wje-disabled");
    if (this.outline) this.classList.add("wje-outline");
    native.appendChild(slot);
    native.appendChild(active);
    if (this.hasAttribute("removable")) native.appendChild(remove);
    fragment.appendChild(native);
    this.removeElement = remove;
    return fragment;
  }
  /**
   * Getter for the observed attributes.
   */
  afterDraw() {
    event.addListener(this.removeElement, "click", "wje:chip-remove", null, { stopPropagation: true });
  }
  /**
   * Before disconnect event for the Chip element.
   */
  beforeDisconnect() {
    event.removeListener(this.removeElement, "click", "wje:chip-remove");
  }
}
WJElement.define("wje-chip", Chip);
export {
  Chip as default
};
