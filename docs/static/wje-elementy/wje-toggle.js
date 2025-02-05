var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { event } from "./wje-element.js";
const styles = "/*\n[ WJ Toggle ]\n*/\n\n:host {\n    --wje-toggle-color-base: var(--wje-color-contrast-3);\n    --wje-toggle-width: 30px;\n    --wje-toggle-height: 18px;\n    --wje-toggle-border-radius: 50px;\n    --wje-toggle-handle-width: 13px;\n    --wje-toggle-handle-height: 13px;\n    --wje-toggle-handle-border-radius: 9px;\n    --wje-toggle-handle-color: #fff;\n    --wje-toggle-handle-shadow: 1px 0 1px 0.5px rgba(0, 0, 0, 0.12), 2px 4px 6px rgba(0, 0, 0, 0.2);\n    --wje-toggle-handle-shadow-checked: 1px 1px 0 rgba(0, 0, 0, 0.08), -3px 3px 6px rgba(0, 0, 0, 0.3);\n    --wje-toggle-duration: 250ms;\n    --wje-toggle-curve: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n:host([color='primary']) input:checked + label > .label-wrapper {\n    --wje-toggle-color-base: var(--wje-color-primary-9) !important;\n}\n\n:host([color='complete']) input:checked + label > .label-wrapper {\n    --wje-toggle-color-base: var(--wje-color-complete-9);\n}\n\n:host([color='success']) input:checked + label > .label-wrapper {\n    --wje-toggle-color-base: var(--wje-color-success-9) !important;\n}\n\n:host([color='warning']) input:checked + label > .label-wrapper {\n    --wje-toggle-color-base: var(--wje-color-warning-9);\n}\n\n:host([color='danger']) input:checked + label > .label-wrapper {\n    --wje-toggle-color-base: var(--wje-color-danger-9);\n}\n\n:host([color='info']) input:checked + label > .label-wrapper {\n    --wje-toggle-color-base: var(--wje-color-info-9);\n}\n\n.native-toggle {\n    display: flex;\n}\n\nlabel {\n    display: flex;\n    cursor: pointer;\n    align-items: center;\n    user-select: none;\n    .label-wrapper {\n        width: var(--wje-toggle-width) !important;\n        min-width: var(--wje-toggle-width);\n        height: var(--wje-toggle-height);\n        position: relative;\n        display: flex;\n        align-items: center;\n        &:before {\n            content: '';\n            position: absolute;\n            cursor: pointer;\n            width: 100%;\n            height: 100%;\n            top: auto;\n            left: 0;\n            background: var(--wje-toggle-color-base);\n            background-size: 300%;\n            background-position: right;\n            border-radius: var(--wje-toggle-border-radius);\n            border: none;\n            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);\n            transition:\n                background calc(var(--wje-toggle-duration) + (var(--wje-toggle-duration) * 0.24)),\n                box-shadow var(--wje-toggle-duration);\n            transition-timing-function: var(--wje-toggle-curve);\n        }\n        &:after {\n            content: '';\n            position: absolute;\n            transform: translateX(0%);\n            background: var(--wje-toggle-handle-color);\n            width: var(--wje-toggle-handle-width);\n            height: var(--wje-toggle-handle-height);\n            border-radius: var(--wje-toggle-handle-border-radius);\n            top: auto;\n            left: 2px;\n            box-shadow: var(--wje-toggle-handle-shadow);\n            transition: transform, box-shadow;\n            transition-duration: var(--wje-toggle-duration);\n            transition-timing-function: var(--wje-toggle-curve);\n        }\n    }\n}\ninput[type='checkbox'][disabled] {\n    & + label {\n        cursor: not-allowed !important;\n        color: var(--wje-color-contrast-9);\n        opacity: 0.58;\n\n        &:before {\n            cursor: not-allowed !important;\n        }\n    }\n}\n\ninput[type='checkbox'] {\n    position: absolute;\n    z-index: -1;\n    opacity: 0;\n    &:checked {\n        & + label {\n            .label-wrapper:before {\n                background-position: left;\n                box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);\n            }\n            .label-wrapper:after {\n                transform: translateX(calc(var(--wje-toggle-width) - var(--wje-toggle-handle-width) - 4px));\n                box-shadow: var(--wje-toggle-handle-shadow-checked);\n            }\n        }\n    }\n    &:focus {\n        & + label {\n            .label-wrapper:before {\n                outline: none !important;\n                box-shadow:\n                    inset 0 0 0 1px rgba(0, 0, 0, 0.12),\n                    0 0 0 0 #78c8fe;\n            }\n        }\n    }\n    &[disabled]:active {\n        & + label {\n            .label-wrapper:after {\n                transform: scaleX(1.1);\n                transform-origin: center left;\n                transition: transform step-start;\n            }\n        }\n    }\n    &:checked {\n        &[disabled]:active {\n            & + label {\n                .label-wrapper:after {\n                    transform: translateX(calc(100% - 6px)) scaleX(1.1);\n                    transform-origin: center right;\n                }\n            }\n        }\n    }\n    &:hover {\n        &:active {\n            & + label {\n                .label-wrapper:before {\n                    background-color: transparent;\n                }\n            }\n        }\n    }\n}\n\n:host .text {\n    margin-inline: 0.5rem 0;\n}\n\n/*Placememt*/\n:host([placement='end']) {\n    label {\n        width: 100%;\n    }\n    .text {\n        margin-inline: 0 0.5rem;\n        width: 100%;\n    }\n}\n\nslot {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n";
class Toggle extends WJElement {
  /**
   * Creates an instance of Toggle.
   */
  constructor() {
    super();
    /**
     * Set color attribute for the toggle element.
     * @type {string}
     */
    __publicField(this, "className", "Toggle");
  }
  /**
   * Set checked attribute for the toggle element.
   */
  set disabled(value) {
    if (value) this.setAttribute("disabled", "");
    else this.removeAttribute("disabled");
  }
  /**
   * Get checked attribute for the toggle element.
   * @returns {boolean} true if the toggle is disabled, false otherwise
   */
  get disabled() {
    return this.hasAttribute("disabled");
  }
  /**
   * Set checked attribute for the toggle element.
   */
  set checked(value) {
    if (value) this.setAttribute("checked", "");
    else this.removeAttribute("checked");
  }
  /**
   * Get checked attribute for the toggle element.
   * @returns {boolean} true if the toggle is checked, false otherwise
   */
  get checked() {
    return this.hasAttribute("checked");
  }
  /**
   * Get CSS stylesheet for the Button element.
   * @static
   * @returns {CSSStyleSheet} styles - The CSS stylesheet for the Button element.
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Get observed attributes for the toggle element.
   * @returns {string[]}
   */
  static get observedAttributes() {
    return ["checked", "disabled"];
  }
  /**
   * Set up the attributes for the toggle element.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draw the toggle element for the component.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("div");
    element.setAttribute("part", "native");
    element.classList.add("native-toggle");
    let input = document.createElement("input");
    input.setAttribute("part", "input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", this.name);
    input.setAttribute("id", "input");
    input.checked = this.hasAttribute("checked");
    input.disabled = this.hasAttribute("disabled");
    let label = document.createElement("label");
    label.setAttribute("for", "input");
    let labelWrapper = document.createElement("div");
    labelWrapper.setAttribute("part", "toggle");
    labelWrapper.classList.add("label-wrapper");
    let text = document.createElement("div");
    text.classList.add("text");
    text.innerHTML = "<slot></slot>";
    if (this.color) this.classList.add("wje-color-" + this.color, "wje-color");
    element.appendChild(input);
    element.appendChild(label);
    if (this.placement === "end") {
      element.classList.add("end");
      label.appendChild(text);
      label.appendChild(labelWrapper);
    } else {
      label.appendChild(labelWrapper);
      label.appendChild(text);
    }
    fragment.appendChild(element);
    this.input = input;
    return fragment;
  }
  /**
   * After draw method for the toggle element to add event listeners for the input element after the element is drawn.
   */
  afterDraw() {
    if (!this.disabled) {
      this.input.addEventListener("input", (e) => {
        this.checked = e.target.checked;
        event.dispatchCustomEvent(this, "wje-toggle:input");
      });
      this.input.addEventListener("change", (e) => {
        this.checked = e.target.checked;
        event.dispatchCustomEvent(this, "wje-toggle:change");
      });
    }
  }
}
Toggle.define("wje-toggle", Toggle);
export {
  Toggle as default
};
