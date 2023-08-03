var c = Object.defineProperty;
var m = (s, t, e) => t in s ? c(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var o = (s, t, e) => (m(s, typeof t != "symbol" ? t + "" : t, e), e);
import p from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const d = `/*!
* direction.scss
*/:host{--wj-card-subtitle-font-size: 10.5px;--wj-card-subtitle-font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif}:host{-webkit-transition:opacity .3s ease;transition:opacity .3s ease;font-family:var(--wj-card-subtitle-font-family);font-size:var(--wj-card-subtitle-font-size);text-transform:uppercase;display:inline-block;letter-spacing:.06em;font-weight:500;margin:0;padding:0;line-height:normal;overflow:hidden;text-overflow:ellipsis;filter:alpha(opacity=40)}
`, i = document.createElement("template");
i.innerHTML = `<style>
	${d}
</style>`;
class u extends p {
  constructor() {
    super(i);
    o(this, "className", "CardTitle");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(e, a, r) {
  }
  draw(e, a, r) {
    let n = document.createDocumentFragment(), l = document.createElement("slot");
    return n.appendChild(l), n;
  }
  afterDraw(e, a, r) {
    console.log("afterDraw", this.params);
  }
}
customElements.get("wj-card-subtitle") || window.customElements.define("wj-card-subtitle", u);
export {
  u as CardSubtitle
};
