var i = Object.defineProperty;
var m = (s, e, t) => e in s ? i(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var l = (s, e, t) => (m(s, typeof e != "symbol" ? e + "" : e, t), t);
import p, { WjElementUtils as u } from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const w = `/*!
* direction.scss
*/:host{display:flex;flex-wrap:wrap}
`, a = document.createElement("template");
a.innerHTML = `<style>
	${w}
</style>`;
class d extends p {
  constructor() {
    super(a);
    l(this, "className", "Row");
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
  beforeDraw(t, o, r) {
  }
  draw(t, o, r) {
    let n = document.createDocumentFragment(), c = document.createElement("slot");
    return this.color && this.classList.add("wj-color-" + this.color, "wj-color"), n.appendChild(c), n;
  }
  afterDraw(t, o, r) {
    console.log("afterDraw", this.params);
  }
}
customElements.get("wj-row") || window.customElements.define("wj-row", d);
export {
  d as Row
};
