var c = Object.defineProperty;
var i = (t, e, o) => (e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (t[e] = o));
var s = (t, e, o) => (i(t, typeof e != 'symbol' ? e + '' : e, o), o);
import l from './wje-element.js';
const d = ':host{--wje-footer-height: 60px;padding:0 20px;flex-shrink:0;height:var(--wje-footer-height);display:block}';
class n extends l {
  /**
   * Creates an instance of Footer.
   *
   * @constructor
   */
  constructor() {
    super();
    s(this, 'className', 'Footer');
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return d;
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return [];
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
  draw(o, h, m) {
    let r = document.createDocumentFragment(),
      a = document.createElement('slot');
    return r.appendChild(a), r;
  }
}
n.define('wje-footer', n);
export { n as default };
