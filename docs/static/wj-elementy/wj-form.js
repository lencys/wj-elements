var m = Object.defineProperty;
var c = (e, t, s) => t in e ? m(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var o = (e, t, s) => (c(e, typeof t != "symbol" ? t + "" : t, s), s);
import a from "./wj-element.js";
import "./wj-store.js";
const l = `:host{width:100%}
`;
class u extends a {
  constructor() {
    super();
    o(this, "className", "Form");
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
  draw(s, i, d) {
    let r = document.createDocumentFragment(), n = document.createElement("slot");
    return r.appendChild(n), r;
  }
}
customElements.get("wj-form") || window.customElements.define("wj-form", u);
export {
  u as Form
};
