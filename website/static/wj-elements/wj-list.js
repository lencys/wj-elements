var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ List ]\n*/\nwj-list {\n  --wj-list-inset-padding: 1rem;\n  --wj-list-border-radius: 8px;\n  --wj-list-background: #fff;\n  margin: 0;\n  padding: 0;\n  display: block;\n  contain: content;\n  list-style-type: none;\n}\nwj-list.wj-inset {\n  background: var(--wj-list-background);\n  transform: translateZ(0);\n  overflow: hidden;\n  padding: var(--wj-list-inset-padding);\n  border-radius: var(--wj-list-border-radius);\n}\n.wj-lines-none .wj-item-list {\n  --wj-border-width: 0 !important;\n}";
const template = document.createElement("template");
template.innerHTML = `<style>${styles}</style>`;
class List extends WJElement {
  constructor() {
    super(template);
    __publicField(this, "className", "List");
  }
  set lines(value) {
    this.setAttribute("lines", value);
  }
  get lines() {
    return this.getAttribute("lines");
  }
  set inset(value) {
    this.setAttribute("inset", "");
  }
  get inset() {
    return this.hasAttribute("inset");
  }
  afterDraw() {
    this.classList.toggle("wj-lines-" + this.lines, this.hasAttribute("lines"));
    this.classList.toggle("wj-inset", this.inset);
  }
}
customElements.get("wj-list") || window.customElements.define("wj-list", List);
export {
  List
};
