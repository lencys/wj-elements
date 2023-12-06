var n = Object.defineProperty;
var i = (t, e, r) => e in t ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var o = (t, e, r) => (i(t, typeof e != "symbol" ? e + "" : e, r), r);
import h from "./wj-element.js";
import "./wj-store.js";
const c = `/*!
* direction.scss
*/:host{--wj-header-background: #fff;--wj-header-border-color: rgba(0, 0, 0, .08);--wj-header-border-width: 0 0 1px 0;--wj-header-border-style: solid;--wj-header-top: 0;--wj-header-height: 60px;display:block;height:var(--wj-header-height);width:100%;background:var(--wj-header-background);border-width:var(--wj-header-border-width);border-style:var(--wj-header-border-style);border-color:var(--wj-header-border-color)}:host .native-header{display:flex;padding-inline:1rem}:host([sticky]){position:sticky;top:var(--wj-header-top);z-index:999}
`;
class l extends h {
  constructor() {
    super();
    o(this, "className", "Header");
  }
  static get cssStyleSheet() {
    return c;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(r, w, p) {
    let a = document.createDocumentFragment(), d = document.createElement("header");
    d.classList.add("native-header"), d.setAttribute("part", "native");
    let s = document.createElement("slot");
    return d.appendChild(s), a.appendChild(d), a;
  }
}
customElements.get("wj-header") || window.customElements.define("wj-header", l);
export {
  l as Header
};
