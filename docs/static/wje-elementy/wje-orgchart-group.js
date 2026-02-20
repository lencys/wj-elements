var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
import { event } from "./event.js";
const styles = ":host {\n    text-align: center;\n    list-style-type: none;\n    position: relative;\n    padding: var(--wje-orgchart-group-height-line) 0 0 0;\n    transition: all 0.5s;\n\n    &::before,\n    &::after {\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 50%;\n        border-top: 1px solid var(--wje-border-color);\n        width: 50%;\n        height: var(--wje-orgchart-group-height-line);\n    }\n\n    &::after {\n        right: auto;\n        left: 50%;\n        border-left: 1px solid var(--wje-border-color);\n    }\n\n    wje-card::part(native) {\n        box-sizing: border-box;\n        padding: var(--wje-orgchart-group-padding);\n    }\n\n    wje-card h4 {\n        margin: 0;\n    }\n    wje-card .items {\n        display: flex;\n    }\n\n    .orgchart-group {\n        display: flex;\n        flex-direction: column;\n        wje-card {\n            margin: 0 auto;\n            width: var(--wje-orgchart-group-width);\n        }\n    }\n}\n\n:host(:only-child)::after,\n:host(:only-child)::before {\n    display: none;\n}\n\n:host(:only-child) {\n    padding-top: 0;\n}\n\n:host(:first-child)::before,\n:host(:last-child)::after {\n    border: 0 none;\n}\n\n:host(:last-child)::before {\n    border-right: 1px solid var(--wje-border-color);\n    border-radius: 0 var(--wje-orgchart-group-border-radius) 0 0;\n}\n\n:host(:first-child)::after {\n    border-radius: var(--wje-orgchart-group-border-radius) 0 0 0;\n}\n";
class OrgchartGroup extends WJElement {
  /**
   * Creates an instance of OrgchartGroup.
   * @class
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     * @type {string}
     */
    __publicField(this, "className", "OrgchartGroup");
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
   * Draws the component for the org chart group.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("orgchart-group");
    let card = document.createElement("wje-card");
    let title = document.createElement("h4");
    title.setAttribute("part", "title");
    title.innerHTML = this.getAttribute("title") || "";
    let items = document.createElement("div");
    items.setAttribute("part", "items");
    items.classList.add("items");
    let slot = document.createElement("slot");
    items.appendChild(slot);
    card.appendChild(title);
    card.appendChild(items);
    native.appendChild(card);
    fragment.appendChild(native);
    this.card = card;
    return fragment;
  }
  /**
   * After Draws the component for the org chart group.
   */
  afterDraw() {
    this.card.addEventListener("click", (e) => {
      e.stopPropagation();
      event.dispatchCustomEvent(this.card, "wje-orgchart-group:click", { target: this });
    });
  }
}
OrgchartGroup.define("wje-orgchart-group", OrgchartGroup);
export {
  OrgchartGroup as default
};
//# sourceMappingURL=wje-orgchart-group.js.map
