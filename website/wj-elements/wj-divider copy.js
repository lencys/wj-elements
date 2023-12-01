var n = Object.defineProperty;
var a = (r, e, t) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var o = (r, e, t) => (a(r, typeof e != "symbol" ? e + "" : e, t), t);
import c from "./wj-element.js";
import "./wj-store.js";
const l = `/*!
* direction.scss
*/:host{--wj-border-size: 1px;--wj-divider-border-color: var(--wj-border-color);--wj-divider-border-width: var(--wj-border-size, 1px);--wj-divider-spacing: 0}:host(:not([vertical])){display:block;border-top:solid var(--wj-divider-border-width) var(--wj-divider-border-color);margin:var(--wj-divider-spacing) 0}:host([vertical]){display:inline-block;height:100%;border-left:solid var(--wj-divider-border-width) var(--wj-divider-border-color);margin:0 var(--wj-divider-spacing)}
`;
class v extends c {
  constructor() {
    super();
    o(this, "className", "Divider");
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
  draw(t, w, m) {
    let i = document.createDocumentFragment(), d = document.createElement("div"), s = document.createElement("slot");
    return d.appendChild(s), i.appendChild(d), i;
  }
}
customElements.get("wj-divider") || window.customElements.define("wj-divider", v);
export {
  v as Divider
};
