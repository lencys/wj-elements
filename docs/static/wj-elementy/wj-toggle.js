var d = Object.defineProperty;
var p = (o, e, r) => e in o ? d(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r;
var c = (o, e, r) => (p(o, typeof e != "symbol" ? e + "" : e, r), r);
import g from "./wj-element.js";
import "./wj-store.js";
const h = `/*!
* direction.scss
*/:host(.wj-color-primary){--wj-toggle-color-base: var(--wj-color-primary)}:host(.wj-color-complete){--wj-toggle-color-base: var(--wj-color-complete)}:host(.wj-color-success){--wj-toggle-color-base: var(--wj-color-success) !important}:host(.wj-color-warning){--wj-toggle-color-base: var(--wj-color-warning)}:host(.wj-color-danger){--wj-toggle-color-base: var(--wj-color-danger)}:host(.wj-color-info){--wj-toggle-color-base: var(--wj-color-info)}:host{--wj-toggle-color-base: var(--wj-color-contrast-3);--wj-toggle-width: 30px;--wj-toggle-height: 18px;--wj-toggle-border-radius: 50px;--wj-toggle-handle-width: 14px;--wj-toggle-handle-height: 14px;--wj-toggle-handle-border-radius: 9px;--wj-toggle-handle-color: #fff;--wj-toggle-handle-shadow: 1px 0 1px .5px rgba(0,0,0,.12), 2px 4px 6px rgba(0,0,0,.2);--wj-toggle-handle-shadow-checked: 1px 1px 0 rgba(0,0,0,.08), -3px 3px 6px rgba(0,0,0,.3);--switch-duration: .25s;--switch-curve: cubic-bezier(.4,0,.2,1)}.native-toggle{display:flex}label{display:flex;cursor:pointer;align-items:center;-webkit-user-select:none;user-select:none}label .label-wrapper{width:var(--wj-toggle-width);height:var(--wj-toggle-height);position:relative;display:flex;align-items:center}label .label-wrapper:before{content:"";position:absolute;cursor:pointer;width:100%;height:100%;top:auto;left:0;background:var(--wj-toggle-color-base);background-size:300%;background-position:right;border-radius:var(--wj-toggle-border-radius);border:none;box-shadow:inset 0 0 0 1px #0000001f;transition:background calc(var(--switch-duration) + var(--switch-duration) * .24),box-shadow var(--switch-duration);transition-timing-function:var(--switch-curve)}label .label-wrapper:after{content:"";position:absolute;transform:translate(0);background:var(--wj-toggle-handle-color);width:var(--wj-toggle-handle-width);height:var(--wj-toggle-handle-height);border-radius:var(--wj-toggle-handle-border-radius);top:auto;left:2px;box-shadow:var(--wj-toggle-handle-shadow);transition:transform,box-shadow;transition-duration:var(--switch-duration);transition-timing-function:var(--switch-curve)}input[type=checkbox][disabled]+label{cursor:not-allowed!important;color:var(--wj-color-contrast-9);opacity:.58}input[type=checkbox][disabled]+label:before{cursor:not-allowed!important}input[type=checkbox]{position:absolute;z-index:-1;opacity:0}input[type=checkbox]:checked+label .label-wrapper:before{background-position:left;box-shadow:inset 0 0 0 1px #0000001f}input[type=checkbox]:checked+label .label-wrapper:after{transform:translate(calc(var(--wj-toggle-width) - var(--wj-toggle-handle-width) - 4px));box-shadow:var(--wj-toggle-handle-shadow-checked)}input[type=checkbox]:focus+label .label-wrapper:before{outline:none!important;box-shadow:inset 0 0 0 1px #0000001f,0 0 #78c8fe}input[type=checkbox][disabled]:active+label .label-wrapper:after{transform:scaleX(1.1);transform-origin:center left;transition:transform step-start}input[type=checkbox]:checked[disabled]:active+label .label-wrapper:after{transform:translate(calc(100% - 6px)) scaleX(1.1);transform-origin:center right}input[type=checkbox]:hover:active+label .label-wrapper:before{background-color:transparent}:host .text{margin-inline:.5rem 0}
`;
class b extends g {
  constructor() {
    super();
    c(this, "className", "Toggle");
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  get checked() {
    return this.hasAttribute("checked");
  }
  static get cssStyleSheet() {
    return h;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(r, w, u) {
    let s = document.createDocumentFragment(), a = document.createElement("div");
    a.classList.add("native-toggle");
    let t = document.createElement("input");
    t.setAttribute("part", "input"), t.setAttribute("type", "checkbox"), t.setAttribute("name", this.name), t.setAttribute("id", "input");
    let l = document.createElement("label");
    l.setAttribute("for", "input");
    let i = document.createElement("div");
    i.setAttribute("part", "toggle"), i.classList.add("label-wrapper");
    let n = document.createElement("div");
    return n.classList.add("text"), n.innerHTML = "<slot></slot>", this.color && this.classList.add("wj-color-" + this.color, "wj-color"), this.checked && (t.checked = this.checked), this.disabled && (t.disabled = this.disabled), a.appendChild(t), a.appendChild(l), l.appendChild(i), l.appendChild(n), s.appendChild(a), s;
  }
}
customElements.get("wj-toggle") || window.customElements.define("wj-toggle", b);
export {
  b as Toggle
};
