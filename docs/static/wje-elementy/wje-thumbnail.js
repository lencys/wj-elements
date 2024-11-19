var n = Object.defineProperty;
var u = (r, e, t) => (e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t));
var i = (r, e, t) => (u(r, typeof e != 'symbol' ? e + '' : e, t), t);
import l from './wje-element.js';
const m =
  ':host{--wje-thumbnail-width: 48px;--wje-thumbnail-height: 48px;--wje-thumbnail-border-radius: var(--wje-border-radius-medium)}:host{width:var(--wje-thumbnail-width);height:var(--wje-thumbnail-height);display:block;border-radius:var(--wje-border-radius)}:host([circle]) ::slotted(img){border-radius:50%}::slotted(wje-img),::slotted(img){border-radius:var(--wje-thumbnail-border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}';
class s extends l {
  /**
   * Thumbnail constructor
   * @constructor
   */
  constructor() {
    super();
    /**
     * Class name
     * @type {string}
     */
    i(this, 'className', 'Thumbnail');
  }
  /**
   * Get CSS stylesheet
   * @static
   * @returns {Object} styles
   */
  static get cssStyleSheet() {
    return m;
  }
  /**
   * Get observed attributes
   * @static
   * @returns {Array} An empty array
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Setup attributes
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  /**
   * Before draw method
   * @param {Object} context - The context
   * @param {Object} store - The store
   * @param {Object} params - The parameters
   */
  beforeDraw(t, o, d) {}
  /**
   * Draw method
   * @param {Object} context - The context
   * @param {Object} store - The store
   * @param {Object} params - The parameters
   * @returns {Object} Document fragment
   */
  draw(t, o, d) {
    let a = document.createDocumentFragment(),
      h = document.createElement('slot');
    return a.appendChild(h), a;
  }
}
s.define('wje-thumbnail', s);
export { s as default };
