var a = Object.defineProperty;
var h = (t, e, i) => e in t ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var s = (t, e, i) => (h(t, typeof e != "symbol" ? e + "" : e, i), i);
import l from "./wje-element.js";
const n = ':host{--wje-aside-width: "100px";--wje-aside-top: 0;--wje-aside-border-color: var(--wje-border-color);--wje-aside-border-width: 0 1px 0 0;--wje-aside-border-style: solid;box-sizing:border-box;flex-shrink:0;overflow:auto;border-color:var(--wje-aside-border-color);border-width:var(--wje-aside-border-width);border-style:var(--wje-aside-border-style)}:host(.open){display:block!important}@media (min-width: 768px){:host([fixed]){position:fixed;width:var(--wje-aside-width);top:var(--wje-aside-top);height:calc(100% - var(--wje-aside-top))}}@media (max-width: 768px){:host{display:none}:host([variant=top-start]){position:fixed;top:0;left:0;width:80%;height:100%;z-index:9999;background-color:#fff}}';
class r extends l {
  /**
   * Constructor for the Aside class.
   */
  constructor() {
    super();
    /**
     * The class name for the Aside element ddddd.
     * @type {string}
     */
    s(this, "className", "Aside");
  }
  /**
   * Getter for the CSS stylesheet.
   * @return {Object} The styles for the Aside element.
   */
  static get cssStyleSheet() {
    return n;
  }
  /**
   * Getter for the observed attributes.
   * @return {Array} An empty array as there are no observed attributes.
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Method to setup attributes for the Aside element.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Method to draw the Aside element.
   * @param {Object} context - The context in which the element is drawn.
   * @param {Object} store - The store containing the state of the element.
   * @param {Object} params - The parameters for drawing the element.
   * @return {Object} The document fragment containing the drawn element.
   */
  draw(i, w, p) {
    let o = document.createDocumentFragment();
    this.width && this.style.setProperty("--wje-aside-width", this.width), this.top && this.hasAttribute("fixed") && this.style.setProperty("--wje-aside-top", this.top);
    let d = document.createElement("slot");
    return o.appendChild(d), o;
  }
}
r.define("wje-aside", r);
export {
  r as default
};
