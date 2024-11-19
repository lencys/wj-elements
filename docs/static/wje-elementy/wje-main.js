var i = Object.defineProperty;
var l = (t, e, s) => (e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (t[e] = s));
var a = (t, e, s) => (l(t, typeof e != 'symbol' ? e + '' : e, s), s);
import c from './wje-element.js';
const d = ':host{display:block;flex:1;flex-basis:auto;padding:1.5rem;box-sizing:border-box}';
class n extends c {
  /**
   * Creates an instance of Main.
   *
   * @constructor
   */
  constructor() {
    super();
    a(this, 'className', 'Main');
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
  draw(s, m, u) {
    let r = document.createDocumentFragment(),
      o = document.createElement('slot');
    return r.appendChild(o), r;
  }
}
n.define('wje-main', n);
export { n as default };
