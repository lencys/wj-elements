var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = '/*\n[ WJ Aside ]\n*/\n:host {\n  --wj-aside-width: "100px";\n  --wj-aside-top: 0;\n  --wj-aside-border-color: var(--wj-border-color);\n  --wj-aside-border-width: 0 1px 0 0;\n  --wj-aside-border-style: solid;\n  box-sizing: border-box;\n  flex-shrink: 0;\n  overflow: auto;\n  border-color: var(--wj-aside-border-color);\n  border-width: var(--wj-aside-border-width);\n  border-style: var(--wj-aside-border-style);\n}\n\n:host(.open) {\n  display: block !important;\n}\n\n@media (min-width: 768px) {\n  :host([fixed]) {\n    position: fixed;\n    width: var(--wj-aside-width);\n    top: var(--wj-aside-top);\n    height: calc(100% - var(--wj-aside-top));\n  }\n}\n@media (max-width: 768px) {\n  :host {\n    display: none;\n  }\n  :host([variant=top-start]) {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 80%;\n    height: 100%;\n    z-index: 9999;\n    background-color: #fff;\n  }\n}';
class Aside extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Aside");
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
    if (this.width)
      this.style.setProperty("--wj-aside-width", this.width);
    if (this.top && this.hasAttribute("fixed"))
      this.style.setProperty("--wj-aside-top", this.top);
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-aside") || window.customElements.define("wj-aside", Aside);
export {
  Aside
};
