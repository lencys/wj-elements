var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n:host(.wj-color-primary) {\n  --wj-color: #7252D3 !important;\n}\n:host(.wj-color-complete) {\n  --wj-color: #0072EC !important;\n}\n:host(.wj-color-success) {\n  --wj-color-base: #19AD79 !important;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-color-warning) {\n  --wj-color-base: #FFd945 !important;\n  --wj-color-contrast: #4b4b4b !important;\n}\n:host(.wj-color-danger) {\n  --wj-color-base: #D83C31 !important;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-color-info) {\n  --wj-color-base: #3B4752 !important;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-color-menu) {\n  --wj-color-base: #2b303b !important;\n  --wj-color-contrast: #fff !important;\n}\n:host {\n  --wj-label-text-wrap-font-size: 13px;\n  --wj-label-text-wrap-line-height: 1.4;\n}\n:host {\n  --wj-color: initial;\n  display: block;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n:host(.wj-color) {\n  color: var(--wj-color-base);\n}\n:host(.wj-text-wrap),\n:host([text-wrap]) {\n  white-space: normal !important;\n  font-size: var(--wj-label-text-wrap-font-size);\n  line-height: var(--wj-label-text-wrap-line-height);\n}\n:host(.label-fixed) {\n  flex: 0 0 100px;\n  width: 100px;\n  min-width: 100px;\n  max-width: 200px;\n}\n:host(.label-stacked),\n:host(.label-floating) {\n  margin: 0;\n  align-self: stretch;\n  width: auto;\n  max-width: 100%;\n}\n:host(.label-no-animate.label-floating) {\n  transition: none;\n}\n::slotted(*) h1,\n::slotted(*) h2,\n::slotted(*) h3,\n::slotted(*) h4,\n::slotted(*) h5,\n::slotted(*) h6 {\n  text-overflow: inherit;\n  overflow: inherit;\n}\n:host(.wj-color) {\n  color: var(--wj-color);\n}\n::slotted(*:first-child) {\n  margin-top: 0 !important;\n}\n::slotted(*:last-child) {\n  margin-bottom: 0 !important;\n}";
class Label extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Label");
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
    if (this.color)
      this.classList.add("wj-color-" + params.color, "wj-color");
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-label") || window.customElements.define("wj-label", Label);
export {
  Label
};
