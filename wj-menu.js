var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Menu ]\n*/\n:host {\n  --wj-menu-background: #fff;\n  --wj-menu-border-width: 1px;\n  --wj-menu-border-style: solid;\n  --wj-menu-border-color: var(--wj-border-color);\n  --wj-menu-border-radius: 4px;\n  --wj-menu-padding-top: .5rem;\n  --wj-menu-padding-bottom: .5rem;\n  --wj-menu-padding-inline: 0;\n  background: var(--wj-menu-background);\n  display: block;\n  position: relative;\n  border-width: var(--wj-menu-border-width);\n  border-style: var(--wj-menu-border-style);\n  border-color: var(--wj-menu-border-color);\n  border-radius: var(--wj-menu-border-radius);\n  -webkit-border-radius: var(--wj-menu-border-radius);\n  -moz-border-radius: var(--wj-menu-border-radius);\n  padding-top: var(--wj-menu-padding-top);\n  padding-bottom: var(--wj-menu-padding-bottom);\n  padding-inline: var(--wj-menu-padding-inline);\n  overflow: auto;\n  overscroll-behavior: none;\n}\n:host .native-menu {\n  display: flex;\n  flex-direction: column;\n}\n:host .native-menu ::slotted(wj-button) {\n  margin: 0;\n}";
class Menu extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Menu");
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
    let native = document.createElement("div");
    native.classList.add("native-menu");
    let slot = document.createElement("slot");
    native.appendChild(slot);
    fragment.appendChild(native);
    return fragment;
  }
}
customElements.get("wj-menu") || window.customElements.define("wj-menu", Menu);
export {
  Menu
};
