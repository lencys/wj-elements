var b = Object.defineProperty;
var l = (c, t, e) => t in c ? b(c, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[t] = e;
var n = (c, t, e) => (l(c, typeof t != "symbol" ? t + "" : t, e), e);
import h, { event as r } from "./wj-element.js";
import "./wj-store.js";
const s = `/*!
* direction.scss
*/:host{--wj-checkbox-margin-top: 0;--wj-checkbox-margin-bottom: .5rem;--wj-checkbox-margin-inline: 0;--wj-checkbox-width: 16px;--wj-checkbox-height: 16px;display:block;margin-top:var(--wj-checkbox-margin-top);margin-bottom:var(--wj-checkbox-margin-bottom);margin-inline:var(--wj-checkbox-margin-inline);line-height:100%;padding-left:0}:host label{display:inline-block;cursor:pointer;position:relative;padding-left:25px;min-width:var(--wj-checkbox-width);min-height:var(--wj-checkbox-height);margin-bottom:0;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host label:before{content:"";position:absolute;width:16px;height:16px;left:0;-webkit-box-sizing:inherit;box-sizing:border-box;background-color:#fff;border:1px solid #c9c9c9}.native-checkbox label{transition:border .14s linear 0s,color .14s linear 0s,background-color .14s linear 0s}.native-checkbox label:hover{color:#212121}.native-checkbox label:before{border-radius:3px;transition:border .14s linear 0s,color .14s linear 0s,background-color .14s linear 0s}.native-checkbox input[type=checkbox]{position:absolute;margin:0;z-index:-1;width:16px;height:16px;opacity:0;display:none}.native-checkbox input[type=checkbox]+label:after{content:"";position:absolute;left:0px;border-right:0 solid transparent;border-bottom:0 solid transparent;width:16px;height:16px;overflow:hidden}.native-checkbox.checkbox-circle label:after{border-radius:99px}.native-checkbox.checkbox-circle label:before{border-radius:99px}.native-checkbox input[type=checkbox]:checked+label:after{content:"";background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAQAgMAAADsa5zLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTHBwcG9vb3BwcBFjhIYAAAAEdFJOUwBG9tQE3MceAAAAVUlEQVQoz2NgGLKA0QGIDwDxBSCeAMEYgAWI2YCK2CagYgwgDcRSDhgYbAkKzsSKGdgakCyY6ADES7BiiCkgJ4PYyybgxAhQAsRZDrgxCpDEg4cAAAAp2ibhZRGLHgAAAABJRU5ErkJggg==) left center;background-size:160px 16px;background-repeat:no-repeat;animation-name:checkbox-check;animation-duration:.32s;animation-timing-function:steps(9);animation-fill-mode:forwards;animation-iteration-count:1}.native-checkbox input[type=checkbox]:hover:active:not(:checked)+label:before{background-color:#00000014}.native-checkbox input[type=checkbox]:focus+label{color:#212121}.native-checkbox input[type=checkbox]:focus+label:before{outline:none!important;box-shadow:0 0 #78c8fe}.native-checkbox input[type=checkbox][disabled]+label{cursor:not-allowed!important;color:#4b4b4b;opacity:.58}.native-checkbox input[type=checkbox][disabled]+label:before{cursor:not-allowed!important;background:#ececec}.native-checkbox input[type=checkbox]:indeterminate+label:after{background:none;background-color:#4b4b4b;width:10px;height:2px;top:6px;margin:3px;border-radius:2px}.native-checkbox.right label{padding-left:0;padding-right:26px}.native-checkbox.right label:before{right:0px;left:auto}.native-checkbox.right input[type=checkbox]:checked+label{position:relative}.native-checkbox.right input[type=checkbox]:checked+label:after{position:absolute;right:0px;left:auto}.success input[type=checkbox]:checked+label:before,.success input[type=checkbox]:indeterminate+label:before{border-color:#19ad79;background-color:#19ad79}.primary input[type=checkbox]:checked+label:before,.primary input[type=checkbox]:indeterminate+label:before{border-color:#7252d3;background-color:#7252d3}.complete input[type=checkbox]:checked+label:before,.complete input[type=checkbox]:indeterminate+label:before{border-color:#0072ec;background-color:#0072ec}.warning input[type=checkbox]:checked+label:before,.warning input[type=checkbox]:indeterminate+label:before{border-color:#ffd945;background-color:#ffd945}.danger input[type=checkbox]:checked+label:before,.danger input[type=checkbox]:indeterminate+label:before{border-color:#d83c31;background-color:#d83c31}.info input[type=checkbox]:checked+label:before,.info input[type=checkbox]:indeterminate+label:before{border-color:#3b4752;background-color:#3b4752}.info input[type=checkbox]:checked+label:after,.danger input[type=checkbox]:checked+label:after,.complete input[type=checkbox]:checked+label:after,.primary input[type=checkbox]:checked+label:after,.success input[type=checkbox]:checked+label:after{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAQAgMAAADsa5zLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAAEdFJOUwBG9tQE3MceAAAAVUlEQVQoz2NgGLKA0QGIDwDxBSCeAMEYgAWI2YCK2CagYgwgDcRSDhgYbAkKzsSKGdgakCyY6ADES7BiiCkgJ4PYyybgxAhQAsRZDrgxCpDEg4cAAAAp2ibhZRGLHgAAAABJRU5ErkJggg==) left center}.info input[type=checkbox]:indeterminate+label:after,.danger input[type=checkbox]:indeterminate+label:after,.complete input[type=checkbox]:indeterminate+label:after,.primary input[type=checkbox]:indeterminate+label:after,.success input[type=checkbox]:indeterminate+label:after{background-color:#fff}@keyframes shrink-bounce{0%{transform:scale(1)}33%{transform:scale(.85)}to{transform:scale(1)}}@keyframes checkbox-check{0%{background-position:0px}to{background-position:-144px}}.js-focus-visible .native-checkbox input[type=checkbox]:focus:not(.focus-visible)+label:before{box-shadow:none}input[type=checkbox]{accent-color:#7252D3!important;font-size:50px}
`;
class d extends h {
  constructor() {
    super();
    n(this, "className", "Checkbox");
    n(this, "inputEvent", (e) => {
      this.checked = e.target.checked;
    });
    this._checked = !1;
  }
  set checked(e) {
    this._checked = e, e ? this.setAttribute("checked", "") : this.removeAttribute("checked");
  }
  get checked() {
    return this._checked;
  }
  static get cssStyleSheet() {
    return s;
  }
  static get observedAttributes() {
    return ["checked"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, p, k) {
    let a = document.createDocumentFragment(), o = document.createElement("div");
    o.classList.add("native-checkbox"), this.variant === "circle" && o.classList.add("checkbox-circle"), this.color && o.classList.add(this.color), this.input = document.createElement("input"), this.input.type = "checkbox", this.input.id = "checkbox", this.input.name = this.name = "checkbox", this.input.checked = this.hasAttribute("checked"), this.input.disabled = this.hasAttribute("disabled"), this.input.indeterminate = this.hasAttribute("indeterminate");
    let i = document.createElement("label");
    return i.htmlFor = "checkbox", i.innerHTML = "<slot></slot>", o.appendChild(this.input), o.appendChild(i), a.appendChild(o), a;
  }
  afterDraw() {
    r.addListener(this, "click", "wj:checkbox:change"), r.addListener(this, "click", "wj:checkbox:input");
  }
  disconnectedCallback() {
    r.removeElement(this);
  }
}
customElements.get("wj-checkbox") || window.customElements.define("wj-checkbox", d);
export {
  d as Checkbox
};
