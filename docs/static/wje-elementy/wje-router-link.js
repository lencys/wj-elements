var a = Object.defineProperty;
var c = (e, t, s) => (t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s));
var n = (e, t, s) => (c(e, typeof t != 'symbol' ? t + '' : t, s), s);
import u from './wje-element.js';
import { b as l } from './router-links-FtZbFUto.js';
const d = ':host{display:block;background:transparent!important}:host(.active){cursor:pointer;font-weight:700}';
class o extends u {
  /**
   * Creates an instance of RouterLink.
   *
   * @constructor
   */
  constructor() {
    super();
    n(this, 'className', 'RouterLink');
    this.unbindRouterLinks = l(this, { selector: !1 });
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
    (this.isShadowRoot = 'open'), this.setAttribute('active-class', 'active');
  }
  /**
   * Draws the component.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(s, m, p) {
    let r = document.createDocumentFragment(),
      i = document.createElement('slot');
    return r.appendChild(i), r;
  }
  /**
   * Cleans up before the component is disconnected.
   */
  beforeDisconnect() {
    this.unbindRouterLinks();
  }
}
o.define('wje-router-link', o);
export { o as default };
