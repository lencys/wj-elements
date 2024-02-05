var i = Object.defineProperty;
var s = (o, t, e) => t in o ? i(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var d = (o, t, e) => (s(o, typeof t != "symbol" ? t + "" : t, e), e);
import b from "./wj-element.js";
import { w as p } from "./router-links-e0087f84.js";
import "./wj-store.js";
const m = `:host{--wj-toolbar-background: var(--wj-background);--wj-toolbar-min-height: 70px;--wj-toolbar-padding-top: 1rem;--wj-toolbar-padding-bottom: 1rem;--wj-toolbar-padding-inline: 1.5rem;--wj-toolbar-border-color: var(--wj-border-color);--wj-toolbar-top: 0;width:100%;height:var(--wj-toolbar-height)}.native-toolbar{background-color:var(--wj-toolbar-background);display:flex;align-items:center;flex-wrap:wrap;justify-content:flex-start;border-bottom:1px solid var(--wj-toolbar-border-color);padding-inline:var(--wj-toolbar-padding-inline);padding-top:var(--wj-toolbar-padding-top);padding-bottom:var(--wj-toolbar-padding-bottom);box-shadow:0 10px 30px #523f690d}::slotted{grid-column:span 4}::slotted([slot=start]){margin-right:auto}:host([sticky]){position:sticky;top:var(--wj-toolbar-top);z-index:999}
`;
class c extends p(b) {
  constructor() {
    super();
    d(this, "className", "Toolbar");
  }
  static get cssStyleSheet() {
    return m;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, w, g) {
    let a = document.createDocumentFragment(), r = document.createElement("div");
    r.classList.add("native-toolbar");
    let n = document.createElement("slot");
    n.setAttribute("name", "start");
    let l = document.createElement("slot");
    return l.setAttribute("name", "end"), r.appendChild(n), r.appendChild(l), a.appendChild(r), a;
  }
}
customElements.get("wj-toolbar") || window.customElements.define("wj-toolbar", c);
export {
  c as Toolbar
};
