var c = Object.defineProperty;
var m = (s, t, e) => t in s ? c(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var a = (s, t, e) => (m(s, typeof t != "symbol" ? t + "" : t, e), e);
import d from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const p = `/*!
* direction.scss
*/:host{--wj-card-subtitle-font-size: 10.5px;--wj-card-subtitle-font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif}:host{-webkit-transition:opacity .3s ease;transition:opacity .3s ease;font-family:var(--wj-card-subtitle-font-family);font-size:var(--wj-card-subtitle-font-size);text-transform:uppercase;display:inline-block;letter-spacing:.06em;font-weight:500;margin:0;padding:0;line-height:normal;overflow:hidden;text-overflow:ellipsis;filter:alpha(opacity=40)}
`, o = document.createElement("template");
o.innerHTML = `<style>
	${p}
</style>`;
class u extends d {
  constructor() {
    super(o);
    a(this, "className", "CardTitle");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(e, r, i) {
  }
  draw(e, r, i) {
    let n = document.createDocumentFragment(), l = document.createElement("slot");
    return n.appendChild(l), n;
  }
}
customElements.get("wj-card-subtitle") || window.customElements.define("wj-card-subtitle", u);
export {
  u as CardSubtitle
};
