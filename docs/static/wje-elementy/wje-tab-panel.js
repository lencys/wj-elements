var o = Object.defineProperty;
var c = (t, e, a) => (e in t ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[e] = a));
var n = (t, e, a) => (c(t, typeof e != 'symbol' ? e + '' : e, a), a);
import m from './wje-element.js';
const p = ':host{display:none;flex-wrap:wrap;align-items:center;padding:1rem}:host([active]){display:block}';
class r extends m {
  /**
   * Creates an instance of TabPanel.
   *
   * @constructor
   */
  constructor() {
    super();
    /**
     * Returns the class name of the tab panel.
     *
     * @returns {string} The class name of the tab panel.
     */
    n(this, 'className', 'TabPanel');
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return p;
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  /**
   * Draws the component.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(a, d, i) {
    let s = document.createDocumentFragment(),
      l = document.createElement('slot');
    return s.appendChild(l), s;
  }
}
r.define('wje-tab-panel', r);
export { r as default };
