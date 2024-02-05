var d = Object.defineProperty;
var a = (e, t, o) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var s = (e, t, o) => (a(e, typeof t != "symbol" ? t + "" : t, o), o);
import h from "./wj-element.js";
import "./wj-store.js";
const n = `:host{--wj-aside-width: "100px";--wj-aside-top: 0;--wj-aside-border-color: var(--wj-border-color);--wj-aside-border-width: 0 1px 0 0;--wj-aside-border-style: solid;box-sizing:border-box;flex-shrink:0;overflow:auto;border-color:var(--wj-aside-border-color);border-width:var(--wj-aside-border-width);border-style:var(--wj-aside-border-style)}:host(.open){display:block!important}@media (min-width: 768px){:host([fixed]){position:fixed;width:var(--wj-aside-width);top:var(--wj-aside-top);height:calc(100% - var(--wj-aside-top))}}@media (max-width: 768px){:host{display:none}:host([variant=top-start]){position:fixed;top:0;left:0;width:80%;height:100%;z-index:9999;background-color:#fff}}
`;
class w extends h {
  constructor() {
    super();
    s(this, "className", "Aside");
  }
  static get cssStyleSheet() {
    return n;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(o, l, p) {
    let i = document.createDocumentFragment();
    this.width && this.style.setProperty("--wj-aside-width", this.width), this.top && this.hasAttribute("fixed") && this.style.setProperty("--wj-aside-top", this.top);
    let r = document.createElement("slot");
    return i.appendChild(r), i;
  }
}
customElements.get("wj-aside") || window.customElements.define("wj-aside", w);
export {
  w as Aside
};
