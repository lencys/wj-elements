var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ WJ Card - Controls ]\n*/\n:host {\n  --wj-card-subtitle-font-size: 28px;\n  --wj-card-subtitle-font-family: var(--wj-font-family-secondary);\n  font-family: var(--wj-card-subtitle-font-family);\n  text-transform: uppercase;\n  display: inline-block;\n  letter-spacing: 0.06em;\n  font-size: 10.5px;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  line-height: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  filter: alpha(opacity=40);\n  transition: opacity 0.3s ease;\n  position: absolute;\n  right: 1rem;\n  top: 0.5rem;\n}";
class CardControls extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "CardControls");
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
customElements.get("wj-card-controls") || window.customElements.define("wj-card-controls", CardControls);
export {
  CardControls
};
