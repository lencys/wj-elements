var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
class Route extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Route");
  }
  static get observedAttributes() {
    return [];
  }
}
WJElement.define("wj-route", Route);
export {
  Route as default
};
