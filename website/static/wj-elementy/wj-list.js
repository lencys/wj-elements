var o = Object.defineProperty;
var a = (e, t, s) => t in e ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var n = (e, t, s) => (a(e, typeof t != "symbol" ? t + "" : t, s), s);
import l from "./wj-element.js";
import "./wj-store.js";
const d = `/*!
* direction.scss
*/:host{--wj-list-inset-padding: 1rem;--wj-list-border-radius: 8px;--wj-list-background: #fff;margin:0;padding:0;display:block;contain:content;list-style-type:none}:host(.wj-inset){background:var(--wj-list-background);transform:translateZ(0);overflow:hidden;padding:var(--wj-list-inset-padding);border-radius:var(--wj-list-border-radius)}:host(.wj-lines-none) ::slotted(wj-item){--wj-border-width: 0 !important}
`;
class c extends l {
  constructor() {
    super();
    n(this, "className", "List");
  }
  static get cssStyleSheet() {
    return d;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(s, m, w) {
    let i = document.createDocumentFragment(), r = document.createElement("slot");
    return i.appendChild(r), i;
  }
  afterDraw() {
    this.classList.toggle("wj-lines-" + this.lines, this.hasAttribute("lines")), this.classList.toggle("wj-inset", this.hasAttribute("inset"));
  }
}
customElements.get("wj-list") || window.customElements.define("wj-list", c);
export {
  c as List
};
