var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ WJ Tab Panel ]\n*/\n:host {\n  display: none;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 1rem;\n}\n\n:host([active]) {\n  display: block;\n}";
class TabPanel extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "TabPanel");
  }
  static get cssStyleSheet() {
    return styles;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
WJElement.define("wj-tab-panel", TabPanel);
export {
  TabPanel as default
};
