var l = Object.defineProperty;
var n = (r, e, t) => (e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t));
var o = (r, e, t) => (n(r, typeof e != 'symbol' ? e + '' : e, t), t);
import c from './wje-element.js';
const v =
  ':host{--wje-border-size: 1px;--wje-divider-border-color: var(--wje-border-color);--wje-divider-border-width: var(--wje-border-size, 1px);--wje-divider-spacing: 0}:host(:not([vertical])){display:block;border-top:solid var(--wje-divider-border-width) var(--wje-divider-border-color);margin:var(--wje-divider-spacing) 0}:host([vertical]){display:inline-block;height:100%;border-left:solid var(--wje-divider-border-width) var(--wje-divider-border-color);margin:0 var(--wje-divider-spacing)}';
class s extends c {
  /**
   * Constructor for the Divider class.
   */
  constructor() {
    super();
    /**
     * The class name for the Divider class.
     * @type {string}
     */
    o(this, 'className', 'Divider');
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {string} The CSS stylesheet.
   */
  static get cssStyleSheet() {
    return v;
  }
  /**
   * Getter for the observed attributes.
   * @returns {Array} An empty array as there are no observed attributes.
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the Divider.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  /**
   * Draws the Divider.
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment} The created document fragment.
   */
  draw(t, p, w) {
    let i = document.createDocumentFragment(),
      d = document.createElement('div'),
      a = document.createElement('slot');
    return d.appendChild(a), i.appendChild(d), i;
  }
}
s.define('wje-divider', s);
export { s as default };
