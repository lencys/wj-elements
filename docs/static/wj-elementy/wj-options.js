var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { event } from "./wj-element.js";
class Options extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Options");
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
  async beforeDraw() {
    this.response = await this.getPages();
    let fragment = document.createDocumentFragment();
    this.response.forEach((item, index) => {
      let option = document.createElement("wj-option");
      option.setAttribute("value", item[this.itemValue] || item.value);
      option.innerText = item[this.itemText] || item.text;
      fragment.appendChild(option);
    });
    this.parentElement.appendChild(fragment);
    event.dispatchCustomEvent(this, "wj:options-load", {});
  }
  async getPages(page) {
    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }
    return await response.json();
  }
}
customElements.get("wj-options") || window.customElements.define("wj-options", Options);
export {
  Options
};
