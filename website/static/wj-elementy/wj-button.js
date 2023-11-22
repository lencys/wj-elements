var d = Object.defineProperty;
var c = (o, n, t) => n in o ? d(o, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[n] = t;
var u = (o, n, t) => (c(o, typeof n != "symbol" ? n + "" : n, t), t);
import w, { event as a } from "./wj-element.js";
import "./wj-store.js";
const s = (o) => o === "false" || o === "null" || o === "NaN" || o === "undefined" || o === "0" ? !1 : !!o, j = `/*!
* direction.scss
*/:host(.wj-button-solid.wj-color-primary){--wj-button-background-color: #7252D3;--wj-button-color: #fff}:host(.wj-button-outline.wj-color-primary){--wj-button-border-color: #7252d3;--wj-button-color: #7252D3}:host(.wj-button-solid.wj-color-complete){--wj-button-background-color: #0072EC;--wj-button-color: #fff}:host(.wj-button-outline.wj-color-complete){--wj-button-border-color: #0072ec;--wj-button-color: #0072EC}:host(.wj-button-solid.wj-color-success){--wj-button-background-color: #19AD79;--wj-button-color: #fff}:host(.wj-button-outline.wj-color-success){--wj-button-border-color: #19ad79;--wj-button-color: #19AD79}:host(.wj-button-solid.wj-color-warning){--wj-button-background-color: #FFd945;--wj-button-color: #4b4b4b}:host(.wj-button-outline.wj-color-warning){--wj-button-border-color: #ffd945;--wj-button-color: #FFd945}:host(.wj-button-solid.wj-color-danger){--wj-button-background-color: #D83C31;--wj-button-color: #fff}:host(.wj-button-outline.wj-color-danger){--wj-button-border-color: #d83c31;--wj-button-color: #D83C31}:host(.wj-button-solid.wj-color-neutral){--wj-button-background-color: #212121;--wj-button-color: #fff}:host(.wj-button-outline.wj-color-neutral){--wj-button-border-color: #212121;--wj-button-color: #212121}:host(.wj-button-solid.wj-color-default){--wj-button-background-color: #fff;--wj-button-color: #4b4b4b}:host(.wj-button-outline.wj-color-default){--wj-button-border-color: rgba(33, 33, 33, .17);--wj-button-background-color: #fff;--wj-button-color: #4b4b4b}:host{--wj-button-border-radius: 4px;--wj-button-border-width: 1px;--wj-button-border-style: solid;--wj-button-border-color: rgba(33, 33, 33, .17);--wj-button-margin-inline: 0;--wj-padding-top: .4rem;--wj-padding-start: .5rem;--wj-padding-end: .5rem;--wj-padding-bottom: .4rem;display:inline-flex;position:relative;width:auto;cursor:pointer;margin-inline:var(--wj-button-margin-inline)}:host(.wj-button-group-button){display:block}.button-native{font-family:var(--wj-font-family);font-size:var(--wj-font-size);display:flex;position:relative;align-items:center;width:100%;height:100%;min-height:inherit;overflow:hidden;border-width:var(--wj-button-border-width);border-style:var(--wj-button-border-style);border-color:var(--wj-button-border-color);outline:none;background-color:var(--wj-button-background-color);color:var(--wj-button-color);line-height:1;contain:layout style;cursor:pointer;z-index:0;box-sizing:border-box;appearance:none;margin:0;border-radius:var(--wj-button-border-radius);padding-top:var(--wj-padding-top);padding-bottom:var(--wj-padding-bottom);padding-left:var(--wj-padding-start);padding-right:var(--wj-padding-end)}@media (any-hover: hover){:host(.wj-button-solid:hover){--wj-button-background-color: #845ae0;--wj-button-border-color: #7252D3;--wj-button-color: #fff}:host(.wj-button-outline:hover){--wj-button-background-color: rgba(114, 82, 211, .1);--wj-button-border-color: #7252D3;--wj-button-color: #7252D3}:host(.wj-button-solid.wj-color-complete:hover){--wj-button-background-color: #0f8ff9;--wj-button-border-color: #0072EC;--wj-button-color: #fff}:host(.wj-button-outline.wj-color-complete:hover){--wj-button-background-color: rgba(0, 114, 236, .1);--wj-button-border-color: #0072EC;--wj-button-color: #0072EC}:host(.wj-button-solid.wj-color-success:hover){--wj-button-background-color: #26bf93;--wj-button-border-color: #19AD79;--wj-button-color: #fff}:host(.wj-button-outline.wj-color-success:hover){--wj-button-background-color: rgba(25, 173, 121, .1);--wj-button-border-color: #19AD79;--wj-button-color: #19AD79}:host(.wj-button-solid.wj-color-warning:hover){--wj-button-background-color: #ffe858;--wj-button-border-color: #FFd945;--wj-button-color: #4b4b4b}:host(.wj-button-outline.wj-color-warning:hover){--wj-button-background-color: rgba(255, 217, 69, .1);--wj-button-border-color: #FFd945;--wj-button-color: #FFd945}:host(.wj-button-solid.wj-color-danger:hover){--wj-button-background-color: #e6533c;--wj-button-border-color: #D83C31;--wj-button-color: #fff}:host(.wj-button-outline.wj-color-danger:hover){--wj-button-background-color: rgba(216, 60, 49, .1);--wj-button-border-color: #D83C31;--wj-button-color: #D83C31}:host(.wj-button-solid.wj-color-neutral:hover){--wj-button-background-color: #373737;--wj-button-border-color: #212121;--wj-button-color: #fff}:host(.wj-button-outline.wj-color-neutral:hover){--wj-button-background-color: rgba(33, 33, 33, .1);--wj-button-border-color: #212121;--wj-button-color: #212121}:host(.wj-button-solid.wj-color-default:hover){--wj-button-background-color: rgba(245, 245, 245, .19);--wj-button-border-color: #e0e0e0;--wj-button-color: #4b4b4b}:host(.wj-button-outline.wj-color-default:hover){--wj-button-background-color: rgba(224, 224, 224, .1);--wj-button-border-color: #e0e0e0;--wj-button-color: #4b4b4b}:host(.wj-button-link:hover){--wj-button-background-color: rgba(128, 128, 128, .2) !important;--wj-button-border-color: transparent !important;color:#4b4b4b!important}}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.button-solid.wj-color){background-color:var(--wj-button-background-color);color:var(--wj-button-color)}:host(.wj-button-solid){--wj-button-background-color: #7252D3;--wj-button-color: #fff}:host(.wj-button-outline){--wj-button-border-color: #7252d3;--wj-button-background-color: transparent;--wj-button-color: #7252D3}:host(.wj-button-link){--wj-button-border-width: 1px;--wj-button-border-color: transparent;--wj-button-background-color: transparent !important}:host(.wj-button-disabled){cursor:default;opacity:.5;pointer-events:none}:host(.wj-button-round){--wj-button-border-radius: 100px}:host(.wj-button-large){--wj-padding-top: .6rem;--wj-padding-start: .7rem;--wj-padding-end: .7rem;--wj-padding-bottom: .6rem}:host(.wj-button-small){--wj-padding-top: .25rem;--wj-padding-start: .25rem;--wj-padding-end: .25rem;--wj-padding-bottom: .25rem}::slotted(wj-icon[slot=start]){margin:0 .3rem 0 -.3rem}::slotted(wj-icon[slot=end]){margin:0 -.2rem 0 .3rem}::slotted(wj-icon[slot=caret]){margin:0 0 0 .3rem}slot[name=caret]{display:block}:host(.wj-button-group-first:not(.wj-button-group-last)) .button-native{border-start-end-radius:0;border-end-end-radius:0}:host(.wj-button-group-inner) .button-native{border-radius:0}:host(.wj-button-group-last:not(.wj-button-group-first)) .button-native{border-start-start-radius:0;border-end-start-radius:0}:host(.wj-button-group-button:not(.wj-button-group-first)){margin-inline-start:calc(-1 * var(--wj-button-border-width))!important}
`;
class h extends w {
  constructor() {
    super();
    u(this, "className", "Button");
    u(this, "eventDialogOpen", (t) => {
      document.dispatchEvent(
        new CustomEvent(
          this.dialog,
          {
            bubbles: !0
          }
        )
      );
    });
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
  set fill(t) {
    this.setAttribute("fill", t);
  }
  get fill() {
    return this.getAttribute("fill") || "solid";
  }
  set outline(t) {
    this.setAttribute("outline", "");
  }
  get outline() {
    return this.hasAttribute("outline");
  }
  set round(t) {
    this.setAttribute("round", "");
  }
  get round() {
    return this.hasAttribute("round");
  }
  set stopPropagation(t) {
    this.setAttribute("stop-propagation", s(t));
  }
  get stopPropagation() {
    return console.log("SP:", s(this.getAttribute("stop-propagation")), this.innerHTML, this.getAttribute("stop-propagation")), s(this.getAttribute("stop-propagation"));
  }
  static get cssStyleSheet() {
    return j;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, p, g) {
    let b = document.createDocumentFragment();
    if (this.disabled && this.classList.add("wj-button-disabled"), this.variant && this.classList.add("wj-button-" + this.variant), this.round && this.classList.add("wj-button-round"), this.outline && this.classList.add("wj-outline"), this.fill && this.classList.add("wj-button-" + this.fill), this.size && this.classList.add("wj-button-" + this.size), this.hasAttribute("color") ? this.classList.add("wj-color-" + this.color, "wj-color") : this.classList.add("wj-color-default", "wj-color"), this.hasAttribute("caret")) {
      let i = document.createElement("wj-icon");
      i.style.setProperty("--wj-icon-size", "14px"), i.setAttribute("slot", "caret"), i.setAttribute("name", "chevron-down"), this.appendChild(i);
    }
    if (this.active) {
      this.classList.add("wj-active");
      let i = document.createElement("wj-icon");
      i.setAttribute("name", "check"), this.appendChild(i);
    }
    this.disabled && this.classList.add("wj-disabled");
    let l = document.createElement(this.hasAttribute("href") ? "a" : "button");
    l.classList.add("button-native"), l.setAttribute("part", "native");
    let e = document.createElement("span");
    e.classList.add("button-inner");
    let r = document.createElement("slot");
    return r.setAttribute("name", "icon-only"), e.appendChild(r), r = document.createElement("slot"), r.setAttribute("name", "start"), e.appendChild(r), r = document.createElement("slot"), e.appendChild(r), r = document.createElement("slot"), r.setAttribute("name", "end"), e.appendChild(r), r = document.createElement("slot"), r.setAttribute("name", "caret"), e.appendChild(r), l.appendChild(e), b.appendChild(l), b;
  }
  afterDraw() {
    console.log("Stop propagation: ", this.stopPropagation), a.addListener(this, "click", "wj:button-click", null, { stopPropagation: this.stopPropagation }), a.addListener(this, "click", null, this.eventDialogOpen);
  }
  beforeDisconnect() {
    this.removeEventListener("click", this.eventDialogOpen);
  }
}
customElements.get("wj-button") || window.customElements.define("wj-button", h);
export {
  h as Button
};
