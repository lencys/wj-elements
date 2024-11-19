var f = Object.defineProperty;
var j = (a, e, t) => (e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (a[e] = t));
var m = (a, e, t) => (j(a, typeof e != 'symbol' ? e + '' : e, t), t);
import v from './wje-element.js';
import { L as x } from './localize-7fxVJArK.js';
import E from './wje-format-digital.js';
import z from './wje-button.js';
import A from './wje-slider.js';
import C from './wje-icon.js';
const L =
  ':host{width:100%}.native-file-upload-item{display:grid;grid-template-columns:auto 1fr 1fr;grid-template-rows:auto auto auto;gap:0 .5rem;grid-template-areas:"image name actions" "image size actions" "progress progress progress";padding:.5rem;border:1px solid var(--wje-border-color);border-radius:var(--wje-border-radius-medium)}.image{grid-area:image;align-items:center;display:flex}::slotted([slot="img"]){--wje-img-border-radius: var(--wje-border-radius-medium) !important}.name{grid-area:name;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:700}.size{grid-area:size;display:flex}.actions{grid-area:actions;display:flex;align-items:center;justify-content:flex-end}.file-progress{grid-area:progress}wje-icon{margin-right:.25rem}wje-img{margin-right:.25rem}.file-info>span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}wje-slider{flex-basis:100%;margin-top:.5rem}:is()::-webkit-slider-thumb{visibility:hidden}:is()::-moz-range-thumb{visibility:hidden}:is()::-ms-thumb{visibility:hidden}wje-img{width:50px;height:50px;display:flex;align-items:center;padding:.25rem;border:1px solid var(--wje-border-color);border-radius:var(--wje-border-radius-medium)}';
class g extends v {
  /**
   * Creates an instance of FileUploadItem.
   *
   * @constructor
   */
  constructor() {
    super();
    /**
     * Dependencies
     * @type {Object}
     */
    m(this, 'dependencies', {
      'wje-format-digital': E,
      'wje-button': z,
      'wje-slider': A,
      'wje-icon': C,
    });
    m(this, 'className', 'FileUploadItem');
    /**
     * Handles the delete action.
     */
    m(this, 'onDelete', () => {
      this.remove();
    });
    this.localizer = new x(this);
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return L;
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ['uploaded'];
  }
  /**
   * Called when an observed attribute has been added, removed, updated, or replaced.
   *
   * @param {string} name - The name of the attribute.
   * @param {string} old - The old value of the attribute.
   * @param {string} newName - The new value of the attribute.
   */
  attributeChangedCallback(t, w, b) {
    if (t === 'uploaded' && this.drawingStatus === 'AFTER') {
      this.uploadedEl.setAttribute('value', this.uploaded);
      let l = (+this.uploaded / +this.size) * 100 || 0;
      this.sliderEl.setAttribute('value', Math.round(l, 0));
    }
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  /**
   * Method to draw the component.
   * @param {Object} context - The context of the component.
   * @param {Object} store - The store of the component.
   * @param {Object} params - The parameters for the component.
   * @returns {DocumentFragment} The fragment containing the component.
   */
  draw(t, w, b) {
    let l = document.createDocumentFragment(),
      i = document.createElement('div');
    i.classList.add('native-file-upload-item');
    let h = document.createElement('slot');
    h.setAttribute('name', 'img');
    let p = document.createElement('div');
    p.classList.add('image');
    let u = document.createElement('span');
    u.classList.add('name'), (u.innerText = this.name);
    let d = document.createElement('slot');
    d.classList.add('actions'), d.setAttribute('name', 'action');
    let r = document.createElement('wje-button');
    r.setAttribute('fill', 'link'),
      r.setAttribute('size', 'small'),
      (r.innerHTML = '<wje-icon name="x" size="small"></wje-icon>');
    let o = document.createElement('span');
    o.classList.add('size');
    let n = document.createElement('wje-format-digital');
    n.setAttribute('value', this.uploaded || 0),
      (n.innerHTML = `<span slot="start">${this.localizer.translate('wj.file.upload.uploaded')}</span>`);
    let c = document.createElement('wje-format-digital');
    c.setAttribute('value', this.size || 0),
      (c.innerHTML = `<span slot="start">&nbsp;${this.localizer.translate('wj.file.upload.from')} </span>`);
    let s = document.createElement('wje-slider');
    return (
      s.classList.add('file-progress'),
      s.setAttribute('id', 'id-' + this.lastModified),
      s.setAttribute('value', this.progress || 0),
      s.setAttribute('color', 'success'),
      p.appendChild(h),
      d.appendChild(r),
      o.appendChild(n),
      o.appendChild(c),
      i.appendChild(p),
      i.appendChild(u),
      i.appendChild(o),
      i.appendChild(d),
      i.appendChild(s),
      l.appendChild(i),
      (this.button = r),
      (this.uploadedEl = n),
      (this.sliderEl = s),
      l
    );
  }
  /**
   * Called after the component has been drawn.
   */
  afterDraw() {
    this.button.addEventListener('wje-button:click', this.onDelete);
  }
}
g.define('wje-file-upload-item', g);
export { g as default };
