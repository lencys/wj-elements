var s = Object.defineProperty;
var l = (e, t, i) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var a = (e, t, i) => (l(e, typeof t != "symbol" ? t + "" : t, i), i);
import o from "./wj-element.js";
import "./wj-store.js";
const d = `/*!
* direction.scss
*/:host{--wj-card-title-font-size: 24px;--wj-card-title-font-weight: 500;--wj-card-title-margin: 0;--wj-card-title-padding: 0;--wj-card-title-line-height: 1.2}:host{font-size:var(--wj-card-title-font-size);font-weight:var(--wj-card-title-font-weight);margin:var(--wj-card-title-margin);padding:var(--wj-card-title-padding);line-height:var(--wj-card-title-line-height);display:block;position:relative}
`;
class c extends o {
  constructor() {
    super();
    a(this, "className", "CardTitle");
  }
  static get cssStyleSheet() {
    return d;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(i, m, w) {
    let r = document.createDocumentFragment(), n = document.createElement("slot");
    return r.appendChild(n), r;
  }
}
customElements.get("wj-card-title") || window.customElements.define("wj-card-title", c);
export {
  c as CardTitle
};
