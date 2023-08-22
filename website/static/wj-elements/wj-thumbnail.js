var d = Object.defineProperty;
var l = (r, t, e) => t in r ? d(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var o = (r, t, e) => (l(r, typeof t != "symbol" ? t + "" : t, e), e);
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
    o(this, "className", "Thumbnail");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(e, n, a) {
  }
  draw(e, n, a) {
    let s = document.createDocumentFragment(), m = document.createElement("slot");
    return s.appendChild(m), s;
  }
}
customElements.get("wj-thumbnail") || window.customElements.define("wj-thumbnail", c);
export {
  c as Thumbnail
};
