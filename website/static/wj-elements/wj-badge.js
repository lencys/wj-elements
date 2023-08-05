var c = Object.defineProperty;
var l = (e, o, t) => o in e ? c(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var a = (e, o, t) => (l(e, typeof o != "symbol" ? o + "" : o, t), t);
import d from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const m = `/*!
* direction.scss
*/:host(.wj-color-primary){--wj-color-base: #7252D3 !important;--wj-color-contrast: #fff !important}:host(.wj-color-complete){--wj-color-base: #0072EC !important;--wj-color-contrast: #fff !important}:host(.wj-color-success){--wj-color-base: #19AD79 !important;--wj-color-contrast: #fff !important}:host(.wj-color-warning){--wj-color-base: #FFd945 !important;--wj-color-contrast: #4b4b4b !important}:host(.wj-color-danger){--wj-color-base: #D83C31 !important;--wj-color-contrast: #fff !important}:host(.wj-color-info){--wj-color-base: #3B4752 !important;--wj-color-contrast: #fff !important}:host(.wj-color-menu){--wj-color-base: #f4f4f4 !important;--wj-color-contrast: #4b4b4b !important}:host{--wj-chip-border-radius: 100px;text-shadow:none;font-family:Inter UI,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:600;background-color:#e0e0e0;font-size:11px;padding-left:6px;padding-right:6px;color:#4b4b4b;border-radius:10px}:host(.wj-color){background-color:var(--wj-color-base, red);color:var(--wj-color-contrast)}
`, i = document.createElement("template");
i.innerHTML = `<style>
	${m}
</style>`;
class p extends d {
  constructor() {
    super(i);
    a(this, "className", "Chip");
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
  draw(t, w, b) {
    let r = document.createDocumentFragment(), n = document.createElement("slot");
    if (this.color && this.classList.add("wj-color-" + this.color, "wj-color"), this.active) {
      this.classList.add("wj-active");
      let s = document.createElement("wj-icon");
      s.setAttribute("name", "check"), this.appendChild(s);
    }
    return this.disabled && this.classList.add("wj-disabled"), this.outline && this.classList.add("wj-outline"), r.appendChild(n), r;
  }
}
customElements.get("wj-badge") || window.customElements.define("wj-badge", p);
export {
  p as Badge
};
