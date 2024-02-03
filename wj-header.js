var n = Object.defineProperty;
var h = (r, e, t) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var o = (r, e, t) => (h(r, typeof e != "symbol" ? e + "" : e, t), t);
import i from "./wj-element.js";
import "./wj-store.js";
const l = `:host{--wj-header-background: var(--wj-background);--wj-header-border-color: var(--wj-border-color);--wj-header-border-width: 0 0 1px 0;--wj-header-border-style: solid;--wj-header-top: 0;--wj-header-height: 60px;display:block;height:var(--wj-header-height);width:100%;background:var(--wj-header-background);border-width:var(--wj-header-border-width);border-style:var(--wj-header-border-style);border-color:var(--wj-header-border-color)}:host .native-header{display:flex;padding-inline:1rem}:host([sticky]){position:sticky;top:var(--wj-header-top);z-index:999}
`;
class c extends i {
  constructor() {
    super();
    o(this, "className", "Header");
  }
  static get cssStyleSheet() {
    return l;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, w, p) {
    let a = document.createDocumentFragment(), d = document.createElement("header");
    d.classList.add("native-header"), d.setAttribute("part", "native");
    let s = document.createElement("slot");
    return d.appendChild(s), a.appendChild(d), a;
  }
}
customElements.get("wj-header") || window.customElements.define("wj-header", c);
export {
  c as Header
};
