var g = Object.defineProperty;
var n = (r, e, t) => e in r ? g(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var m = (r, e, t) => (n(r, typeof e != "symbol" ? e + "" : e, t), t);
import l from "./wj-element.js";
import "./wj-store.js";
const d = `img{display:block;width:var(--wj-img-width, 100%);height:var(--wj-img-height, auto);max-width:100%;object-fit:inherit;border-radius:var(--wj-img-border-radius, 0)}
`;
class h extends l {
  constructor() {
    super();
    m(this, "className", "Img");
  }
  static get cssStyleSheet() {
    return d;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, o, c) {
    let i = document.createDocumentFragment(), s = document.createElement("img");
    return s.setAttribute("src", "./demo/assets/img/image-loader.gif"), s.classList.add("lazy-loaded-image", "lazy"), s.setAttribute("alt", this.alt || ""), this.img = s, i.appendChild(s), i;
  }
  afterDraw(t, o, c) {
    let i = new IntersectionObserver((s, u) => {
      s.forEach((a) => {
        a.isIntersecting && (a.target.src = this.src, this.classList.remove("lazy"), i.unobserve(a.target));
      });
    });
    i.observe(this.img);
  }
}
customElements.get("wj-img") || window.customElements.define("wj-img", h);
export {
  h as Img
};
