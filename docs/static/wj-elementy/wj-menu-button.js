var u = Object.defineProperty;
var i = (n, t, e) => t in n ? u(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var o = (n, t, e) => (i(n, typeof t != "symbol" ? t + "" : t, e), e);
import l, { event as c } from "./wj-element.js";
import "./wj-store.js";
const a = `:host{display:inline-flex}@media (min-width: 768px){:host{display:none}}
`;
class m extends l {
  constructor() {
    super();
    o(this, "className", "MenuButton");
  }
  static get cssStyleSheet() {
    return a;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, d, p) {
    let s = document.createDocumentFragment(), r = document.createElement("slot");
    return s.appendChild(r), s;
  }
  afterDraw() {
    c.addListener(this, "click", null, (e) => {
      document.querySelector(`#${this.contentId}`).classList.toggle("open");
    });
  }
}
customElements.get("wj-menu-button") || window.customElements.define("wj-menu-button", m);
export {
  m as MenuButton
};
