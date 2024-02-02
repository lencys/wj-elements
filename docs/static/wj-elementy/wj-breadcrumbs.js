var n = Object.defineProperty;
var u = (r, t, e) => t in r ? n(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var i = (r, t, e) => (u(r, typeof t != "symbol" ? t + "" : t, e), e);
import d from "./wj-element.js";
import "./wj-store.js";
const p = `/*!
* direction.scss
*/:host{display:flex;flex-wrap:wrap;align-items:center}
`;
class b extends d {
  constructor() {
    super();
    i(this, "className", "Breadcrumbs");
    this.last = !1;
  }
  static get cssStyleSheet() {
    return p;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, l, o) {
    let s = document.createDocumentFragment(), c = document.createElement("slot");
    return s.appendChild(c), s;
  }
  afterDraw() {
    let e = +this.maxItems || 0, l = +this.itemsBeforeCollapse || 1, o = +this.itemsAfterCollapse || 1, s = this.getBreadcrumbs();
    s.findLast((a) => a).setAttribute("last", !0), e !== void 0 && s.length > e && l + o <= e && s.forEach((a, m) => {
      m === l && a.setAttribute("show-collapsed-indicator", !0), m >= l && m < s.length - o && a.setAttribute("collapsed", !0);
    });
  }
  getBreadcrumbs() {
    return Array.from(this.querySelectorAll("wj-breadcrumb"));
  }
}
customElements.get("wj-breadcrumbs") || window.customElements.define("wj-breadcrumbs", b);
export {
  b as Breadcrumbs
};
