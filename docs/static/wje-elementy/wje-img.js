var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Img ]\n*/\n\nimg {\n    display: block;\n    width: var(--wje-img-width, 100%);\n    height: var(--wje-img-height, auto);\n    max-width: 100%;\n    object-fit: inherit;\n    border-radius: var(--wje-img-border-radius, 0);\n}\n";
class Img extends WJElement {
  /**
   * Creates an instance of Img.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "Img");
  }
  set loader(value) {
    if (value) {
      this.setAttribute("loader", value);
    }
  }
  get loader() {
    return this.getAttribute("loader");
  }
  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the component for the image.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("img");
    native.setAttribute("part", "native");
    native.setAttribute("src", this.loader || "./assets/img/image-loader.gif");
    native.setAttribute("alt", this.alt || "");
    native.classList.add("lazy-loaded-image", "lazy");
    this.native = native;
    fragment.appendChild(native);
    return fragment;
  }
  /**
   * Called after the component has been drawn.
   */
  afterDraw() {
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = this.src;
          this.classList.remove("lazy");
          lazyImageObserver.unobserve(entry.target);
        }
      });
    });
    lazyImageObserver.observe(this.native);
  }
}
Img.define("wje-img", Img);
export {
  Img as default
};
