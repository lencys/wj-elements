var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Tab Panel ]\n*/\n\n:host {\n    display: none;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 1rem;\n}\n\n:host(.active) {\n    display: block;\n}\n";
class TabPanel extends WJElement {
  /**
   * Creates an instance of TabPanel.
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     */
    __publicField(this, "className", "TabPanel");
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
   * Draws the component for the tab panel.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
TabPanel.define("wje-tab-panel", TabPanel);
export {
  TabPanel as default
};
//# sourceMappingURL=wje-tab-panel.js.map
