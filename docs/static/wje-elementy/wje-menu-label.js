var o = Object.defineProperty;
var i = (t, e, a) => (e in t ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[e] = a));
var l = (t, e, a) => (i(t, typeof e != 'symbol' ? e + '' : e, a), a);
import d, { WjElementUtils as m } from './wje-element.js';
const u =
  ':host{--wje-menu-label-font-size: .75rem;--wje-menu-label-weight: 600;--wje-letter-spacing: .025rem;--wje-menu-label-color: var(--wje-color-contrast-6);--wje-padding-top: 0;--wje-padding-bottom: 0;--wje-padding-start: 1.5rem;--wje-padding-end: 1.5rem}.native-menu-label{font-size:var(--wje-menu-label-font-size);display:inline-block;font-weight:var(--wje-menu-label-weight);letter-spacing:var(--wje-letter-spacing);color:var(--wje-menu-label-color);padding:var(--wje-padding-top) var(--wje-padding-start) var(--wje-padding-bottom) var(--wje-padding-end)}';
class s extends d {
  /**
   * Creates an instance of MenuLabel.
   *
   * @constructor
   */
  constructor() {
    super();
    l(this, 'className', 'MenuLabel');
    this.hasSubmenu = m.hasSlot(this, 'submenu');
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return u;
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
  draw(a, c, p) {
    let r = document.createDocumentFragment(),
      n = document.createElement('slot');
    return n.setAttribute('part', 'native'), n.classList.add('native-menu-label'), r.appendChild(n), r;
  }
}
s.define('wje-menu-label', s);
export { s as default };
