var d = Object.defineProperty;
var m = (r, t, e) => t in r ? d(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var s = (r, t, e) => (m(r, typeof t != "symbol" ? t + "" : t, e), e);
import u from "./wj-element.js";
import "./wj-store.js";
const h = `:host{--wj-thumbnail-width: 48px;--wj-thumbnail-height: 48px;--wj-thumbnail-border-radius: var(--wj-border-radius-medium)}:host{width:var(--wj-thumbnail-width);height:var(--wj-thumbnail-height);display:block;border-radius:var(--wj-border-radius)}::slotted(wj-img),::slotted(img){border-radius:var(--wj-thumbnail-border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}
`;
class l extends u {
  constructor() {
    super();
    s(this, "className", "Thumbnail");
  }
  static get cssStyleSheet() {
    return h;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(e, a, o) {
  }
  draw(e, a, o) {
    let i = document.createDocumentFragment(), n = document.createElement("slot");
    return i.appendChild(n), i;
  }
}
customElements.get("wj-thumbnail") || window.customElements.define("wj-thumbnail", l);
export {
  l as Thumbnail
};
