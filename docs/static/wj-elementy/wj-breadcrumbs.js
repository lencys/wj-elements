var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ WJ Breadcrumbs ]\n*/\n:host {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}";
class Breadcrumbs extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Breadcrumbs");
    this.last = false;
  }
  static get cssStyleSheet() {
    return styles;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
  afterDraw() {
    let maxItems = +this.maxItems || 0;
    let itemsBeforeCollapse = +this.itemsBeforeCollapse || 1;
    let itemsAfterCollapse = +this.itemsAfterCollapse || 1;
    let breadcrumbs = this.getBreadcrumbs();
    let breadcrumb = breadcrumbs.findLast((e) => e);
    breadcrumb.setAttribute("last", true);
    const shouldCollapse = maxItems !== void 0 && breadcrumbs.length > maxItems && itemsBeforeCollapse + itemsAfterCollapse <= maxItems;
    if (shouldCollapse) {
      breadcrumbs.forEach((breadcrumb2, index) => {
        if (index === itemsBeforeCollapse) {
          breadcrumb2.setAttribute("show-collapsed-indicator", true);
        }
        if (index >= itemsBeforeCollapse && index < breadcrumbs.length - itemsAfterCollapse) {
          breadcrumb2.setAttribute("collapsed", true);
        }
      });
    }
  }
  getBreadcrumbs() {
    return Array.from(this.querySelectorAll("wj-breadcrumb"));
  }
}
customElements.get("wj-breadcrumbs") || window.customElements.define("wj-breadcrumbs", Breadcrumbs);
export {
  Breadcrumbs
};
