var c = Object.defineProperty;
var m = (o, t, e) => t in o ? c(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var s = (o, t, e) => (m(o, typeof t != "symbol" ? t + "" : t, e), e);
import p from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const d = `/*!
* direction.scss
*/:host{--wj-color: #212529;--wj-card-subtitle-font-size: 28px;--wj-card-subtitle-font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-family:var(--wj-card-subtitle-font-family);text-transform:uppercase;display:inline-block;letter-spacing:.06em;font-size:10.5px;font-weight:500;margin:0;padding:0;line-height:normal;overflow:hidden;text-overflow:ellipsis;filter:alpha(opacity=40);-webkit-transition:opacity .3s ease;transition:opacity .3s ease;position:absolute;right:1rem}
`, a = document.createElement("template");
a.innerHTML = `<style>
	${d}
</style>`;
class u extends p {
  constructor() {
    super(a);
    s(this, "className", "CardControls");
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
customElements.get("wj-card-controls") || window.customElements.define("wj-card-controls", u);
export {
  u as CardControls
};
