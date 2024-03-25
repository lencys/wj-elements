var n = Object.defineProperty;
var d = (r, o, e) => o in r ? n(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e;
var t = (r, o, e) => (d(r, typeof o != "symbol" ? o + "" : o, e), e);
import l from "./wje-element.js";
const i = ":host{--wje-card-margin-top: 0;--wje-card-margin-bottom: 1rem;--wje-card-margin-inline: 0;--wje-card-border-color: transparent}:host(.wje-color-primary){--wje-card-background: var(--wje-color-primary)}:host(.wje-color-complete){--wje-card-background: var(--wje-color-complete)}:host(.wje-color-success){--wje-card-background: var(--wje-color-success)}:host(.wje-color-warning){--wje-card-background: var(--wje-color-warning)}:host(.wje-color-danger){--wje-card-background: var(--wje-color-danger)}:host(.wje-color-info){--wje-card-background: var(--wje-color-info)}:host(.wje-color-menu){--wje-card-background: var(--wje-color-menu)}:host(.wje-color-primary){--wje-card-color: var(--wje-color-white)}:host(.wje-color-complete){--wje-card-color: var(--wje-color-white)}:host(.wje-color-success){--wje-card-color: var(--wje-color-white)}:host(.wje-color-warning){--wje-card-color: var(--wje-color)}:host(.wje-color-danger){--wje-card-color: var(--wje-color-white)}:host(.wje-color-info){--wje-card-color: var(--wje-color-white)}:host(.wje-color-menu){--wje-card-color: var(--wje-color-white) !important}:host{background-color:var(--wje-card-background);color:var(--wje-card-color)!important;margin-top:var(--wje-card-margin-top);margin-bottom:var(--wje-card-margin-bottom);margin-inline:var(--wje-card-margin-inline);box-shadow:var(--wje-box-shadow-large);border-color:var(--wje-border-color);border-style:var(--wje-border-style);border-width:var(--wje-border-size);border-radius:var(--wje-border-radius-medium);font-family:var(--wje-font-family);font-size:var(--wje-font-size);line-height:var(--wje-line-height);position:relative;width:100%;word-wrap:normal;display:flex;flex-direction:column;overflow:hidden;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}:host(.wje-color){background-color:var(--wje-card-background, #fff);color:var(--wje-card-color)}";
class s extends l {
  /**
   * Card constructor
   * @constructor
   */
  constructor() {
    super();
    /**
     * Class name
     * @type {string}
     */
    t(this, "className", "Card");
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
  draw(e, j, a) {
    let c = document.createDocumentFragment(), w = document.createElement("slot");
    return a.color && this.classList.add("wje-color-" + a.color, "wje-color"), c.appendChild(w), c;
  }
}
l.define("wje-card", s);
export {
  s as default
};
