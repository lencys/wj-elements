var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { event } from "./wj-element.js";
const styles = '/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Checkbox ]\n*/\n:host {\n  --wj-grey-check-icon: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAQAgMAAADsa5zLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTHBwcG9vb3BwcBFjhIYAAAAEdFJOUwBG9tQE3MceAAAAVUlEQVQoz2NgGLKA0QGIDwDxBSCeAMEYgAWI2YCK2CagYgwgDcRSDhgYbAkKzsSKGdgakCyY6ADES7BiiCkgJ4PYyybgxAhQAsRZDrgxCpDEg4cAAAAp2ibhZRGLHgAAAABJRU5ErkJggg==") left center;\n  --wj-white-check-icon: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAQAgMAAADsa5zLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAAEdFJOUwBG9tQE3MceAAAAVUlEQVQoz2NgGLKA0QGIDwDxBSCeAMEYgAWI2YCK2CagYgwgDcRSDhgYbAkKzsSKGdgakCyY6ADES7BiiCkgJ4PYyybgxAhQAsRZDrgxCpDEg4cAAAAp2ibhZRGLHgAAAABJRU5ErkJggg==") left center;\n  --wj-checkbox-margin-top: 0;\n  --wj-checkbox-margin-bottom: .5rem;\n  --wj-checkbox-margin-inline: 0;\n  --wj-checkbox-width: 16px;\n  --wj-checkbox-height: 16px;\n  display: block;\n  margin-top: var(--wj-checkbox-margin-top);\n  margin-bottom: var(--wj-checkbox-margin-bottom);\n  margin-inline: var(--wj-checkbox-margin-inline);\n  line-height: 100%;\n  padding-left: 0px;\n}\n:host label {\n  display: inline-block;\n  cursor: pointer;\n  position: relative;\n  padding-left: 25px;\n  min-width: var(--wj-checkbox-width);\n  min-height: var(--wj-checkbox-height);\n  margin-bottom: 0;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Old versions of Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */\n}\n:host label:before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  left: 0;\n  -webkit-box-sizing: inherit;\n  box-sizing: border-box;\n  background-color: var(--wj-color-contrast-lowest);\n  border: 1px solid var(--wj-border-color);\n}\n.native-checkbox label {\n  transition: border 140ms linear 0s, color 140ms linear 0s, background-color 140ms linear 0s;\n}\n.native-checkbox label:hover {\n  color: var(--wj-color-contrast-higher);\n}\n.native-checkbox label:before {\n  border-radius: 3px;\n  transition: border 140ms linear 0s, color 140ms linear 0s, background-color 140ms linear 0s;\n}\n.native-checkbox input[type=checkbox] {\n  position: absolute;\n  margin: 0;\n  z-index: -1;\n  width: 16px;\n  height: 16px;\n  opacity: 0;\n  display: none;\n}\n.native-checkbox input[type=checkbox] + label::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  border-right: 0 solid transparent;\n  border-bottom: 0 solid transparent;\n  width: 16px;\n  height: 16px;\n  overflow: hidden;\n}\n.native-checkbox.checkbox-circle label:after {\n  border-radius: 99px;\n}\n.native-checkbox.checkbox-circle label:before {\n  border-radius: 99px;\n}\n.native-checkbox input[type=checkbox]:checked + label::after {\n  content: "";\n  background: var(--wj-grey-check-icon);\n  background-size: 160px 16px;\n  background-repeat: no-repeat;\n  animation-name: checkbox-check;\n  animation-duration: 320ms;\n  animation-timing-function: steps(9);\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n}\n.native-checkbox input[type=checkbox]:hover:active:not(:checked) + label:before {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n.native-checkbox input[type=checkbox]:focus + label {\n  color: var(--wj-color-contrast-higher);\n}\n.native-checkbox input[type=checkbox]:focus + label:before {\n  outline: none !important;\n  box-shadow: 0 0 0 0px #78c8fe;\n}\n.native-checkbox input[type=checkbox][disabled] + label {\n  cursor: not-allowed !important;\n  color: var(--wj-color-contrast-high);\n  opacity: 0.58;\n}\n.native-checkbox input[type=checkbox][disabled] + label:before {\n  cursor: not-allowed !important;\n  background: #ececec;\n}\n.native-checkbox input[type=checkbox]:indeterminate + label:after {\n  background: none;\n  background-color: var(--wj-color-contrast-high);\n  width: 10px;\n  height: 2px;\n  top: 6px;\n  margin: 3px;\n  border-radius: 2px;\n}\n.native-checkbox.right label {\n  padding-left: 0;\n  padding-right: 26px;\n}\n.native-checkbox.right label:before {\n  right: 0;\n  left: auto;\n}\n.native-checkbox.right input[type=checkbox]:checked + label {\n  position: relative;\n}\n.native-checkbox.right input[type=checkbox]:checked + label::after {\n  position: absolute;\n  right: 0px;\n  left: auto;\n}\n.success input[type=checkbox]:checked + label:before, .success input[type=checkbox]:indeterminate + label:before {\n  border-color: var(--wj-color-success);\n  background-color: var(--wj-color-success);\n}\n.primary input[type=checkbox]:checked + label:before, .primary input[type=checkbox]:indeterminate + label:before {\n  border-color: var(--wj-color-primary);\n  background-color: var(--wj-color-primary);\n}\n.complete input[type=checkbox]:checked + label:before, .complete input[type=checkbox]:indeterminate + label:before {\n  border-color: var(--wj-color-complete);\n  background-color: var(--wj-color-complete);\n}\n.warning input[type=checkbox]:checked + label:before, .warning input[type=checkbox]:indeterminate + label:before {\n  border-color: var(--wj-color-warning);\n  background-color: var(--wj-color-warning);\n}\n.danger input[type=checkbox]:checked + label:before, .danger input[type=checkbox]:indeterminate + label:before {\n  border-color: var(--wj-color-danger);\n  background-color: var(--wj-color-danger);\n}\n.info input[type=checkbox]:checked + label:before, .info input[type=checkbox]:indeterminate + label:before {\n  border-color: var(--wj-color-info);\n  background-color: var(--wj-color-info);\n}\n.info input[type=checkbox]:checked + label::after, .danger input[type=checkbox]:checked + label::after, .complete input[type=checkbox]:checked + label::after, .primary input[type=checkbox]:checked + label::after, .success input[type=checkbox]:checked + label::after {\n  background: var(--wj-white-check-icon);\n}\n.info input[type=checkbox]:indeterminate + label::after, .danger input[type=checkbox]:indeterminate + label::after, .complete input[type=checkbox]:indeterminate + label::after, .primary input[type=checkbox]:indeterminate + label::after, .success input[type=checkbox]:indeterminate + label::after {\n  background-color: var(--wj-color-contrast-lowest);\n}\n@keyframes shrink-bounce {\n  0% {\n    transform: scale(1);\n  }\n  33% {\n    transform: scale(0.85);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes checkbox-check {\n  0% {\n    background-position: 0;\n  }\n  100% {\n    background-position: -144px;\n  }\n}\n/* hide focus style if not from keyboard navigation */\n.js-focus-visible .native-checkbox input[type=checkbox]:focus:not(.focus-visible) + label:before {\n  box-shadow: none;\n}\ninput[type=checkbox] {\n  accent-color: var(--wj-color-primary) !important;\n  font-size: 50px;\n}';
class Checkbox extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Checkbox");
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
    native.classList.add("native-checkbox");
    if (this.variant === "circle")
      native.classList.add("checkbox-circle");
    if (this.color)
      native.classList.add(this.color);
    this.input = document.createElement("input");
    this.input.type = "checkbox";
    this.input.id = "checkbox";
    this.input.name = this.name = "checkbox";
    this.input.checked = this.hasAttribute("checked");
    this.input.disabled = this.hasAttribute("disabled");
    this.input.indeterminate = this.hasAttribute("indeterminate");
    let label = document.createElement("label");
    label.htmlFor = "checkbox";
    label.innerHTML = "<slot></slot>";
    native.appendChild(this.input);
    native.appendChild(label);
    fragment.appendChild(native);
    return fragment;
  }
  afterDraw() {
    event.addListener(this, "click", "wj:checkbox:change");
    event.addListener(this, "click", "wj:checkbox:input");
  }
  disconnectedCallback() {
    event.removeElement(this);
  }
}
customElements.get("wj-checkbox") || window.customElements.define("wj-checkbox", Checkbox);
WJElement.define("wj-checkbox", Checkbox);
export {
  Checkbox as default
};
