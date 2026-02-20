var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Breadcrumbs ]\n*/\n\n:host {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n}\n";
class Breadcrumbs extends WJElement {
  /**
   * Breadcrumbs constructor method.
   * @class
   */
  constructor() {
    super();
    /**
     * Class name for the Breadcrumbs element.
     * @type {string}
     */
    __publicField(this, "className", "Breadcrumbs");
    this.last = false;
  }
  /**
   * Set variant attribute for the Breadcrumbs element.
   * @param value
   */
  set variant(value) {
    this.setAttribute("variant", value);
  }
  /**
   * Get variant attribute for the Breadcrumbs element.
   * @returns {string}
   */
  get variant() {
    return this.getAttribute("variant") || "button";
  }
  /**
   * Get items before collapse attribute.
   * @param {string} value
   */
  set maxItems(value) {
    this.setAttribute("max-items", value || 0);
  }
  /**
   * Get items before collapse attribute.
   * @returns {number}
   */
  get maxItems() {
    return +this.getAttribute("max-items");
  }
  /**
   * Get items before collapse attribute.
   * @param value
   */
  set itemsBeforeCollapse(value) {
    this.setAttribute("items-before-collapse", value || 1);
  }
  /**
   * Get items before collapse attribute.
   * @returns {number}
   */
  get itemsBeforeCollapse() {
    return +this.getAttribute("items-before-collapse") || 1;
  }
  /**
   * Get items after collapse attribute.
   * @param value
   */
  set itemsAfterCollapse(value) {
    this.setAttribute("items-after-collapse", value || 1);
  }
  /**
   * Get items after collapse attribute.
   * @returns {number}
   */
  get itemsAfterCollapse() {
    return +this.getAttribute("items-after-collapse") || 1;
  }
  /**
   * Get CSS stylesheet for the Breadcrumbs element.
   * @static
   * @returns {object} styles - The CSS styles
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Get observed attributes for the Breadcrumb element.
   * @static
   * @returns {Array<string>} - The observed attributes array for the Breadcrumb element.
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Setup attributes for the Breadcrumbs element.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.setAriaState({ role: "navigation" });
  }
  /**
   * Draw method for the Breadcrumbs element.
   * @returns {object} fragment - The document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
  /**
   * Updates the breadcrumb elements after they are drawn on the page.
   * It manages attributes on breadcrumb items and handles the logic for collapsing breadcrumbs
   * if the total exceeds the specified maximum items.
   * @returns {void} This method does not return a value.
   */
  afterDraw() {
    let breadcrumbs = this.getBreadcrumbs();
    if (breadcrumbs.length === 0) return;
    let breadcrumb = breadcrumbs.findLast((e) => e);
    breadcrumb.setAttribute("last", true);
    const shouldCollapse = this.maxItems !== void 0 && breadcrumbs.length > this.maxItems && this.itemsBeforeCollapse + this.itemsAfterCollapse <= this.maxItems;
    if (shouldCollapse) {
      breadcrumbs.forEach((b, index) => {
        if (index === this.itemsBeforeCollapse) {
          b.setAttribute("show-collapsed-indicator", true);
        }
        if (index >= this.itemsBeforeCollapse && index < breadcrumbs.length - this.itemsAfterCollapse) {
          b.setAttribute("collapsed", true);
        }
      });
    }
  }
  /**
   * Retrieves all breadcrumb elements within the current instance.
   * @returns {Array<Element>} An array of breadcrumb elements (`wje-breadcrumb`) found within the instance. Returns an empty array if no breadcrumbs are found.
   */
  getBreadcrumbs() {
    return Array.from(this.querySelectorAll("wje-breadcrumb")) || [];
  }
  /**
   * Retrieves all breadcrumb elements that have the 'collapsed' attribute.
   * @returns {Array<Element>} An array of DOM elements representing breadcrumbs with the 'collapsed' attribute.
   */
  getBreadcrumbsCollapsed() {
    return Array.from(this.querySelectorAll("wje-breadcrumb[collapsed]")) || [];
  }
}
Breadcrumbs.define("wje-breadcrumbs", Breadcrumbs);
export {
  Breadcrumbs as default
};
//# sourceMappingURL=wje-breadcrumbs.js.map
