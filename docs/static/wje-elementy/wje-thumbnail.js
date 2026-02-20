var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Thumbnail ]\n*/\n\n:host {\n    width: var(--wje-thumbnail-width);\n    height: var(--wje-thumbnail-height);\n    display: block;\n    border-radius: var(--wje-border-radius);\n}\n\n:host([circle]) ::slotted(img) {\n    border-radius: 50%;\n}\n::slotted(wje-img),\n::slotted(img) {\n    border-radius: var(--wje-thumbnail-border-radius);\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    overflow: hidden;\n}\n";
class Thumbnail extends WJElement {
  /**
   * Creates an instance of Thumbnail.
   */
  constructor() {
    super();
    /**
     * The class name for the component
     */
    __publicField(this, "className", "Thumbnail");
  }
  /**
   * Returns the CSS stylesheet for the component.
   * @static
   * @returns {CSSStyleSheet} The CSS stylesheet
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Returns the list of observed attributes.
   * @static
   * @returns {Array} An empty array
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.syncAria();
  }
  /**
   * Draws the component for the thumbnail.
   * @returns {object} Document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
  /**
   * Sync ARIA attributes on host.
   */
  syncAria() {
    const ariaLabel = this.getAttribute("aria-label");
    const label = this.getAttribute("label");
    if (ariaLabel || label) {
      if (!this.hasAttribute("role")) {
        this.setAttribute("role", "img");
      }
      if (!ariaLabel && label) {
        this.setAriaState({ label });
      }
      this.removeAttribute("aria-hidden");
    } else {
      this.setAttribute("aria-hidden", "true");
    }
  }
}
Thumbnail.define("wje-thumbnail", Thumbnail);
export {
  Thumbnail as default
};
//# sourceMappingURL=wje-thumbnail.js.map
