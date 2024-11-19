var w = Object.defineProperty;
var l = (g, t, e) => (t in g ? w(g, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (g[t] = e));
var o = (g, t, e) => (l(g, typeof t != 'symbol' ? t + '' : t, e), e);
import u from './wje-element.js';
const j =
  ':host{display:flex;flex-wrap:wrap}:host(.wje-wrap){flex-wrap:wrap!important}:host{--wje-gutter-x: 1.5rem;--wje-gutter-y: 0;display:flex;flex-wrap:nowrap;margin-top:calc(var(--wje-gutter-y) * -1);margin-right:calc(var(--wje-gutter-x) * -.5);margin-left:calc(var(--wje-gutter-x) * -.5)}:host(.g-0),:host(.gx-0){--wje-gutter-x: 0}:host(.g-0),:host(.gy-0){--wje-gutter-y: 0}:host(.g-1),:host(.gx-1){--wje-gutter-x: .25rem}:host(.g-1),:host(.gy-1){--wje-gutter-y: .25rem}:host(.g-2),:host(.gx-2){--wje-gutter-x: .5rem}:host(.g-2),:host(.gy-2){--wje-gutter-y: .5rem}:host(.g-3),:host(.gx-3){--wje-gutter-x: 1rem}:host(.g-3),:host(.gy-3){--wje-gutter-y: 1rem}:host(.g-4),:host(.gx-4){--wje-gutter-x: 1.5rem}:host(.g-4),:host(.gy-4){--wje-gutter-y: 1.5rem}:host(.g-5),:host(.gx-5){--wje-gutter-x: 3rem}:host(.g-5),:host(.gy-5){--wje-gutter-y: 3rem}@media (min-width: 576px){:host(.g-sm-0),:host(.gx-sm-0){--wje-gutter-x: 0}:host(.g-sm-0),:host(.gy-sm-0){--wje-gutter-y: 0}:host(.g-sm-1),:host(.gx-sm-1){--wje-gutter-x: .25rem}:host(.g-sm-1),:host(.gy-sm-1){--wje-gutter-y: .25rem}:host(.g-sm-2),:host(.gx-sm-2){--wje-gutter-x: .5rem}:host(.g-sm-2),:host(.gy-sm-2){--wje-gutter-y: .5rem}:host(.g-sm-3),:host(.gx-sm-3){--wje-gutter-x: 1rem}:host(.g-sm-3),:host(.gy-sm-3){--wje-gutter-y: 1rem}:host(.g-sm-4),:host(.gx-sm-4){--wje-gutter-x: 1.5rem}:host(.g-sm-4),:host(.gy-sm-4){--wje-gutter-y: 1.5rem}:host(.g-sm-5),:host(.gx-sm-5){--wje-gutter-x: 3rem}:host(.g-sm-5),:host(.gy-sm-5){--wje-gutter-y: 3rem}}@media (min-width: 768px){:host(.g-md-0),:host(.gx-md-0){--wje-gutter-x: 0}:host(.g-md-0),:host(.gy-md-0){--wje-gutter-y: 0}:host(.g-md-1),:host(.gx-md-1){--wje-gutter-x: .25rem}:host(.g-md-1),:host(.gy-md-1){--wje-gutter-y: .25rem}:host(.g-md-2),:host(.gx-md-2){--wje-gutter-x: .5rem}:host(.g-md-2),:host(.gy-md-2){--wje-gutter-y: .5rem}:host(.g-md-3),:host(.gx-md-3){--wje-gutter-x: 1rem}:host(.g-md-3),:host(.gy-md-3){--wje-gutter-y: 1rem}:host(.g-md-4),:host(.gx-md-4){--wje-gutter-x: 1.5rem}:host(.g-md-4),:host(.gy-md-4){--wje-gutter-y: 1.5rem}:host(.g-md-5),:host(.gx-md-5){--wje-gutter-x: 3rem}:host(.g-md-5),:host(.gy-md-5){--wje-gutter-y: 3rem}}@media (min-width: 992px){:host(.g-lg-0),:host(.gx-lg-0){--wje-gutter-x: 0}:host(.g-lg-0),:host(.gy-lg-0){--wje-gutter-y: 0}:host(.g-lg-1),:host(.gx-lg-1){--wje-gutter-x: .25rem}:host(.g-lg-1),:host(.gy-lg-1){--wje-gutter-y: .25rem}:host(.g-lg-2),:host(.gx-lg-2){--wje-gutter-x: .5rem}:host(.g-lg-2),:host(.gy-lg-2){--wje-gutter-y: .5rem}:host(.g-lg-3),:host(.gx-lg-3){--wje-gutter-x: 1rem}:host(.g-lg-3),:host(.gy-lg-3){--wje-gutter-y: 1rem}:host(.g-lg-4),:host(.gx-lg-4){--wje-gutter-x: 1.5rem}:host(.g-lg-4),:host(.gy-lg-4){--wje-gutter-y: 1.5rem}:host(.g-lg-5),:host(.gx-lg-5){--wje-gutter-x: 3rem}:host(.g-lg-5),:host(.gy-lg-5){--wje-gutter-y: 3rem}}@media (min-width: 1200px){:host(.g-xl-0),:host(.gx-xl-0){--wje-gutter-x: 0}:host(.g-xl-0),:host(.gy-xl-0){--wje-gutter-y: 0}:host(.g-xl-1),:host(.gx-xl-1){--wje-gutter-x: .25rem}:host(.g-xl-1),:host(.gy-xl-1){--wje-gutter-y: .25rem}:host(.g-xl-2),:host(.gx-xl-2){--wje-gutter-x: .5rem}:host(.g-xl-2),:host(.gy-xl-2){--wje-gutter-y: .5rem}:host(.g-xl-3),:host(.gx-xl-3){--wje-gutter-x: 1rem}:host(.g-xl-3),:host(.gy-xl-3){--wje-gutter-y: 1rem}:host(.g-xl-4),:host(.gx-xl-4){--wje-gutter-x: 1.5rem}:host(.g-xl-4),:host(.gy-xl-4){--wje-gutter-y: 1.5rem}:host(.g-xl-5),:host(.gx-xl-5){--wje-gutter-x: 3rem}:host(.g-xl-5),:host(.gy-xl-5){--wje-gutter-y: 3rem}}@media (min-width: 1400px){:host(.g-xxl-0),:host(.gx-xxl-0){--wje-gutter-x: 0}:host(.g-xxl-0),:host(.gy-xxl-0){--wje-gutter-y: 0}:host(.g-xxl-1),:host(.gx-xxl-1){--wje-gutter-x: .25rem}:host(.g-xxl-1),:host(.gy-xxl-1){--wje-gutter-y: .25rem}:host(.g-xxl-2),:host(.gx-xxl-2){--wje-gutter-x: .5rem}:host(.g-xxl-2),:host(.gy-xxl-2){--wje-gutter-y: .5rem}:host(.g-xxl-3),:host(.gx-xxl-3){--wje-gutter-x: 1rem}:host(.g-xxl-3),:host(.gy-xxl-3){--wje-gutter-y: 1rem}:host(.g-xxl-4),:host(.gx-xxl-4){--wje-gutter-x: 1.5rem}:host(.g-xxl-4),:host(.gy-xxl-4){--wje-gutter-y: 1.5rem}:host(.g-xxl-5),:host(.gx-xxl-5){--wje-gutter-x: 3rem}:host(.g-xxl-5),:host(.gy-xxl-5){--wje-gutter-y: 3rem}}:host(.wje-justify-content-center){justify-content:center!important}:host(.wje-justify-content-end){justify-content:flex-end!important}:host(.wje-justify-content-between){justify-content:space-between!important}:host(.wje-justify-content-around){justify-content:space-around!important}:host(.wje-align-items-start){align-items:baseline!important}:host(.wje-align-items-center){align-items:center!important}:host(.wje-align-items-end){align-items:flex-end!important}';
class r extends u {
  /**
   * Creates an instance of Row.
   *
   * @constructor
   */
  constructor() {
    super();
    o(this, 'className', 'Row');
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return j;
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  /**
   * Executes before the component is drawn.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   */
  beforeDraw(e, h, x) {}
  /**
   * Draws the component.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(e, h, x) {
    let s = document.createDocumentFragment();
    this.hasAttribute('wrap') && this.classList.add('wje-wrap');
    let m = document.createElement('slot');
    return s.appendChild(m), s;
  }
}
r.define('wje-row', r);
export { r as default };
