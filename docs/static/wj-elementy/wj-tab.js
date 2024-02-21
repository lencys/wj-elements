var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { event } from "./wj-element.js";
const styles = '/*\n[ WJ Tab ]\n*/\n:host {\n  --wj-font-size: 10px;\n  --wj-tab-text-transfrom: uppercase;\n  --wj-tab-font-weight: 500;\n  --wj-tab-letter-spacing: 0.06em;\n  --wj-tab-padding-inline: 1rem;\n  --wj-tab-padding-top: .75rem;\n  --wj-tab-padding-bottom: .75rem;\n  --wj-tab-color-active: var(--wj-color-primary-11);\n  --wj-tab-color-hover: var(--wj-color-primary-1);\n  display: block;\n  position: relative;\n}\n:host a {\n  display: block;\n  align-items: center;\n  white-space: nowrap;\n  font-family: var(--wj-font-family-secondary);\n  font-size: var(--wj-font-size);\n  letter-spacing: var(--wj-tab-letter-spacing);\n  text-transform: var(--wj-tab-text-transfrom);\n  font-weight: var(--wj-tab-font-weight);\n  text-decoration: none;\n  padding-inline: var(--wj-tab-padding-inline);\n  padding-top: var(--wj-tab-padding-top);\n  padding-bottom: var(--wj-tab-padding-bottom);\n  color: var(--wj-color);\n}\n:host a > svg {\n  inline-size: 1.5em;\n  pointer-events: none;\n}\n:host a:hover {\n  background: var(--wj-tab-color-hover);\n}\n:host a:hover:after {\n  display: block;\n}\n:host a:after {\n  content: " ";\n  display: none;\n  block-size: 0.15rem;\n  writing-mode: var(--wj-tab-writing-mode);\n  background: var(--wj-tab-color-active);\n  position: absolute;\n  bottom: var(--wj-tab-bottom);\n  left: var(--wj-tab-start);\n  right: var(--wj-tab-end);\n  top: var(--wj-tab-top);\n}\n\n:host([disabled]) a {\n  opacity: 0.5;\n  cursor: not-allowed;\n  background: inherit;\n}\n:host([disabled]) a:after {\n  display: none;\n}\n\n:host([active]) a:after {\n  display: block;\n}';
class Tab extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Tab");
    this.last = false;
  }
  static get cssStyleSheet() {
    return styles;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let a = document.createElement("a");
    a.setAttribute("href", "#" + this.panel);
    a.innerHTML = this.innerHTML;
    fragment.appendChild(a);
    return fragment;
  }
  afterDraw() {
    event.addListener(this, "click", "wj:tab-change");
  }
}
customElements.get("wj-tab") || window.customElements.define("wj-tab", Tab);
export {
  Tab
};
