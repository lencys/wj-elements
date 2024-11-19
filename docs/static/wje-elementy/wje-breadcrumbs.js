var n = Object.defineProperty;
var d = (r, t, e) => (t in r ? n(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (r[t] = e));
var i = (r, t, e) => (d(r, typeof t != 'symbol' ? t + '' : t, e), e);
import f from './wje-element.js';
const p = ':host{display:flex;flex-wrap:wrap;align-items:center}';
class c extends f {
  /**
   * Breadcrumbs constructor
   * @constructor
   */
  constructor() {
    super();
    /**
     * Class name
     * @type {string}
     */
    i(this, 'className', 'Breadcrumbs');
    this.last = !1;
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
    this.isShadowRoot = 'open';
  }
  /**
   * Draw method
   * @param {Object} context - The context
   * @param {Object} store - The store
   * @param {Object} params - The parameters
   * @returns {Object} fragment - The document fragment
   */
  draw(e, l, o) {
    let s = document.createDocumentFragment(),
      u = document.createElement('slot');
    return s.appendChild(u), s;
  }
  /**
   * After draw method
   */
  afterDraw() {
    let e = +this.maxItems || 0,
      l = +this.itemsBeforeCollapse || 1,
      o = +this.itemsAfterCollapse || 1,
      s = this.getBreadcrumbs();
    if (s.length === 0) return;
    s.findLast((a) => a).setAttribute('last', !0),
      e !== void 0 &&
        s.length > e &&
        l + o <= e &&
        s.forEach((a, m) => {
          m === l && a.setAttribute('show-collapsed-indicator', !0),
            m >= l && m < s.length - o && a.setAttribute('collapsed', !0);
        });
  }
  /**
   * Get breadcrumbs
   * @returns {Array} breadcrumbs - The breadcrumbs
   */
  getBreadcrumbs() {
    return Array.from(this.querySelectorAll('wje-breadcrumb')) || [];
  }
}
c.define('wje-breadcrumbs', c);
export { c as default };
