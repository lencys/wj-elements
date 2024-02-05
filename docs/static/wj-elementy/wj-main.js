var a = Object.defineProperty;
var i = (t, e, s) => e in t ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var o = (t, e, s) => (i(t, typeof e != "symbol" ? e + "" : e, s), s);
import m from "./wj-element.js";
import "./wj-store.js";
const c = `:host{display:block;flex:1;flex-basis:auto;padding:1.5rem;box-sizing:border-box}
`;
class l extends m {
  constructor() {
    super();
    o(this, "className", "Main");
  }
  static get cssStyleSheet() {
    return c;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(s, d, u) {
    let n = document.createDocumentFragment(), r = document.createElement("slot");
    return n.appendChild(r), n;
  }
}
customElements.get("wj-main") || window.customElements.define("wj-main", l);
export {
  l as Main
};
