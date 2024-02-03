var s = Object.defineProperty;
var a = (e, t, n) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var o = (e, t, n) => (a(e, typeof t != "symbol" ? t + "" : t, n), n);
import c from "./wj-element.js";
import "./wj-store.js";
const d = `:host{--wj-container-indent: 0;display:flex;flex-direction:row;flex:1;flex-basis:auto;box-sizing:border-box;min-width:0}:host([vertical]){flex-direction:column}@media (min-width: 768px){:host([indent]){margin-left:var(--wj-container-indent)}}
`;
class l extends c {
  constructor() {
    super();
    o(this, "className", "Container");
  }
  static get cssStyleSheet() {
    return d;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(n, m, u) {
    let i = document.createDocumentFragment();
    this.indent && this.style.setProperty("--wj-container-indent", this.indent);
    let r = document.createElement("slot");
    return i.appendChild(r), i;
  }
}
customElements.get("wj-container") || window.customElements.define("wj-container", l);
export {
  l as Container
};
