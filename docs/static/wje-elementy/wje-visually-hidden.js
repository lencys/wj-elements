var a = Object.defineProperty;
var p = (e, t, n) => t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var i = (e, t, n) => (p(e, typeof t != "symbol" ? t + "" : t, n), n);
import d from "./wje-element.js";
const l = ":host(:not(:focus-within)){position:absolute!important;width:1px!important;height:1px!important;clip:rect(0 0 0 0)!important;clip-path:inset(50%)!important;border:none!important;overflow:hidden!important;white-space:nowrap!important;padding:0!important}";
class r extends d {
  /**
   * @constructor
   * @summary VisuallyHidden constructor
   */
  constructor() {
    super();
    /**
     * @summary Class name
     * @type {string}
     */
    i(this, "className", "VisuallyHidden");
  }
  /**
   * @summary Get CSS stylesheet
   * @static
   * @returns {Object} styles
   */
  static get cssStyleSheet() {
    return l;
  }
  /**
   * @summary Get observed attributes
   * @static
   * @returns {Array} An empty array
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * @summary Setup attributes
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * @summary Draw method
   * @param {Object} context - The context
   * @param {Object} store - The store
   * @param {Object} params - The parameters
   * @returns {Object} Document fragment
   */
  draw(n, m, c) {
    let o = document.createDocumentFragment(), s = document.createElement("slot");
    return o.appendChild(s), o;
  }
}
r.define("wje-visually-hidden", r);
export {
  r as default
};
