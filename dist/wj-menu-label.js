var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { WjElementUtils } from "./wj-element.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Menu Label ]\n*/\n:host {\n  --wj-menu-label-font-size: .75rem;\n  --wj-menu-label-weight: 600;\n  --wj-letter-spacing: .025rem;\n  --wj-menu-label-color: rgba(33, 33, 33, 0.62);\n  --wj-padding-top: 0;\n  --wj-padding-bottom: 0;\n  --wj-padding-start: 1.5rem;\n  --wj-padding-end: 1.5rem;\n}\n:host .native-menu-label {\n  font-size: var(--wj-menu-label-font-size);\n  display: inline-block;\n  font-weight: var(--wj-menu-label-weight);\n  letter-spacing: var(--wj-letter-spacing);\n  color: var(--wj-menu-label-color);\n  padding: var(--wj-padding-top) var(--wj-padding-start) var(--wj-padding-bottom) var(--wj-padding-end);\n}";
class MenuLabel extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "MenuLabel");
    this.hasSubmenu = WjElementUtils.hasSlot(this, "submenu");
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
    slot.setAttribute("part", "base");
    slot.classList.add("native-menu-label");
    fragment.appendChild(slot);
    return fragment;
  }
}
customElements.get("wj-menu-label") || window.customElements.define("wj-menu-label", MenuLabel);
export {
  MenuLabel
};
