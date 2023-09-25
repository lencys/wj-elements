var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Tooltip ]\n*/\n:host {\n  --arrow-size: 7px;\n  --arrow-color: #000000;\n}\n.native-tooltip {\n  display: block;\n  padding: 5px 0.5rem;\n  color: #FFFFFF;\n  background-color: var(--arrow-color);\n  font-weight: normal;\n  font-size: 0.75rem !important;\n  border-radius: 4px;\n  line-height: 1;\n  box-sizing: border-box;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);\n}\n.arrow {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: black;\n  transform: rotate(45deg);\n}";
class Tooltip extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Tooltip");
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["active"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let popup = document.createElement("wj-popup");
    popup.setAttribute("placement", this.placement || "top");
    popup.setAttribute("offset", this.offset || "0");
    let slot = document.createElement("slot");
    slot.setAttribute("slot", "anchor");
    let arrow = document.createElement("div");
    arrow.classList.add("arrow");
    arrow.setAttribute("slot", "arrow");
    let native = document.createElement("div");
    native.classList.add("native-tooltip");
    native.innerHTML = this.content;
    popup.appendChild(slot);
    popup.appendChild(arrow);
    popup.appendChild(native);
    fragment.appendChild(popup);
    return fragment;
  }
}
customElements.get("wj-tooltip") || window.customElements.define("wj-tooltip", Tooltip);
export {
  Tooltip
};
