var d = Object.defineProperty;
var u = (r, t, e) => t in r ? d(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var n = (r, t, e) => (u(r, typeof t != "symbol" ? t + "" : t, e), e);
import p from "./wj-element.js";
import "./wj-store.js";
const m = `/*!
* direction.scss
*/:host{--slide-gap: var(--sl-spacing-medium, 1rem);--aspect-ratio: 16 / 9;--scroll-hint: 0px;--slides-per-page: 1}.native-carousel{display:grid;grid-template-columns:min-content 1fr min-content;grid-template-rows:1fr min-content;grid-template-areas:". slides ." ". pagination .";gap:var(--sl-spacing-medium);align-items:center;min-height:100%;min-width:100%;position:relative}.carousel-slides{grid-area:slides;display:grid;height:100%;width:100%;align-items:center;justify-items:center;overflow:auto;overscroll-behavior-x:contain;scrollbar-width:none;aspect-ratio:calc(var(--aspect-ratio) * var(--slides-per-page));border-radius:var(--sl-border-radius-small);--slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));grid-auto-flow:column;grid-auto-columns:var(--slide-size);grid-auto-rows:100%;column-gap:var(--slide-gap);scroll-snap-type:x mandatory;scroll-padding-inline:var(--scroll-hint);padding-inline:var(--scroll-hint);overflow-y:hidden}
`;
class h extends p {
  constructor() {
    super();
    n(this, "className", "Carousel");
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
  draw(e, g, v) {
    let o = document.createDocumentFragment(), s = document.createElement("div");
    s.classList.add("native-carousel");
    let i = document.createElement("div");
    i.classList.add("carousel-slides");
    let c = document.createElement("slot"), l = document.createElement("button");
    l.classList.add("carousel-previous"), l.innerHTML = "<";
    let a = document.createElement("button");
    return a.classList.add("carousel-next"), a.innerHTML = ">", i.appendChild(c), s.appendChild(i), s.appendChild(l), s.appendChild(a), o.appendChild(s), o;
  }
  goToSlide(e) {
    this.querySelector(".native-carousel").scrollTo({
      left: e.offsetLeft,
      behavior: "smooth"
    });
  }
  nextSlide() {
    let e = this.querySelector(".native-carousel").children[0];
    this.goToSlide(e);
  }
  previousSlide() {
    let e = this.querySelector(".native-carousel").children[1];
    this.goToSlide(e);
  }
  getCount() {
    return this.querySelector(".native-carousel").children.length;
  }
  getCurrentSlide() {
    return this.querySelector(".native-carousel").children[0];
  }
  getSlides() {
    return this.querySelector(".native-carousel").children;
  }
  canGoNext() {
    return this.querySelector(".native-carousel").scrollLeft < this.querySelector(".native-carousel").scrollWidth;
  }
  canGoPrevious() {
    return this.querySelector(".native-carousel").scrollLeft > 0;
  }
}
customElements.get("wj-carousel") || window.customElements.define("wj-carousel", h);
export {
  h as Carousel
};
