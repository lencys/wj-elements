var s = Object.defineProperty;
var d = (o, t, e) => t in o ? s(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var l = (o, t, e) => (d(o, typeof t != "symbol" ? t + "" : t, e), e);
import p from "./wj-element.js";
import { w as b } from "./router-links-e0087f84.js";
import "./wj-store.js";
const c = `/*!
* direction.scss
*/:host{--wj-toolbar-backcolor: #fff;--wj-toolbar-min-height: 70px;--wj-toolbar-padding-top: 1rem;--wj-toolbar-padding-bottom: 1rem;--wj-toolbar-padding-inline: 1.5rem;--wj-toolbar-border-color: rgba(33, 33, 33, .14);--wj-toolbar-top: 0;width:100%;height:var(--wj-toolbar-height)}.native-toolbar{background-color:var(--wj-toolbar-backcolor);display:flex;align-items:center;flex-wrap:wrap;justify-content:flex-start;border-bottom:1px solid var(--wj-toolbar-border-color);padding-inline:var(--wj-toolbar-padding-inline);padding-top:var(--wj-toolbar-padding-top);padding-bottom:var(--wj-toolbar-padding-bottom);box-shadow:0 10px 30px #523f690d}::slotted{grid-column:span 4}::slotted([slot=start]){margin-right:auto}:host([sticky]){position:sticky;top:var(--wj-toolbar-top);z-index:999}
`;
class m extends b(p) {
  constructor() {
    super();
    l(this, "className", "Toolbar");
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
  draw(e, w, g) {
    let a = document.createDocumentFragment(), r = document.createElement("div");
    r.classList.add("native-toolbar");
    let n = document.createElement("slot");
    n.setAttribute("name", "start");
    let i = document.createElement("slot");
    return i.setAttribute("name", "end"), r.appendChild(n), r.appendChild(i), a.appendChild(r), a;
  }
}
customElements.get("wj-toolbar") || window.customElements.define("wj-toolbar", m);
export {
  m as Toolbar
};
