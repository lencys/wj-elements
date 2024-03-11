var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import { w as withRouterLinks } from "./router-links-F7MJWhZi.js";
const styles = "/*\n[ WJ Toolbar ]\n*/\n:host {\n  --wj-toolbar-background: var(--wj-background);\n  --wj-toolbar-min-height: 70px;\n  --wj-toolbar-padding-top: 1rem;\n  --wj-toolbar-padding-bottom: 1rem;\n  --wj-toolbar-padding-inline: 1.5rem;\n  --wj-toolbar-border-color: var(--wj-border-color);\n  --wj-toolbar-top: 0;\n  width: 100%;\n  height: var(--wj-toolbar-height);\n}\n\n.native-toolbar {\n  background-color: var(--wj-toolbar-background);\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  border-bottom: 1px solid var(--wj-toolbar-border-color);\n  padding-inline: var(--wj-toolbar-padding-inline);\n  padding-top: var(--wj-toolbar-padding-top);\n  padding-bottom: var(--wj-toolbar-padding-bottom);\n  box-shadow: 0 10px 30px 0 rgba(82, 63, 105, 0.05);\n}\n\n::slotted {\n  grid-column: span 4;\n}\n\n::slotted([slot=start]) {\n  margin-right: auto;\n}\n\n:host([sticky]) {\n  position: sticky;\n  top: var(--wj-toolbar-top);\n  z-index: 99;\n}";
class Toolbar extends withRouterLinks(WJElement) {
  constructor() {
    super();
    __publicField(this, "className", "Toolbar");
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
    let native = document.createElement("div");
    native.classList.add("native-toolbar");
    let start = document.createElement("slot");
    start.setAttribute("name", "start");
    let end = document.createElement("slot");
    end.setAttribute("name", "end");
    native.appendChild(start);
    native.appendChild(end);
    fragment.appendChild(native);
    return fragment;
  }
}
WJElement.define("wj-toolbar", Toolbar);
export {
  Toolbar as default
};
