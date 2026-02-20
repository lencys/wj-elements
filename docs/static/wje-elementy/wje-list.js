var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ List ]\n*/\n\n:host {\n    margin: 0;\n    padding: 0;\n\n    display: block;\n\n    /*contain: content;*/\n    list-style-type: none;\n}\n\n:host(.wje-inset) {\n    background: var(--wje-list-background);\n    transform: translateZ(0);\n    overflow: hidden;\n    padding: var(--wje-list-inset-padding);\n    border-radius: var(--wje-list-border-radius);\n}\n\n:host(.wje-lines-none) ::slotted(wje-item) {\n    --wje-border-width: 0 !important;\n    --wje-item-border-width: 0!important;\n}\n";
class List extends WJElement {
  /**
   * Creates an instance of List.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "List");
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
   * Returns the list of attributes to observe for changes.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
  /**
   * Called after the component has been drawn.
   */
  afterDraw() {
    this.syncAria();
    this.classList.toggle("wje-lines-" + this.lines, this.hasAttribute("lines"));
    this.classList.toggle("wje-inset", this.hasAttribute("inset"));
  }
  /**
   * Sync ARIA attributes on host.
   */
  syncAria() {
    if (!this.hasAttribute("role")) {
      this.setAriaState({ role: "list" });
    }
  }
}
List.define("wje-list", List);
export {
  List as default
};
//# sourceMappingURL=wje-list.js.map
