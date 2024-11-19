var l = Object.defineProperty;
var d = (r, e, t) => (e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t));
var o = (r, e, t) => (d(r, typeof e != 'symbol' ? e + '' : e, t), t);
import n from './wje-element.js';
const h =
  'img{display:block;width:var(--wje-img-width, 100%);height:var(--wje-img-height, auto);max-width:100%;object-fit:inherit;border-radius:var(--wje-img-border-radius, 0)}';
class m extends n {
  /**
   * Creates an instance of Img.
   *
   * @constructor
   */
  constructor() {
    super();
    o(this, 'className', 'Img');
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return h;
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
  draw(t, c, g) {
    let a = document.createDocumentFragment(),
      s = document.createElement('img');
    return (
      s.setAttribute('src', './assets/img/image-loader.gif'),
      s.classList.add('lazy-loaded-image', 'lazy'),
      s.setAttribute('alt', this.alt || ''),
      (this.img = s),
      a.appendChild(s),
      a
    );
  }
  /**
   * Called after the component has been drawn.
   */
  afterDraw(t, c, g) {
    let a = new IntersectionObserver((s, u) => {
      s.forEach((i) => {
        i.isIntersecting && ((i.target.src = this.src), this.classList.remove('lazy'), a.unobserve(i.target));
      });
    });
    a.observe(this.img);
  }
}
m.define('wje-img', m);
export { m as default };
