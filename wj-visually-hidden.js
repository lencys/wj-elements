var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ VisuallyHidden ]\n*/\n:host(:not(:focus-within)) {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  clip: rect(0 0 0 0) !important;\n  clip-path: inset(50%) !important;\n  border: none !important;\n  overflow: hidden !important;\n  white-space: nowrap !important;\n  padding: 0 !important;\n}";
class VisuallyHidden extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "VisuallyHidden");
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
}
customElements.get("wj-visually-hidden") || window.customElements.define("wj-visually-hidden", VisuallyHidden);
export {
  VisuallyHidden
};
