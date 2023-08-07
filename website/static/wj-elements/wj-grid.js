var a = Object.defineProperty;
var m = (s, e, t) => e in s ? a(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var l = (s, e, t) => (m(s, typeof e != "symbol" ? e + "" : e, t), t);
import d, { WjElementUtils as u } from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const p = `/*!
* direction.scss
*/:host{display:block;flex:1}
`, c = document.createElement("template");
c.innerHTML = `<style>
	${p}
</style>`;
class h extends d {
  constructor() {
    super(c);
    l(this, "className", "Grid");
  }
  set color(t) {
    this.setAttribute("color", t);
  }
  get color() {
    return this.getAttribute("color");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open", u.setAttributesToElement(this, {
      test: "test"
    });
  }
  beforeDraw(t, r, o) {
  }
  draw(t, r, o) {
    let n = document.createDocumentFragment(), i = document.createElement("slot");
    return this.color && this.classList.add("wj-color-" + this.color, "wj-color"), n.appendChild(i), n;
  }
  afterDraw(t, r, o) {
    console.log("afterDraw", this.params);
  }
}
customElements.get("wj-grid") || window.customElements.define("wj-grid", h);
export {
  h as Grid
};
