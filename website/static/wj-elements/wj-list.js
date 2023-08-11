var r = Object.defineProperty;
var l = (e, t, s) => t in e ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var i = (e, t, s) => (l(e, typeof t != "symbol" ? t + "" : t, s), s);
import a from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const o = `/*!
* direction.scss
*/wj-list{--wj-list-inset-padding: 1rem;--wj-list-border-radius: 8px;--wj-list-background: #fff;margin:0;padding:0;display:block;contain:content;list-style-type:none}wj-list.wj-inset{background:var(--wj-list-background);transform:translateZ(0);overflow:hidden;padding:var(--wj-list-inset-padding);border-radius:var(--wj-list-border-radius)}.wj-lines-none .wj-item-list{--wj-border-width: 0 !important}
`, n = document.createElement("template");
n.innerHTML = `<style>${o}</style>`;
class d extends a {
  constructor() {
    super(n);
    i(this, "className", "List");
  }
  set lines(s) {
    this.setAttribute("lines", s);
  }
  get lines() {
    return this.getAttribute("lines");
  }
  set inset(s) {
    this.setAttribute("inset", "");
  }
  get inset() {
    return this.hasAttribute("inset");
  }
  afterDraw() {
    this.classList.toggle("wj-lines-" + this.lines, this.hasAttribute("lines")), this.classList.toggle("wj-inset", this.inset);
  }
}
customElements.get("wj-list") || window.customElements.define("wj-list", d);
export {
  d as List
};
