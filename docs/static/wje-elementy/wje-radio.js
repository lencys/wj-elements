var l = Object.defineProperty;
var s = (i, t, e) => t in i ? l(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var a = (i, t, e) => (s(i, typeof t != "symbol" ? t + "" : t, e), e);
import p, { event as n } from "./wje-element.js";
const h = ':host{--wje-radio-margin-top: 0;--wje-radio-margin-bottom: .5rem;--wje-radio-margin-inline: 0;display:block;margin-top:var(--wje-radio-margin-top);margin-bottom:var(--wje-radio-margin-bottom);margin-inline:var(--wje-radio-margin-inline);line-height:100%;padding-left:0}:host label{display:inline-flex;cursor:pointer;position:relative;padding-left:1.5rem;min-width:16px;min-height:16px;margin-bottom:0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-items:center}:host label:before{content:"";position:absolute;width:16px;height:16px;left:0;-webkit-box-sizing:inherit;box-sizing:border-box;background-color:var(--wje-color-contrast-1);border:1px solid var(--wje-color-contrast-4)}.native-radio input[type=radio]+label:before{border-radius:var(--wje-border-radius-circle);transition:border .3s 0s cubic-bezier(.455,.03,.215,1.33)}.native-radio input[type=radio]:checked+label:before{border-color:var(--wje-color-contrast-6);border-width:5px}.native-radio input[type=radio]:focus+label{color:var(--wje-color)}.native-radio input[type=radio]:focus+label:before{outline:none!important;box-shadow:0 0 #78c8fe}.native-radio input[type=radio]{opacity:0;position:absolute;top:3px;width:16px;height:16px}.native-radio input[type=radio][disabled]+label{cursor:not-allowed!important;color:var(--wje-color-contrast-9);opacity:.5}.native-radio input[type=radio][disabled]+label:before{cursor:not-allowed!important}.success input[type=radio]:checked+label:before{border-color:var(--wje-color-success)}.primary input[type=radio]:checked+label:before{border-color:var(--wje-color-primary)}.complete input[type=radio]:checked+label:before{border-color:var(--wje-color-complete)}.warning input[type=radio]:checked+label:before{border-color:var(--wje-color-warning)}.danger input[type=radio]:checked+label:before{border-color:var(--wje-color-danger)}.neutral input[type=radio]:checked+label:before{border-color:var(--wje-color-info)}';
class c extends p {
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
    return h;
  }
  static get observedAttributes() {
    return ["checked"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, b, u) {
    let d = document.createDocumentFragment(), r = document.createElement("div");
    r.classList.add("native-radio"), this.color && r.classList.add(this.color), this.input = document.createElement("input"), this.input.type = "radio", this.input.id = "radio", this.input.name = this.name + "-radio", this.input.checked = this.hasAttribute("checked"), this.input.disabled = this.hasAttribute("disabled"), this.input.indeterminate = this.hasAttribute("indeterminate");
    let o = document.createElement("label");
    return o.htmlFor = "radio", o.innerHTML = "<slot></slot>", r.appendChild(this.input), r.appendChild(o), d.appendChild(r), d;
  }
  afterDraw() {
    this.hasAttribute("disabled") || (n.addListener(this, "click", "wje:radio:change"), n.addListener(this, "click", "wje:radio:input"));
  }
  disconnectedCallback() {
    n.removeElement(this);
  }
}
c.define("wje-radio", c);
export {
  c as default
};
