var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ WJ Main ]\n*/\n:host {\n  display: block;\n  flex: 1;\n  flex-basis: auto;\n  padding: 1.5rem;\n  box-sizing: border-box;\n}";
class Main extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Main");
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
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
WJElement.define("wj-main", Main);
export {
  Main as default
};
