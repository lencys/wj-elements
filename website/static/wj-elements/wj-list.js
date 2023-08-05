var r = Object.defineProperty;
var c = (s, e, t) => e in s ? r(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var l = (s, e, t) => (c(s, typeof e != "symbol" ? e + "" : e, t), t);
import d from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const m = `/*!
* direction.scss
*/:host{margin:0;padding:0;display:block;contain:content;list-style-type:none}:host(.list-inset){transform:translateZ(0);overflow:hidden}
`, n = document.createElement("template");
n.innerHTML = `<style>
	${m}
</style>`;
class h extends d {
  constructor() {
    super(n);
    l(this, "className", "List");
  }
  set color(t) {
    this.setAttribute("color", t);
  }
  get color() {
    return this.getAttribute("color");
  }
  set disabled(t) {
    this.setAttribute("disabled", "");
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, u, p) {
    let i = document.createDocumentFragment(), a = document.createElement("slot");
    if (this.color && this.classList.add("wj-color-" + this.color, "wj-color"), this.active) {
      this.classList.add("wj-active");
      let o = document.createElement("wj-icon");
      o.setAttribute("name", "check"), this.appendChild(o);
    }
    return this.disabled && this.classList.add("wj-disabled"), this.outline && this.classList.add("wj-outline"), i.appendChild(a), i;
  }
}
customElements.get("wj-list") || window.customElements.define("wj-list", h);
export {
  h as List
};
