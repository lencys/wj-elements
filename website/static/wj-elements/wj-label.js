var c = Object.defineProperty;
var w = (e, o, t) => o in e ? c(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var a = (e, o, t) => (w(e, typeof o != "symbol" ? o + "" : o, t), t);
import h from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const m = `/*!
* direction.scss
*/:host(.wj-color-primary){--wj-color: #7252D3 !important}:host(.wj-color-complete){--wj-color: #0072EC !important}:host(.wj-color-success){--wj-color-base: #19AD79 !important;--wj-color-contrast: #fff !important}:host(.wj-color-warning){--wj-color-base: #FFd945 !important;--wj-color-contrast: #4b4b4b !important}:host(.wj-color-danger){--wj-color-base: #D83C31 !important;--wj-color-contrast: #fff !important}:host(.wj-color-info){--wj-color-base: #3B4752 !important;--wj-color-contrast: #fff !important}:host(.wj-color-menu){--wj-color-base: #2b303b !important;--wj-color-contrast: #fff !important}:host{--wj-label-text-wrap-font-size: 13px;--wj-label-text-wrap-line-height: 1.4}:host{--wj-color: initial;display:block;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}:host(.wj-color){color:var(--wj-color-base)}:host(.wj-text-wrap),:host([text-wrap]){white-space:normal!important;font-size:var(--wj-label-text-wrap-font-size);line-height:var(--wj-label-text-wrap-line-height)}:host(.label-fixed){flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.label-stacked),:host(.label-floating){margin:0;align-self:stretch;width:auto;max-width:100%}:host(.label-no-animate.label-floating){transition:none}::slotted(*) h1,::slotted(*) h2,::slotted(*) h3,::slotted(*) h4,::slotted(*) h5,::slotted(*) h6{text-overflow:inherit;overflow:inherit}:host(.wj-color){color:var(--wj-color)}::slotted(*:first-child){margin-top:0!important}::slotted(*:last-child){margin-bottom:0!important}
`, i = document.createElement("template");
i.innerHTML = `<style>
	${m}
</style>`;
class p extends h {
  constructor() {
    super(i);
    a(this, "className", "Label");
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
    this.isShadowRoot = "open";
  }
  beforeDraw(t, r, l) {
  }
  draw(t, r, l) {
    let s = document.createDocumentFragment(), n = document.createElement("slot");
    return this.color && this.classList.add("wj-color-" + this.color, "wj-color"), s.appendChild(n), s;
  }
  afterDraw(t, r, l) {
    console.log("afterDraw", this.params);
  }
}
customElements.get("wj-label") || window.customElements.define("wj-label", p);
export {
  p as Label
};
