var n = Object.defineProperty;
var r = (e, s, t) => s in e ? n(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t;
var i = (e, s, t) => (r(e, typeof s != "symbol" ? s + "" : s, t), t);
import a from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const l = `/*!
* direction.scss
*/wj-list{--wj-list-inset-padding: 1rem;--wj-list-border-radius: 8px;--wj-list-background: #fff;margin:0;padding:0;display:block;contain:content;list-style-type:none}:host(.wj-inset){background:var(--wj-list-background);transform:translateZ(0);overflow:hidden;padding:var(--wj-list-inset-padding);border-radius:var(--wj-list-border-radius)}.wj-lines-none wj-item.wj-item-list{--wj-border-width: 0 !important}
`, d = document.createElement("template");
d.innerHTML = `<style>
	${l}
</style>`;
class o extends a {
  constructor() {
    super();
    i(this, "className", "List");
  }
  set lines(t) {
    this.setAttribute("lines", t);
  }
  get lines() {
    return this.getAttribute("lines");
  }
  set inset(t) {
    this.setAttribute("inset", "");
  }
  get inset() {
    return this.hasAttribute("inset");
  }
  setupAttributes() {
  }
  draw(t, w, c) {
  }
  afterDraw() {
    this.hasAttribute("lines") && this.classList.add("wj-lines-" + this.lines), this.inset && this.classList.add("wj-inset");
  }
}
customElements.get("wj-list") || window.customElements.define("wj-list", o);
export {
  o as List
};
