var n = Object.defineProperty;
var d = (t, e, r) => e in t ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var o = (t, e, r) => (d(t, typeof e != "symbol" ? e + "" : e, r), r);
import c from "./wj-element.js";
import "./wj-store.js";
const i = `/*!
* direction.scss
*/:host{background:transparent;border-radius:0;border-bottom:0;padding:1rem 1rem .5rem;position:relative;display:flex;flex-direction:column;color:var(--wj-color-contrast)}:host(.wj-separator):after{content:"";height:1px;background:rgba(0,0,0,.08);margin-top:.5rem}
`;
class m extends c {
  constructor() {
    super();
    o(this, "className", "CardHeader");
  }
  static get cssStyleSheet() {
    return i;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(r, l, p) {
    let a = document.createDocumentFragment(), s = document.createElement("slot");
    return this.hasAttribute("separator") && this.classList.add("wj-separator"), a.appendChild(s), a;
  }
}
customElements.get("wj-card-header") || window.customElements.define("wj-card-header", m);
export {
  m as CardHeader
};
