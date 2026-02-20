var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = ":host {\n    width: var(--wje-orgchart-item-width);\n    box-sizing: border-box;\n\n    .orgchart-item {\n        display: flex;\n        flex-direction: column;\n\n        wje-card {\n            margin: 0 auto;\n            padding-inline: 0.25rem;\n            width: var(--wje-orgchart-item-width);\n            box-sizing: border-box;\n            &::part(native) {\n                border-radius: var(--wje-orgchart-border-radius) !important;\n                box-sizing: border-box;\n                overflow: visible;\n                padding-block: 0.125rem;\n                background: var(--wje-orgchart-item-background);\n            }\n        }\n    }\n\n    .expander {\n        position: absolute;\n        left: calc(50% + 1px / 2);\n        border: 1px solid var(--wje-border-color);\n        border-radius: 50%;\n        width: var(--wje-orgchart-item-expander-size);\n        height: var(--wje-orgchart-item-expander-size);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: var(--wje-color-contrast-0);\n        font-size: 8px;\n        line-height: 1;\n        box-sizing: border-box;\n        transform: translate(-50%, calc(var(--wje-orgchart-item-expander-size) / 2));\n        padding-bottom: 1px;\n        cursor: pointer;\n        z-index: 999;\n        bottom: 0;\n        &.collapse {\n            content: '+';\n            wje-orgchart {\n                display: none;\n            }\n        }\n        &:hover {\n            background: var(--wje-color-contrast-1);\n        }\n    }\n}\n\n:host(.collapse) {\n    .expander {\n        content: '+';\n    }\n    slot[name='child'] {\n        display: none;\n    }\n}\n/* ak nie je parent-group */\n:host(:not(.parent-group)) {\n    text-align: center;\n    list-style-type: none;\n    position: relative;\n    padding: var(--wje-orgchart-item-height-line) 0 0 0;\n    transition: all 0.5s;\n    width: auto;\n    box-sizing: border-box;\n\n    &::before,\n    &::after {\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 50%;\n        border-top: 1px solid var(--wje-border-color);\n        width: 50%;\n        height: calc(var(--wje-orgchart-item-height-line) - 1px);\n    }\n\n    &::after {\n        right: auto;\n        left: 50%;\n        border-left: 1px solid var(--wje-border-color);\n    }\n\n    wje-card::part(native) {\n        box-sizing: border-box;\n    }\n}\n\n:host([boss]) {\n    wje-card::part(native) {\n        background: var(--wje-orgchart-item-boss-background);\n        border: var(--wje-orgchart-item-boss-border);\n    }\n}\n\n:host {\n    .orgchart-item:hover {\n        wje-card::part(native) {\n            background: var(--wje-orgchart-item-hover-background);\n            border: var(--wje-orgchart-item-hover-border);\n        }\n    }\n}\n\n:host(.highlight) {\n    wje-card::part(native) {\n        background: var(--wje-orgchart-item-highlight-background);\n        border: var(--wje-orgchart-item-highlight-border);\n    }\n}\n\n:host(:only-child)::after,\n:host(:only-child)::before {\n    display: none;\n}\n\n:host(:only-child) {\n    padding-top: 0;\n}\n\n:host(:first-child)::before,\n:host(:last-child)::after {\n    border: 0 none;\n}\n\n:host(:last-child)::before {\n    border-right: 1px solid var(--wje-border-color);\n    border-radius: 0 var(--wje-orgchart-item-border-radius) 0 0;\n}\n\n:host(:first-child)::after {\n    border-radius: var(--wje-orgchart-item-border-radius) 0 0 0;\n}\n";
class OrgchartItem extends WJElement {
  /**
   * Creates an instance of OrgchartItem.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "OrgchartItem");
    /**
     * Toggles the children of the orgchart item.
     * @param e The event object.
     */
    __publicField(this, "toggleChildren", (e) => {
      this.classList.toggle("collapse");
      if (this.classList.contains("collapse")) e.target.innerHTML = "+";
      else e.target.innerHTML = "-";
    });
  }
  /**
   * Sets the boss of the orgchart item.
   * @param value
   */
  set boss(value) {
    if (value) this.setAttribute("boss", value);
  }
  /**
   * Gets the boss of the orgchart item.
   * @returns {boolean}
   */
  get boss() {
    return this.hasAttribute("boss");
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
  beforeDraw() {
    if (this.parentElement && this.parentElement.tagName === "WJE-ORGCHART-GROUP") {
      this.classList.add("parent-group");
    }
  }
  /**
   * Draws the component for the org chart item.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("orgchart-item");
    let card = document.createElement("wje-card");
    card.setAttribute("part", "card");
    let slot = document.createElement("slot");
    let child = document.createElement("slot");
    child.setAttribute("name", "child");
    let expander = document.createElement("div");
    expander.setAttribute("part", "expander");
    expander.classList.add("expander");
    expander.innerHTML = "-";
    card.appendChild(slot);
    if (this.children.length > 0 && Array.from(this.children).some((el) => el.tagName === "WJE-ORGCHART"))
      card.appendChild(expander);
    native.appendChild(card);
    native.appendChild(child);
    fragment.appendChild(native);
    this.expander = expander;
    return fragment;
  }
  /**
   * After Draws the component for the org chart item.
   */
  afterDraw() {
    this.expander.addEventListener("click", this.toggleChildren);
  }
  dispatchEvent(e) {
    return false;
  }
}
OrgchartItem.define("wje-orgchart-item", OrgchartItem);
export {
  OrgchartItem as default
};
//# sourceMappingURL=wje-orgchart-item.js.map
