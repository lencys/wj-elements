var c = Object.defineProperty;
var s = (i, t, e) => t in i ? c(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var a = (i, t, e) => (s(i, typeof t != "symbol" ? t + "" : t, e), e);
import l, { event as n } from "./wj-element.js";
import "./wj-store.js";
const b = `/*!
* direction.scss
*/:host{--wj-radio-margin-top: 0;--wj-radio-margin-bottom: .5rem;--wj-radio-margin-inline: 0;display:block;margin-top:var(--wj-radio-margin-top);margin-bottom:var(--wj-radio-margin-bottom);margin-inline:var(--wj-radio-margin-inline);line-height:100%;padding-left:0}:host label{display:inline-flex;cursor:pointer;position:relative;padding-left:25px;min-width:16px;min-height:16px;margin-bottom:0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-items:center}:host label:before{content:"";position:absolute;width:16px;height:16px;left:0;-webkit-box-sizing:inherit;box-sizing:border-box;background-color:#fff;border:1px solid #c9c9c9}.native-radio input[type=radio]+label:before{border-radius:99px;-webkit-transition:border .3s 0s cubic-bezier(.455,.03,.215,1.33);transition:border .3s 0s cubic-bezier(.455,.03,.215,1.33)}.native-radio input[type=radio]:checked+label:before{border-color:#757575;border-width:5px}.native-radio input[type=radio]:hover:active:not(:checked)+label:before{background-color:#00000014}.native-radio input[type=radio]:focus+label{color:#212121}.native-radio input[type=radio]:focus+label:before{outline:none!important;box-shadow:0 0 #78c8fe}.native-radio input[type=radio]{opacity:0;position:absolute;top:3px;width:16px;height:16px}.native-radio input[type=radio][disabled]+label{cursor:not-allowed!important;color:#4b4b4b;opacity:.58}.native-radio input[type=radio][disabled]+label:before{cursor:not-allowed!important;background:#ececec}.success input[type=radio]:checked+label:before{border-color:#19ad79}.primary input[type=radio]:checked+label:before{border-color:#7252d3}.complete input[type=radio]:checked+label:before{border-color:#0072ec}.warning input[type=radio]:checked+label:before{border-color:#ffd945}.danger input[type=radio]:checked+label:before{border-color:#d83c31}.neutral input[type=radio]:checked+label:before{border-color:#3b4752}
`;
class p extends l {
  constructor() {
    super();
    a(this, "className", "Radio");
    a(this, "inputEvent", (e) => {
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
    return b;
  }
  static get observedAttributes() {
    return ["checked"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, h, u) {
    let d = document.createDocumentFragment(), o = document.createElement("div");
    o.classList.add("native-radio"), this.color && o.classList.add(this.color), this.input = document.createElement("input"), this.input.type = "radio", this.input.id = "radio", this.input.name = this.name + "-radio", this.input.checked = this.hasAttribute("checked"), this.input.disabled = this.hasAttribute("disabled"), this.input.indeterminate = this.hasAttribute("indeterminate");
    let r = document.createElement("label");
    return r.htmlFor = "radio", r.innerHTML = "<slot></slot>", o.appendChild(this.input), o.appendChild(r), d.appendChild(o), d;
  }
  afterDraw() {
    this.hasAttribute("disabled") || (n.addListener(this, "click", "wj:radio:change"), n.addListener(this, "click", "wj:radio:input"));
  }
  disconnectedCallback() {
    n.removeElement(this);
  }
}
customElements.get("wj-radio") || window.customElements.define("wj-radio", p);
export {
  p as Radio
};
