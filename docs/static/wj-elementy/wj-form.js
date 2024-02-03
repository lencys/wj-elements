var m = Object.defineProperty;
var c = (e, t, s) => t in e ? m(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var o = (e, t, s) => (c(e, typeof t != "symbol" ? t + "" : t, s), s);
import a from "./wj-element.js";
import "./wj-store.js";
const i = `/*!
* direction.scss
*/:host{width:100%}
`;
class l extends a {
  constructor() {
    super();
    o(this, "className", "Form");
  }
  static get cssStyleSheet() {
    return i;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(s, u, d) {
    let r = document.createDocumentFragment(), n = document.createElement("slot");
    return r.appendChild(n), r;
  }
}
customElements.get("wj-form") || window.customElements.define("wj-form", l);
export {
  l as Form
};
