var i = Object.defineProperty;
var c = (e, t, s) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var o = (e, t, s) => (c(e, typeof t != "symbol" ? t + "" : t, s), s);
import a from "./wj-element.js";
import { b as l } from "./router-links-e0087f84.js";
import "./wj-store.js";
const u = `/*!
* direction.scss
*/:host{display:block}:host(.active){cursor:pointer;font-weight:700}
`;
class m extends a {
  constructor() {
    super();
    o(this, "className", "RouterLink");
    l(this, { selector: !1 });
  }
  static get cssStyleSheet() {
    return u;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open", this.setAttribute("active-class", "active");
  }
  draw(s, d, p) {
    let r = document.createDocumentFragment(), n = document.createElement("slot");
    return r.appendChild(n), r;
  }
}
customElements.get("wj-router-link") || window.customElements.define("wj-router-link", m);
export {
  m as RouterLink
};
