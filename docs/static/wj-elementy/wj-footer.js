var a = Object.defineProperty;
var c = (e, t, o) => t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var s = (e, t, o) => (c(e, typeof t != "symbol" ? t + "" : t, o), o);
import i from "./wj-element.js";
import "./wj-store.js";
const m = `:host{--wj-footer-height: 60px;padding:0 20px;flex-shrink:0;height:var(--wj-footer-height);display:block}
`;
class l extends i {
  constructor() {
    super();
    s(this, "className", "Footer");
  }
  static get cssStyleSheet() {
    return m;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(o, d, p) {
    let r = document.createDocumentFragment(), n = document.createElement("slot");
    return r.appendChild(n), r;
  }
}
customElements.get("wj-footer") || window.customElements.define("wj-footer", l);
export {
  l as Footer
};
