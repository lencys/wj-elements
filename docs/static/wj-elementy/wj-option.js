var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { event } from "./wj-element.js";
const styles = "/*\n[ WJ Option ]\n*/\n:host {\n  --wj-option-padding-top: .5rem;\n  --wj-option-padding-bottom: .5rem;\n  --wj-option-highlighted: var(--wj-color-contrast-3);\n  display: block;\n}\n:host wj-icon {\n  visibility: hidden;\n  margin-inline: 0.5rem;\n}\n\n:host([selected]) wj-icon {\n  visibility: visible;\n}\n\n.native-option {\n  display: flex;\n  align-items: center;\n  padding-top: var(--wj-option-padding-top);\n  padding-bottom: var(--wj-option-padding-bottom);\n}\n\n.native-option:hover {\n  background-color: var(--wj-option-highlighted);\n}\n\n::slotted([slot=start]) {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  margin-inline-end: 0.5rem;\n}\n\n::slotted([slot=end]) {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  margin-inline: auto 0.5rem;\n}";
class Option extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Option");
  }
  set selected(value) {
    return value ? this.setAttribute("selected", "") : this.removeAttribute("selected");
  }
  set value(value) {
    this.setAttribute("value", value);
  }
  set text(value) {
    this.innerText = value;
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("div");
    element.classList.add("native-option");
    element.setAttribute("part", "native");
    let icon = document.createElement("wj-icon");
    icon.setAttribute("name", "check");
    let start = document.createElement("slot");
    start.setAttribute("name", "start");
    let slot = document.createElement("slot");
    let end = document.createElement("slot");
    end.setAttribute("name", "end");
    element.appendChild(icon);
    element.appendChild(start);
    element.appendChild(slot);
    element.appendChild(end);
    fragment.appendChild(element);
    return fragment;
  }
  afterDraw() {
    event.addListener(this, "click", "wj:option-change");
  }
}
customElements.get("wj-option") || window.customElements.define("wj-option", Option);
export {
  Option
};
