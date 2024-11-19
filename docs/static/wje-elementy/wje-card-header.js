var n = Object.defineProperty;
var i = (t, e, r) => (e in t ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r));
var s = (t, e, r) => (i(t, typeof e != 'symbol' ? e + '' : e, r), r);
import d from './wje-element.js';
const c =
  ':host{--wje-card-header-padding: 1rem 1rem .5rem;background:transparent;border-radius:0;border-bottom:0;padding:var(--wje-card-header-padding);position:relative;display:flex;flex-direction:column}:host(.wje-separator):after{content:"";height:1px;background:#00000014;margin-top:.5rem}';
class m extends d {
  /**
   * CardHeader constructor.
   */
  constructor() {
    super();
    /**
     * Class name for the CardHeader.
     * @type {string}
     */
    s(this, 'className', 'CardHeader');
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {Object} The styles object.
   * @static
   */
  static get cssStyleSheet() {
    return c;
  }
  /**
   * Sets up the attributes for the CardHeader.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  /**
   * Draws the CardHeader.
   * @param {Object} context - The context to draw in.
   * @param {Object} store - The store to use.
   * @param {Object} params - The parameters to use.
   * @returns {DocumentFragment} The created document fragment.
   */
  draw(r, p, l) {
    let a = document.createDocumentFragment(),
      o = document.createElement('slot');
    return this.hasAttribute('separator') && this.classList.add('wje-separator'), a.appendChild(o), a;
  }
}
d.define('wje-card-header', m);
export { m as default };
