var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import { b as bindRouterLinks } from "./router-links-F7MJWhZi.js";
const styles = "/*\n[ WJ Router Link ]\n*/\n:host {\n  display: block;\n  background: transparent !important;\n}\n\n:host(.active) {\n  cursor: pointer;\n  font-weight: bold;\n}";
class RouterLink extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "RouterLink");
    this.unbindRouterLinks = bindRouterLinks(this, { selector: false });
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
    this.setAttribute("active-class", "active");
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
  beforeDisconnect() {
    this.unbindRouterLinks();
  }
}
WJElement.define("wj-router-link", RouterLink);
export {
  RouterLink as default
};
