var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Toolbar ]\n*/\n:host {\n  display: flex;\n}";
class ToolbarAction extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "ToolbarAction");
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
    let maxItems = +this.maxItems || 0;
    let actions = this.getActions();
    let slot = document.createElement("slot");
    let element = document.createElement("div");
    const shouldCollapse = maxItems !== 0 && actions.length > maxItems;
    if (shouldCollapse) {
      element = document.createElement("wj-dropdown");
    }
    element.appendChild(slot);
    fragment.appendChild(element);
    return fragment;
  }
  getActions() {
    return Array.from(this.querySelectorAll("wj-button"));
  }
}
customElements.get("wj-toolbar-action") || window.customElements.define("wj-toolbar-action", ToolbarAction);
export {
  ToolbarAction
};
