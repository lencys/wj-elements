var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { b as bindRouterLinks } from "./router-links-CJnOdbas.js";
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Router Link ]\n*/\n\n:host {\n    display: block;\n    background: transparent !important;\n}\n\n:host(.active) {\n    cursor: pointer;\n    font-weight: bold;\n}\n";
class RouterLink extends WJElement {
  /**
   * Creates an instance of RouterLink.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "RouterLink");
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
    return [];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.setAttribute("active-class", "active");
  }
  /**
   * Draws the component for the router link.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
  afterDraw(context, appStore, attributes) {
    this.unbindRouterLinks = bindRouterLinks(this.parentElement, { selector: false });
  }
  /**
   * Cleans up before the component is disconnected.
   */
  beforeDisconnect() {
    var _a;
    (_a = this.unbindRouterLinks) == null ? void 0 : _a.call(this);
  }
}
RouterLink.define("wje-router-link", RouterLink);
export {
  RouterLink as default
};
//# sourceMappingURL=wje-router-link.js.map
