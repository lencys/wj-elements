var e = Object.defineProperty;
var l = (r, o, t) => o in r ? e(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t;
var c = (r, o, t) => (l(r, typeof o != "symbol" ? o + "" : o, t), t);
import n from "./wj-element.js";
import "./wj-store.js";
const w = `/*!
* direction.scss
*/:host(.wj-color-primary){--wj-color-base: var(--wj-color-primary) !important;--wj-color-contrast: var(--wj-color-contrast-lowest) !important}:host(.wj-color-complete){--wj-color-base: var(--wj-color-complete) !important;--wj-color-contrast: var(--wj-color-contrast-lowest) !important}:host(.wj-color-success){--wj-color-base: var(--wj-color-success) !important;--wj-color-contrast: var(--wj-color-contrast-lowest) !important}:host(.wj-color-warning){--wj-color-base: var(--wj-color-warning) !important;--wj-color-contrast: var(--wj-color-contrast-high) !important}:host(.wj-color-danger){--wj-color-base: var(--wj-color-danger) !important;--wj-color-contrast: var(--wj-color-contrast-lowest) !important}:host(.wj-color-info){--wj-color-base: var(--wj-color-info) !important;--wj-color-contrast: var(--wj-color-contrast-lowest) !important}:host(.wj-color-menu){--wj-color-base: var(--wj-color-contrast-lower) !important;--wj-color-contrast: var(--wj-color-contrast-high) !important}:host{--wj-chip-border-radius: 100px;text-shadow:none;font-family:var(--wj-font-family);font-weight:600;background-color:var(--wj-color-contrast-low);font-size:11px;padding-left:6px;padding-right:6px;color:var(--wj-color-contrast-high);border-radius:10px}:host(.wj-color){background-color:var(--wj-color-base, red);color:var(--wj-color-contrast)}
`;
class i extends n {
  constructor() {
    super();
    c(this, "className", "Badge");
  }
  static get cssStyleSheet() {
    return w;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, j, m) {
    let a = document.createDocumentFragment(), s = document.createElement("slot");
    return this.color && this.classList.add("wj-color-" + this.color, "wj-color"), a.appendChild(s), a;
  }
}
let g = "true";
customElements.get("wj-badge") || window.customElements.define("wj-badge", i);
export {
  i as Badge,
  g as __esModule
};
