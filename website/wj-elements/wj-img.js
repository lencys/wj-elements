var c = Object.defineProperty;
var l = (i, e, t) => e in i ? c(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var o = (i, e, t) => (l(i, typeof e != "symbol" ? e + "" : e, t), t);
import g from "./wj-element.js";
import "./wj-store.js";
const d = `/*!
* direction.scss
*/img{display:block;width:100%;height:100%;object-fit:inherit;object-position:inherit}
`;
class h extends g {
  constructor() {
    super();
    o(this, "className", "Img");
  }
  static get cssStyleSheet() {
    return d;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, m, n) {
    let r = document.createDocumentFragment(), s = document.createElement("img");
    return s.setAttribute("src", "./demo/assets/img/image-loader.gif"), s.classList.add("lazy-loaded-image", "lazy"), s.setAttribute("alt", this.alt || ""), this.img = s, r.appendChild(s), r;
  }
  afterDraw(t, m, n) {
    let r = new IntersectionObserver((s, u) => {
      s.forEach((a) => {
        a.isIntersecting && (a.target.src = this.src, this.classList.remove("lazy"), r.unobserve(a.target));
      });
    });
    r.observe(this.img);
  }
}
customElements.get("wj-img") || window.customElements.define("wj-img", h);
export {
  h as Img
};
