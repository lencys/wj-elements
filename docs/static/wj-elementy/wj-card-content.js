var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ WJ Card - Content ]\n*/\n:host {\n  --wj-card-padding: 0 1rem 1rem;\n  display: block;\n  padding: var(--wj-card-padding);\n}\n:host.no-padding .row {\n  margin-left: 0;\n  margin-right: 0;\n}\n:host.no-bottom-padding {\n  padding-bottom: 0;\n}\n:host.no-top-padding {\n  padding-top: 0;\n}\n:host .title {\n  margin-top: 0;\n}\n:host.scrollable {\n  margin-bottom: 20px;\n}\n:host h3 {\n  line-height: 34px;\n  font-size: 26px;\n}";
class CardContent extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "CardContent");
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
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-card-content") || window.customElements.define("wj-card-content", CardContent);
export {
  CardContent
};
