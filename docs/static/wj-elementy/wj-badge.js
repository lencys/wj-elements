var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ WJ Badge ]\n*/\n:host(.wj-color-primary) {\n  --wj-color-base: var(--wj-color-primary) !important;\n  --wj-color-contrast: var(--wj-color-contrast-lowest) !important;\n}\n:host(.wj-color-complete) {\n  --wj-color-base: var(--wj-color-complete) !important;\n  --wj-color-contrast: var(--wj-color-contrast-lowest) !important;\n}\n:host(.wj-color-success) {\n  --wj-color-base: var(--wj-color-success) !important;\n  --wj-color-contrast: var(--wj-color-contrast-lowest) !important;\n}\n:host(.wj-color-warning) {\n  --wj-color-base: var(--wj-color-warning) !important;\n  --wj-color-contrast: var(--wj-color-contrast-high) !important;\n}\n:host(.wj-color-danger) {\n  --wj-color-base: var(--wj-color-danger) !important;\n  --wj-color-contrast: var(--wj-color-contrast-lowest) !important;\n}\n:host(.wj-color-info) {\n  --wj-color-base: var(--wj-color-info) !important;\n  --wj-color-contrast: var(--wj-color-contrast-lowest) !important;\n}\n:host(.wj-color-menu) {\n  --wj-color-base: var(--wj-color-contrast-lower) !important;\n  --wj-color-contrast: var(--wj-color-contrast-high) !important;\n}\n:host {\n  --wj-chip-border-radius: 100px;\n  text-shadow: none;\n  font-family: var(--wj-font-family);\n  font-weight: 600;\n  background-color: var(--wj-color-contrast-low);\n  font-size: 11px;\n  padding-left: 6px;\n  padding-right: 6px;\n  color: var(--wj-color-contrast-high);\n  border-radius: 10px;\n}\n:host(.wj-color) {\n  background-color: var(--wj-color-base, red);\n  color: var(--wj-color-contrast);\n}";
class Badge extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Badge");
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
    if (this.color)
      this.classList.add("wj-color-" + this.color, "wj-color");
    fragment.appendChild(element);
    return fragment;
  }
}
let __esModule = "true";
customElements.get("wj-badge") || window.customElements.define("wj-badge", Badge);
export {
  Badge,
  __esModule
};
