var d = Object.defineProperty;
var p = (o, e, t) => e in o ? d(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var i = (o, e, t) => (p(o, typeof e != "symbol" ? e + "" : e, t), t);
import u from "./wje-element.js";
const g = ":host{display:inline-block}:host .native-button-group{display:flex;flex-wrap:nowrap;line-height:1}:host slot{display:contents}::slotted(wje-button){margin:0!important}";
class m extends u {
  /**
   * ButtonGroup constructor
   * @constructor
   */
  constructor() {
    super();
    /**
     * Class name
     * @type {string}
     */
    i(this, "className", "ButtonGroup");
  }
  /**
   * Get CSS stylesheet
   * @static
   * @returns {Object} styles - The CSS styles
   */
  static get cssStyleSheet() {
    return g;
  }
  /**
   * Get observed attributes
   * @static
   * @returns {Array<string>} observedAttributes - The observed attributes
   */
  static get observedAttributes() {
    return [];
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
  draw(t, l, c) {
    let s = document.createDocumentFragment(), n = document.createElement("div");
    return n.classList.add("native-button-group"), n.setAttribute("part", "native"), this.slotElement = document.createElement("slot"), n.appendChild(this.slotElement), s.appendChild(n), s;
  }
  /**
   * After draw method
   * @param {Object} context - The context
   * @param {Object} store - The store
   * @param {Object} params - The parameters
   */
  afterDraw(t, l, c) {
    const s = [...this.slotElement.assignedElements({ flatten: !0 })];
    s.forEach((n) => {
      let a = s.indexOf(n), r = this.findButton(n);
      r && (r.classList.add("wje-button-group-button"), r.classList.toggle("wje-button-group-first", a === 0), r.classList.toggle("wje-button-group-inner", a > 0 && a < s.length - 1), r.classList.toggle("wje-button-group-last", a === s.length - 1));
    });
  }
  /**
   * Find button method
   * @param {Object} el - The element
   * @returns {Object} button - The button
   */
  findButton(t) {
    const l = "wje-button";
    return t.closest(l) ?? t.querySelector(l);
  }
}
u.define("wje-button-group", m);
export {
  m as default
};
