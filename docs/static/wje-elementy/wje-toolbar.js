var s = Object.defineProperty;
var b = (e, t, o) => (t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[t] = o));
var d = (e, t, o) => (b(e, typeof t != 'symbol' ? t + '' : t, o), o);
import p from './wje-element.js';
import { w as c } from './router-links-FtZbFUto.js';
const m =
  ':host{--wje-toolbar-background: var(--wje-background);--wje-toolbar-height: auto;--wje-toolbar-min-height: 70px;--wje-toolbar-padding-top: 1rem;--wje-toolbar-padding-bottom: 1rem;--wje-toolbar-padding-inline: 1.5rem;--wje-toolbar-border-color: var(--wje-border-color);--wje-toolbar-top: 0;width:100%;height:var(--wje-toolbar-height)}.native-toolbar{background-color:var(--wje-toolbar-background);display:flex;align-items:center;flex-wrap:wrap;justify-content:flex-start;border-bottom:1px solid var(--wje-toolbar-border-color);padding-inline:var(--wje-toolbar-padding-inline);padding-top:var(--wje-toolbar-padding-top);padding-bottom:var(--wje-toolbar-padding-bottom);box-shadow:0 10px 30px #523f690d}::slotted{grid-column:span 4}::slotted([slot="start"]){margin-right:auto}:host([sticky]){position:sticky;top:var(--wje-toolbar-top);z-index:99}';
class l extends c(p) {
  /**
   * @constructor
   * @summary Toolbar constructor
   */
  constructor() {
    super();
    /**
     * @summary Class name
     * @type {string}
     */
    d(this, 'className', 'Toolbar');
  }
  /**
   * @summary Get CSS stylesheet
   * @static
   * @returns {Object} styles
   */
  static get cssStyleSheet() {
    return m;
  }
  /**
   * @summary Get observed attributes
   * @static
   * @returns {Array} An empty array
   */
  static get observedAttributes() {
    return [];
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
  draw(o, u, w) {
    let a = document.createDocumentFragment(),
      r = document.createElement('div');
    r.setAttribute('part', 'native'), r.classList.add('native-toolbar');
    let n = document.createElement('slot');
    n.setAttribute('name', 'start');
    let i = document.createElement('slot');
    return i.setAttribute('name', 'end'), r.appendChild(n), r.appendChild(i), a.appendChild(r), a;
  }
}
l.define('wje-toolbar', l);
export { l as default };
