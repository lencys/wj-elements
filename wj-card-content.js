var s = Object.defineProperty;
var d = (e, t, o) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var r = (e, t, o) => (d(e, typeof t != "symbol" ? t + "" : t, o), o);
import i from "./wj-element.js";
import "./wj-store.js";
const m = `:host{--wj-card-padding: 0 1rem 1rem;display:block;padding:var(--wj-card-padding)}:host.no-padding .row{margin-left:0;margin-right:0}:host.no-bottom-padding{padding-bottom:0}:host.no-top-padding{padding-top:0}:host .title{margin-top:0}:host.scrollable{margin-bottom:20px}:host h3{line-height:34px;font-size:26px}
`;
class p extends i {
  constructor() {
    super();
    r(this, "className", "CardContent");
  }
  static get cssStyleSheet() {
    return m;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(o, c, l) {
    let n = document.createDocumentFragment(), a = document.createElement("slot");
    return n.appendChild(a), n;
  }
}
customElements.get("wj-card-content") || window.customElements.define("wj-card-content", p);
export {
  p as CardContent
};
