var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Card - Subtitle ]\n*/\n\n:host {\n    transition: opacity 0.3s ease;\n    font-family: var(--wje-card-subtitle-font-family);\n    font-size: var(--wje-card-subtitle-font-size);\n    text-transform: uppercase;\n    display: inline-block;\n    letter-spacing: 0.06em;\n    font-weight: 500;\n    margin: 0;\n    padding: var(--wje-card-subtitle-padding);\n    line-height: normal;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    filter: alpha(opacity=40);\n}\n";
class CardSubtitle extends WJElement {
  /**
   * CardSubtitle constructor method.
   */
  constructor() {
    super();
    /**
     * Class name for the CardSubtitle.
     * @type {string}
     */
    __publicField(this, "className", "CardTitle");
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {object} The styles object.
   * @static
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Getter for the observed attributes.
   * @returns {Array} An empty array.
   * @static
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the CardSubtitle.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the CardSubtitle element.
   * @returns {DocumentFragment} The created document fragment.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
WJElement.define("wje-card-subtitle", CardSubtitle);
export {
  CardSubtitle as default
};
