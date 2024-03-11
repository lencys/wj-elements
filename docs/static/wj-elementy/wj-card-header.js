var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = '/*\n[ WJ Card - Header ]\n*/\n:host {\n  --wj-card-header-padding: 1rem 1rem 0.5rem;\n  background: transparent;\n  border-radius: 0;\n  border-bottom: 0;\n  padding: var(--wj-card-header-padding);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n:host(.wj-separator):after {\n  content: "";\n  height: 1px;\n  background: rgba(0, 0, 0, 0.08);\n  margin-top: 0.5rem;\n}';
class CardHeader extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "CardHeader");
  }
  static get cssStyleSheet() {
    return styles;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    if (this.hasAttribute("separator"))
      this.classList.add("wj-separator");
    fragment.appendChild(element);
    return fragment;
  }
}
WJElement.define("wj-card-header", CardHeader);
export {
  CardHeader as default
};
