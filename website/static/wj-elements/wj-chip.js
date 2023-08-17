var c = Object.defineProperty;
var l = (o, e, t) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var s = (o, e, t) => (l(o, typeof e != "symbol" ? e + "" : e, t), t);
import d from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const p = `/*!
* direction.scss
*/:host(.wj-color-primary){--wj-color-base: #eae0fb !important;--wj-color-contrast: #845ae0 !important}:host(.wj-color-complete){--wj-color-base: #d3eeff !important;--wj-color-contrast: #0f8ff9 !important}:host(.wj-color-success){--wj-color-base: #d6f7f0 !important;--wj-color-contrast: #26bf93 !important}:host(.wj-color-warning){--wj-color-base: #fffde1 !important;--wj-color-contrast: #ffe858 !important}:host(.wj-color-danger){--wj-color-base: #fde2da !important;--wj-color-contrast: #e6533c !important}:host(.wj-color-info){--wj-color-base: #dbe6e8 !important;--wj-color-contrast: #475b6b !important}:host(.wj-color-menu){--wj-color-base: #f4f4f4 !important;--wj-color-contrast: #21252d !important}:host{--wj-chip-border-radius: 100px;display:inline-flex;justify-content:center;align-items:center;font-family:-apple-system,BlinkMacSystemFont,Inter UI,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:500;font-size:14px;letter-spacing:-.006em;margin:4px;padding:7px 12px;text-align:center;cursor:pointer;white-space:nowrap;color:#4b4b4b;background:#e0e0e0;text-shadow:none;box-shadow:none;border:0 none;line-height:14px;min-height:28px;height:32px;width:100%;max-width:fit-content;min-width:28px;position:relative;transition:width .15s cubic-bezier(.4,0,.2,1);border-radius:var(--wj-chip-border-radius);overflow:hidden;vertical-align:middle;box-sizing:border-box}:host(.focus){box-shadow:none}:host(:hover:not(.wj-active)){background:#f4f4f4;color:#4b4b4b}:host(.wj-active){background:red;border:1px solid rgba(33,33,33,.0614);border-bottom:1px solid rgba(33,33,33,.1514);color:#4b4b4b}:host(:focus,:active:focus,.wj-active:focus){outline:none!important;box-shadow:0 0 #78c8fe}:host(.wj-active){background:#e0e0e0;border-color:transparent}:host(.wj-active) i{width:20px}:host(.wj-disabled){background:#f4f4f4;color:#757575;border:0;pointer-events:none;cursor:not-allowed}::slotted(wj-avatar){width:24px;height:24px}::slotted(wj-avatar:first-child){margin-inline:-8px 8px;margin-top:-4px;margin-bottom:-4px}:host(.wj-color){background-color:var(--wj-color-base, red);color:var(--wj-color-contrast)}::slotted(wj-icon:first-child){margin:-4px 8px -4px -4px}::slotted(wj-icon:last-child){margin:-4px -4px -4px 8px}
`, a = document.createElement("template");
a.innerHTML = `<style>
	${p}
</style>`;
class h extends d {
  constructor() {
    super(a);
    s(this, "className", "Chip");
  }
  set color(t) {
    this.setAttribute("color", t);
  }
  get color() {
    return this.getAttribute("color");
  }
  set active(t) {
    this.setAttribute("active", "");
  }
  get active() {
    return this.hasAttribute("active");
  }
  set disabled(t) {
    this.setAttribute("disabled", "");
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set outline(t) {
    this.setAttribute("outline", "");
  }
  get outline() {
    return this.hasAttribute("outline");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, b, w) {
    let r = document.createDocumentFragment(), n = document.createElement("slot");
    if (this.color && this.classList.add("wj-color-" + this.color, "wj-color"), this.active) {
      this.classList.add("wj-active");
      let i = document.createElement("wj-icon");
      i.setAttribute("name", "check"), this.appendChild(i);
    }
    return this.disabled && this.classList.add("wj-disabled"), this.outline && this.classList.add("wj-outline"), r.appendChild(n), r;
  }
}
customElements.get("wj-chip") || window.customElements.define("wj-chip", h);
export {
  h as Chip
};
