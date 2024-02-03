var r = Object.defineProperty;
var u = (t, e, o) => e in t ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var s = (t, e, o) => (u(t, typeof e != "symbol" ? e + "" : e, o), o);
import m from "./wj-element.js";
import "./wj-store.js";
class n extends m {
  constructor() {
    super();
    s(this, "className", "Route");
  }
  static get observedAttributes() {
    return [];
  }
}
customElements.get("wj-route") || window.customElements.define("wj-route", n);
export {
  n as Route
};
