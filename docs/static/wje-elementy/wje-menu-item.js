var x = Object.defineProperty;
var A = (o, a, e) => (a in o ? x(o, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (o[a] = e));
var c = (o, a, e) => (A(o, typeof a != 'symbol' ? a + '' : a, e), e);
import k, { WjElementUtils as L, event as l } from './wje-element.js';
import { b as E } from './router-links-FtZbFUto.js';
const S =
  ':host{--wje-menu-item-color: var(--wje-color);--wje-menu-item-background: transparent;--wje-menu-item-color-hover: var(--wje-color-contrast-8);--wje-menu-item-background-hover: var(--wje-border-color);--wje-menu-item-color-focus: var(--wje-color-contrast-8);--wje-menu-item-background-focus: var(--wje-border-color);--wje-menu-item-color-active: var(--wje-color-contrast-8);--wje-menu-item-background-active: var(--wje-border-color);--wje-menu-item-padding-top: .5rem;--wje-menu-item-padding-bottom: .5rem;--wje-menu-item-line-height: 1.8rem;--wje-menu-item-safe-triangle-cursor-x: 0;--wje-menu-item-safe-triangle-cursor-y: 0;--wje-menu-item-safe-triangle-submenu-start-x: 0;--wje-menu-item-safe-triangle-submenu-start-y: 0;--wje-menu-item-safe-triangle-submenu-end-x: 0;--wje-menu-item-safe-triangle-submenu-end-y: 0;--wje-menu-submenu-offset: 0;--wje-menu-item-icon-visibility: hidden;display:block}:host .native-menu-item{background:var(--wje-menu-item-background);position:relative;display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;color:var(--wje-menu-item-color);padding-top:var(--wje-menu-item-padding-top);padding-bottom:var(--wje-menu-item-padding-bottom);transition:var(--wje-transition-fast) fill;-webkit-user-select:none;user-select:none;white-space:nowrap;cursor:pointer;width:100%}:host .native-menu-item:hover{color:var(--wje-menu-item-color-hover);background:var(--wje-menu-item-background-hover)}:host .native-menu-item:focus{color:var(--wje-menu-item-color-focus);background:var(--wje-menu-item-background-focus)}:host .native-menu-item:active{color:var(--wje-menu-item-color-active);background:var(--wje-menu-item-background-active)}:host .native-menu-item .label{flex:1 1 auto;display:inline-block;text-overflow:ellipsis;overflow:hidden;line-height:normal}:host .native-menu-item .check-icon{flex:0 0 auto;display:var(--wje-menu-item-check-icon-display, flex);align-items:center;justify-content:center;width:var(--wje-menu-check-icon-width, 1.5rem);visibility:hidden}:host .native-menu-item .check-icon.checked{visibility:visible}:host .native-menu-item.expanded-submenu{color:var(--wje-menu-item-color-active);background:var(--wje-menu-item-background-active)}:host .native-menu-item.expanded-submenu:hover{color:var(--wje-menu-item-color-hover);background:var(--wje-menu-item-background-hover)}:host .native-menu-item.expanded-submenu:after{content:"";position:fixed;z-index:1;top:0;right:0;bottom:0;left:0;//background: yellow;clip-path:polygon(var(--wje-menu-item-safe-triangle-cursor-x) var(--wje-menu-item-safe-triangle-cursor-y),var(--wje-menu-item-safe-triangle-submenu-start-x) var(--wje-menu-item-safe-triangle-submenu-start-y),var(--wje-menu-item-safe-triangle-submenu-end-x) var(--wje-menu-item-safe-triangle-submenu-end-y))}:host(.collapse) ::slotted([slot="start"]){margin:0;width:auto;display:contents}:host(.collapse) ::slotted([slot="end"]){display:none}:host(.collapse) .label,:host(.collapse) .check-icon,:host(.collapse) .submenu-icon{display:none}.submenu-icon{--wje-icon-size: 14px !important;flex:0 0 auto;display:flex;align-items:center;justify-content:center;width:1.5rem;visibility:var(--wje-menu-item-icon-visibility)}.has-submenu .submenu-icon{--wje-menu-item-icon-visibility: visible}.submenu-icon.collapse{flex:none;right:10px;position:relative}:host(:focus-visible){outline:none}::slotted([slot="start"]){flex:0 0 auto;display:flex;align-items:center;margin-inline-end:.5rem}::slotted([slot="end"]){flex:0 0 auto;display:flex;align-items:center;margin-inline-start:.5rem}:host(.wje-menu-variant-nav) ::slotted([slot="submenu"]){--wje-menu-border-width: 0 !important;--wje-menu-margin-inline: 2rem 0 !important}:host ::slotted([slot="start"]){width:1.5rem}:host(.wje-menu-variant-context){display:block}:host(.active){color:var(--wje-menu-item-color-active);background:var(--wje-menu-item-background-active)}:host(.open){color:var(--wje-menu-item-color-active);background:var(--wje-menu-item-background-active)}';
class g extends k {
  /**
   * Constructor for MenuItem class.
   * @constructor
   */
  constructor() {
    super();
    c(this, 'className', 'MenuItem');
    /**
     * Dispatches a mousemove event.
     */
    c(this, 'dispatchMove', (e) => {
      this.style.setProperty('--wje-menu-item-safe-triangle-cursor-x', `${e.clientX}px`),
        this.style.setProperty('--wje-menu-item-safe-triangle-cursor-y', `${e.clientY}px`);
    });
    /**
     * Dispatches a reposition event.
     */
    c(this, 'dispatchReposition', (e) => {
      if (this.submenu.assignedNodes().length === 0) return;
      let i = this.submenu.assignedNodes()[0];
      const { left: m, top: s, width: t, height: r } = i.getBoundingClientRect();
      this.style.setProperty('--wje-menu-item-safe-triangle-submenu-start-x', `${m}px`),
        this.style.setProperty('--wje-menu-item-safe-triangle-submenu-start-y', `${s}px`),
        this.style.setProperty('--wje-menu-item-safe-triangle-submenu-end-x', `${m}px`),
        this.style.setProperty('--wje-menu-item-safe-triangle-submenu-end-y', `${s + r}px`);
    });
    E(this, { selector: !1 }), (this.hasSubmenu = L.hasSlot(this, 'submenu')), (this._collapsible = !1);
  }
  /**
   * Getter for placement attribute.
   * @returns {string} The placement attribute of the menu or "right-start" if it doesn't exist.
   */
  get placement() {
    let e = this.querySelector('wje-menu');
    return e != null && e.hasAttribute('placement') ? e.getAttribute('placement') : 'right-start';
  }
  /**
   * Getter for offset attribute.
   * @returns {string} The offset attribute of the menu or "0" if it doesn't exist.
   */
  get offset() {
    let e = this.querySelector('wje-menu');
    return e != null && e.hasAttribute('offset') ? e.getAttribute('offset') : '0';
  }
  /**
   * Getter for variant attribute.
   * @returns {string} The variant attribute of the menu or "CONTEXT" if it doesn't exist.
   */
  get variant() {
    let e = this.querySelector('wje-menu');
    return e != null && e.hasAttribute('variant') && !this.collapse
      ? e.getAttribute('variant').toUpperCase()
      : 'CONTEXT';
  }
  /**
   * Getter for collapse attribute.
   * @returns {boolean} True if the closest parent has the collapse attribute, false otherwise.
   */
  get collapse() {
    return !!this.closest('[collapse]');
  }
  /**
   * Getter for cssStyleSheet.
   * @returns {string} The styles imported from styles.css.
   */
  static get cssStyleSheet() {
    return S;
  }
  /**
   * Getter for observedAttributes.
   * @returns {Array} An empty array as no attributes are being observed.
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the MenuItem element.
   */
  setupAttributes() {
    super.setupAttributes(), (this.isShadowRoot = 'open'), this.setAttribute('active-class', 'open');
  }
  /**
   * Removes the active attribute from the menu before drawing the MenuItem.
   */
  beforeDraw(e, i, m) {
    var s;
    (s = this.querySelector('wje-menu')) == null || s.removeAttribute('active');
  }
  /**
   * Draws the MenuItem element.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment} The fragment to be appended to the MenuItem.
   */
  draw(e, i, m) {
    var w, f, j;
    let s = document.createDocumentFragment();
    this.setAttribute('tabindex', '0'),
      this.classList.forEach((n) => {
        n.startsWith('wje-menu-variant-') && this.classList.remove(n);
      }),
      this.classList.remove('collapse'),
      this.classList.add('wje-menu-variant-' + this.variant.toLowerCase()),
      this.collapse
        ? (f = this.parentElement) != null && f.hasAttribute('collapse') && this.classList.add('collapse')
        : (w = this.querySelector('wje-menu')) == null || w.setAttribute('variant', this.variant.toLowerCase());
    let t = document.createElement('div');
    t.setAttribute('part', 'native'), t.setAttribute('id', 'anchor'), t.classList.add('native-menu-item');
    let r = document.createElement('span');
    r.classList.add('check-icon'),
      (r.innerHTML = '<wje-icon name="check"></wje-icon>'),
      this.hasAttribute('checked') ? r.classList.add('checked') : r.classList.remove('checked');
    let d = document.createElement('slot');
    d.name = 'start';
    let p = document.createElement('slot');
    p.classList.add('label');
    let b = document.createElement('slot');
    b.name = 'end';
    let u = document.createElement('slot');
    u.setAttribute('part', 'submenu'), (u.name = 'submenu');
    let y = this.collapse ? 'collapse' : 'expand',
      h = document.createElement('span');
    h.classList.add('submenu-icon', y),
      (h.innerHTML = this.collapse
        ? '<wje-icon name="chevron-down"></wje-icon>'
        : '<wje-icon name="chevron-right"></wje-icon>'),
      this.hasSubmenu ? t.classList.add('has-submenu') : t.classList.remove('has-submenu'),
      t.appendChild(r),
      t.appendChild(d),
      t.appendChild(p),
      t.appendChild(b),
      t.appendChild(h);
    let v = !1;
    if (
      /*(this.collapse && this.variant === "NAV" && this.hasSubmenu) || */
      this.variant === 'CONTEXT' &&
      this.hasSubmenu
    ) {
      t.setAttribute('slot', 'anchor');
      let n = document.createElement('wje-popup');
      n.setAttribute('anchor', 'anchor'),
        n.setAttribute('placement', this.placement),
        n.setAttribute('offset', this.offset),
        n.appendChild(t),
        n.appendChild(u),
        (this.popup = n),
        s.appendChild(n),
        (v = !0);
    }
    return (
      (j = this.parentElement) != null && j.hasAttribute('collapse') && !this.hasSubmenu
        ? s.appendChild(this.collapseItem(t))
        : v || s.appendChild(t),
      ((!this.collapse && this.variant === 'NAV') || (this.variant === 'MEGAMENU' && this.hasSubmenu)) &&
        s.appendChild(u),
      (this.native = t),
      (this.submenu = u),
      s
    );
  }
  /**
   * Adds event listeners after drawing the MenuItem.
   */
  afterDraw() {
    this.addEventListener('mousemove', this.dispatchMove),
      this.addEventListener('wje-popup:reposition', this.dispatchReposition),
      l.addListener(this, 'mouseover', null, (e) => {
        if (this.collapse || (this.variant === 'CONTEXT' && this.hasSubmenu)) {
          if (this.hasAttribute('manual') || (this.variant === 'NAV' && this.collapse)) return;
          this.submenuActivated(e), e.stopPropagation(), this.showSubmenu(), this.focus();
        }
      }),
      l.addListener(this, 'focusout', null, (e) => {
        if (this.collapse || (this.variant === 'CONTEXT' && this.hasSubmenu)) {
          if ((e.relatedTarget && this.contains(e.relatedTarget)) || (this.variant === 'NAV' && !this.collapse)) return;
          this.submenuActivated(e), this.hideSubmenu();
        }
      }),
      l.addListener(this, 'click', null, (e) => {
        !this.collapse && this.variant === 'NAV' && this.hasSubmenu
          ? (this.submenuActivated(e), this.hideSubmenu(), e.stopPropagation())
          : (l.dispatchCustomEvent(this, 'wje-menu-item:click'),
            l.dispatchCustomEvent(this, this.dialog, {
              bubbles: !0,
            }));
      });
  }
  /**
   * Creates a tooltip for the MenuItem when it is collapsed.
   * @param {HTMLElement} native - The native MenuItem element.
   * @returns {HTMLElement} The tooltip element.
   */
  collapseItem(e) {
    let i = document.createElement('wje-tooltip');
    return (
      i.setAttribute('content', this.textContent),
      i.setAttribute('placement', 'right'),
      i.setAttribute('offset', this.offset || '0'),
      i.appendChild(e),
      i
    );
  }
  /**
   * Shows the submenu of the MenuItem.
   */
  showSubmenu() {
    (this.tabIndex = -1),
      this.hasSubmenu &&
        (this.popup.setAttribute('active', ''),
        this.classList.add('expanded-submenu'),
        this.native.classList.add('expanded-submenu'));
  }
  /**
   * Hides the submenu of the MenuItem.
   */
  hideSubmenu() {
    (this.tabIndex = 0),
      this.hasSubmenu &&
        (this.popup.removeAttribute('active'),
        this.classList.remove('expanded-submenu'),
        this.native.classList.remove('expanded-submenu'));
  }
  /**
   * Activates or deactivates the submenu of the MenuItem.
   */
  submenuActivated(e) {
    if (this.hasSubmenu) {
      let i = this.submenu.assignedElements({ flatten: !0 })[0];
      i.hasAttribute('active') ? this === e.target && i.removeAttribute('active') : i.setAttribute('active', '');
    }
  }
  /**
   * Clears the innerHTML of the context before disconnecting the MenuItem.
   */
  beforeDisconnect() {
    this.context.innerHTML = '';
  }
}
g.define('wje-menu-item', g);
export { g as default };
