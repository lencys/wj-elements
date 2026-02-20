var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ Wj Footer ]\n*/\n\n:host {\n    --wje-footer-height: 60px;\n    padding: 0 20px;\n    flex-shrink: 0;\n    height: var(--wje-footer-height);\n    display: block;\n}\n";
class Footer extends WJElement {
  /**
   * Creates an instance of Footer.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "Footer");
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
   * Returns the list of attributes to observe for changes.
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the component.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
Footer.define("wje-footer", Footer);
export {
  Footer as default
};
//# sourceMappingURL=wje-footer.js.map
