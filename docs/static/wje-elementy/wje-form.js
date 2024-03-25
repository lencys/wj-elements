var m = Object.defineProperty;
var c = (e, t, r) => t in e ? m(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var o = (e, t, r) => (c(e, typeof t != "symbol" ? t + "" : t, r), r);
import l from "./wje-element.js";
const u = ":host{width:100%}";
class n extends l {
  constructor() {
    super();
    o(this, "className", "Form");
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
  draw(r, d, i) {
    let s = document.createDocumentFragment(), a = document.createElement("slot");
    return s.appendChild(a), s;
  }
}
n.define("wje-form", n);
export {
  n as default
};
