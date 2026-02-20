var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ Wj Menu ]\n*/\n\n:host {\n    display: none;\n    background: var(--wje-menu-background);\n    position: relative;\n    border-width: var(--wje-menu-border-width);\n    border-style: var(--wje-menu-border-style);\n    border-color: var(--wje-menu-border-color);\n    z-index: var(--wje-menu-z-index, 8);\n    box-shadow: var(--wje-menu-shadow);\n    border-radius: var(--wje-menu-border-radius);\n    padding-top: var(--wje-menu-padding-top);\n    padding-bottom: var(--wje-menu-padding-bottom);\n    padding-inline: var(--wje-menu-padding-inline);\n    margin-top: var(--wje-menu-margin-top);\n    margin-bottom: var(--wje-menu-margin-bottom);\n    margin-inline: var(--wje-menu-margin-inline);\n    overflow: auto;\n    /*overscroll-behavior: none;*/\n    .native-menu {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        ::slotted(wje-button) {\n            margin: 0;\n        }\n    }\n}\n\n:host(.wje-menu-collapse) {\n    width: var(--wje-menu-collapse-width);\n}\n\n:host([collapse]) {\n    box-shadow: none;\n}\n\n:host([variant='context']) {\n    display: block !important;\n    margin-left: var(--wje-menu-submenu-offset);\n}\n\n:host([variant='megamenu']) .native-menu {\n    flex-direction: row;\n    align-items: end;\n    flex-wrap: nowrap;\n    .check-icon {\n        display: none;\n    }\n}\n\n:host([active]) {\n    display: flex !important;\n}\n";
class Menu extends WJElement {
  /**
   * Creates an instance of Menu.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "Menu");
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
   * Returns the list of attributes to observe for changes.
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ["active", "collapse"];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.setAriaState({
      role: "menu"
    });
  }
  /**
   * Draws the component for the menu.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    this.classList.remove("wje-menu-collapse");
    if (this.hasAttribute("collapse")) this.classList.add("wje-menu-collapse");
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-menu");
    let slot = document.createElement("slot");
    native.appendChild(slot);
    fragment.appendChild(native);
    return fragment;
  }
  /**
   * Refreshes the component after drawing.
   */
  afterDraw() {
    Array.from(this.children).forEach((child) => {
      if (child.tagName.includes("-")) child.refresh();
    });
  }
  /**
   * Cleans up the component before disconnecting.
   */
  beforeDisconnect() {
    this.context.innerHTML = "";
  }
}
Menu.define("wje-menu", Menu);
export {
  Menu as default
};
//# sourceMappingURL=wje-menu.js.map
