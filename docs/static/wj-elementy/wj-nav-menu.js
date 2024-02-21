var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Button Group ]\n*/\n:host {\n  display: inline-block;\n}\n:host .native-button-group {\n  display: flex;\n  flex-wrap: nowrap;\n  line-height: 1;\n}\n:host slot {\n  display: contents;\n}\n::slotted(wj-button) {\n  margin: 0;\n}";
class NavMenu extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "NavMenu");
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
    let element = document.createElement("div");
    element.classList.add("native-button-group");
    element.setAttribute("part", "native");
    this.slotElement = document.createElement("slot");
    element.appendChild(this.slotElement);
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-button-group") || window.customElements.define("wj-button-group", NavMenu);
export {
  NavMenu
};
