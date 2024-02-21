var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ WJ Carousel Item ]\n*/\n:host {\n  --aspect-ratio: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: var(--wj-carousel-size, 100%);\n  max-height: 100%;\n  aspect-ratio: var(--aspect-ratio);\n  scroll-snap-align: center;\n  scroll-snap-stop: always;\n}\n\n.native-carousel-item {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n::slotted(wj-img) {\n  width: 100% !important;\n  height: 100% !important;\n  object-fit: contain;\n  display: flex;\n}";
class CarouselItem extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "CarouselItem");
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-carousel-item");
    native.setAttribute("part", "native");
    let slot = document.createElement("slot");
    native.appendChild(slot);
    fragment.appendChild(native);
    return fragment;
  }
}
customElements.get("wj-carousel-item") || window.customElements.define("wj-carousel-item", CarouselItem);
export {
  CarouselItem
};
