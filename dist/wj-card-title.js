var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n:host {\n  --wj-card-title-font-size: 24px;\n  --wj-card-title-font-weight: 500;\n  --wj-card-title-margin: 0;\n  --wj-card-title-padding: 0;\n  --wj-card-title-line-height: 1.2;\n}\n:host {\n  font-size: var(--wj-card-title-font-size);\n  font-weight: var(--wj-card-title-font-weight);\n  margin: var(--wj-card-title-margin);\n  padding: var(--wj-card-title-padding);\n  line-height: var(--wj-card-title-line-height);\n  display: block;\n  position: relative;\n}";
class CardTitle extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "CardTitle");
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
customElements.get("wj-card-title") || window.customElements.define("wj-card-title", CardTitle);
export {
  CardTitle
};
