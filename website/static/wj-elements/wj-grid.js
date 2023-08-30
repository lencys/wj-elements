var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./default-store-actions-65bc7799.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Grid ]\n*/\n:host {\n  width: 100%;\n  flex-grow: 0;\n}";
const template = document.createElement("template");
template.innerHTML = `<style>
	${styles}
</style>`;
class Grid extends WJElement {
  constructor() {
    super(template);
    __publicField(this, "className", "Grid");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    if (this.color)
      this.classList.add("wj-color-" + this.color, "wj-color");
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-grid") || window.customElements.define("wj-grid", Grid);
export {
  Grid
};
