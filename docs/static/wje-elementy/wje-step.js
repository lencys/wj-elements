var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "";
class Step extends WJElement {
  /**
   * Creates an instance of Step.
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     * @type {string}
     */
    __publicField(this, "className", "Step");
  }
  /**
   * Returns the CSS stylesheet for the component.
   * @returns {CSSStyleSheet} The CSS stylesheet.
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
   * Returns the list of observed attributes.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.className = "step-native";
    native.setAttribute("part", "native");
    const slot = document.createElement("slot");
    native.appendChild(slot);
    fragment.appendChild(native);
    return fragment;
  }
}
Step.define("wje-step", Step);
export {
  Step as default
};
//# sourceMappingURL=wje-step.js.map
