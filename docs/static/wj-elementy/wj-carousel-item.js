var a = Object.defineProperty;
var n = (t, e, o) => e in t ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var i = (t, e, o) => (n(t, typeof e != "symbol" ? e + "" : e, o), o);
import l from "./wj-element.js";
import "./wj-store.js";
const c = `/*!
* direction.scss
*/:host{--wj-aside-width: "100px";--wj-aside-top: 0;--wj-aside-border-color: var(--wj-border-color);--wj-aside-border-width: 0 1px 0 0;--wj-aside-border-style: solid;box-sizing:border-box;flex-shrink:0;overflow:auto;border-color:var(--wj-aside-border-color);border-width:var(--wj-aside-border-width);border-style:var(--wj-aside-border-style)}:host(.open){display:block!important}@media (min-width: 768px){:host([fixed]){position:fixed;width:var(--wj-aside-width);top:var(--wj-aside-top);height:calc(100% - var(--wj-aside-top))}}@media (max-width: 768px){:host{display:none}:host([variant=top-start]){position:fixed;top:0;left:0;width:80%;height:100%;z-index:9999;background-color:#fff}}
`;
class w extends l {
  constructor() {
    super();
    i(this, "className", "CarouselItem");
  }
  static get cssStyleSheet() {
    return c;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(o, m, p) {
    let s = document.createDocumentFragment(), r = document.createElement("div");
    r.classList.add("native-carousel");
    let d = document.createElement("slot");
    return r.appendChild(d), s.appendChild(r), s;
  }
}
customElements.get("wj-carousel-item") || window.customElements.define("wj-carousel-item", w);
export {
  w as CarouselItem
};
