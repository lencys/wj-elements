var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ Wj Footer ]\n*/\n:host {\n  --wj-footer-height: 60px;\n  padding: 0 20px;\n  flex-shrink: 0;\n  height: var(--wj-footer-height);\n  display: block;\n}";
class Footer extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Footer");
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
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-footer") || window.customElements.define("wj-footer", Footer);
export {
  Footer
};
