var u = Object.defineProperty;
var a = (t, e, r) => e in t ? u(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var s = (t, e, r) => (a(t, typeof e != "symbol" ? e + "" : e, r), r);
import c from "./wje-element.js";
class o extends c {
  /**
   * Creates an instance of Route.
   *
   * @constructor
   */
  constructor() {
    super();
    s(this, "className", "Route");
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return [];
  }
}
o.define("wje-route", o);
export {
  o as default
};
