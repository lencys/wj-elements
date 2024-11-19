var w = Object.defineProperty;
var u = (a, e, t) => (e in a ? w(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (a[e] = t));
var v = (a, e, t) => (u(a, typeof e != 'symbol' ? e + '' : e, t), t);
import p from './wje-element.js';
function j(a, e = 30, t = 80) {
  let o = a,
    s = 0;
  for (let i = 0; i < (o == null ? void 0 : o.length); i++) s = o.charCodeAt(i) + ((s << 5) - s);
  return 'hsl(' + (s % 360) + ', ' + e + '%, ' + t + '%)';
}
function b(a, e = 2) {
  let t = a.split(' '),
    o = t[0].substring(0, 1).toUpperCase();
  return t.length > 1 && e > 1 && (o += t[t.length - 1].substring(0, 1).toUpperCase()), o;
}
const g =
  ':host{--wje-avatar-width: 32px;--wje-avatar-height: 32px;--wje-avatar-font-size: .75rem;--wje-avatar-font-weight: 400;--wje-avatar-color: inherit;--wje-avatar-background-color: var(--wje-color-contrast-low);--wje-avatar-border-radius: 50%;--wje-avatar-border-color: transparent;--wje-avatar-border-width: 1px;--wje-avatar-border-style: solid;display:inline-block;width:var(--wje-avatar-width);height:var(--wje-avatar-height);font-size:var(--wje-avatar-font-size);font-weight:var(--wje-avatar-font-weight);color:var(--wje-avatar-color)}:host .native-avatar{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:var(--wje-avatar-border-radius);background-color:var(--wje-avatar-background-color)}::slotted([slot=status]){display:flex;position:absolute;bottom:-4px;right:-4px}::slotted(wje-img),::slotted(img){border-radius:var(--wje-avatar-border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host(.wje-avatar-border){border-color:var(--wje-avatar-border-color);border-width:var(--wje-avatar-border-width);border-style:var(--wje-avatar-border-style)}:host(.wje-avatar-small){--wje-avatar-width: 24px;--wje-avatar-height: 24px}:host(.wje-avatar-large){--wje-avatar-width: 48px;--wje-avatar-height: 48px}';
class c extends p {
  /**
   * Avatar class constructor
   */
  constructor() {
    super();
    /**
     * Class name
     */
    v(this, 'className', 'Avatar');
  }
  /**
   * Getter for cssStyleSheet
   * @returns {string} styles
   */
  static get cssStyleSheet() {
    return g;
  }
  /**
   * Method to setup attributes
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  /**
   * Method to draw the avatar
   * @param {object} context - The context
   * @param {object} store - The store
   * @param {object} params - The parameters
   * @returns {object} fragment - The document fragment
   */
  draw(t, o, s) {
    let n = document.createDocumentFragment(),
      r = document.createElement('div');
    r.setAttribute('part', 'native'),
      r.classList.add('native-avatar'),
      this.size && this.classList.add('wje-avatar-' + this.size);
    let i = document.createElement('slot');
    if ((r.appendChild(i), this.hasAttribute('initials'))) {
      let l = b(this.label);
      this.setAttribute('style', `--wje-avatar-background-color: ${j(l)}`), (r.innerText = l);
    } else {
      let l = document.createElement('slot');
      l.setAttribute('name', 'icon'), r.appendChild(l);
    }
    let d = document.createElement('slot');
    d.setAttribute('name', 'status'), d.setAttribute('part', 'status');
    let h = document.createElement('slot');
    return (
      h.setAttribute('name', 'secondary'),
      h.setAttribute('part', 'secondary'),
      r.appendChild(d),
      r.appendChild(h),
      n.appendChild(r),
      n
    );
  }
  /**
   * Method to check if the avatar is an image
   * @returns {boolean} - True if the avatar is an image, false otherwise
   */
  isImage() {
    return this.getElementsByTagName('wje-img').length > 0;
  }
}
c.define('wje-avatar', c);
export { c as default };
