var i = Object.defineProperty;
var c = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var s = (e, t, o) => (c(e, typeof t != "symbol" ? t + "" : t, o), o);
import w from "./wj-element.js";
import "./wj-store.js";
const m = `/*!
* direction.scss
*/:host(.wj-color-primary){--wj-color: #7252D3 !important}:host(.wj-color-complete){--wj-color: #0072EC !important}:host(.wj-color-success){--wj-color-base: #19AD79 !important;--wj-color-contrast: #fff !important}:host(.wj-color-warning){--wj-color-base: #FFd945 !important;--wj-color-contrast: #4b4b4b !important}:host(.wj-color-danger){--wj-color-base: #D83C31 !important;--wj-color-contrast: #fff !important}:host(.wj-color-info){--wj-color-base: #3B4752 !important;--wj-color-contrast: #fff !important}:host(.wj-color-menu){--wj-color-base: #2b303b !important;--wj-color-contrast: #fff !important}:host{--wj-color: initial;display:block;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}:host(.wj-color){color:var(--wj-color-base)}:host(.wj-text-wrap),:host([text-wrap]){white-space:normal!important}:host(.label-fixed){flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.label-stacked),:host(.label-floating){margin:0;align-self:stretch;width:auto;max-width:100%}:host(.label-no-animate.label-floating){transition:none}::slotted(*) h1,::slotted(*) h2,::slotted(*) h3,::slotted(*) h4,::slotted(*) h5,::slotted(*) h6{text-overflow:inherit;overflow:inherit}:host(.wj-color){color:var(--wj-color)}::slotted(*:first-child){margin-top:0!important}::slotted(*:last-child){margin-bottom:0!important}
`;
class h extends w {
  constructor() {
    super();
    s(this, "className", "Label");
  }
  static get cssStyleSheet() {
    return m;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(o, a, r) {
  }
  draw(o, a, r) {
    let l = document.createDocumentFragment();
    this.color && this.classList.add("wj-color-" + r.color, "wj-color");
    let n = document.createElement("slot");
    return l.appendChild(n), l;
  }
}
customElements.get("wj-label") || window.customElements.define("wj-label", h);
export {
  h as Label
};
