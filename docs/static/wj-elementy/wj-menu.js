var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ Wj Menu ]\n*/\n:host {\n  --wj-menu-background: var(--wj-background);\n  --wj-menu-border-width: 1px;\n  --wj-menu-border-style: solid;\n  --wj-menu-border-color: var(--wj-border-color);\n  --wj-menu-border-radius: 4px;\n  --wj-menu-padding-top: .5rem;\n  --wj-menu-padding-bottom: .5rem;\n  --wj-menu-padding-inline: 0;\n  --wj-menu-margin-top: ;\n  --wj-menu-margin-bottom: 0;\n  --wj-menu-margin-inline: 0;\n  --wj-menu-z-index: 900;\n  display: none;\n  background: var(--wj-menu-background);\n  position: relative;\n  border-width: var(--wj-menu-border-width);\n  border-style: var(--wj-menu-border-style);\n  border-color: var(--wj-menu-border-color);\n  z-index: var(--wj-menu-z-index);\n  border-radius: var(--wj-border-radius-small);\n  padding-top: var(--wj-menu-padding-top);\n  padding-bottom: var(--wj-menu-padding-bottom);\n  padding-inline: var(--wj-menu-padding-inline);\n  margin-top: var(--wj-menu-margin-top);\n  margin-bottom: var(--wj-menu-margin-bottom);\n  margin-inline: var(--wj-menu-margin-inline);\n  overflow: auto;\n  overscroll-behavior: none;\n}\n:host .native-menu {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n:host .native-menu ::slotted(wj-button) {\n  margin: 0;\n}\n\n:host(.wj-menu-collapse) {\n  max-width: 70px !important;\n}\n\n:host([variant=context]) {\n  display: block !important;\n  margin-left: var(--wj-menu-submenu-offset);\n}\n\n:host([variant=megamenu]) .native-menu {\n  flex-direction: row;\n  align-items: end;\n  flex-wrap: nowrap;\n}\n:host([variant=megamenu]) .native-menu .check-icon {\n  display: none;\n}\n\n:host([active]) {\n  display: flex !important;\n}";
class Menu extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Menu");
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["active", "collapse"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    this.classList.remove("wj-menu-collapse");
    if (this.hasAttribute("collapse"))
      this.classList.add("wj-menu-collapse");
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
