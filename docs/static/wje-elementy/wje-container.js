var a = Object.defineProperty;
var d = (t, e, n) => (e in t ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n));
var r = (t, e, n) => (d(t, typeof e != 'symbol' ? e + '' : e, n), n);
import s from './wje-element.js';
const c =
  ':host{--wje-container-indent: 0;display:flex;flex-direction:row;flex:1;flex-basis:auto;box-sizing:border-box;min-width:0}:host([vertical]){flex-direction:column}@media (min-width: 768px){:host([indent]){margin-left:var(--wje-container-indent)}}';
class l extends s {
  /**
   * Container constructor.
   */
  constructor() {
    super();
    /**
     * Class name for the Container.
     * @type {string}
     */
    r(this, 'className', 'Container');
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
   * Getter for the observed attributes.
   * @returns {Array} An empty array.
   * @static
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the Container.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  /**
   * Draws the Container.
   * @param {Object} context - The context to draw in.
   * @param {Object} store - The store to use.
   * @param {Object} params - The parameters to use.
   * @returns {DocumentFragment} The created document fragment.
   */
  draw(n, m, u) {
    let i = document.createDocumentFragment();
    this.indent && this.style.setProperty('--wje-container-indent', this.indent);
    let o = document.createElement('slot');
    return i.appendChild(o), i;
  }
}
s.define('wje-container', l);
export { l as default };
