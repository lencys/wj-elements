var l = Object.defineProperty;
var d = (r, t, e) => t in r ? l(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var n = (r, t, e) => (d(r, typeof t != "symbol" ? t + "" : t, e), e);
import h from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const u = `/*!
* direction.scss
*/:host{--wj-thumbnail-width: 48px;--wj-thumbnail-height: 48px;--wj-border-radius: 0}:host{width:var(--wj-thumbnail-width);height:var(--wj-thumbnail-height);display:block;border-radius:var(--wj-border-radius)}::slotted(wj-img),::slotted(img){border-radius:var(--wj-border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}
`, i = document.createElement("template");
i.innerHTML = `<style>
	${u}
</style>`;
class c extends h {
  constructor() {
    super(i);
    n(this, "className", "Thumbnail");
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
    let a = document.createDocumentFragment(), m = document.createElement("slot");
    return a.appendChild(m), a;
  }
  afterDraw(e, s, o) {
    console.log("afterDraw", this.params);
  }
}
customElements.get("wj-thumbnail") || window.customElements.define("wj-thumbnail", c);
export {
  c as Thumbnail
};
