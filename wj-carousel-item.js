var n = Object.defineProperty;
var l = (e, t, s) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var r = (e, t, s) => (l(e, typeof t != "symbol" ? t + "" : t, s), s);
import c from "./wj-element.js";
import "./wj-store.js";
const m = `:host{--aspect-ratio: inherit;display:flex;align-items:center;justify-content:center;flex-direction:column;width:var(--wj-carousel-size, 100%);max-height:100%;aspect-ratio:var(--aspect-ratio);scroll-snap-align:center;scroll-snap-stop:always}.native-carousel-item{width:100%;height:100%;display:flex}::slotted(wj-img){width:100%!important;height:100%!important;object-fit:contain;display:flex}
`;
class d extends c {
  constructor() {
    super();
    r(this, "className", "CarouselItem");
  }
  static get cssStyleSheet() {
    return m;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(s, u, p) {
    let i = document.createDocumentFragment(), a = document.createElement("div");
    a.classList.add("native-carousel-item"), a.setAttribute("part", "native");
    let o = document.createElement("slot");
    return a.appendChild(o), i.appendChild(a), i;
  }
}
customElements.get("wj-carousel-item") || window.customElements.define("wj-carousel-item", d);
export {
  d as CarouselItem
};
