var c = Object.defineProperty;
var p = (n, t, e) => t in n ? c(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var o = (n, t, e) => (p(n, typeof t != "symbol" ? t + "" : t, e), e);
import m, { event as u } from "./wje-element.js";
import { I as h } from "./icon.element-DOiXP3pi.js";
const g = ':host{--wje-option-padding-top: .5rem;--wje-option-padding-bottom: .5rem;--wje-option-highlighted: var(--wje-color-contrast-3);display:block}:host wje-icon{visibility:hidden;margin-inline:.5rem}:host([selected]) wje-icon{visibility:visible}.native-option{display:flex;align-items:center;padding-top:var(--wje-option-padding-top);padding-bottom:var(--wje-option-padding-bottom)}.native-option:hover{background-color:var(--wje-option-highlighted)}::slotted([slot="start"]){flex:0 0 auto;display:flex;align-items:center;margin-inline-end:.5rem}::slotted([slot="end"]){flex:0 0 auto;display:flex;align-items:center;margin-inline:auto .5rem}';
class f extends m {
  /**
   * Creates an instance of Option.
   *
   * @constructor
   */
  constructor() {
    super();
    /**
     * Dependencies of the Option component.
     */
    o(this, "depandencies", {
      "wje-icon": h
    });
    o(this, "className", "Option");
  }
  /**
   * Sets the selected attribute of the option.
   *
   * @param {boolean} value - The value to set.
   */
  set selected(e) {
    return e ? this.setAttribute("selected", "") : this.removeAttribute("selected");
  }
  /**
   * Sets the value attribute of the option.
   *
   * @param {string} value - The value to set.
   */
  set value(e) {
    this.setAttribute("value", e);
  }
  /**
   * Sets the text content of the option.
   *
   * @param {string} value - The text to set.
   */
  set text(e) {
    this.innerText = e;
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
   * Draws the component.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(e, b, v) {
    let s = document.createDocumentFragment(), i = document.createElement("div");
    i.classList.add("native-option"), i.setAttribute("part", "native");
    let a = document.createElement("wje-icon");
    a.setAttribute("name", "check");
    let r = document.createElement("slot");
    r.setAttribute("name", "start");
    let d = document.createElement("slot"), l = document.createElement("slot");
    return l.setAttribute("name", "end"), i.appendChild(a), i.appendChild(r), i.appendChild(d), i.appendChild(l), s.appendChild(i), s;
  }
  /**
   * Adds event listeners after the component is drawn.
   */
  afterDraw() {
    u.addListener(this, "click", "wje:option-change");
  }
}
export {
  f as O
};
