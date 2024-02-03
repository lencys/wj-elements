var r = Object.defineProperty;
var a = (e, t, n) => t in e ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var i = (e, t, n) => (a(e, typeof t != "symbol" ? t + "" : t, n), n);
import p from "./wj-element.js";
import "./wj-store.js";
const l = `:host(:not(:focus-within)){position:absolute!important;width:1px!important;height:1px!important;clip:rect(0 0 0 0)!important;clip-path:inset(50%)!important;border:none!important;overflow:hidden!important;white-space:nowrap!important;padding:0!important}
`;
class m extends p {
  constructor() {
    super();
    i(this, "className", "VisuallyHidden");
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
  draw(n, d, c) {
    let o = document.createDocumentFragment(), s = document.createElement("slot");
    return o.appendChild(s), o;
  }
}
customElements.get("wj-visually-hidden") || window.customElements.define("wj-visually-hidden", m);
export {
  m as VisuallyHidden
};
