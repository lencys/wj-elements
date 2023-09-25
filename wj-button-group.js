var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Button Group ]\n*/\n:host {\n  display: inline-block;\n}\n:host .native-button-group {\n  display: flex;\n  flex-wrap: nowrap;\n  line-height: 1;\n}\n:host slot {\n  display: contents;\n}\n::slotted(wj-button) {\n  margin: 0;\n}";
class ButtonGroup extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "ButtonGroup");
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
    element.classList.add("native-button-group");
    element.setAttribute("part", "native");
    this.slotElement = document.createElement("slot");
    element.appendChild(this.slotElement);
    fragment.appendChild(element);
    return fragment;
  }
  afterDraw(context, store, params) {
    const slottedElements = [...this.slotElement.assignedElements({ flatten: true })];
    slottedElements.forEach((el) => {
      let index = slottedElements.indexOf(el);
      let button = this.findButton(el);
      if (button) {
        button.classList.add("wj-button-group-button");
        button.classList.toggle("wj-button-group-first", index === 0);
        button.classList.toggle("wj-button-group-inner", index > 0 && index < slottedElements.length - 1);
        button.classList.toggle("wj-button-group-last", index === slottedElements.length - 1);
      }
    });
  }
  findButton(el) {
    const selector = "wj-button";
    return el.closest(selector) ?? el.querySelector(selector);
  }
}
customElements.get("wj-button-group") || window.customElements.define("wj-button-group", ButtonGroup);
export {
  ButtonGroup
};
