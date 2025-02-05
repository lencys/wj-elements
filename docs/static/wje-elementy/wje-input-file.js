var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { event } from "./wje-element.js";
const styles = "/*\n[ WJ Input File ]\n*/\n\n:host {\n    --wje-input-font-family: var(--wje-font-family);\n    --wje-input-background-color: var(--wje-background);\n    --wje-input-color: var(--wje-color);\n    --wje-input-color-invalid: var(--wje-color-danger);\n    --wje-input-border-color: var(--wje-border-color);\n    --wje-input-border-color-focus: var(--wje-color-primary);\n    --wje-input-border-width: 1px;\n    --wje-input-border-style: solid;\n    --wje-input-border-radius: 4px;\n    --wje-input-margin-bottom: 0.5rem;\n    --wje-input-line-height: 20px;\n    --wje-input-slot-padding-inline: 0.5rem;\n    width: 100%;\n    margin-bottom: var(--wje-input-margin-bottom);\n    display: block;\n\n    .wrapper {\n        display: flex;\n        width: 100%;\n    }\n    .native-input {\n        .input-wrapper {\n            width: 100%;\n            position: relative;\n        }\n        &.default {\n            background-color: var(--wje-input-background-color);\n            font-family: var(--wje-input-font-family);\n            position: relative;\n            border-radius: var(--wje-input-border-radius);\n            border-width: var(--wje-input-border-width);\n            border-style: var(--wje-input-border-style);\n            border-color: var(--wje-input-border-color);\n            padding-inline: 0;\n            padding-top: 0.25rem;\n            padding-bottom: 0.25rem;\n            transition: background-color 0.2s ease;\n            cursor: text;\n            .input-wrapper {\n                margin-inline: 0.5rem;\n            }\n            &.focused {\n                border-color: var(--wje-input-border-color-focus) !important;\n                label {\n                    opacity: 0.67;\n                    font-size: 12px;\n                    letter-spacing: normal;\n                }\n            }\n            input {\n                border: none;\n                height: 25px;\n                min-height: 25px;\n                padding: 0;\n                margin-top: -4px;\n                background: none;\n                box-shadow: none;\n                width: 100%;\n            }\n            label {\n                margin: 0;\n                display: block;\n                opacity: 1;\n                cursor: text;\n                transition: opacity 0.2s ease;\n                line-height: var(--wje-input-line-height);\n                &.fade {\n                    opacity: 0.5;\n                    font-size: 12px;\n                    letter-spacing: normal;\n                }\n            }\n            ::slotted([slot='start']) {\n                border-left: none;\n                border-top: none;\n                border-bottom: none;\n            }\n\n            ::slotted([slot='end']) {\n                border-right: none;\n                border-top: none;\n                border-bottom: none;\n            }\n        }\n        &.standard {\n            background-color: var(--wje-input-background-color);\n            font-family: var(--wje-input-font-family);\n            position: relative;\n            border-radius: var(--wje-input-border-radius);\n            padding-inline: 0;\n            padding-top: 0;\n            padding-bottom: 0;\n            transition: background-color 0.2s ease;\n            cursor: text;\n            &.focused {\n                input {\n                    border-color: var(--wje-input-border-color-focus) !important;\n                }\n            }\n            input {\n                display: block;\n                min-height: 32px;\n                padding-inline: 0.5rem;\n                padding-top: 0;\n                padding-bottom: 0;\n                background: none;\n                box-shadow: none;\n                width: 100%;\n                box-sizing: border-box;\n                border-radius: var(--wje-input-border-radius);\n                border-width: var(--wje-input-border-width);\n                border-style: var(--wje-input-border-style);\n                border-color: var(--wje-input-border-color);\n            }\n            label {\n                margin: 0;\n                display: inline-block;\n                opacity: 1;\n                cursor: text;\n                transition: opacity 0.2s ease;\n                line-height: var(--wje-input-line-height);\n            }\n            .input-wrapper {\n                &:hover .clear {\n                    visibility: visible;\n                }\n            }\n            ::slotted([slot='start']) {\n                border-right: none;\n                border-radius: var(--wje-input-border-radius) 0 0 var(--wje-input-border-radius);\n            }\n\n            ::slotted([slot='end']) {\n                border-left: none;\n                border-radius: 0 var(--wje-input-border-radius) var(--wje-input-border-radius) 0;\n            }\n\n            &.has-start input {\n                border-top-left-radius: 0;\n                border-bottom-left-radius: 0;\n            }\n\n            &.has-end input {\n                border-top-right-radius: 0;\n                border-bottom-right-radius: 0;\n            }\n            .error-message {\n                position: static;\n\n                background: transparent;\n                padding: 0.25rem 0;\n                left: auto;\n                transform: none;\n                color: var(--wje-input-color-invalid);\n                font-size: 12px;\n                line-height: normal;\n            }\n        }\n    }\n}\n\n.clear {\n    visibility: hidden;\n    position: absolute;\n    right: 0;\n    top: 3px;\n    --wje-padding-top: 0.25rem;\n    --wje-padding-start: 0.25rem;\n    --wje-padding-end: 0.25rem;\n    --wje-padding-bottom: 0.25rem;\n    --wje-button-margin-inline: 0 0.25rem;\n}\n\n:host([required]) .input-wrapper::after {\n    color: var(--wje-input-color-invalid);\n    content: '*';\n    font-family: var(--wje-force-mac-font-family);\n    font-size: 20px;\n    position: absolute;\n    right: 10px;\n    top: 2px;\n}\n\n:host([required]) .standard .input-wrapper::after {\n    top: 0;\n}\n\n:host([invalid]) {\n    .error-message {\n        display: block;\n    }\n    .default {\n        label {\n            opacity: 1 !important;\n            color: var(--wje-input-color-invalid) !important;\n            animation-name: shake;\n            animation-duration: 0.4s;\n            animation-iteration-count: 1;\n        }\n    }\n}\n\n::slotted([slot='start']),\n::slotted([slot='end']) {\n    display: flex;\n    align-items: center;\n    border-width: var(--wje-input-border-width);\n    border-style: var(--wje-input-border-style);\n    border-color: var(--wje-input-border-color);\n    padding-inline: var(--wje-input-slot-padding-inline);\n}\n\nslot[name='start'],\nslot[name='end'] {\n    display: flex;\n}\n\ninput {\n    background-color: var(--wje-input-background-color);\n    border-width: var(--wje-input-border-width);\n    border-style: var(--wje-input-border-style);\n    border-color: var(--wje-input-border-color);\n    font-family: var(--wje-input-font-family);\n    color: var(--wje-input-color);\n    appearance: none;\n    outline: 0;\n    padding: 0.25rem 0.5rem;\n    line-height: var(--wje-input-line-height);\n    font-size: 14px;\n    font-weight: normal;\n    vertical-align: middle;\n    min-height: 32px;\n}\n\n.error-message {\n    display: none;\n    position: absolute;\n    width: auto;\n    max-width: 100%;\n    min-width: auto;\n    border-radius: 50px;\n    background: black;\n    padding: 0.25rem 0.5rem;\n    top: 0;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: white;\n    font-size: 12px;\n    line-height: normal;\n}\n\n@keyframes shake {\n    8%,\n    41% {\n        transform: translateX(-4px);\n    }\n    25%,\n    58% {\n        transform: translateX(4px);\n    }\n    75% {\n        transform: translateX(-2px);\n    }\n    92% {\n        transform: translateX(2px);\n    }\n    0%,\n    100% {\n        transform: translateX(0);\n    }\n}\n";
class InputFile extends WJElement {
  /**
   * Constructor for the InputFile class.
   */
  constructor() {
    super();
    /**
     * The class name for the InputFile class.
     * @type {string}
     */
    __publicField(this, "className", "Input");
    this._value = "";
  }
  /**
   * @summary Sets the value of the input file.
   * @param {string} value The value to set for the input file.
   */
  set value(value) {
    this._value = value;
  }
  /**
   * Gets the value of the input file.
   * @returns {string}
   */
  get value() {
    return this._value;
  }
  /**
   * Returns the CSS stylesheet.
   * @static
   * @returns {object} styles
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Returns the observed attributes.
   * @static
   * @returns {Array} An empty array
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
   * @returns {object} Document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-input-file", this.variant || "default");
    let fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("multiple", "");
    fileInput.setAttribute("hidden", "");
    let input = document.createElement("wje-input");
    input.setAttribute("variant", "standard");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Click to upload");
    input.setAttribute("readonly", "");
    let span = document.createElement("span");
    span.setAttribute("slot", "start");
    let icon = document.createElement("wje-icon");
    icon.setAttribute("slot", "icon-only");
    icon.setAttribute("name", "cloud-upload");
    span.appendChild(icon);
    input.appendChild(span);
    native.appendChild(input);
    native.appendChild(fileInput);
    fragment.appendChild(native);
    this.native = native;
    this.input = input;
    this.fileInput = fileInput;
    return fragment;
  }
  /**
   * After draw method for the InputFile class.
   */
  afterDraw() {
    this.input.addEventListener("click", () => {
      this.fileInput.click();
    });
    this.fileInput.addEventListener("change", (e) => {
      let files = e.target.files;
      let fileNames = [];
      for (let i = 0; i < files.length; i++) {
        fileNames.push(files[i].name);
      }
      this.input.value = fileNames.join(", ");
      this.value = files;
      event.dispatchCustomEvent(this, "wje-input-file:change", { files });
    });
  }
}
InputFile.define("wje-input-file", InputFile);
export {
  InputFile as default
};
