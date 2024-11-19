var l = Object.defineProperty;
var o = (e, t, a) => (t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (e[t] = a));
var s = (e, t, a) => (o(e, typeof t != 'symbol' ? t + '' : t, a), a);
import i from './wje-element.js';
const d =
  ':host{--wje-card-subtitle-font-size: 11px;--wje-card-subtitle-font-family: var(--wje-font-family-secondary);--wje-card-subtitle-padding: 0;transition:opacity .3s ease;font-family:var(--wje-card-subtitle-font-family);font-size:var(--wje-card-subtitle-font-size);text-transform:uppercase;display:inline-block;letter-spacing:.06em;font-weight:500;margin:0;padding:var(--wje-card-subtitle-padding);line-height:normal;overflow:hidden;text-overflow:ellipsis;filter:alpha(opacity=40)}';
class c extends i {
  /**
   * CardSubtitle constructor.
   */
  constructor() {
    super();
    /**
     * Class name for the CardSubtitle.
     * @type {string}
     */
    s(this, 'className', 'CardTitle');
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {Object} The styles object.
   * @static
   */
  static get cssStyleSheet() {
    return d;
  }
  /**
   * Getter for the observed attributes.
   * @returns {Array} An empty array.
   * @static
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the CardSubtitle.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  /**
   * Draws the CardSubtitle.
   * @param {Object} context - The context to draw in.
   * @param {Object} store - The store to use.
   * @param {Object} params - The parameters to use.
   * @returns {DocumentFragment} The created document fragment.
   */
  draw(a, u, f) {
    let r = document.createDocumentFragment(),
      n = document.createElement('slot');
    return r.appendChild(n), r;
  }
}
i.define('wje-card-subtitle', c);
export { c as default };
