var l = Object.defineProperty;
var i = (n, t, e) => (t in n ? l(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (n[t] = e));
var o = (n, t, e) => (i(n, typeof t != 'symbol' ? t + '' : t, e), e);
import u, { event as c } from './wje-element.js';
const d = ':host{display:inline-flex}@media (min-width: 768px){:host{display:none}}';
class r extends u {
  /**
   * Creates an instance of MenuButton.
   *
   * @constructor
   */
  constructor() {
    super();
    o(this, 'className', 'MenuButton');
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
  draw(e, m, p) {
    let s = document.createDocumentFragment(),
      a = document.createElement('slot');
    return s.appendChild(a), s;
  }
  /**
   * Refreshes the component after drawing.
   * Adds a click event listener that toggles the "open" class on the content element.
   */
  afterDraw() {
    c.addListener(this, 'click', null, (e) => {
      document.querySelector(`#${this.contentId}`).classList.toggle('open');
    });
  }
}
r.define('wje-menu-button', r);
export { r as default };
