var d = Object.defineProperty;
var n = (t, e, r) => e in t ? d(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var s = (t, e, r) => (n(t, typeof e != "symbol" ? e + "" : e, r), r);
import i from "./wj-element.js";
import "./wj-store.js";
const c = `:host{--wj-card-header-padding: 1rem 1rem .5rem;background:transparent;border-radius:0;border-bottom:0;padding:var(--wj-card-header-padding);position:relative;display:flex;flex-direction:column}:host(.wj-separator):after{content:"";height:1px;background:rgba(0,0,0,.08);margin-top:.5rem}
`;
class m extends i {
  constructor() {
    super();
    s(this, "className", "CardHeader");
  }
  static get cssStyleSheet() {
    return c;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(r, p, l) {
    let a = document.createDocumentFragment(), o = document.createElement("slot");
    return this.hasAttribute("separator") && this.classList.add("wj-separator"), a.appendChild(o), a;
  }
}
customElements.get("wj-card-header") || window.customElements.define("wj-card-header", m);
export {
  m as CardHeader
};
