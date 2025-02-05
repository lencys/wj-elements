var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { event } from "./wje-element.js";
const styles = "/*\n[ WJ Radio ]\n*/\n\n:host {\n    --wje-radio-margin-top: 0;\n    --wje-radio-margin-bottom: 0.5rem;\n    --wje-radio-margin-inline: 0;\n\n    display: block;\n    margin-top: var(--wje-radio-margin-top);\n    margin-bottom: var(--wje-radio-margin-bottom);\n    margin-inline: var(--wje-radio-margin-inline);\n    line-height: 100%;\n    padding-left: 0;\n\n    label {\n        display: flex;\n        cursor: pointer;\n        position: relative;\n        padding-left: 1.5rem;\n        min-width: 16px;\n        min-height: 16px;\n        margin-bottom: 0;\n        -webkit-touch-callout: none; /* iOS Safari */\n        -webkit-user-select: none; /* Safari */\n        -moz-user-select: none; /* Old versions of Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n        user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */\n        align-items: center;\n        &:before {\n            content: '';\n            position: absolute;\n            width: 16px;\n            height: 16px;\n            left: 0;\n            box-sizing: border-box;\n            background-color: var(--wje-color-contrast-1);\n            border: 1px solid var(--wje-color-contrast-4);\n        }\n    }\n}\n\n.native-radio {\n    input[type='radio'] + label {\n        &:before {\n            border-radius: var(--wje-border-radius-circle);\n            transition: border 0.3s 0s cubic-bezier(0.455, 0.03, 0.215, 1.33);\n        }\n    }\n    input[type='radio']:checked {\n        & + label {\n            &:before {\n                border-color: var(--wje-color-contrast-6);\n                border-width: 5px;\n            }\n        }\n    }\n    input[type='radio']:focus {\n        & + label {\n            color: var(--wje-color);\n            &:before {\n                outline: none !important;\n                box-shadow: 0 0 0 0 #78c8fe;\n            }\n        }\n    }\n\n    input[type='radio'] {\n        opacity: 0;\n        position: absolute;\n        top: 3px;\n        width: 16px;\n        height: 16px;\n    }\n\n    input[type='radio'][disabled] {\n        & + label {\n            cursor: not-allowed !important;\n            color: var(--wje-color-contrast-9);\n            opacity: 0.5;\n            &:before {\n                cursor: not-allowed !important;\n            }\n        }\n    }\n}\n\n:host([placement='end']) {\n    label {\n        padding-left: 0;\n        padding-right: 26px;\n\n        &:before {\n            right: 0;\n            left: auto;\n        }\n    }\n\n    input[type='checkbox']:checked {\n        & + label {\n            position: relative;\n\n            &::after {\n                position: absolute;\n                right: 0;\n                left: auto;\n            }\n        }\n    }\n}\n\n/* Colors */\n\n:host([color='primary']) input[type='radio']:checked + label:before {\n    border-color: var(--wje-color-primary-9);\n}\n\n:host([color='complete']) input[type='radio']:checked + label:before {\n    border-color: var(--wje-color-complete-9);\n}\n\n:host([color='success']) input[type='radio']:checked + label:before {\n    border-color: var(--wje-color-success-9);\n}\n\n:host([color='warning']) input[type='radio']:checked + label:before {\n    border-color: var(--wje-color-warning-9);\n}\n\n:host([color='danger']) input[type='radio']:checked + label:before {\n    border-color: var(--wje-color-danger-9);\n}\n\n:host([color='info']) input[type='radio']:checked + label:before {\n    border-color: var(--wje-color-info-9);\n}\n";
class Radio extends WJElement {
  /**
   * Creates an instance of Radio.
   */
  constructor() {
    super();
    /**
     * Sets the color of the radio button.
     * @type {string}
     */
    __publicField(this, "className", "Radio");
    /**
     * Called when an attribute changes.
     * @param {object} e
     */
    __publicField(this, "inputEvent", (e) => {
      this.checked = e.target.checked;
    });
    this._checked = false;
  }
  /**
   * Sets the name of the radio button.
   * @param value
   */
  set checked(value) {
    this._checked = value;
    if (value) this.setAttribute("checked", "");
    else this.removeAttribute("checked");
  }
  /**
   * Gets the checked property of the radio button.
   * @returns {boolean}
   */
  get checked() {
    return this._checked;
  }
  /**
   * Returns the CSS styles for the component.
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
    return ["checked"];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the radio button.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-radio");
    if (this.color) native.classList.add(this.color);
    this.input = document.createElement("input");
    this.input.type = "radio";
    this.input.id = "radio";
    this.input.name = this.name + "-radio";
    this.input.checked = this.hasAttribute("checked");
    this.input.disabled = this.hasAttribute("disabled");
    let label = document.createElement("label");
    label.htmlFor = "radio";
    label.innerHTML = "<slot></slot>";
    native.appendChild(this.input);
    native.appendChild(label);
    fragment.appendChild(native);
    return fragment;
  }
  /**
   * Sets up the event listeners for the component.
   */
  afterDraw() {
    if (!this.hasAttribute("disabled")) {
      event.addListener(this, "click", "wje-radio:change");
      event.addListener(this, "click", "wje-radio:input");
    }
  }
  /**
   * Toggles the radio button.
   */
  beforeDisconnect() {
    event.removeElement(this);
  }
}
Radio.define("wje-radio", Radio);
export {
  Radio as default
};
