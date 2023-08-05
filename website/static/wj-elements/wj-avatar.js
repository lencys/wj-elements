var m = Object.defineProperty;
var c = (a, t, e) => t in a ? m(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var n = (a, t, e) => (c(a, typeof t != "symbol" ? t + "" : t, e), e);
import l from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const w = `/*!
* direction.scss
*/:host{--wj-avatar-width: 48px;--wj-avatar-height: 48px;--wj-avatar-border-radius: 50%;width:var(--wj-avatar-width);height:var(--wj-avatar-height);border-radius:var(--wj-avatar-border-radius);display:block}::slotted(wj-img),::slotted(img){border-radius:var(--wj-avatar-border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}
`, i = document.createElement("template");
i.innerHTML = `<style>
	${w}
</style>`;
class h extends l {
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
  beforeDraw(e, r, s) {
  }
  draw(e, r, s) {
    let o = document.createDocumentFragment(), d = document.createElement("slot");
    return o.appendChild(d), o;
  }
  afterDraw(e, r, s) {
    console.log("afterDraw", this.params);
  }
}
customElements.get("wj-avatar") || window.customElements.define("wj-avatar", h);
export {
  h as Avatar
};
