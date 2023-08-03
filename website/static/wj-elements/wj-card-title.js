var c = Object.defineProperty;
var d = (r, t, e) => t in r ? c(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var s = (r, t, e) => (d(r, typeof t != "symbol" ? t + "" : t, e), e);
import m from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const w = `/*!
* direction.scss
*/:host{--wj-card-title-font-size: 28px;--wj-card-title-font-weight: 500;--wj-card-title-margin: 0;--wj-card-title-padding: 0;--wj-card-title-line-height: 1.2}:host{font-size:var(--wj-card-title-font-size);font-weight:var(--wj-card-title-font-weight);margin:var(--wj-card-title-margin);padding:var(--wj-card-title-padding);line-height:var(--wj-card-title-line-height);display:block;position:relative}
`, o = document.createElement("template");
o.innerHTML = `<style>
	${w}
</style>`;
class p extends m {
  constructor() {
    super(o);
    s(this, "className", "CardTitle");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(e, a, i) {
  }
  draw(e, a, i) {
    let n = document.createDocumentFragment(), l = document.createElement("slot");
    return n.appendChild(l), n;
  }
  afterDraw(e, a, i) {
    console.log("afterDraw", this.params);
  }
}
customElements.get("wj-card-title") || window.customElements.define("wj-card-title", p);
export {
  p as CardTitle
};
