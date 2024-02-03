var l = Object.defineProperty;
var c = (r, t, e) => t in r ? l(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var s = (r, t, e) => (c(r, typeof t != "symbol" ? t + "" : t, e), e);
import d from "./wj-element.js";
import "./wj-store.js";
const m = `:host{--wj-card-subtitle-font-size: 10.5px;--wj-card-subtitle-font-family: var(--wj-font-family-secondary);--wj-card-subtitle-padding: 0;transition:opacity .3s ease;font-family:var(--wj-card-subtitle-font-family);font-size:var(--wj-card-subtitle-font-size);text-transform:uppercase;display:inline-block;letter-spacing:.06em;font-weight:500;margin:0;padding:var(--wj-card-subtitle-padding);line-height:normal;overflow:hidden;text-overflow:ellipsis;filter:alpha(opacity=40)}
`;
class u extends d {
  constructor() {
    super();
    s(this, "className", "CardTitle");
  }
  static get cssStyleSheet() {
    return m;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(e, i, n) {
  }
  draw(e, i, n) {
    let a = document.createDocumentFragment(), o = document.createElement("slot");
    return a.appendChild(o), a;
  }
}
customElements.get("wj-card-subtitle") || window.customElements.define("wj-card-subtitle", u);
export {
  u as CardSubtitle
};
