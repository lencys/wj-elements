var c = Object.defineProperty;
var m = (o, t, e) => t in o ? c(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var n = (o, t, e) => (m(o, typeof t != "symbol" ? t + "" : t, e), e);
import p from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const d = `/*!
* direction.scss
*/:host{--wj-color: #212529;--wj-card-subtitle-font-size: 28px;--wj-card-subtitle-font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-family:var(--wj-card-subtitle-font-family);text-transform:uppercase;display:inline-block;letter-spacing:.06em;font-size:10.5px;font-weight:500;margin:0;padding:0;line-height:normal;overflow:hidden;text-overflow:ellipsis;filter:alpha(opacity=40);-webkit-transition:opacity .3s ease;transition:opacity .3s ease}
`, i = document.createElement("template");
i.innerHTML = `<style>
	${d}
</style>`;
class f extends p {
  constructor() {
    super(i);
    n(this, "className", "CardControls");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(e, s, r) {
  }
  draw(e, s, r) {
    let a = document.createDocumentFragment(), l = document.createElement("slot");
    return a.appendChild(l), a;
  }
  afterDraw(e, s, r) {
    console.log("afterDraw", this.params);
  }
}
customElements.get("wj-card-controls") || window.customElements.define("wj-card-controls", f);
export {
  f as CardControls
};
