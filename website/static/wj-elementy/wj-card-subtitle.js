var l = Object.defineProperty;
var c = (s, t, e) => t in s ? l(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var r = (s, t, e) => (c(s, typeof t != "symbol" ? t + "" : t, e), e);
import d from "./wj-element.js";
import "./wj-store.js";
const m = `/*!
* direction.scss
*/:host{--wj-card-subtitle-font-size: 10.5px;--wj-card-subtitle-font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif}:host{--wj-card-subtitle-padding: 0;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;font-family:var(--wj-card-subtitle-font-family);font-size:var(--wj-card-subtitle-font-size);text-transform:uppercase;display:inline-block;letter-spacing:.06em;font-weight:500;margin:0;padding:var(--wj-card-subtitle-padding);line-height:normal;overflow:hidden;text-overflow:ellipsis;filter:alpha(opacity=40)}
`;
class u extends d {
  constructor() {
    super();
    r(this, "className", "CardTitle");
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
