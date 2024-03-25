var s = Object.defineProperty;
var i = (e, t, o) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var a = (e, t, o) => (i(e, typeof t != "symbol" ? t + "" : t, o), o);
import r from "./wje-element.js";
const p = ":host{--wje-card-padding: 0 1rem 1rem;display:block;padding:var(--wje-card-padding)}:host.no-padding .row{margin-left:0;margin-right:0}:host.no-bottom-padding{padding-bottom:0}:host.no-top-padding{padding-top:0}:host .title{margin-top:0}:host.scrollable{margin-bottom:20px}:host h3{line-height:34px;font-size:26px}";
class m extends r {
  /**
   * CardContent constructor
   * @constructor
   */
  constructor() {
    super();
    /**
     * Class name
     * @type {string}
     */
    a(this, "className", "CardContent");
  }
  /**
   * Get CSS stylesheet
   * @static
   * @returns {Object} styles - The CSS styles
   */
  static get cssStyleSheet() {
    return p;
  }
  /**
   * Setup attributes
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draw method
   * @param {Object} context - The context
   * @param {Object} store - The store
   * @param {Object} params - The parameters
   * @returns {Object} fragment - The document fragment
   */
  draw(o, l, c) {
    let n = document.createDocumentFragment(), d = document.createElement("slot");
    return n.appendChild(d), n;
  }
}
r.define("wje-card-content", m);
export {
  m as default
};
