var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = '/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Badge ]\n*/\n:host(.wj-color-primary) {\n  --wj-color-base: #7252D3 !important;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-color-complete) {\n  --wj-color-base: #0072EC !important;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-color-success) {\n  --wj-color-base: #19AD79 !important;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-color-warning) {\n  --wj-color-base: #FFd945 !important;\n  --wj-color-contrast: #4b4b4b !important;\n}\n:host(.wj-color-danger) {\n  --wj-color-base: #D83C31 !important;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-color-info) {\n  --wj-color-base: #3B4752 !important;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-color-menu) {\n  --wj-color-base: #f4f4f4 !important;\n  --wj-color-contrast: #4b4b4b !important;\n}\n:host {\n  --wj-chip-border-radius: 100px;\n  text-shadow: none;\n  font-family: "Inter UI", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  font-weight: 600;\n  background-color: #e0e0e0;\n  font-size: 11px;\n  padding-left: 6px;\n  padding-right: 6px;\n  color: #4b4b4b;\n  border-radius: 10px;\n}\n:host(.wj-color) {\n  background-color: var(--wj-color-base, red);\n  color: var(--wj-color-contrast);\n}';
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
