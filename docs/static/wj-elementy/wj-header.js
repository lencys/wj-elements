var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ WJ Header ]\n*/\n:host {\n  --wj-header-background: var(--wj-background);\n  --wj-header-border-color: var(--wj-border-color);\n  --wj-header-border-width: 0 0 1px 0;\n  --wj-header-border-style: solid;\n  --wj-header-top: 0;\n  --wj-header-height: 60px;\n  display: block;\n  height: var(--wj-header-height);\n  width: 100%;\n  background: var(--wj-header-background);\n  border-width: var(--wj-header-border-width);\n  border-style: var(--wj-header-border-style);\n  border-color: var(--wj-header-border-color);\n}\n:host .native-header {\n  display: flex;\n  padding-inline: 1rem;\n}\n\n:host([sticky]) {\n  position: sticky;\n  top: var(--wj-header-top);\n  z-index: 999;\n}";
class Header extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Header");
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
    let element = document.createElement("header");
    element.classList.add("native-header");
    element.setAttribute("part", "native");
    let slot = document.createElement("slot");
    element.appendChild(slot);
    fragment.appendChild(element);
    return fragment;
  }
}
WJElement.define("wj-header", Header);
export {
  Header as default
};
