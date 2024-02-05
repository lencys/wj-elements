var i = Object.defineProperty;
var a = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var o = (e, t, r) => (a(e, typeof t != "symbol" ? t + "" : t, r), r);
import c from "./wj-element.js";
import { b as u } from "./router-links-e0087f84.js";
import "./wj-store.js";
const l = `:host{display:block;background:transparent!important}:host(.active){cursor:pointer;font-weight:700}
`;
class m extends c {
  constructor() {
    super();
    o(this, "className", "RouterLink");
    u(this, { selector: !1 });
  }
  static get cssStyleSheet() {
    return l;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open", this.setAttribute("active-class", "active");
  }
  draw(r, p, d) {
    let s = document.createDocumentFragment(), n = document.createElement("slot");
    return s.appendChild(n), s;
  }
}
customElements.get("wj-router-link") || window.customElements.define("wj-router-link", m);
export {
  m as RouterLink
};
