var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Dropdown ]\n*/";
class Dropdown extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Dropdown");
  }
  set trigger(value) {
    this.setAttribute("trigger", value);
  }
  get trigger() {
    return this.getAttribute("trigger") || "click";
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
    this.classList.add("wj-placement", "wj-" + this.placement || "wj-start");
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-dropdown");
    let popup = document.createElement("wj-popup");
    popup.setAttribute("placement", this.placement);
    popup.setAttribute("offset", this.offset);
    popup.innerHTML = `<slot name="trigger" slot="anchor"></slot>
            <slot></slot>`;
    if (this.trigger === "click")
      popup.setAttribute("manual", "");
    native.appendChild(popup);
    fragment.appendChild(native);
    return fragment;
  }
}
customElements.get("wj-dropdown") || window.customElements.define("wj-dropdown", Dropdown);
export {
  Dropdown
};
