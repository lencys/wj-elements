var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ WJ List ]\n*/\n:host {\n  --wj-list-inset-padding: 1rem;\n  --wj-list-border-radius: 8px;\n  --wj-list-background: var(--wj-background);\n  margin: 0;\n  padding: 0;\n  display: block;\n  contain: content;\n  list-style-type: none;\n}\n\n:host(.wj-inset) {\n  background: var(--wj-list-background);\n  transform: translateZ(0);\n  overflow: hidden;\n  padding: var(--wj-list-inset-padding);\n  border-radius: var(--wj-list-border-radius);\n}\n\n:host(.wj-lines-none) ::slotted(wj-item) {\n  --wj-border-width: 0 !important;\n}";
class List extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "List");
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
  afterDraw() {
    this.classList.toggle("wj-lines-" + this.lines, this.hasAttribute("lines"));
    this.classList.toggle("wj-inset", this.hasAttribute("inset"));
  }
}
WJElement.define("wj-list", List);
export {
  List as default
};
