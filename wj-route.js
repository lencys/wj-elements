var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
class Route extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Route");
  }
  static get observedAttributes() {
    return [];
  }
}
customElements.get("wj-route") || window.customElements.define("wj-route", Route);
export {
  Route
};
