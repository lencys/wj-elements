var o = Object.defineProperty;
var l = (e, t, s) => (t in e ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s));
var r = (e, t, s) => (l(e, typeof t != 'symbol' ? t + '' : t, s), s);
import d from './wje-element.js';
const c =
  ':host{--wje-list-inset-padding: 1rem;--wje-list-border-radius: 8px;--wje-list-background: var(--wje-background);margin:0;padding:0;display:block;contain:content;list-style-type:none}:host(.wje-inset){background:var(--wje-list-background);transform:translateZ(0);overflow:hidden;padding:var(--wje-list-inset-padding);border-radius:var(--wje-list-border-radius)}:host(.wje-lines-none) ::slotted(wje-item){--wje-border-width: 0 !important}';
class n extends d {
  /**
   * Creates an instance of List.
   *
   * @constructor
   */
  constructor() {
    super();
    r(this, 'className', 'List');
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return c;
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
  draw(s, u, w) {
    let i = document.createDocumentFragment(),
      a = document.createElement('slot');
    return i.appendChild(a), i;
  }
  /**
   * Called after the component has been drawn.
   */
  afterDraw() {
    this.classList.toggle('wje-lines-' + this.lines, this.hasAttribute('lines')),
      this.classList.toggle('wje-inset', this.hasAttribute('inset'));
  }
}
n.define('wje-list', n);
export { n as default };
