var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
import { event } from "./event.js";
const styles = "/*\n[ WJ Carousel Item ]\n*/\n\n:host {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: var(--wje-carousel-size, 100%);\n    max-height: 100%;\n    aspect-ratio: var(--wje-carousel-item-aspect-ratio);\n    scroll-snap-align: center;\n    scroll-snap-stop: always;\n}\n\n.native-carousel-item {\n    width: 100%;\n    height: 100%;\n    display: flex;\n}\n::slotted(wje-img) {\n    width: 100% !important;\n    height: 100% !important;\n    object-fit: contain;\n    display: flex;\n}\n";
class CarouselItem extends WJElement {
  /**
   * CarouselItem constructor method.
   */
  constructor() {
    super();
    /**
     * Class name for the CarouselItem element.
     * @type {string}
     */
    __publicField(this, "className", "CarouselItem");
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {*}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Getter for the observed attributes.
   * @returns {*[]}
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the CarouselItem.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the CarouselItem element.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-carousel-item");
    native.setAttribute("part", "native");
    let slot = document.createElement("slot");
    native.appendChild(slot);
    fragment.appendChild(native);
    return fragment;
  }
  /**
   * After draw event for the CarouselItem element.
   */
  afterDraw() {
    event.addListener(this, "click", "wje-carousel-item:click");
  }
}
WJElement.define("wje-carousel-item", CarouselItem);
export {
  CarouselItem as default
};
//# sourceMappingURL=wje-carousel-item.js.map
