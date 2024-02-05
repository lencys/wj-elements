var n = Object.defineProperty;
var l = (r, o, a) => o in r ? n(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[o] = a;
var e = (r, o, a) => (l(r, typeof o != "symbol" ? o + "" : o, a), a);
import d from "./wj-element.js";
import "./wj-store.js";
const i = `:host{--wj-card-margin-top: 0;--wj-card-margin-bottom: 1rem;--wj-card-margin-inline: 0;--wj-card-border-color: transparent}:host(.wj-color-primary){--wj-card-background: var(--wj-color-primary)}:host(.wj-color-complete){--wj-card-background: var(--wj-color-complete)}:host(.wj-color-success){--wj-card-background: var(--wj-color-success)}:host(.wj-color-warning){--wj-card-background: var(--wj-color-warning)}:host(.wj-color-danger){--wj-card-background: var(--wj-color-danger)}:host(.wj-color-info){--wj-card-background: var(--wj-color-info)}:host(.wj-color-menu){--wj-card-background: var(--wj-color-menu)}:host(.wj-color-primary){--wj-card-color: var(--wj-color-white)}:host(.wj-color-complete){--wj-card-color: var(--wj-color-white)}:host(.wj-color-success){--wj-card-color: var(--wj-color-white)}:host(.wj-color-warning){--wj-card-color: var(--wj-color)}:host(.wj-color-danger){--wj-card-color: var(--wj-color-white)}:host(.wj-color-info){--wj-card-color: var(--wj-color-white)}:host(.wj-color-menu){--wj-card-color: var(--wj-color-white) !important}:host{background-color:var(--wj-card-background);color:var(--wj-card-color)!important;margin-top:var(--wj-card-margin-top);margin-bottom:var(--wj-card-margin-bottom);margin-inline:var(--wj-card-margin-inline);box-shadow:var(--wj-box-shadow-large);border-color:var(--wj-border-color);border-style:var(--wj-border-style);border-width:var(--wj-border-size);border-radius:var(--wj-border-radius-medium);font-family:var(--wj-font-family);font-size:var(--wj-font-size);line-height:var(--wj-line-height);position:relative;width:100%;word-wrap:normal;display:flex;flex-direction:column;contain:content;overflow:hidden;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}:host(.wj-color){background-color:var(--wj-card-background, #fff);color:var(--wj-card-color)}
`;
class s extends d {
  constructor() {
    super();
    e(this, "className", "Card");
  }
  static get cssStyleSheet() {
    return i;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(a, j, c) {
    let t = document.createDocumentFragment(), w = document.createElement("slot");
    return c.color && this.classList.add("wj-color-" + c.color, "wj-color"), t.appendChild(w), t;
  }
}
customElements.get("wj-card") || window.customElements.define("wj-card", s);
export {
  s as Card
};
