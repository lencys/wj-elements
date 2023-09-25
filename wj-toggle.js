var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = '/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Badge ]\n*/\n:host(.wj-color-primary) {\n  --wj-toggle-color-base: linear-gradient(to right, #7252D3 0%, #845ae0 44%, rgba(0, 0, 0, 0.14) 62%, rgba(0, 0, 0, 0.04) 97%);\n}\n:host(.wj-color-complete) {\n  --wj-toggle-color-base: linear-gradient(to right, #0072EC 0%, #0f8ff9 44%, rgba(0, 0, 0, 0.14) 62%, rgba(0, 0, 0, 0.04) 97%);\n}\n:host(.wj-color-success) {\n  --wj-toggle-color-base: linear-gradient(to right, #19AD79 0%, #26bf93 44%, rgba(0, 0, 0, 0.14) 62%, rgba(0, 0, 0, 0.04) 97%) !important;\n}\n:host(.wj-color-warning) {\n  --wj-toggle-color-base: linear-gradient(to right, #FFd945 0%, #ffe858 44%, rgba(0, 0, 0, 0.14) 62%, rgba(0, 0, 0, 0.04) 97%);\n}\n:host(.wj-color-danger) {\n  --wj-toggle-color-base: linear-gradient(to right, #D83C31 0%, #e6533c 44%, rgba(0, 0, 0, 0.14) 62%, rgba(0, 0, 0, 0.04) 97%);\n}\n:host(.wj-color-dark) {\n  --wj-toggle-color-base: linear-gradient(to right, #3B4752 0%, #475b6b 44%, rgba(0, 0, 0, 0.14) 62%, rgba(0, 0, 0, 0.04) 97%);\n}\n:host {\n  --wj-toggle-color-base: $color-contrast-lowest;\n  --wj-toggle-width: 30px;\n  --wj-toggle-height: 18px;\n  --wj-toggle-border-radius: 50px;\n  --wj-toggle-handle-width: 14px;\n  --wj-toggle-handle-height: 14px;\n  --wj-toggle-handle-border-radius: 9px;\n  --wj-toggle-handle-color: #fff;\n  --wj-toggle-handle-shadow: 1px 0 1px 0.5px rgba(0,0,0,0.12), 2px 4px 6px rgba(0,0,0,0.2);\n  --wj-toggle-handle-shadow-checked: 1px 1px 0 rgba(0,0,0,0.08), -3px 3px 6px rgba(0,0,0,0.3);\n}\n.native-toggle {\n  display: flex;\n}\nlabel {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  user-select: none;\n}\nlabel .label-wrapper {\n  width: var(--wj-toggle-width);\n  height: var(--wj-toggle-height);\n  position: relative;\n  display: flex;\n  align-items: center;\n}\nlabel .label-wrapper:before {\n  content: "";\n  position: absolute;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  top: auto;\n  left: 0;\n  background: var(--wj-toggle-color-base);\n  background-size: 300%;\n  background-position: right;\n  border-radius: var(--wj-toggle-border-radius);\n  border: none;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);\n  transition: background 310ms, box-shadow 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\nlabel .label-wrapper:after {\n  content: "";\n  position: absolute;\n  transform: translateX(0%);\n  background: var(--wj-toggle-handle-color);\n  width: var(--wj-toggle-handle-width);\n  height: var(--wj-toggle-handle-height);\n  border-radius: var(--wj-toggle-handle-border-radius);\n  top: auto;\n  left: 2px;\n  box-shadow: var(--wj-toggle-handle-shadow);\n  transition: transform, box-shadow;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\ninput[type=checkbox][disabled] + label {\n  cursor: not-allowed !important;\n  color: #4b4b4b;\n  opacity: 0.58;\n}\ninput[type=checkbox][disabled] + label:before {\n  cursor: not-allowed !important;\n}\ninput[type=checkbox] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\ninput[type=checkbox]:checked + label .label-wrapper:before {\n  background-position: left;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);\n}\ninput[type=checkbox]:checked + label .label-wrapper:after {\n  transform: translateX(calc(var(--wj-toggle-width) - var(--wj-toggle-handle-width) - 4px));\n  box-shadow: var(--wj-toggle-handle-shadow-checked);\n}\ninput[type=checkbox]:focus + label .label-wrapper:before {\n  outline: none !important;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12), 0 0 0 0px #78c8fe;\n}\ninput[type=checkbox][disabled]:active + label .label-wrapper:after {\n  transform: scaleX(1.1);\n  transform-origin: center left;\n  transition: transform step-start;\n}\ninput[type=checkbox]:checked[disabled]:active + label .label-wrapper:after {\n  transform: translateX(calc(100% - 6px)) scaleX(1.1);\n  transform-origin: center right;\n}\ninput[type=checkbox]:hover:active + label .label-wrapper:before {\n  background-color: transparent;\n}\n/* hide focus style if not from keyboard navigation */\n:host .text {\n  margin-inline: 0.5rem 0;\n}';
class Toggle extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Toggle");
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  get checked() {
    return this.hasAttribute("checked");
  }
  static get cssStyleSheet() {
    return styles;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("div");
    element.classList.add("native-toggle");
    let input = document.createElement("input");
    input.setAttribute("part", "input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", this.name);
    input.setAttribute("id", "input");
    let label = document.createElement("label");
    label.setAttribute("for", "input");
    let labelWrapper = document.createElement("div");
    labelWrapper.setAttribute("part", "toggle");
    labelWrapper.classList.add("label-wrapper");
    let text = document.createElement("div");
    text.classList.add("text");
    text.innerHTML = "<slot></slot>";
    if (this.color)
      this.classList.add("wj-color-" + this.color, "wj-color");
    if (this.checked)
      input.checked = this.checked;
    if (this.disabled)
      input.disabled = this.disabled;
    element.appendChild(input);
    element.appendChild(label);
    label.appendChild(labelWrapper);
    label.appendChild(text);
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-toggle") || window.customElements.define("wj-toggle", Toggle);
export {
  Toggle
};
