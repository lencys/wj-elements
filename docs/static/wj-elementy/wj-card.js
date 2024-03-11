var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ WJ Card ]\n*/\n:host {\n  --wj-card-margin-top: 0;\n  --wj-card-margin-bottom: 1rem;\n  --wj-card-margin-inline: 0;\n  --wj-card-border-color: transparent;\n}\n\n:host(.wj-color-primary) {\n  --wj-card-background: var(--wj-color-primary);\n}\n\n:host(.wj-color-complete) {\n  --wj-card-background: var(--wj-color-complete);\n}\n\n:host(.wj-color-success) {\n  --wj-card-background: var(--wj-color-success);\n}\n\n:host(.wj-color-warning) {\n  --wj-card-background: var(--wj-color-warning);\n}\n\n:host(.wj-color-danger) {\n  --wj-card-background: var(--wj-color-danger);\n}\n\n:host(.wj-color-info) {\n  --wj-card-background: var(--wj-color-info);\n}\n\n:host(.wj-color-menu) {\n  --wj-card-background: var(--wj-color-menu);\n}\n\n:host(.wj-color-primary) {\n  --wj-card-color: var(--wj-color-white);\n}\n\n:host(.wj-color-complete) {\n  --wj-card-color: var(--wj-color-white);\n}\n\n:host(.wj-color-success) {\n  --wj-card-color: var(--wj-color-white);\n}\n\n:host(.wj-color-warning) {\n  --wj-card-color: var(--wj-color);\n}\n\n:host(.wj-color-danger) {\n  --wj-card-color: var(--wj-color-white);\n}\n\n:host(.wj-color-info) {\n  --wj-card-color: var(--wj-color-white);\n}\n\n:host(.wj-color-menu) {\n  --wj-card-color: var(--wj-color-white) !important;\n}\n\n:host {\n  background-color: var(--wj-card-background);\n  color: var(--wj-card-color) !important;\n  margin-top: var(--wj-card-margin-top);\n  margin-bottom: var(--wj-card-margin-bottom);\n  margin-inline: var(--wj-card-margin-inline);\n  box-shadow: var(--wj-box-shadow-large);\n  border-color: var(--wj-border-color);\n  border-style: var(--wj-border-style);\n  border-width: var(--wj-border-size);\n  border-radius: var(--wj-border-radius-medium);\n  font-family: var(--wj-font-family);\n  font-size: var(--wj-font-size);\n  line-height: var(--wj-line-height);\n  position: relative;\n  width: 100%;\n  word-wrap: normal;\n  display: flex;\n  flex-direction: column;\n  contain: content;\n  overflow: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n}\n\n:host(.wj-color) {\n  background-color: var(--wj-card-background, #fff);\n  color: var(--wj-card-color);\n}";
class Card extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Card");
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
    if (params.color)
      this.classList.add("wj-color-" + params.color, "wj-color");
    fragment.appendChild(element);
    return fragment;
  }
}
WJElement.define("wj-card", Card);
export {
  Card as default
};
