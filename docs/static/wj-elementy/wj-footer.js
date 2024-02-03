var c = Object.defineProperty;
var i = (e, t, o) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var r = (e, t, o) => (i(e, typeof t != "symbol" ? t + "" : t, o), o);
import a from "./wj-element.js";
import "./wj-store.js";
const m = `/*!
* direction.scss
*/:host{--wj-footer-height: 60px;padding:0 20px;flex-shrink:0;height:var(--wj-footer-height);display:block}
`;
class l extends a {
  constructor() {
    super();
    r(this, "className", "Footer");
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
    let s = document.createDocumentFragment(), n = document.createElement("slot");
    return s.appendChild(n), s;
  }
}
customElements.get("wj-footer") || window.customElements.define("wj-footer", l);
export {
  l as Footer
};
