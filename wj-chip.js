var l = Object.defineProperty;
var d = (o, t, e) => t in o ? l(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var c = (o, t, e) => (d(o, typeof t != "symbol" ? t + "" : t, e), e);
import p, { event as h } from "./wj-element.js";
import "./wj-store.js";
const m = `/*!
* direction.scss
*/:host(.wj-color-primary){--wj-color-base: #eae0fb !important;--wj-color-contrast: #845ae0 !important}:host(.wj-color-complete){--wj-color-base: #d3eeff !important;--wj-color-contrast: #0f8ff9 !important}:host(.wj-color-success){--wj-color-base: #d6f7f0 !important;--wj-color-contrast: #26bf93 !important}:host(.wj-color-warning){--wj-color-base: #fffde1 !important;--wj-color-contrast: #ffe858 !important}:host(.wj-color-danger){--wj-color-base: #fde2da !important;--wj-color-contrast: #e6533c !important}:host(.wj-color-info){--wj-color-base: #dbe6e8 !important;--wj-color-contrast: #475b6b !important}:host(.wj-color-menu){--wj-color-base: #f4f4f4 !important;--wj-color-contrast: #21252d !important}:host{--wj-chip-border-radius: 100px;--wj-chip-background: #e0e0e0;--wj-chip-color: #4b4b4b;--wj-chip-margin: 0;margin:var(--wj-chip-margin)}.native-chip{display:inline-flex;justify-content:center;align-items:center;font-family:-apple-system,BlinkMacSystemFont,Inter UI,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:500;font-size:14px;letter-spacing:-.006em;margin:0;padding:.5rem .75rem;text-align:center;cursor:pointer;white-space:nowrap;background:var(--wj-chip-background);color:var(--wj-chip-color);text-shadow:none;box-shadow:none;border:0 none;line-height:14px;min-height:28px;height:28px;width:100%;max-width:fit-content;min-width:28px;position:relative;transition:width .15s cubic-bezier(.4,0,.2,1);border-radius:var(--wj-chip-border-radius);overflow:hidden;vertical-align:middle;box-sizing:border-box}:host(.focus){box-shadow:none}:host(:hover:not(.wj-active)) .native-chip{background:#f4f4f4;color:#4b4b4b}:host(.wj-active) .native-chip{background:red;border:1px solid rgba(33,33,33,.2);border-bottom:1px solid rgba(33,33,33,.29);color:#4b4b4b}:host(:focus,:active:focus,.wj-active:focus){outline:none!important;box-shadow:0 0 #78c8fe}.check{display:none}:host([active]) .check{display:block;margin-inline:4px 0}:host(.wj-disabled){background:#f4f4f4;color:#757575;border:0;pointer-events:none;cursor:not-allowed}::slotted(wj-avatar){width:22px;height:22px}::slotted(wj-avatar:first-child){margin-inline:-8px 8px;margin-top:-4px;margin-bottom:-4px}:host(.wj-color) .native-chip{background-color:var(--wj-color-base, red);color:var(--wj-color-contrast)}::slotted(wj-icon:first-child){margin:-4px 8px -4px -4px}::slotted(wj-icon:last-child){margin:-4px -4px -4px 8px}wj-button{--wj-button-border-radius: 50%;--wj-button-margin-inline: .25rem -.5rem;--wj-padding-top: .15rem;--wj-padding-start: .15rem;--wj-padding-end: .15rem;--wj-padding-bottom: .15rem}
`;
class w extends p {
  constructor() {
    super();
    c(this, "className", "Chip");
  }
  static get cssStyleSheet() {
    return m;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, b, j) {
    let a = document.createDocumentFragment(), r = document.createElement("div");
    r.classList.add("native-chip");
    let s = document.createElement("slot"), i = document.createElement("wj-button");
    i.setAttribute("part", "remove"), i.setAttribute("variant", "link"), i.innerHTML = '<wj-icon name="x"></wj-icon>';
    let n = document.createElement("wj-icon");
    return n.setAttribute("name", "check"), n.classList.add("check"), this.color && this.classList.add("wj-color-" + this.color, "wj-color"), this.disabled && this.classList.add("wj-disabled"), this.outline && this.classList.add("wj-outline"), r.appendChild(s), r.appendChild(n), this.hasAttribute("removable") && r.appendChild(i), a.appendChild(r), this.remove = i, a;
  }
  afterDraw() {
    h.addListener(this.remove, "click", "wj:chip-remove", null, { stopPropagation: !0 });
  }
}
customElements.get("wj-chip") || window.customElements.define("wj-chip", w);
export {
  w as Chip
};
