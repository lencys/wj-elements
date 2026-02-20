var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "* {\n    margin: 0;\n    padding: 0;\n}\n\n:host {\n    position: relative;\n    .native-orgchart {\n        padding-top: var(--wje-orgchart-height-line);\n        display: flex;\n        justify-content: center;\n    }\n\n    &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 50%;\n        border-left: 1px solid var(--wje-border-color);\n        width: 0;\n        height: var(--wje-orgchart-height-line);\n    }\n}\n";
class Orgchart extends WJElement {
  /**
   * Creates an instance of Orgchart.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "Orgchart");
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
    this.syncAria();
  }
  /**
   * Draws the component for the org chart.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-orgchart");
    let slot = document.createElement("slot");
    native.appendChild(slot);
    fragment.appendChild(native);
    this.native = native;
    return fragment;
  }
  /**
   * Sync ARIA attributes on host.
   */
  syncAria() {
    if (!this.hasAttribute("role")) {
      this.setAriaState({ role: "tree" });
    }
  }
}
Orgchart.define("wje-orgchart", Orgchart);
export {
  Orgchart as default
};
//# sourceMappingURL=wje-orgchart.js.map
