var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Divider ]\n*/\n:host {\n  --wj-border-size: 1px;\n  --wj-divider-border-color: var(--wj-border-color);\n  --wj-divider-border-width: var(--wj-border-size, 1px);\n  --wj-divider-spacing: 0;\n}\n:host(:not([vertical])) {\n  display: block;\n  border-top: solid var(--wj-divider-border-width) var(--wj-divider-border-color);\n  margin: var(--wj-divider-spacing) 0;\n}\n:host([vertical]) {\n  display: inline-block;\n  height: 100%;\n  border-left: solid var(--wj-divider-border-width) var(--wj-divider-border-color);\n  margin: 0 var(--wj-divider-spacing);\n}";
class Divider extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Divider");
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
    let native = document.createElement("div");
    let slot = document.createElement("slot");
    native.appendChild(slot);
    fragment.appendChild(native);
    return fragment;
  }
}
customElements.get("wj-divider") || window.customElements.define("wj-divider", Divider);
export {
  Divider
};
