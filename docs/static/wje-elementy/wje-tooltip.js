var c = Object.defineProperty;
var u = (r, e, t) => (e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t));
var i = (r, e, t) => (u(r, typeof e != 'symbol' ? e + '' : e, t), t);
import m, { event as l } from './wje-element.js';
const w =
  ':host{--wje-tooltip-arrow-color: var(--wje-color-contrast-11)}.native-tooltip{display:block;padding:.5rem;color:var(--wje-color-contrast-0);background-color:var(--wje-color-contrast-11);font-weight:400;font-size:.75rem!important;border-radius:var(--wje-border-radius-small);line-height:1;box-sizing:border-box;box-shadow:var(--wje-box-shadow-medium)}.arrow{position:absolute;width:10px;height:10px;background:var(--wje-tooltip-arrow-color);transform:rotate(45deg)}';
class p extends m {
  /**
   * @constructor
   * @summary Tooltip constructor
   */
  constructor() {
    super();
    /**
     * @summary Class name
     * @type {string}
     */
    i(this, 'className', 'Tooltip');
    /**
     * @summary Show tooltip
     */
    i(this, 'onShow', () => {
      Promise.resolve(this.beforeShow(this))
        .then((t) => {
          if (!t && typeof t != 'string') throw new Error('beforeShow method returned false or not string');
          (this.native.innerHTML = t), this.popup.show(), Promise.resolve(this.afterShow(this));
        })
        .catch((t) => {
          this.popup.hide();
        });
    });
    /**
     * @summary Hide tooltip
     */
    i(this, 'onHide', () => {
      this.popup.hide();
    });
  }
  set content(t) {
    this.setAttribute('content', t);
  }
  get content() {
    return this.hasAttribute('content') ? this.getAttribute('content') : '';
  }
  /**
   * @summary Get CSS stylesheet
   * @static
   * @returns {Object} styles
   */
  static get cssStyleSheet() {
    return w;
  }
  /**
   * @summary Get observed attributes
   * @static
   * @returns {Array} An array of observed attributes
   */
  static get observedAttributes() {
    return ['active'];
  }
  /**
   * @summary Setup attributes
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  /**
   * @summary Draw method
   * @param {Object} context - The context
   * @param {Object} store - The store
   * @param {Object} params - The parameters
   * @returns {Object} Document fragment
   */
  draw(t, h, b) {
    let d = document.createDocumentFragment(),
      o = document.createElement('wje-popup');
    o.setAttribute('placement', this.placement || 'top'), o.setAttribute('offset', this.offset || '0');
    let n = document.createElement('slot');
    n.setAttribute('slot', 'anchor');
    let a = document.createElement('div');
    a.classList.add('arrow'), a.setAttribute('slot', 'arrow');
    let s = document.createElement('div');
    return (
      s.setAttribute('part', 'native'),
      s.classList.add('native-tooltip'),
      (s.innerHTML = this.content),
      o.appendChild(n),
      o.appendChild(a),
      o.appendChild(s),
      (this.mySlot = n),
      (this.popup = o),
      (this.native = s),
      d.appendChild(o),
      d
    );
  }
  /**
   * @summary After draw method
   */
  afterDraw() {
    let t = this.mySlot.assignedElements()[0];
    t && (l.addListener(t, 'mouseenter', null, this.onShow), l.addListener(t, 'mouseleave', null, this.onHide));
  }
  dispatch(t) {
    return new Promise((h) => {
      l.dispatchCustomEvent(this, t, {
        resolve: h,
      });
    });
  }
  beforeShow() {
    return this.content;
  }
  afterShow() {}
}
p.define('wje-tooltip', p);
export { p as default };
