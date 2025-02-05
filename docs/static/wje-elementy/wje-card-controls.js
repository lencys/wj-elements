var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Card - Controls ]\n*/\n\n:host {\n    font-family: var(--wje-card-controls-font-family);\n    text-transform: uppercase;\n    display: inline-block;\n    letter-spacing: 0.06em;\n    font-size: var(--wje-card-controls-font-size);\n    font-weight: 500;\n    margin: 0;\n    padding: 0;\n    line-height: normal;\n    /*overflow: hidden;*/\n    text-overflow: ellipsis;\n    filter: alpha(opacity=40);\n    transition: opacity 0.3s ease;\n    position: absolute;\n    right: 1rem;\n    top: 0.5rem;\n}\n";
class CardControls extends WJElement {
  /**
   * CardControls constructor method.
   * @class
   */
  constructor() {
    super();
    /**
     * Class name for the CardControls element.
     * @type {string}
     */
    __publicField(this, "className", "CardControls");
  }
  /**
   * Get CSS stylesheet for the CardControls element.
   * @static
   * @returns {object} styles - The CSS styles
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Setup attributes for the CardControls element.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draw method for the CardControls element.
   * @returns {object} fragment - The document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
WJElement.define("wje-card-controls", CardControls);
export {
  CardControls as default
};
