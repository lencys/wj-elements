var d = Object.defineProperty;
var m = (e, t, o) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var r = (e, t, o) => (m(e, typeof t != "symbol" ? t + "" : t, o), o);
import u from "./wje-element.js";
const p = ":host .native-toolbar-action{display:flex}";
class l extends u {
  /**
   * @constructor
   * @summary ToolbarAction constructor
   */
  constructor() {
    super();
    /**
     * @summary Class name
     * @type {string}
     */
    r(this, "className", "ToolbarAction");
  }
  /**
   * @summary Get CSS stylesheet
   * @static
   * @returns {Object} styles
   */
  static get cssStyleSheet() {
    return p;
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
    this.isShadowRoot = "open";
  }
  /**
   * @summary Draw method
   * @param {Object} context - The context
   * @param {Object} store - The store
   * @param {Object} params - The parameters
   * @returns {Object} Document fragment
   */
  draw(o, h, b) {
    let a = document.createDocumentFragment(), n = +this.maxItems || 0, c = this.getActions(), i = document.createElement("slot"), s = document.createElement("div");
    return s.setAttribute("part", "native"), s.classList.add("native-toolbar-action"), n !== 0 && c.length > n && (s = document.createElement("wje-dropdown")), s.appendChild(i), a.appendChild(s), a;
  }
  /**
   * @summary Get actions
   * @returns {Array} An array of wje-button elements
   */
  getActions() {
    return Array.from(this.querySelectorAll("wje-button"));
  }
}
l.define("wje-toolbar-action", l);
export {
  l as default
};
