var l = Object.defineProperty;
var i = (e, t, o) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var n = (e, t, o) => (i(e, typeof t != "symbol" ? t + "" : t, o), o);
import a from "./wje-element.js";
const c = ":host{--wje-card-controls-font-size: 11px;--wje-card-controls-font-family: var(--wje-font-family-secondary);font-family:var(--wje-card-controls-font-family);text-transform:uppercase;display:inline-block;letter-spacing:.06em;font-size:var(--wje-card-controls-font-size);font-weight:500;margin:0;padding:0;line-height:normal;overflow:hidden;text-overflow:ellipsis;filter:alpha(opacity=40);transition:opacity .3s ease;position:absolute;right:1rem;top:.5rem}";
class d extends a {
  /**
   * CardControls constructor
   * @constructor
   */
  constructor() {
    super();
    /**
     * Class name
     * @type {string}
     */
    n(this, "className", "CardControls");
  }
  /**
   * Get CSS stylesheet
   * @static
   * @returns {Object} styles - The CSS styles
   */
  static get cssStyleSheet() {
    return c;
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
  draw(o, m, f) {
    let r = document.createDocumentFragment(), s = document.createElement("slot");
    return r.appendChild(s), r;
  }
}
a.define("wje-card-controls", d);
export {
  d as default
};
