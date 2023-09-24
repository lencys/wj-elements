var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\nimg {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: inherit;\n  object-position: inherit;\n}";
class Img extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Img");
  }
  static get cssStyleSheet() {
    return styles;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let img = document.createElement("img");
    img.setAttribute("src", "./demo/assets/img/image-loader.gif");
    img.classList.add("lazy-loaded-image", "lazy");
    img.setAttribute("alt", this.alt || "");
    this.img = img;
    fragment.appendChild(img);
    return fragment;
  }
  afterDraw(context, store, params) {
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = this.src;
          this.classList.remove("lazy");
          lazyImageObserver.unobserve(entry.target);
        }
      });
    });
    lazyImageObserver.observe(this.img);
  }
}
customElements.get("wj-img") || window.customElements.define("wj-img", Img);
export {
  Img
};
