var s = Object.defineProperty;
var d = (n, t, e) => (t in n ? s(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (n[t] = e));
var o = (n, t, e) => (d(n, typeof t != 'symbol' ? t + '' : t, e), e);
import l from './wje-element.js';
const u =
  ':host{--wje-menu-background: var(--wje-background);--wje-menu-border-width: 1px;--wje-menu-border-style: solid;--wje-menu-border-color: var(--wje-border-color);--wje-menu-border-radius: var(--wje-border-radius-small);--wje-menu-padding-top: .5rem;--wje-menu-padding-bottom: .5rem;--wje-menu-padding-inline: 0;--wje-menu-margin-top: ;--wje-menu-margin-bottom: 0;--wje-menu-margin-inline: 0;--wje-menu-collapse-width: 65px;display:none;background:var(--wje-menu-background);position:relative;border-width:var(--wje-menu-border-width);border-style:var(--wje-menu-border-style);border-color:var(--wje-menu-border-color);z-index:var(--wje-menu-z-index, 8);border-radius:var(--wje-menu-border-radius);padding-top:var(--wje-menu-padding-top);padding-bottom:var(--wje-menu-padding-bottom);padding-inline:var(--wje-menu-padding-inline);margin-top:var(--wje-menu-margin-top);margin-bottom:var(--wje-menu-margin-bottom);margin-inline:var(--wje-menu-margin-inline);overflow:auto;overscroll-behavior:none}:host .native-menu{display:flex;flex-direction:column;width:100%}:host .native-menu ::slotted(wje-button){margin:0}:host(.wje-menu-collapse){width:var(--wje-menu-collapse-width)}:host([variant=context]){display:block!important;margin-left:var(--wje-menu-submenu-offset)}:host([variant=megamenu]) .native-menu{flex-direction:row;align-items:end;flex-wrap:nowrap}:host([variant=megamenu]) .native-menu .check-icon{display:none}:host([active]){display:flex!important}';
class i extends l {
  /**
   * Creates an instance of Menu.
   *
   * @constructor
   */
  constructor() {
    super();
    o(this, 'className', 'Menu');
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return u;
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ['active', 'collapse'];
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
  draw(e, c, w) {
    let a = document.createDocumentFragment();
    this.classList.remove('wje-menu-collapse'),
      this.hasAttribute('collapse') && this.classList.add('wje-menu-collapse');
    let r = document.createElement('div');
    r.setAttribute('part', 'native'), r.classList.add('native-menu');
    let m = document.createElement('slot');
    return r.appendChild(m), a.appendChild(r), a;
  }
  /**
   * Refreshes the component after drawing.
   */
  afterDraw() {
    Array.from(this.children).forEach((e) => {
      e.tagName.includes('-') && e.refresh();
    });
  }
  /**
   * Cleans up the component before disconnecting.
   */
  beforeDisconnect() {
    this.context.innerHTML = '';
  }
}
i.define('wje-menu', i);
export { i as default };
