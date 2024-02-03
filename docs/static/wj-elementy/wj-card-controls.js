var a = Object.defineProperty;
var i = (e, t, o) => t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var n = (e, t, o) => (i(e, typeof t != "symbol" ? t + "" : t, o), o);
import l from "./wj-element.js";
import "./wj-store.js";
const c = `/*!
* direction.scss
*/:host{--wj-color: #212529;--wj-card-subtitle-font-size: 28px;--wj-card-subtitle-font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-family:var(--wj-card-subtitle-font-family);text-transform:uppercase;display:inline-block;letter-spacing:.06em;font-size:10.5px;font-weight:500;margin:0;padding:0;line-height:normal;overflow:hidden;text-overflow:ellipsis;filter:alpha(opacity=40);-webkit-transition:opacity .3s ease;transition:opacity .3s ease;position:absolute;right:1rem;top:.5rem}
`;
class m extends l {
  constructor() {
    super();
    n(this, "className", "CardControls");
  }
  static get cssStyleSheet() {
    return c;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(o, p, d) {
    let s = document.createDocumentFragment(), r = document.createElement("slot");
    return s.appendChild(r), s;
  }
}
customElements.get("wj-card-controls") || window.customElements.define("wj-card-controls", m);
export {
  m as CardControls
};
