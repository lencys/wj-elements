var n = Object.defineProperty;
var c = (t, o, r) => o in t ? n(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r;
var s = (t, o, r) => (c(t, typeof o != "symbol" ? o + "" : o, r), r);
import l from "./wj-element.js";
import "./wj-store.js";
const i = `/*!
* direction.scss
*/:host(.wj-color-primary){--wj-color-base: #7252D3 !important;--wj-color-contrast: #fff !important}:host(.wj-color-complete){--wj-color-base: #0072EC !important;--wj-color-contrast: #fff !important}:host(.wj-color-success){--wj-color-base: #19AD79 !important;--wj-color-contrast: #fff !important}:host(.wj-color-warning){--wj-color-base: #FFd945 !important;--wj-color-contrast: #4b4b4b !important}:host(.wj-color-danger){--wj-color-base: #D83C31 !important;--wj-color-contrast: #fff !important}:host(.wj-color-info){--wj-color-base: #3B4752 !important;--wj-color-contrast: #fff !important}:host(.wj-color-menu){--wj-color-base: #f4f4f4 !important;--wj-color-contrast: #4b4b4b !important}:host{--wj-chip-border-radius: 100px;text-shadow:none;font-family:Inter UI,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:600;background-color:#e0e0e0;font-size:11px;padding-left:6px;padding-right:6px;color:#4b4b4b;border-radius:10px}:host(.wj-color){background-color:var(--wj-color-base, red);color:var(--wj-color-contrast)}
`;
class m extends l {
  constructor() {
    super();
    s(this, "className", "Badge");
  }
  static get cssStyleSheet() {
    return i;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(r, w, p) {
    let e = document.createDocumentFragment(), a = document.createElement("slot");
    return this.color && this.classList.add("wj-color-" + this.color, "wj-color"), e.appendChild(a), e;
  }
}
let b = "true";
customElements.get("wj-badge") || window.customElements.define("wj-badge", m);
export {
  m as Badge,
  b as __esModule
};
