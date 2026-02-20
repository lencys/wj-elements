var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Toolbar Action ]\n*/\n\n:host {\n    .native-toolbar-action {\n        display: flex;\n        gap: var(--wje-toolbar-action-gap);\n    }\n}\n";
class ToolbarAction extends WJElement {
  /**
   * Creates an instance of ToolbarAction.
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     * @type {string}
     */
    __publicField(this, "className", "ToolbarAction");
  }
  /**
   * Returns the CSS stylesheet for the component.
   * @static
   * @returns {CSSStyleSheet} The CSS stylesheet
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Returns the list of observed attributes.
   * @static
   * @returns {Array} An empty array
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
   * Draws the component for the toolbar action.
   * @returns {object} Document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let maxItems = +this.maxItems || 0;
    let actions = this.getActions();
    let slot = document.createElement("slot");
    let element = document.createElement("div");
    element.setAttribute("part", "native");
    element.classList.add("native-toolbar-action");
    const shouldCollapse = maxItems !== 0 && actions.length > maxItems;
    if (shouldCollapse) {
      element = document.createElement("wje-dropdown");
    }
    element.appendChild(slot);
    fragment.appendChild(element);
    return fragment;
  }
  /**
   * Returns the actions for the toolbar action.
   * @returns {Array} An array of wje-button elements
   */
  getActions() {
    return Array.from(this.querySelectorAll("wje-button"));
  }
}
ToolbarAction.define("wje-toolbar-action", ToolbarAction);
export {
  ToolbarAction as default
};
//# sourceMappingURL=wje-toolbar-action.js.map
