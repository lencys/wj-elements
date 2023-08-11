var i = Object.defineProperty;
var l = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var s = (e, t, o) => (l(e, typeof t != "symbol" ? t + "" : t, o), o);
import c from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const m = `/*!
* direction.scss
*/:host{--wj-color: #212529;--wj-card-subtitle-font-size: 28px;--wj-card-subtitle-font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-family:var(--wj-card-subtitle-font-family);text-transform:uppercase;display:inline-block;letter-spacing:.06em;font-size:10.5px;font-weight:500;margin:0;padding:0;line-height:normal;overflow:hidden;text-overflow:ellipsis;filter:alpha(opacity=40);-webkit-transition:opacity .3s ease;transition:opacity .3s ease;position:absolute;right:1rem;top:.5rem}
`, a = document.createElement("template");
a.innerHTML = `<style>
	${m}
</style>`;
class p extends c {
  constructor() {
    super(a);
    s(this, "className", "CardControls");
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(o, d, u) {
    let n = document.createDocumentFragment(), r = document.createElement("slot");
    return n.appendChild(r), n;
  }
}
customElements.get("wj-card-controls") || window.customElements.define("wj-card-controls", p);
export {
  p as CardControls
};
