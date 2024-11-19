var s = Object.defineProperty;
var l = (e, t, a) => (t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (e[t] = a));
var n = (e, t, a) => (l(e, typeof t != 'symbol' ? t + '' : t, a), a);
import d, { event as c } from './wje-element.js';
const b =
  ':host{--wje-font-size: 10px;--wje-tab-text-transfrom: uppercase;--wje-tab-font-weight: 500;--wje-tab-letter-spacing: .06em;--wje-tab-padding-inline: 1rem;--wje-tab-padding-top: .75rem;--wje-tab-padding-bottom: .75rem;--wje-tab-color-active: var(--wje-color-primary-11);--wje-tab-color-hover: var(--wje-color-primary-1);display:block;position:relative}:host a{display:block;align-items:center;white-space:nowrap;font-family:var(--wje-font-family-secondary);font-size:var(--wje-font-size);letter-spacing:var(--wje-tab-letter-spacing);text-transform:var(--wje-tab-text-transfrom);font-weight:var(--wje-tab-font-weight);text-decoration:none;padding-inline:var(--wje-tab-padding-inline);padding-top:var(--wje-tab-padding-top);padding-bottom:var(--wje-tab-padding-bottom);color:var(--wje-color)}:host a>svg{inline-size:1.5em;pointer-events:none}:host a:hover{background:var(--wje-tab-color-hover)}:host a:hover:after{display:block}:host a:after{content:" ";display:none;block-size:.15rem;writing-mode:var(--wje-tab-writing-mode);background:var(--wje-tab-color-active);position:absolute;bottom:var(--wje-tab-bottom);left:var(--wje-tab-start);right:var(--wje-tab-end);top:var(--wje-tab-top)}:host([disabled]) a{opacity:.5;cursor:not-allowed;background:inherit}:host([disabled]) a:after{display:none}:host([active]) a:after{display:block}';
class i extends d {
  /**
   * Creates an instance of Tab.
   *
   * @constructor
   */
  constructor() {
    super();
    /**
     * Returns the class name of the tab.
     *
     * @returns {string} The class name of the tab.
     */
    n(this, 'className', 'Tab');
    this.last = !1;
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return b;
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
  draw(a, p, w) {
    let r = document.createDocumentFragment(),
      o = document.createElement('a');
    return o.setAttribute('href', '#' + this.panel), (o.innerHTML = this.innerHTML), r.appendChild(o), r;
  }
  /**
   * Sets up the event listeners after the component is drawn.
   */
  afterDraw() {
    c.addListener(this, 'click', 'wje:tab-change');
  }
}
i.define('wje-tab', i);
export { i as default };
