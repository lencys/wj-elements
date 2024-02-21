var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ WJ Card - Subtitle ]\n*/\n:host {\n  --wj-card-subtitle-font-size: 10.5px;\n  --wj-card-subtitle-font-family: var(--wj-font-family-secondary);\n  --wj-card-subtitle-padding: 0;\n  transition: opacity 0.3s ease;\n  font-family: var(--wj-card-subtitle-font-family);\n  font-size: var(--wj-card-subtitle-font-size);\n  text-transform: uppercase;\n  display: inline-block;\n  letter-spacing: 0.06em;\n  font-weight: 500;\n  margin: 0;\n  padding: var(--wj-card-subtitle-padding);\n  line-height: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  filter: alpha(opacity=40);\n}";
class CardSubtitle extends WJElement {
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
  beforeDraw(context, store, params) {
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-card-subtitle") || window.customElements.define("wj-card-subtitle", CardSubtitle);
export {
  CardSubtitle
};
