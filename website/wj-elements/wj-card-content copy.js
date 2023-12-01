var a = Object.defineProperty;
var d = (e, t, n) => t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var s = (e, t, n) => (d(e, typeof t != "symbol" ? t + "" : t, n), n);
import i from "./wj-element.js";
import "./wj-store.js";
const m = `/*!
* direction.scss
*/:host{--wj-card-padding: 0 1rem 1rem;display:block;padding:var(--wj-card-padding)}:host.no-padding .row{margin-left:0;margin-right:0}:host.no-bottom-padding{padding-bottom:0}:host.no-top-padding{padding-top:0}:host .title{margin-top:0}:host.scrollable{margin-bottom:20px}:host h3{line-height:34px;font-size:26px}
`;
class c extends i {
  constructor() {
    super();
    s(this, "className", "CardContent");
  }
  static get cssStyleSheet() {
    return m;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(n, p, l) {
    let o = document.createDocumentFragment(), r = document.createElement("slot");
    return o.appendChild(r), o;
  }
}
customElements.get("wj-card-content") || window.customElements.define("wj-card-content", c);
export {
  c as CardContent
};
