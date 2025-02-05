var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { event } from "./wje-element.js";
const styles = "/*\n[ WJ Tab ]\n*/\n\n:host {\n    display: block;\n    position: relative;\n    .native-tab {\n        display: flex;\n        align-items: center;\n        white-space: nowrap;\n        font-family: var(--wje-tab-font-family);\n        font-size: var(--wje-tab-font-size);\n        letter-spacing: var(--wje-tab-letter-spacing);\n        text-transform: var(--wje-tab-text-transfrom);\n        font-weight: var(--wje-tab-font-weight);\n        text-decoration: none;\n        padding-inline: var(--wje-tab-padding-inline);\n        padding-top: var(--wje-tab-padding-top);\n        padding-bottom: var(--wje-tab-padding-bottom);\n        border-radius: var(--wje-tab-border-radius);\n        color: var(--wje-color);\n        line-height: var(--wje-tab-line-height);\n        & > svg {\n            inline-size: 1.5em;\n            pointer-events: none;\n        }\n\n        &:hover {\n            background: var(--wje-tab-color-hover);\n            &:after {\n                display: block;\n            }\n        }\n\n        &:after {\n            content: ' ';\n            display: none;\n            block-size: 0.15rem;\n            writing-mode: var(--wje-tab-writing-mode);\n            background: var(--wje-tab-color-active);\n            position: absolute;\n            bottom: var(--wje-tab-bottom);\n            left: var(--wje-tab-start);\n            right: var(--wje-tab-end);\n            top: var(--wje-tab-top);\n        }\n    }\n}\n\n:host([disabled]) a {\n    opacity: 0.5;\n    cursor: not-allowed;\n    background: inherit;\n    &:after {\n        display: none;\n    }\n}\n\n:host([active]) a:after {\n    display: block;\n}\n";
class Tab extends WJElement {
  /**
   * Creates an instance of Tab.
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     */
    __publicField(this, "className", "Tab");
    this.last = false;
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
   * Draws the component for the tab.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let slot = document.createElement("slot");
    let a = document.createElement("a");
    a.setAttribute("href", "#" + this.panel);
    a.setAttribute("part", "native");
    a.classList.add("native-tab");
    a.appendChild(slot);
    fragment.appendChild(a);
    return fragment;
  }
  /**
   * Sets up event listeners after the component is rendered.
   * // @fires wje-tab:change - Dispatched when the component is clicked, indicating a tab change.
   */
  afterDraw() {
    event.addListener(this, "click", "wje-tab:change");
  }
}
Tab.define("wje-tab", Tab);
export {
  Tab as default
};
