var o = Object.defineProperty;
var c = (e, t, a) => t in e ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var r = (e, t, a) => (c(e, typeof t != "symbol" ? t + "" : t, a), a);
import n, { event as d } from "./wje-element.js";
const m = ":host{--aspect-ratio: inherit;display:flex;align-items:center;justify-content:center;flex-direction:column;width:var(--wje-carousel-size, 100%);max-height:100%;aspect-ratio:var(--aspect-ratio);scroll-snap-align:center;scroll-snap-stop:always}.native-carousel-item{width:100%;height:100%;display:flex}::slotted(wje-img){width:100%!important;height:100%!important;object-fit:contain;display:flex}";
class u extends n {
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
  draw(a, p, h) {
    let i = document.createDocumentFragment(), s = document.createElement("div");
    s.classList.add("native-carousel-item"), s.setAttribute("part", "native");
    let l = document.createElement("slot");
    return s.appendChild(l), i.appendChild(s), i;
  }
  afterDraw() {
    d.addListener(this, "click", "wje-carousel-item:click");
  }
}
n.define("wje-carousel-item", u);
export {
  u as default
};
