var c = Object.defineProperty;
var d = (r, t, e) => t in r ? c(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var a = (r, t, e) => (d(r, typeof t != "symbol" ? t + "" : t, e), e);
import m from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const w = `/*!
* direction.scss
*/:host{--wj-card-title-font-size: 24px;--wj-card-title-font-weight: 500;--wj-card-title-margin: 0;--wj-card-title-padding: 0;--wj-card-title-line-height: 1.2}:host{font-size:var(--wj-card-title-font-size);font-weight:var(--wj-card-title-font-weight);margin:var(--wj-card-title-margin);padding:var(--wj-card-title-padding);line-height:var(--wj-card-title-line-height);display:block;position:relative}
`, n = document.createElement("template");
n.innerHTML = `<style>
	${w}
</style>`;
class p extends m {
  constructor() {
    super(n);
    a(this, "className", "CardTitle");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(e, s, o) {
  }
  draw(e, s, o) {
    let i = document.createDocumentFragment(), l = document.createElement("slot");
    return i.appendChild(l), i;
  }
}
customElements.get("wj-card-title") || window.customElements.define("wj-card-title", p);
export {
  p as CardTitle
};
