var d = Object.defineProperty;
var m = (r, t, e) => t in r ? d(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var i = (r, t, e) => (m(r, typeof t != "symbol" ? t + "" : t, e), e);
import h from "./wj-element.js";
import "./wj-store.js";
const l = `/*!
* direction.scss
*/:host{--wj-thumbnail-width: 48px;--wj-thumbnail-height: 48px;--wj-border-radius: 0}:host{width:var(--wj-thumbnail-width);height:var(--wj-thumbnail-height);display:block;border-radius:var(--wj-border-radius)}::slotted(wj-img),::slotted(img){border-radius:var(--wj-border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}
`;
class u extends h {
  constructor() {
    super();
    i(this, "className", "Thumbnail");
  }
  static get cssStyleSheet() {
    return l;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(e, o, a) {
  }
  draw(e, o, a) {
    let s = document.createDocumentFragment(), n = document.createElement("slot");
    return s.appendChild(n), s;
  }
}
customElements.get("wj-thumbnail") || window.customElements.define("wj-thumbnail", u);
export {
  u as Thumbnail
};
