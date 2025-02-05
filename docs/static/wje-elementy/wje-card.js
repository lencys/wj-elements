var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Card ]\n*/\n\n:host {\n    width: 100%;\n}\n\n.native-card {\n    background-color: transparent;\n    margin: 0;\n    box-shadow: var(--wje-card-shadow);\n    border-color: var(--wje-border-color);\n    border-style: var(--wje-border-style);\n    border-width: var(--wje-border-width);\n    border-radius: var(--wje-card-border-radius);\n    font-family: var(--wje-font-family);\n    font-size: var(--wje-font-size);\n    line-height: var(--wje-line-height-normal);\n    position: relative;\n    width: 100%;\n    word-wrap: normal;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n}\n\n/*BG - TEXT*/\n.native-card.wje-color-primary {\n    background: var(--wje-color-primary-9);\n    color: var(--wje-color-contrast-0);\n    border-color: var(--wje-color-primary-9);\n}\n\n.native-card.wje-color-complete {\n    background: var(--wje-color-complete-9);\n    color: var(--wje-color-contrast-0);\n    border-color: var(--wje-color-complete-9);\n}\n\n.native-card.wje-color-success {\n    background: var(--wje-color-success-9);\n    color: var(--wje-color-contrast-0);\n    border-color: var(--wje-color-success-9);\n}\n\n.native-card.wje-color-warning {\n    background: var(--wje-color-warning-9);\n    color: var(--wje-color);\n    border-color: var(--wje-color-warning-9);\n}\n\n.native-card.wje-color-danger {\n    background: var(--wje-color-danger-9);\n    color: var(--wje-color-contrast-0);\n    border-color: var(--wje-color-danger-9);\n}\n\n.native-card.wje-color-info {\n    background: var(--wje-color-info-9);\n    color: var(--wje-color-contrast-0);\n    border-color: var(--wje-color-info-9);\n}\n\n.native-card.wje-color-menu {\n    background: var(--wje-color-contrast-9);\n    color: var(--wje-color-contrast-0);\n    border-color: var(--wje-color-contrast-9);\n}\n";
class Card extends WJElement {
  /**
   * Card constructor method.
   * @class
   */
  constructor() {
    super();
    /**
     * Class name for the Card element.
     * @type {string}
     */
    __publicField(this, "className", "Card");
  }
  /**
   * Get CSS stylesheet for the Card element.
   * @static
   * @returns {object} styles - The CSS styles
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Setup attributes for the Card element.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draw method for the Card element.
   * @param {object} context The context object
   * @param {object} store The store object
   * @param {object} params The parameters
   * @returns {object} fragment - The document fragment
   */
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-card");
    let slot = document.createElement("slot");
    if (params.color) native.classList.add("wje-color-" + params.color);
    native.appendChild(slot);
    fragment.appendChild(native);
    return fragment;
  }
}
WJElement.define("wje-card", Card);
export {
  Card as default
};
