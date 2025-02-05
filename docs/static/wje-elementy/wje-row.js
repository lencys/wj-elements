var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ Row ]\n*/\n:host {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n:host(.wje-wrap) {\n  flex-wrap: wrap !important;\n}\n\n:host {\n  --wje-gutter-x: 1.5rem;\n  --wje-gutter-y: 0;\n  display: flex;\n  flex-wrap: nowrap;\n  margin-top: calc(var(--wje-gutter-y) * -1);\n  margin-right: calc(var(--wje-gutter-x) * -0.5);\n  margin-left: calc(var(--wje-gutter-x) * -0.5);\n}\n\n:host(.g-0),\n:host(.gx-0) {\n  --wje-gutter-x: 0;\n}\n\n:host(.g-0),\n:host(.gy-0) {\n  --wje-gutter-y: 0;\n}\n\n:host(.g-1),\n:host(.gx-1) {\n  --wje-gutter-x: 0.25rem;\n}\n\n:host(.g-1),\n:host(.gy-1) {\n  --wje-gutter-y: 0.25rem;\n}\n\n:host(.g-2),\n:host(.gx-2) {\n  --wje-gutter-x: 0.5rem;\n}\n\n:host(.g-2),\n:host(.gy-2) {\n  --wje-gutter-y: 0.5rem;\n}\n\n:host(.g-3),\n:host(.gx-3) {\n  --wje-gutter-x: 1rem;\n}\n\n:host(.g-3),\n:host(.gy-3) {\n  --wje-gutter-y: 1rem;\n}\n\n:host(.g-4),\n:host(.gx-4) {\n  --wje-gutter-x: 1.5rem;\n}\n\n:host(.g-4),\n:host(.gy-4) {\n  --wje-gutter-y: 1.5rem;\n}\n\n:host(.g-5),\n:host(.gx-5) {\n  --wje-gutter-x: 3rem;\n}\n\n:host(.g-5),\n:host(.gy-5) {\n  --wje-gutter-y: 3rem;\n}\n\n@media (min-width: 576px) {\n  :host(.g-sm-0),\n  :host(.gx-sm-0) {\n    --wje-gutter-x: 0;\n  }\n  :host(.g-sm-0),\n  :host(.gy-sm-0) {\n    --wje-gutter-y: 0;\n  }\n  :host(.g-sm-1),\n  :host(.gx-sm-1) {\n    --wje-gutter-x: 0.25rem;\n  }\n  :host(.g-sm-1),\n  :host(.gy-sm-1) {\n    --wje-gutter-y: 0.25rem;\n  }\n  :host(.g-sm-2),\n  :host(.gx-sm-2) {\n    --wje-gutter-x: 0.5rem;\n  }\n  :host(.g-sm-2),\n  :host(.gy-sm-2) {\n    --wje-gutter-y: 0.5rem;\n  }\n  :host(.g-sm-3),\n  :host(.gx-sm-3) {\n    --wje-gutter-x: 1rem;\n  }\n  :host(.g-sm-3),\n  :host(.gy-sm-3) {\n    --wje-gutter-y: 1rem;\n  }\n  :host(.g-sm-4),\n  :host(.gx-sm-4) {\n    --wje-gutter-x: 1.5rem;\n  }\n  :host(.g-sm-4),\n  :host(.gy-sm-4) {\n    --wje-gutter-y: 1.5rem;\n  }\n  :host(.g-sm-5),\n  :host(.gx-sm-5) {\n    --wje-gutter-x: 3rem;\n  }\n  :host(.g-sm-5),\n  :host(.gy-sm-5) {\n    --wje-gutter-y: 3rem;\n  }\n}\n@media (min-width: 768px) {\n  :host(.g-md-0),\n  :host(.gx-md-0) {\n    --wje-gutter-x: 0;\n  }\n  :host(.g-md-0),\n  :host(.gy-md-0) {\n    --wje-gutter-y: 0;\n  }\n  :host(.g-md-1),\n  :host(.gx-md-1) {\n    --wje-gutter-x: 0.25rem;\n  }\n  :host(.g-md-1),\n  :host(.gy-md-1) {\n    --wje-gutter-y: 0.25rem;\n  }\n  :host(.g-md-2),\n  :host(.gx-md-2) {\n    --wje-gutter-x: 0.5rem;\n  }\n  :host(.g-md-2),\n  :host(.gy-md-2) {\n    --wje-gutter-y: 0.5rem;\n  }\n  :host(.g-md-3),\n  :host(.gx-md-3) {\n    --wje-gutter-x: 1rem;\n  }\n  :host(.g-md-3),\n  :host(.gy-md-3) {\n    --wje-gutter-y: 1rem;\n  }\n  :host(.g-md-4),\n  :host(.gx-md-4) {\n    --wje-gutter-x: 1.5rem;\n  }\n  :host(.g-md-4),\n  :host(.gy-md-4) {\n    --wje-gutter-y: 1.5rem;\n  }\n  :host(.g-md-5),\n  :host(.gx-md-5) {\n    --wje-gutter-x: 3rem;\n  }\n  :host(.g-md-5),\n  :host(.gy-md-5) {\n    --wje-gutter-y: 3rem;\n  }\n}\n@media (min-width: 992px) {\n  :host(.g-lg-0),\n  :host(.gx-lg-0) {\n    --wje-gutter-x: 0;\n  }\n  :host(.g-lg-0),\n  :host(.gy-lg-0) {\n    --wje-gutter-y: 0;\n  }\n  :host(.g-lg-1),\n  :host(.gx-lg-1) {\n    --wje-gutter-x: 0.25rem;\n  }\n  :host(.g-lg-1),\n  :host(.gy-lg-1) {\n    --wje-gutter-y: 0.25rem;\n  }\n  :host(.g-lg-2),\n  :host(.gx-lg-2) {\n    --wje-gutter-x: 0.5rem;\n  }\n  :host(.g-lg-2),\n  :host(.gy-lg-2) {\n    --wje-gutter-y: 0.5rem;\n  }\n  :host(.g-lg-3),\n  :host(.gx-lg-3) {\n    --wje-gutter-x: 1rem;\n  }\n  :host(.g-lg-3),\n  :host(.gy-lg-3) {\n    --wje-gutter-y: 1rem;\n  }\n  :host(.g-lg-4),\n  :host(.gx-lg-4) {\n    --wje-gutter-x: 1.5rem;\n  }\n  :host(.g-lg-4),\n  :host(.gy-lg-4) {\n    --wje-gutter-y: 1.5rem;\n  }\n  :host(.g-lg-5),\n  :host(.gx-lg-5) {\n    --wje-gutter-x: 3rem;\n  }\n  :host(.g-lg-5),\n  :host(.gy-lg-5) {\n    --wje-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1200px) {\n  :host(.g-xl-0),\n  :host(.gx-xl-0) {\n    --wje-gutter-x: 0;\n  }\n  :host(.g-xl-0),\n  :host(.gy-xl-0) {\n    --wje-gutter-y: 0;\n  }\n  :host(.g-xl-1),\n  :host(.gx-xl-1) {\n    --wje-gutter-x: 0.25rem;\n  }\n  :host(.g-xl-1),\n  :host(.gy-xl-1) {\n    --wje-gutter-y: 0.25rem;\n  }\n  :host(.g-xl-2),\n  :host(.gx-xl-2) {\n    --wje-gutter-x: 0.5rem;\n  }\n  :host(.g-xl-2),\n  :host(.gy-xl-2) {\n    --wje-gutter-y: 0.5rem;\n  }\n  :host(.g-xl-3),\n  :host(.gx-xl-3) {\n    --wje-gutter-x: 1rem;\n  }\n  :host(.g-xl-3),\n  :host(.gy-xl-3) {\n    --wje-gutter-y: 1rem;\n  }\n  :host(.g-xl-4),\n  :host(.gx-xl-4) {\n    --wje-gutter-x: 1.5rem;\n  }\n  :host(.g-xl-4),\n  :host(.gy-xl-4) {\n    --wje-gutter-y: 1.5rem;\n  }\n  :host(.g-xl-5),\n  :host(.gx-xl-5) {\n    --wje-gutter-x: 3rem;\n  }\n  :host(.g-xl-5),\n  :host(.gy-xl-5) {\n    --wje-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1400px) {\n  :host(.g-xxl-0),\n  :host(.gx-xxl-0) {\n    --wje-gutter-x: 0;\n  }\n  :host(.g-xxl-0),\n  :host(.gy-xxl-0) {\n    --wje-gutter-y: 0;\n  }\n  :host(.g-xxl-1),\n  :host(.gx-xxl-1) {\n    --wje-gutter-x: 0.25rem;\n  }\n  :host(.g-xxl-1),\n  :host(.gy-xxl-1) {\n    --wje-gutter-y: 0.25rem;\n  }\n  :host(.g-xxl-2),\n  :host(.gx-xxl-2) {\n    --wje-gutter-x: 0.5rem;\n  }\n  :host(.g-xxl-2),\n  :host(.gy-xxl-2) {\n    --wje-gutter-y: 0.5rem;\n  }\n  :host(.g-xxl-3),\n  :host(.gx-xxl-3) {\n    --wje-gutter-x: 1rem;\n  }\n  :host(.g-xxl-3),\n  :host(.gy-xxl-3) {\n    --wje-gutter-y: 1rem;\n  }\n  :host(.g-xxl-4),\n  :host(.gx-xxl-4) {\n    --wje-gutter-x: 1.5rem;\n  }\n  :host(.g-xxl-4),\n  :host(.gy-xxl-4) {\n    --wje-gutter-y: 1.5rem;\n  }\n  :host(.g-xxl-5),\n  :host(.gx-xxl-5) {\n    --wje-gutter-x: 3rem;\n  }\n  :host(.g-xxl-5),\n  :host(.gy-xxl-5) {\n    --wje-gutter-y: 3rem;\n  }\n}\n:host(.wje-justify-content-center) {\n  justify-content: center !important;\n}\n\n:host(.wje-justify-content-end) {\n  justify-content: flex-end !important;\n}\n\n:host(.wje-justify-content-between) {\n  justify-content: space-between !important;\n}\n\n:host(.wje-justify-content-around) {\n  justify-content: space-around !important;\n}\n\n:host(.wje-align-items-start) {\n  align-items: baseline !important;\n}\n\n:host(.wje-align-items-center) {\n  align-items: center !important;\n}\n\n:host(.wje-align-items-end) {\n  align-items: flex-end !important;\n}";
class Row extends WJElement {
  /**
   * Creates an instance of Row.
   * @class
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     * @type {string}
     */
    __publicField(this, "className", "Row");
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
   * Draws the component for the row.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    if (this.hasAttribute("wrap")) this.classList.add("wje-wrap");
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
Row.define("wje-row", Row);
export {
  Row as default
};
