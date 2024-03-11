var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { event } from "./wj-element.js";
const styles = "/*\n[ WJ Tooltip ]\n*/\n:host {\n  --wj-tooltip-arrow-color: var(--wj-color-contrast-11);\n}\n\n.native-tooltip {\n  display: block;\n  padding: 0.5rem;\n  color: var(--wj-color-contrast-0);\n  background-color: var(--wj-color-contrast-11);\n  font-weight: normal;\n  font-size: 0.75rem !important;\n  border-radius: var(--wj-border-radius-small);\n  line-height: 1;\n  box-sizing: border-box;\n  box-shadow: var(--wj-box-shadow-medium);\n}\n\n.arrow {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: var(--wj-tooltip-arrow-color);\n  transform: rotate(45deg);\n}";
class Tooltip extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Tooltip");
    __publicField(this, "onShow", () => {
      this.popup.show();
    });
    __publicField(this, "onHide", () => {
      this.popup.hide();
    });
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["active", "content"];
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
    this.mySlot = slot;
    this.popup = popup;
    fragment.appendChild(popup);
    return fragment;
  }
  afterDraw() {
    let anchorEl = this.mySlot.assignedElements()[0];
    if (!anchorEl)
      return;
    event.addListener(anchorEl, "mouseenter", null, this.onShow);
    event.addListener(anchorEl, "mouseleave", null, this.onHide);
  }
}
WJElement.define("wj-tooltip", Tooltip);
export {
  Tooltip as default
};
