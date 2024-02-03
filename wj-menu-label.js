var r = Object.defineProperty;
var o = (t, e, n) => e in t ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var l = (t, e, n) => (o(t, typeof e != "symbol" ? e + "" : e, n), n);
import i, { WjElementUtils as m } from "./wj-element.js";
import "./wj-store.js";
const d = `/*!
* direction.scss
*/:host{--wj-menu-label-font-size: .75rem;--wj-menu-label-weight: 600;--wj-letter-spacing: .025rem;--wj-menu-label-color: var(--wj-color-contrast-6);--wj-padding-top: 0;--wj-padding-bottom: 0;--wj-padding-start: 1.5rem;--wj-padding-end: 1.5rem}:host .native-menu-label{font-size:var(--wj-menu-label-font-size);display:inline-block;font-weight:var(--wj-menu-label-weight);letter-spacing:var(--wj-letter-spacing);color:var(--wj-menu-label-color);padding:var(--wj-padding-top) var(--wj-padding-start) var(--wj-padding-bottom) var(--wj-padding-end)}
`;
class u extends i {
  constructor() {
    super();
    l(this, "className", "MenuLabel");
    this.hasSubmenu = m.hasSlot(this, "submenu");
  }
  static get cssStyleSheet() {
    return d;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(n, c, w) {
    let s = document.createDocumentFragment(), a = document.createElement("slot");
    return a.setAttribute("part", "base"), a.classList.add("native-menu-label"), s.appendChild(a), s;
  }
}
customElements.get("wj-menu-label") || window.customElements.define("wj-menu-label", u);
export {
  u as MenuLabel
};
