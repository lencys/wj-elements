var i = Object.defineProperty;
var m = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var l = (e, t, o) => (m(e, typeof t != "symbol" ? t + "" : t, o), o);
import d from "./wj-element.js";
import "./wj-store.js";
const u = `/*!
* direction.scss
*/:host .native-toolbar-action{display:flex}
`;
class p extends d {
  constructor() {
    super();
    l(this, "className", "ToolbarAction");
  }
  static get cssStyleSheet() {
    return u;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(o, h, b) {
    let n = document.createDocumentFragment(), r = +this.maxItems || 0, a = this.getActions(), c = document.createElement("slot"), s = document.createElement("div");
    return s.classList.add("native-toolbar-action"), r !== 0 && a.length > r && (s = document.createElement("wj-dropdown")), s.appendChild(c), n.appendChild(s), n;
  }
  getActions() {
    return Array.from(this.querySelectorAll("wj-button"));
  }
}
customElements.get("wj-toolbar-action") || window.customElements.define("wj-toolbar-action", p);
export {
  p as ToolbarAction
};
