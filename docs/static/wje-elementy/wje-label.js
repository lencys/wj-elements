var i = Object.defineProperty;
var w = (e, o, t) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var l = (e, o, t) => (w(e, typeof o != "symbol" ? o + "" : o, t), t);
import m from "./wje-element.js";
const h = ":host(.wje-color-primary){--wje-color: var(--wje-color-primary) !important}:host(.wje-color-complete){--wje-color: var(--wje-color-complete) !important}:host(.wje-color-success){--wje-color-base: var(--wje-color-success) !important;--wje-color-contrast: var(--wje-color-contrast-0) !important}:host(.wje-color-warning){--wje-color-base: var(--wje-color-warning) !important;--wje-color-contrast: var(--wje-color-contrast-11) !important}:host(.wje-color-danger){--wje-color-base: var(--wje-color-danger) !important;--wje-color-contrast: var(--wje-color-contrast-0) !important}:host(.wje-color-info){--wje-color-base: var(--wje-color-info) !important;--wje-color-contrast: var(--wje-color-contrast-0) !important}:host(.wje-color-menu){--wje-color-base: var(--wje-color-menu) !important;--wje-color-contrast: var(--wje-color-contrast-0) !important}:host{--wje-color: initial;display:block;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}:host(.wje-color){color:current-color(base)}:host(.wje-text-wrap),:host([text-wrap]){white-space:normal!important}:host(.label-fixed){flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.label-stacked),:host(.label-floating){margin-bottom:0;align-self:stretch;width:auto;max-width:100%}:host(.label-no-animate.label-floating){transition:none}::slotted(*) h1,::slotted(*) h2,::slotted(*) h3,::slotted(*) h4,::slotted(*) h5,::slotted(*) h6{text-overflow:inherit;overflow:inherit}:host(.wje-color){color:var(--wje-color)}::slotted(*:first-child){margin-top:0!important}::slotted(*:last-child){margin-bottom:0!important}";
class s extends m {
  /**
   * Creates an instance of Label.
   *
   * @constructor
   */
  constructor() {
    super();
    l(this, "className", "Label");
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
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Prepares the component before drawing.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   */
  beforeDraw(t, c, r) {
  }
  /**
   * Draws the component.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(t, c, r) {
    let a = document.createDocumentFragment();
    this.color && this.classList.add("wje-color-" + r.color, "wje-color");
    let n = document.createElement("slot");
    return a.appendChild(n), a;
  }
}
s.define("wje-label", s);
export {
  s as default
};
