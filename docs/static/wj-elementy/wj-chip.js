var l = Object.defineProperty;
var d = (r, o, t) => o in r ? l(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t;
var n = (r, o, t) => (d(r, typeof o != "symbol" ? o + "" : o, t), t);
import w, { event as h } from "./wj-element.js";
import "./wj-store.js";
const j = `/*!
* direction.scss
*/:host{--wj-chip-border-radius: 100px;--wj-chip-background: var();--wj-chip-color: #4b4b4b;--wj-chip-margin: 0;--wj-card-background: var(--wj-color-contrast-2);--wj-card-color: var(--wj-color);margin:var(--wj-chip-margin)}:host(.wj-color-primary){--wj-card-background: var(--wj-color-primary)}:host(.wj-color-complete){--wj-card-background: var(--wj-color-complete)}:host(.wj-color-success){--wj-card-background: var(--wj-color-success)}:host(.wj-color-warning){--wj-card-background: var(--wj-color-warning)}:host(.wj-color-danger){--wj-card-background: var(--wj-color-danger)}:host(.wj-color-info){--wj-card-background: var(--wj-color-info)}:host(.wj-color-menu){--wj-card-background: var(--wj-color-menu)}:host(.wj-color-primary){--wj-card-color: var(--wj-color-white)}:host(.wj-color-complete){--wj-card-color: var(--wj-color-white)}:host(.wj-color-success){--wj-card-color: var(--wj-color-white)}:host(.wj-color-warning){--wj-card-color: var(--wj-color)}:host(.wj-color-danger){--wj-card-color: var(--wj-color-white)}:host(.wj-color-info){--wj-card-color: var(--wj-color-white)}:host(.wj-color-menu){--wj-card-color: var(--wj-color-white) !important}.native-chip{display:inline-flex;justify-content:center;align-items:center;font-size:14px;letter-spacing:-.006em;margin:0;padding:.5rem .75rem;text-align:center;cursor:pointer;white-space:nowrap;background:var(--wj-chip-background);color:var(--wj-chip-color);text-shadow:none;box-shadow:none;border:0 none;line-height:14px;min-height:28px;height:28px;width:100%;max-width:fit-content;min-width:28px;position:relative;transition:width .15s cubic-bezier(.4,0,.2,1);border-radius:var(--wj-chip-border-radius);overflow:hidden;vertical-align:middle;box-sizing:border-box}:host(.focus){box-shadow:none}:host(:hover:not(.wj-active)) .native-chip{background:var(--wj-color-contrast-3);color:var(--wj-color)}:host(.wj-active) .native-chip{border:1px solid rgba(33,33,33,.2)}:host(:focus,:active:focus,.wj-active:focus){outline:none!important;box-shadow:0 0 #78c8fe}.check{display:none}:host([active]) .check{display:block;margin-inline:4px 0}:host(.wj-disabled){background:#f4f4f4;color:#757575;border:0;pointer-events:none;cursor:not-allowed}::slotted(wj-avatar){width:22px;height:22px}::slotted(wj-avatar:first-child){margin-inline:-8px 8px;margin-top:-4px;margin-bottom:-4px}:host .native-chip{background-color:var(--wj-card-background, #fff);color:var(--wj-card-color)}::slotted(wj-icon:first-child){margin:-4px 8px -4px -4px}::slotted(wj-icon:last-child){margin:-4px -4px -4px 8px}wj-button{--wj-button-border-radius: 50%;--wj-button-margin-inline: .25rem -.5rem;--wj-padding-top: .15rem;--wj-padding-start: .15rem;--wj-padding-end: .15rem;--wj-padding-bottom: .15rem}
`;
class p extends w {
  constructor() {
    super();
    n(this, "className", "Chip");
  }
  static get cssStyleSheet() {
    return j;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, m, u) {
    let a = document.createDocumentFragment(), e = document.createElement("div");
    e.classList.add("native-chip");
    let s = document.createElement("slot"), c = document.createElement("wj-button");
    c.setAttribute("part", "remove"), c.setAttribute("fill", "link"), c.innerHTML = '<wj-icon name="x"></wj-icon>';
    let i = document.createElement("wj-icon");
    return i.setAttribute("name", "check"), i.classList.add("check"), this.color && this.classList.add("wj-color-" + this.color, "wj-color"), this.disabled && this.classList.add("wj-disabled"), this.outline && this.classList.add("wj-outline"), e.appendChild(s), e.appendChild(i), this.hasAttribute("removable") && e.appendChild(c), a.appendChild(e), this.remove = c, a;
  }
  afterDraw() {
    h.addListener(this.remove, "click", "wj:chip-remove", null, { stopPropagation: !0 });
  }
}
customElements.get("wj-chip") || window.customElements.define("wj-chip", p);
export {
  p as Chip
};
