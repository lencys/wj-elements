var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { event } from "./wj-element.js";
const styles = '/*\n[ WJ Radio ]\n*/\n:host {\n  --wj-radio-margin-top: 0;\n  --wj-radio-margin-bottom: .5rem;\n  --wj-radio-margin-inline: 0;\n  display: block;\n  margin-top: var(--wj-radio-margin-top);\n  margin-bottom: var(--wj-radio-margin-bottom);\n  margin-inline: var(--wj-radio-margin-inline);\n  line-height: 100%;\n  padding-left: 0;\n}\n:host label {\n  display: inline-flex;\n  cursor: pointer;\n  position: relative;\n  padding-left: 1.5rem;\n  min-width: 16px;\n  min-height: 16px;\n  margin-bottom: 0;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Old versions of Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */\n  align-items: center;\n}\n:host label:before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  left: 0;\n  -webkit-box-sizing: inherit;\n  box-sizing: border-box;\n  background-color: var(--wj-color-contrast-1);\n  border: 1px solid var(--wj-color-contrast-4);\n}\n\n.native-radio input[type=radio] + label:before {\n  border-radius: var(--wj-border-radius-circle);\n  transition: border 0.3s 0s cubic-bezier(0.455, 0.03, 0.215, 1.33);\n}\n.native-radio input[type=radio]:checked + label:before {\n  border-color: var(--wj-color-contrast-6);\n  border-width: 5px;\n}\n.native-radio input[type=radio]:focus + label {\n  color: var(--wj-color);\n}\n.native-radio input[type=radio]:focus + label:before {\n  outline: none !important;\n  box-shadow: 0 0 0 0 #78c8fe;\n}\n.native-radio input[type=radio] {\n  opacity: 0;\n  position: absolute;\n  top: 3px;\n  width: 16px;\n  height: 16px;\n}\n.native-radio input[type=radio][disabled] + label {\n  cursor: not-allowed !important;\n  color: var(--wj-color-contrast-9);\n  opacity: 0.5;\n}\n.native-radio input[type=radio][disabled] + label:before {\n  cursor: not-allowed !important;\n}\n\n.success input[type=radio]:checked + label:before {\n  border-color: var(--wj-color-success);\n}\n.primary input[type=radio]:checked + label:before {\n  border-color: var(--wj-color-primary);\n}\n.complete input[type=radio]:checked + label:before {\n  border-color: var(--wj-color-complete);\n}\n.warning input[type=radio]:checked + label:before {\n  border-color: var(--wj-color-warning);\n}\n.danger input[type=radio]:checked + label:before {\n  border-color: var(--wj-color-danger);\n}\n.neutral input[type=radio]:checked + label:before {\n  border-color: var(--wj-color-info);\n}';
class Radio extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Radio");
    __publicField(this, "inputEvent", (e) => {
      this.checked = e.target.checked;
    });
    this._checked = false;
  }
  set checked(value) {
    this._checked = value;
    if (value)
      this.setAttribute("checked", "");
    else
      this.removeAttribute("checked");
  }
  get checked() {
    return this._checked;
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["checked"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-radio");
    if (this.color)
      native.classList.add(this.color);
    this.input = document.createElement("input");
    this.input.type = "radio";
    this.input.id = "radio";
    this.input.name = this.name + "-radio";
    this.input.checked = this.hasAttribute("checked");
    this.input.disabled = this.hasAttribute("disabled");
    this.input.indeterminate = this.hasAttribute("indeterminate");
    let label = document.createElement("label");
    label.htmlFor = "radio";
    label.innerHTML = "<slot></slot>";
    native.appendChild(this.input);
    native.appendChild(label);
    fragment.appendChild(native);
    return fragment;
  }
  afterDraw() {
    if (!this.hasAttribute("disabled")) {
      event.addListener(this, "click", "wj:radio:change");
      event.addListener(this, "click", "wj:radio:input");
    }
  }
  disconnectedCallback() {
    event.removeElement(this);
  }
}
customElements.get("wj-radio") || window.customElements.define("wj-radio", Radio);
export {
  Radio
};
