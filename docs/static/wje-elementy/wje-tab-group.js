var u = Object.defineProperty;
var m = (a, e, t) => (e in a ? u(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (a[e] = t));
var v = (a, e, t) => (m(a, typeof e != 'symbol' ? e + '' : e, t), t);
import h from './wje-element.js';
const g =
  ':host{--wje-tab-top: 0;--wje-tab-start: 0;--wje-tab-end: 0;--wje-tab-bottom: 0}.native-tab-group{display:flex;flex-direction:column;overflow:hidden;position:relative}.native-tab-group>header{display:flex;flex-direction:column}.native-tab-group>header>nav{display:flex}.native-tab-group>section{width:100%}.native-tab-group>section>article{scroll-snap-align:start;overflow-y:auto;overscroll-behavior-y:contain}:host([variant=top]){--wje-tab-top: auto !important;--wje-tab-writing-mode: horizontal-tb}:host([variant=top]) .native-tab-group{flex-direction:column}:host([variant=top]) nav{border-bottom:1px solid var(--wje-border-color)}:host([variant=start]){--wje-tab-start: auto !important;--wje-tab-writing-mode: vertical-rl}:host([variant=start]) .native-tab-group{flex-direction:row}:host([variant=start]) nav{flex-direction:column;border-right:1px solid var(--wje-border-color)}:host([variant=end]){--wje-tab-writing-mode: vertical-rl}:host([variant=end]) .native-tab-group{flex-direction:row-reverse}:host([variant=end]) nav{flex-direction:column;border-left:1px solid var(--wje-border-color)}:host([variant=bottom]){--wje-tab-bottom: auto !important;--wje-tab-writing-mode: horizontal-tb}:host([variant=bottom]) .native-tab-group{flex-direction:column-reverse}:host([variant=bottom]) nav{border-top:1px solid var(--wje-border-color)}';
class b extends h {
  /**
   * Creates an instance of TabGroup.
   *
   * @constructor
   */
  constructor() {
    super();
    v(this, 'className', 'TabGroup');
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return g;
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
  draw(t, n, o) {
    let l = document.createDocumentFragment(),
      r = document.createElement('div');
    r.classList.add('native-tab-group');
    let i = document.createElement('header');
    i.classList.add('scroll-snap-x');
    let s = document.createElement('nav'),
      c = document.createElement('section'),
      p = document.createElement('slot'),
      d = document.createElement('slot');
    return (
      d.setAttribute('name', 'nav'),
      i.appendChild(s),
      s.appendChild(d),
      c.appendChild(p),
      r.appendChild(i),
      r.appendChild(c),
      l.appendChild(r),
      l
    );
  }
  /**
   * Sets up the event listeners after the component is drawn.
   */
  afterDraw() {
    let t = this.getActiveTab(),
      n = t ? t[0].name : this.getTabAll()[0].panel;
    this.setActiveTab(n),
      this.addEventListener('wje:tab-change', (o) => {
        if (o.detail.context.hasAttribute('disabled')) return !1;
        this.setActiveTab(o.detail.context.panel);
      });
  }
  /**
   * Removes the active attribute from all tabs and panels.
   */
  removeActiveTab() {
    this.getPanelAll().forEach((t) => {
      t.removeAttribute('active');
    }),
      this.getTabAll().forEach((t) => {
        t.removeAttribute('active');
      });
  }
  /**
   * Sets the active tab and panel.
   *
   * @param {string} tab - The name of the tab to set as active.
   */
  setActiveTab(t) {
    this.removeActiveTab(),
      this.querySelector(`[panel="${t}"]`).setAttribute('active', ''),
      this.querySelector(`[name="${t}"]`).setAttribute('active', '');
  }
  /**
   * Returns the currently active tab.
   *
   * @returns {Element|null} The active tab, or null if no tab is active.
   */
  getActiveTab() {
    let t = Array.from(this.context.querySelectorAll('[active]'));
    return t.length > 0 ? t[0] : null;
  }
  /**
   * Returns all tabs.
   *
   * @returns {Array<Element>} An array of all tabs.
   */
  getTabAll() {
    return this.context.querySelector('[name="nav"]').assignedElements();
  }
  /**
   * Returns all panels.
   *
   * @returns {Array<Element>} An array of all panels.
   */
  getPanelAll() {
    return Array.from(this.querySelectorAll('wje-tab-panel'));
  }
}
b.define('wje-tab-group', b);
export { b as default };
