var i = Object.defineProperty;
var n = (r, e, t) => (e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t));
var o = (r, e, t) => (n(r, typeof e != 'symbol' ? e + '' : e, t), t);
import l from './wje-element.js';
const c =
  ':host{--wje-header-background: var(--wje-background);--wje-header-border-color: var(--wje-border-color);--wje-header-border-width: 0 0 1px 0;--wje-header-border-style: solid;--wje-header-top: 0;--wje-header-height: 60px;display:block;height:var(--wje-header-height);width:100%;background:var(--wje-header-background);border-width:var(--wje-header-border-width);border-style:var(--wje-header-border-style);border-color:var(--wje-header-border-color)}:host .native-header{display:flex;padding-inline:1rem}:host([sticky]){position:sticky;top:var(--wje-header-top);z-index:999}';
class s extends l {
  /**
   * Creates an instance of Header.
   *
   * @constructor
   */
  constructor() {
    super();
    o(this, 'className', 'Header');
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
  draw(t, w, p) {
    let d = document.createDocumentFragment(),
      a = document.createElement('header');
    a.classList.add('native-header'), a.setAttribute('part', 'native');
    let h = document.createElement('slot');
    return a.appendChild(h), d.appendChild(a), d;
  }
}
s.define('wje-header', s);
export { s as default };
