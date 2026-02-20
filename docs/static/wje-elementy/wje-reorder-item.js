var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
import { WjElementUtils } from "./element-utils.js";
const styles = ":host {\n    /*--reorder-background-color: var(--wje-color-contrast-0);*/\n    --reorder-item-spacing: 0.5rem;\n}\n\n.item {\n    width: 134px;\n    height: 19px;\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    position: relative;\n    gap: var(--reorder-item-spacing);\n    padding: var(--reorder-item-spacing);\n    border-radius: var(--wje-border-radius-small);\n    background-color: var(--reorder-background-color);\n    cursor: grab;\n    transition:\n        top 0.3s ease,\n        left 0.3s ease;\n}\n\n.item-w-handle {\n    cursor: default;\n}\n\n.item-w-handle:active {\n    opacity: 0.3;\n}\n\n.item:active:not(.item-w-handle):not(.moving) {\n    background-color: var(--reorder-background-color);\n    cursor: grabbing;\n}\n\n.moving {\n    background-color: lightgrey;\n}\n\n.handle {\n    cursor: grab;\n    gap: 10px;\n}\n\n.handle:active {\n    cursor: grabbing;\n}\n\n.name {\n    width: 108px;\n    height: 19px;\n    text-align: center;\n    font-size: var(--wje-font-size);\n    font-weight: 400;\n    line-height: 19.36px;\n    gap: 10px;\n}\n\n/* .drag--down {\n  --item-transform: translateY(-5px);\n}\n\n.drag--up {\n  --item-transform: translateY(5px);\n} */\n\n.item {\n    transform: var(--item-transform);\n}\n";
class ReorderItem extends WJElement {
  /**
   * Creates an instance of ReorderItem.
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     * @type {string}
     */
    __publicField(this, "className", "ReorderItem");
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
    let wrapper = document.createElement("div");
    wrapper.classList.add("item");
    wrapper.setAttribute("part", "native-reorder-item");
    let element = document.createElement("slot");
    element.classList.add("name");
    if (WjElementUtils.hasSlot(this, "handle")) {
      const handle = document.createElement("slot");
      handle.classList.add("handle");
      handle.setAttribute("name", "handle");
      handle.setAttribute("part", "handle-part");
      wrapper.classList.add("item-w-handle");
      wrapper.appendChild(handle);
    } else {
      element.setAttribute("draggable", "true");
    }
    wrapper.appendChild(element);
    fragment.appendChild(wrapper);
    return fragment;
  }
}
ReorderItem.define("wje-reorder-item", ReorderItem);
export {
  ReorderItem as default
};
//# sourceMappingURL=wje-reorder-item.js.map
