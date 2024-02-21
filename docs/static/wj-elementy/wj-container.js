var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ WJ Container ]\n*/\n:host {\n  --wj-container-indent: 0;\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  flex-basis: auto;\n  box-sizing: border-box;\n  min-width: 0;\n}\n\n:host([vertical]) {\n  flex-direction: column;\n}\n\n@media (min-width: 768px) {\n  :host([indent]) {\n    margin-left: var(--wj-container-indent);\n  }\n}";
class Container extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Container");
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
    if (this.indent)
      this.style.setProperty("--wj-container-indent", this.indent);
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-container") || window.customElements.define("wj-container", Container);
export {
  Container
};
