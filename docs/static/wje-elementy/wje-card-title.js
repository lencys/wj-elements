var d = Object.defineProperty;
var s = (e, t, i) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var a = (e, t, i) => (s(e, typeof t != "symbol" ? t + "" : t, i), i);
import n from "./wje-element.js";
const o = ":host{--wje-card-title-font-size: 24px;--wje-card-title-font-weight: 500;--wje-card-title-margin: 0;--wje-card-title-padding: 0;--wje-card-title-line-height: 1.2;font-size:var(--wje-card-title-font-size);font-weight:var(--wje-card-title-font-weight);margin:var(--wje-card-title-margin);padding:var(--wje-card-title-padding);line-height:var(--wje-card-title-line-height);display:block;position:relative}";
class c extends n {
  /**
   * CardTitle constructor.
   */
  constructor() {
    super();
    /**
     * Class name for the CardTitle.
     * @type {string}
     */
    a(this, "className", "CardTitle");
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {Object} The styles object.
   * @static
   */
  static get cssStyleSheet() {
    return o;
  }
  /**
   * Getter for the observed attributes.
   * @returns {Array} An empty array.
   * @static
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the CardTitle.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the CardTitle.
   * @param {Object} context - The context to draw in.
   * @param {Object} store - The store to use.
   * @param {Object} params - The parameters to use.
   * @returns {DocumentFragment} The created document fragment.
   */
  draw(i, g, w) {
    let r = document.createDocumentFragment(), l = document.createElement("slot");
    return r.appendChild(l), r;
  }
}
n.define("wje-card-title", c);
export {
  c as default
};
