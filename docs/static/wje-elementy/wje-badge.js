var l = Object.defineProperty;
var n = (r, o, t) => o in r ? l(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t;
var a = (r, o, t) => (n(r, typeof o != "symbol" ? o + "" : o, t), t);
import w from "./wje-element.js";
const i = ":host(.wje-color-primary){--wje-color-base: var(--wje-color-primary) !important;--wje-color-contrast: var(--wje-color-contrast-lowest) !important}:host(.wje-color-complete){--wje-color-base: var(--wje-color-complete) !important;--wje-color-contrast: var(--wje-color-contrast-lowest) !important}:host(.wje-color-success){--wje-color-base: var(--wje-color-success) !important;--wje-color-contrast: var(--wje-color-contrast-lowest) !important}:host(.wje-color-warning){--wje-color-base: var(--wje-color-warning) !important;--wje-color-contrast: var(--wje-color-contrast-high) !important}:host(.wje-color-danger){--wje-color-base: var(--wje-color-danger) !important;--wje-color-contrast: var(--wje-color-contrast-lowest) !important}:host(.wje-color-info){--wje-color-base: var(--wje-color-info) !important;--wje-color-contrast: var(--wje-color-contrast-lowest) !important}:host(.wje-color-menu){--wje-color-base: var(--wje-color-contrast-lower) !important;--wje-color-contrast: var(--wje-color-contrast-high) !important}:host{--wje-chip-border-radius: 100px;text-shadow:none;font-family:var(--wje-font-family);font-weight:600;background-color:var(--wje-color-contrast-low);font-size:11px;padding-left:6px;padding-right:6px;color:var(--wje-color-contrast-high);border-radius:10px}:host(.wje-color){background-color:var(--wje-color-base, red);color:var(--wje-color-contrast)}";
class c extends w {
  /**
   * Badge constructor
   * @constructor
   */
  constructor() {
    super();
    /**
     * Class name
     * @type {string}
     */
    a(this, "className", "Badge");
  }
  /**
   * Get CSS stylesheet
   * @static
   * @returns {Object} styles - The CSS styles
   */
  static get cssStyleSheet() {
    return i;
  }
  /**
   * Setup attributes
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draw method
   * @param {Object} context - The context
   * @param {Object} store - The store
   * @param {Object} params - The parameters
   * @returns {Object} fragment - The document fragment
   */
  draw(t, j, p) {
    let e = document.createDocumentFragment(), s = document.createElement("slot");
    return this.color && this.classList.add("wje-color-" + this.color, "wje-color"), e.appendChild(s), e;
  }
}
c.define("wje-badge", c);
export {
  c as default
};
