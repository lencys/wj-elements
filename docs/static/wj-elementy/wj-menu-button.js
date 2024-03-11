var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { event } from "./wj-element.js";
const styles = "/*\n[ WJ Menu Label ]\n*/\n:host {\n  display: inline-flex;\n}\n\n@media (min-width: 768px) {\n  :host {\n    display: none;\n  }\n}";
class MenuButton extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "MenuButton");
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
    let slot = document.createElement("slot");
    fragment.appendChild(slot);
    return fragment;
  }
  afterDraw() {
    event.addListener(this, "click", null, (e) => {
      document.querySelector(`#${this.contentId}`).classList.toggle("open");
    });
  }
}
WJElement.define("wj-menu-button", MenuButton);
export {
  MenuButton as default
};
